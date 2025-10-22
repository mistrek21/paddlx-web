// src/app/_components/HeroSection.tsx

'use client';

import { MapPin, ArrowRight, Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { config } from '@/lib/config';
import Image from 'next/image';

interface Place {
	id: string;
	name: string;
	country: string;
	type: 'city' | 'region';
}

interface Court {
	id: string;
	name: string;
	distance: number;
	location: string;
	city: string;
}

interface SearchResults {
	places: Place[];
	courts: Court[];
}

interface UserLocation {
	latitude: number;
	longitude: number;
}

const DEFAULT_CITY = 'Mandaluyong';
const DEFAULT_COUNTRY = 'Philippines';

// Custom debounce hook
function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}

// Axios instance
const axiosInstance = axios.create({
	baseURL: config.API_BASE_URL,
	timeout: 10000,
});

// Search API function
const searchPlaces = async (
	query: string,
	userLocation?: UserLocation
): Promise<SearchResults> => {
	if (!query || query.trim().length < 2) {
		return { places: [], courts: [] };
	}

	let url = `/api/web/search?q=${encodeURIComponent(query)}`;

	if (userLocation) {
		url += `&lat=${userLocation.latitude}&lon=${userLocation.longitude}`;
	}

	const { data } = await axiosInstance.get<SearchResults>(url);
	return data;
};

// Utility function to highlight search matches
function highlightMatch(text: string, query: string): string {
	if (!query.trim()) return text;
	const regex = new RegExp(`(${query.trim()})`, 'gi');
	return text.replace(
		regex,
		'<mark class="bg-yellow-200/70 text-yellow-900 font-semibold rounded px-0.5">$1</mark>'
	);
}

// Skeleton loader component for places
function PlaceSkeleton() {
	return (
		<div className="flex items-center px-3 py-2 rounded-xl">
			<div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mr-3 animate-pulse" />
			<div className="flex-1 space-y-1.5">
				<div
					className="h-3.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-2/3"
					style={{ backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }}
				/>
				<div
					className="h-2.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/4"
					style={{
						backgroundSize: '200% 100%',
						animation: 'shimmer 1.5s infinite 0.2s',
					}}
				/>
			</div>
		</div>
	);
}

// Skeleton loader component for courts
function CourtSkeleton() {
	return (
		<div className="flex items-center px-3 py-2 rounded-xl">
			<div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mr-3 animate-pulse" />
			<div className="flex-1 space-y-1.5">
				<div
					className="h-3.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/2"
					style={{ backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }}
				/>
				<div className="flex items-center gap-2">
					<div
						className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md w-12"
						style={{
							backgroundSize: '200% 100%',
							animation: 'shimmer 1.5s infinite 0.3s',
						}}
					/>
					<div
						className="h-2.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-16"
						style={{
							backgroundSize: '200% 100%',
							animation: 'shimmer 1.5s infinite 0.4s',
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export function HeroSection() {
	const [searchQuery, setSearchQuery] = useState('');
	const [showDropdown, setShowDropdown] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [userLocation, setUserLocation] = useState<UserLocation | undefined>();
	const [userCity, setUserCity] = useState<string | null>(null);
	const [userCountry, setUserCountry] = useState<string | null>(null);
	const searchRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	// Get user's location on mount
	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setUserLocation({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
				},
				(error) => {
					console.log('Geolocation error:', error.message);
				}
			);
		}
	}, []);

	// Debounce search query
	const debouncedSearchQuery = useDebounce(searchQuery, 300);

	// Use React Query for search
	const {
		data: results,
		isLoading,
		isFetching,
	} = useQuery({
		queryKey: ['search', debouncedSearchQuery, userLocation],
		queryFn: () => searchPlaces(debouncedSearchQuery, userLocation),
		enabled: debouncedSearchQuery.trim().length >= 2,
		staleTime: 5 * 60 * 1000,
		gcTime: 10 * 60 * 1000,
	});

	// Show dropdown when results are available or when loading
	useEffect(() => {
		if (debouncedSearchQuery.trim().length >= 2) {
			setShowDropdown(true);
		} else {
			setShowDropdown(false);
		}
	}, [debouncedSearchQuery]);

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
				setShowDropdown(false);
				setIsFocused(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	// Reverse geocode function using a free API
	// In your HeroSection component, update the reverseGeocode function:

	const reverseGeocode = async (lat: number, lon: number) => {
		try {
			const response = await fetch(
				`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
			);
			const data = await response.json();

			// Clean up country name - remove "(the)" and other parenthetical content
			const cleanCountryName = (name: string) => {
				if (!name) return name;
				return name.replace(/\s*\([^)]*\)/g, '').trim();
			};

			return {
				city: data.city || data.locality || data.principalSubdivision,
				country: cleanCountryName(data.countryName),
			};
		} catch (error) {
			console.error('Reverse geocoding failed:', error);
			return null;
		}
	};

	// Get user's location and convert to city/country on mount
	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const coords = {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					};
					setUserLocation(coords);

					// Reverse geocode to get city and country
					const location = await reverseGeocode(coords.latitude, coords.longitude);

					if (location) {
						setUserCity(location.city);
						setUserCountry(location.country);
					}
				},
				(error) => {
					console.log('Geolocation error:', error.message);
				}
			);
		}
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
			setShowDropdown(false);
		}
	};

	// const handleSelectPlace = (place: Place) => {
	// 	setSearchQuery(`${place.name}, ${place.country}`);
	// 	setShowDropdown(false);
	// 	// Route to city page instead of search
	// 	router.push(
	// 		`/city/${encodeURIComponent(place.name)}?country=${encodeURIComponent(
	// 			place.country
	// 		)}`
	// 	);
	// };

	// const handleSelectCourt = (court: Court) => {
	// 	setSearchQuery(court.name);
	// 	setShowDropdown(false);
	// 	// Use the slug (or ID as fallback) from the API
	// 	router.push(`/court/${court.id}`);
	// };

	const handleSelectPlace = async (place: Place) => {
		setSearchQuery(`${place.name}, ${place.country}`);
		setShowDropdown(false);
		await new Promise((r) => setTimeout(r, 30)); // Small delay
		router.push(
			`/city/${encodeURIComponent(place.name)}?country=${encodeURIComponent(
				place.country
			)}`
		);
	};

	const handleSelectCourt = async (court: Court) => {
		setSearchQuery(court.name);
		setShowDropdown(false);
		await new Promise((r) => setTimeout(r, 30));
		router.push(`/court/${court.id}`);
	};

	const handleViewAll = () => {
		setShowDropdown(false);

		// Use reverse-geocoded city/country if available, otherwise use defaults
		const city = userCity || DEFAULT_CITY;
		const country = userCountry || DEFAULT_COUNTRY;

		router.push(
			`/city/${encodeURIComponent(city)}?country=${encodeURIComponent(country)}`
		);
	};

	// Helper for rendering places with animation
	const renderPlaces = (places: Place[]) => (
		<div className="mb-5">
			<div className="flex items-center gap-2 mb-2.5 px-1">
				<div className="flex items-center gap-1.5">
					<div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
					<div
						className="w-1 h-1 bg-yellow-400/60 rounded-full animate-pulse"
						style={{ animationDelay: '0.2s' }}
					/>
				</div>
				<h3 className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
					Places
				</h3>
			</div>
			<div className="space-y-1">
				{places.map((place, index) => (
					<div
						key={place.id}
						onClick={() => handleSelectPlace(place)}
						className="relative flex items-center px-3 py-2 rounded-xl cursor-pointer transition-all duration-200 group overflow-hidden hover:bg-gradient-to-r hover:from-yellow-50 hover:via-yellow-50/50 hover:to-transparent"
						style={{
							animation: `slideIn 0.25s ease-out ${index * 0.04}s both`,
						}}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
						<div className="absolute left-0 w-0.5 h-0 bg-gradient-to-b from-yellow-400 to-amber-500 group-hover:h-full transition-all duration-300 rounded-r-full" />
						<div className="relative w-8 h-8 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-yellow-500/20 transition-all duration-200">
							<MapPin className="w-4 h-4 text-white drop-shadow" strokeWidth={2.5} />
						</div>
						<div className="relative flex-1 min-w-0">
							<div className="flex items-baseline gap-2">
								<span
									className="text-gray-900 font-semibold text-sm"
									dangerouslySetInnerHTML={{
										__html: highlightMatch(place.name, searchQuery),
									}}
								/>
								<span className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">
									{place.type}
								</span>
							</div>
							<span className="text-xs text-gray-500">{place.country}</span>
						</div>
						<div className="relative flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
							<span className="text-[10px] font-semibold text-yellow-600">GO</span>
							<ArrowRight
								className="w-3.5 h-3.5 text-yellow-600 transform group-hover:translate-x-0.5 transition-transform"
								strokeWidth={2.5}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);

	// Helper for rendering courts with animation
	const renderCourts = (courts: Court[]) => (
		<div>
			<div className="flex items-center gap-2 mb-2.5 px-1">
				<div className="flex items-center gap-1.5">
					<div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
					<div
						className="w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
						style={{ animationDelay: '0.2s' }}
					/>
				</div>
				<h3 className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
					Courts Nearby
				</h3>
			</div>
			<div className="space-y-1">
				{courts.map((court, index) => (
					<div
						key={court.id}
						onClick={() => handleSelectCourt(court)}
						className="relative flex items-center px-3 py-2 rounded-xl cursor-pointer transition-all duration-200 group overflow-hidden hover:bg-gradient-to-r hover:from-blue-50 hover:via-blue-50/50 hover:to-transparent"
						style={{
							animation: `slideIn 0.25s ease-out ${
								(index + (results?.places.length || 0)) * 0.04
							}s both`,
						}}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
						<div className="absolute left-0 w-0.5 h-0 bg-gradient-to-b from-blue-400 to-indigo-500 group-hover:h-full transition-all duration-300 rounded-r-full" />
						<div className="relative w-8 h-8 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-200">
							<svg
								className="w-4 h-4 text-white drop-shadow"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
							</svg>
						</div>
						<div className="relative flex-1 min-w-0">
							<div
								className="text-gray-900 font-semibold text-sm truncate"
								dangerouslySetInnerHTML={{
									__html: highlightMatch(court.name, searchQuery),
								}}
							/>
							<div className="flex items-center gap-1.5 mt-0.5">
								{userLocation && court.distance > 0 && (
									<div className="inline-flex items-center gap-1 bg-gray-100 group-hover:bg-blue-100 px-1.5 py-0.5 rounded-md transition-colors">
										<svg
											className="w-2.5 h-2.5 text-gray-600 group-hover:text-blue-600 transition-colors"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
										</svg>
										<span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-700 transition-colors">
											{court.distance}mi
										</span>
									</div>
								)}
								<span className="text-xs text-gray-400 truncate">{court.location}</span>
							</div>
						</div>
						<div className="relative flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
							<span className="text-[10px] font-semibold text-blue-600">GO</span>
							<ArrowRight
								className="w-3.5 h-3.5 text-blue-600 transform group-hover:translate-x-0.5 transition-transform"
								strokeWidth={2.5}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);

	const hasResults =
		results && (results.places.length > 0 || results.courts.length > 0);

	return (
		<>
			<style jsx global>{`
				@keyframes slideIn {
					from {
						opacity: 0;
						transform: translateY(-8px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes shimmer {
					0% {
						background-position: -1000px 0;
					}
					100% {
						background-position: 1000px 0;
					}
				}

				.search-input-focused {
					box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.1);
				}
			`}</style>

			<section className="relative h-[500px] flex items-center justify-center">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0 z-0">
					<Image
						className="w-full h-full bg-cover bg-center"
						style={{
							backgroundImage:
								'url(/placeholder.svg?height=500&width=1920&query=people+playing+pickleball+on+outdoor+courts)',
						}}
						alt="Pickleball courts"
						src="/main-image.png"
						width={1920}
						height={500}
					/>

					<div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/40 to-dark/60" />
				</div>

				{/* Content */}
				<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
					<h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance drop-shadow-lg">
						Find pickleball near you
					</h1>
					<p className="text-xl text-white/90 mb-8 drop-shadow">
						Discover local courts and games
					</p>

					{/* Search Bar */}
					<div className="max-w-2xl mx-auto mb-6 relative" ref={searchRef}>
						<form onSubmit={handleSubmit}>
							<div
								className={`relative flex items-center bg-white rounded-full shadow-2xl overflow-hidden transition-all duration-300 ${
									isFocused ? 'search-input-focused scale-[1.02]' : ''
								}`}
							>
								<div className="pl-6 pr-3 py-4 flex items-center">
									<MapPin
										className={`w-5 h-5 transition-colors duration-200 ${
											isFocused ? 'text-primary' : 'text-gray-400'
										}`}
									/>
								</div>
								<input
									type="text"
									placeholder="Search by city, state, or facility"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									onFocus={() => {
										setIsFocused(true);
										if (hasResults) {
											setShowDropdown(true);
										}
									}}
									onBlur={() => setIsFocused(false)}
									className="flex-1 py-4 pr-4 text-base text-text placeholder:text-slate-gray focus:outline-none"
									autoComplete="off"
								/>
								{(isLoading || isFetching) && searchQuery.trim().length >= 2 && (
									<div className="pr-4">
										<Loader2 className="w-5 h-5 text-primary animate-spin" />
									</div>
								)}
								<button
									type="submit"
									className="m-2 flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-primary-dark transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
									aria-label="Search"
								>
									<ArrowRight className="w-5 h-5 text-white" />
								</button>
							</div>
						</form>

						{/* Search Results Dropdown */}
						{showDropdown && (
							<div
								className="absolute left-0 right-0 top-full mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100/50 backdrop-blur-xl max-h-[26rem] overflow-hidden z-50"
								style={{
									animation: 'slideIn 0.2s ease-out',
								}}
							>
								<div className="overflow-y-auto max-h-[26rem] custom-scrollbar">
									<div className="p-4">
										{isLoading || isFetching ? (
											<>
												<div className="mb-5">
													<div className="flex items-center gap-2 mb-2.5 px-1">
														<div className="flex items-center gap-1.5">
															<div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" />
															<div
																className="w-1 h-1 bg-gray-300/60 rounded-full animate-pulse"
																style={{ animationDelay: '0.2s' }}
															/>
														</div>
														<h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
															Places
														</h3>
													</div>
													<div className="space-y-1">
														{[...Array(3)].map((_, i) => (
															<PlaceSkeleton key={i} />
														))}
													</div>
												</div>
												<div>
													<div className="flex items-center gap-2 mb-2.5 px-1">
														<div className="flex items-center gap-1.5">
															<div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" />
															<div
																className="w-1 h-1 bg-gray-300/60 rounded-full animate-pulse"
																style={{ animationDelay: '0.2s' }}
															/>
														</div>
														<h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
															Courts
														</h3>
													</div>
													<div className="space-y-1">
														{[...Array(2)].map((_, i) => (
															<CourtSkeleton key={i} />
														))}
													</div>
												</div>
											</>
										) : hasResults ? (
											<>
												{results.places.length > 0 && renderPlaces(results.places)}
												{results.courts.length > 0 && renderCourts(results.courts)}
											</>
										) : (
											<div className="text-center py-8">
												<p className="text-sm text-gray-500">No results found</p>
												<p className="text-xs text-gray-400 mt-1">
													Try a different search term
												</p>
											</div>
										)}
									</div>
								</div>
							</div>
						)}
					</div>

					{/* View All Link */}
					<button
						onClick={handleViewAll}
						className="text-white hover:text-white/90 transition-all duration-200 flex items-center gap-2 mx-auto group backdrop-blur-sm bg-white/10 px-6 py-2.5 rounded-full hover:bg-white/20 cursor-pointer"
					>
						<span className="text-sm font-medium">
							Or see all nearby places to play
						</span>
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
					</button>
				</div>
			</section>

			<style jsx>{`
				.custom-scrollbar::-webkit-scrollbar {
					width: 6px;
				}

				.custom-scrollbar::-webkit-scrollbar-track {
					background: transparent;
				}

				.custom-scrollbar::-webkit-scrollbar-thumb {
					background: #e5e7eb;
					border-radius: 3px;
				}

				.custom-scrollbar::-webkit-scrollbar-thumb:hover {
					background: #d1d5db;
				}
			`}</style>
		</>
	);
}
