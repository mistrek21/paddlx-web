'use client';

import {
	ChevronLeft,
	ChevronRight,
	MapPin,
	Users,
	Calendar,
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { countryData } from '../_data/countries';
import { stateData } from '../_data/states';

export interface City {
	name: string;
	locations: number;
	courts: number;
	games: number;
}

export interface Country {
	name: string;
	image: string;
	locations: number;
	courts: number;
	games: number;
	cities: City[];
}

// Tab names
const tabs = ['CITIES', 'STATES', 'COUNTRIES', 'COURT TYPES', 'AMENITIES'];

// Expanded Demo Data with country information
const cityData = [
	{
		name: 'Houston',
		country: 'United States',
		image: '/houston-skyline-at-dusk-with-downtown-buildings.jpg',
		locations: 94,
		courts: 413,
		games: 885,
	},
	{
		name: 'Toronto',
		country: 'Canada',
		image: '/toronto-skyline-at-dusk-with-cn-tower.jpg',
		locations: 82,
		courts: 260,
		games: 551,
	},
	{
		name: 'Chennai',
		country: 'India',
		image: '/chennai-india-skyline-at-dusk.jpg',
		locations: 76,
		courts: 144,
		games: 428,
	},
	{
		name: 'Chicago',
		country: 'United States',
		image: '/chicago-skyline-at-dusk-with-lake-michigan.jpg',
		locations: 72,
		courts: 335,
		games: 204,
	},
	{
		name: 'Seattle',
		country: 'United States',
		image: '/seattle-skyline-at-dusk-with-space-needle.jpg',
		locations: 63,
		courts: 251,
		games: 352,
	},
	{
		name: 'Los Angeles',
		country: 'United States',
		image: '/los-angeles-skyline-at-dusk-palm-trees.jpg',
		locations: 89,
		courts: 392,
		games: 671,
	},
	{
		name: 'New York',
		country: 'United States',
		image: '/new-york-city-skyline-at-dusk-manhattan.jpg',
		locations: 112,
		courts: 487,
		games: 923,
	},
	{
		name: 'Miami',
		country: 'United States',
		image: '/miami-skyline-at-dusk-with-ocean.jpg',
		locations: 58,
		courts: 218,
		games: 445,
	},
	{
		name: 'Austin',
		country: 'United States',
		image: '/austin-texas-skyline-at-dusk.jpg',
		locations: 47,
		courts: 189,
		games: 312,
	},
	{
		name: 'Boston',
		country: 'United States',
		image: '/boston-skyline-at-dusk-with-harbor.jpg',
		locations: 54,
		courts: 223,
		games: 398,
	},
];

const courtTypes = [
	{
		name: 'Outdoor Hard Court',
		image: '/outdoor-hard-tennis-court-blue-surface.jpg',
		count: 1245,
		cities: 173,
	},
	{
		name: 'Indoor Gym',
		image: '/indoor-gym-basketball-court-wooden-floor.jpg',
		count: 838,
		cities: 138,
	},
	{
		name: 'Clay Surface',
		image: '/clay-tennis-court-red-surface.jpg',
		count: 459,
		cities: 98,
	},
	{
		name: 'Sports Hall',
		image: '/sports-hall-multipurpose-indoor-facility.jpg',
		count: 348,
		cities: 82,
	},
	{
		name: 'Grass Court',
		image: '/grass-tennis-court-green-wimbledon-style.jpg',
		count: 187,
		cities: 54,
	},
	{
		name: 'Multi-Sport Complex',
		image: '/multi-sport-complex-outdoor-facilities.jpg',
		count: 276,
		cities: 67,
	},
];

const amenities = [
	{ name: 'Lights', icon: '💡', locations: 895 },
	{ name: 'Restrooms', icon: '🚻', locations: 1281 },
	{ name: 'Pro Shop', icon: '🏬', locations: 467 },
	{ name: 'Showers', icon: '🚿', locations: 542 },
	{ name: 'Food & Drink', icon: '🍔', locations: 633 },
	{ name: 'Locker Rooms', icon: '🔒', locations: 431 },
	{ name: 'Parking', icon: '🅿️', locations: 1089 },
	{ name: 'WiFi', icon: '📶', locations: 756 },
	{ name: 'Equipment Rental', icon: '🎾', locations: 389 },
	{ name: 'Coaching', icon: '👨‍🏫', locations: 512 },
];

export function LocationsBrowserSection() {
	const [activeTab, setActiveTab] = useState('CITIES');
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);
	const router = useRouter();

	// Navigation handlers
	const handleCityClick = (cityName: string, country: string) => {
		router.push(
			`/city/${encodeURIComponent(cityName)}?country=${encodeURIComponent(
				country
			)}`
		);
	};

	const handleStateClick = (stateName: string, country: string) => {
		router.push(
			`/region/${encodeURIComponent(stateName)}?country=${encodeURIComponent(
				country
			)}`
		);
	};

	const handleCountryClick = (countryName: string) => {
		router.push(`/country/${encodeURIComponent(countryName)}`);
	};

	const checkScroll = () => {
		if (scrollContainerRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
		}
	};

	useEffect(() => {
		checkScroll();
		const container = scrollContainerRef.current;
		if (container) {
			container.addEventListener('scroll', checkScroll);
			return () => container.removeEventListener('scroll', checkScroll);
		}
	}, [activeTab]);

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef.current) {
			const scrollAmount = 350;
			scrollContainerRef.current.scrollBy({
				left: direction === 'right' ? scrollAmount : -scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	// Render functions with navigation
	function renderCities() {
		return cityData.map((city) => (
			<div
				key={city.name}
				onClick={() => handleCityClick(city.name, city.country)}
				className="flex-none w-[300px] snap-start group cursor-pointer"
			>
				<div className="relative h-[260px] rounded-xl overflow-hidden mb-5 shadow-lg">
					<img
						src={city.image || '/placeholder.svg'}
						alt={city.name}
						className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
					<div className="absolute bottom-5 left-5 right-5">
						<h3 className="text-3xl font-bold text-white mb-1 tracking-tight">
							{city.name}
						</h3>
						<div className="flex items-center gap-2 text-white/80 text-sm">
							<MapPin className="w-4 h-4" />
							<span>{city.locations} locations</span>
						</div>
					</div>
					<div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
						Explore →
					</div>
				</div>
				<div className="space-y-3 bg-white rounded-xl p-5 shadow-sm border border-gray-200 transition-all duration-300 group-hover:shadow-md group-hover:border-teal-500/30">
					<div className="flex justify-between items-center">
						<span className="text-sm text-gray-600 font-medium">Locations</span>
						<span className="text-base font-bold text-teal-500">
							{city.locations}
						</span>
					</div>
					<div className="h-px bg-gray-200" />
					<div className="flex justify-between items-center">
						<span className="text-sm text-gray-600 font-medium">Courts</span>
						<span className="text-base font-bold text-teal-500">{city.courts}</span>
					</div>
					<div className="h-px bg-gray-200" />
					<div className="flex justify-between items-center">
						<span className="text-sm text-gray-600 font-medium">Games</span>
						<span className="text-base font-bold text-teal-500">{city.games}</span>
					</div>
				</div>
			</div>
		));
	}

	function renderStates() {
		return stateData.map((state) => (
			<div
				key={state.name}
				onClick={() => handleStateClick(state.name, state.country)}
				className="flex-none w-[300px] snap-start group cursor-pointer"
			>
				<div className="relative h-[220px] rounded-xl overflow-hidden mb-5 shadow-lg">
					<img
						src={state.image || '/placeholder.svg'}
						alt={state.name}
						className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
					<div className="absolute bottom-5 left-5 right-5">
						<h3 className="text-3xl font-bold text-white tracking-tight">
							{state.name}
						</h3>
					</div>
					<div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
						Explore →
					</div>
				</div>
				<div className="space-y-3 bg-white rounded-xl p-5 shadow-sm border border-gray-200 transition-all duration-300 group-hover:shadow-md group-hover:border-teal-500/30">
					<div className="flex justify-between items-center">
						<span className="text-sm text-gray-600 font-medium">Locations</span>
						<span className="text-base font-bold text-teal-500">
							{state.locations}
						</span>
					</div>
					<div className="h-px bg-gray-200" />
					<div className="flex justify-between items-center">
						<span className="text-sm text-gray-600 font-medium">Courts</span>
						<span className="text-base font-bold text-teal-500">{state.courts}</span>
					</div>
					<div className="h-px bg-gray-200" />
					<div className="flex justify-between items-center">
						<span className="text-sm text-gray-600 font-medium">Games</span>
						<span className="text-base font-bold text-teal-500">{state.games}</span>
					</div>
				</div>
			</div>
		));
	}

	function renderCountries() {
		return countryData.map((country) => (
			<div
				key={country.name}
				onClick={() => handleCountryClick(country.name)}
				className="flex-none w-[300px] snap-start group cursor-pointer"
			>
				<div className="relative h-[220px] rounded-xl overflow-hidden mb-5 shadow-lg">
					<img
						src={country.image || '/placeholder.svg'}
						alt={country.name}
						className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
					<div className="absolute bottom-5 left-5 right-5">
						<h3 className="text-3xl font-bold text-white tracking-tight">
							{country.name}
						</h3>
					</div>
					<div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
						Explore →
					</div>
				</div>
				<div className="space-y-3 bg-white rounded-xl p-5 shadow-sm border border-gray-200 transition-all duration-300 group-hover:shadow-md group-hover:border-teal-500/30">
					<div className="flex justify-between items-center">
						<span className="text-sm text-gray-600 font-medium">Locations</span>
						<span className="text-base font-bold text-teal-500">
							{country.locations}
						</span>
					</div>
					<div className="h-px bg-gray-200" />
					<div className="flex justify-between items-center">
						<span className="text-sm text-gray-600 font-medium">Courts</span>
						<span className="text-base font-bold text-teal-500">
							{country.courts}
						</span>
					</div>
					<div className="h-px bg-gray-200" />
					<div className="flex justify-between items-center">
						<span className="text-sm text-gray-600 font-medium">Games</span>
						<span className="text-base font-bold text-teal-500">{country.games}</span>
					</div>
				</div>
			</div>
		));
	}

	function renderCourtTypes() {
		return courtTypes.map((court) => (
			<div
				key={court.name}
				className="flex-none w-[260px] snap-start group cursor-pointer"
			>
				<div className="relative h-[160px] rounded-xl overflow-hidden mb-4 shadow-lg">
					<img
						src={court.image || '/placeholder.svg'}
						alt={court.name}
						className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
				</div>
				<div className="bg-white rounded-xl p-5 space-y-3 shadow-sm border border-gray-200 transition-all duration-300 group-hover:shadow-md group-hover:border-teal-500/30">
					<h3 className="text-lg font-bold text-gray-900 leading-tight">
						{court.name}
					</h3>
					<div className="space-y-2">
						<div className="flex justify-between text-sm">
							<span className="text-gray-600 font-medium">Courts</span>
							<span className="font-bold text-teal-500">{court.count}</span>
						</div>
						<div className="flex justify-between text-sm">
							<span className="text-gray-600 font-medium">Cities</span>
							<span className="font-bold text-teal-500">{court.cities}</span>
						</div>
					</div>
				</div>
			</div>
		));
	}

	function renderAmenities() {
		return amenities.map((amenity) => (
			<div
				key={amenity.name}
				className="flex flex-col items-center flex-none w-[160px] snap-start p-6 bg-white rounded-xl shadow-sm border border-gray-200 group cursor-pointer transition-all duration-300 hover:shadow-md hover:border-teal-500/30 hover:-translate-y-1"
			>
				<span className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
					{amenity.icon}
				</span>
				<h3 className="text-base font-bold text-gray-900 mb-2 text-center">
					{amenity.name}
				</h3>
				<div className="text-sm text-gray-600 font-medium">
					{amenity.locations} locations
				</div>
			</div>
		));
	}

	return (
		<>
			<style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
			<section className="bg-gradient-to-b from-white via-gray-50 to-white py-20">
				<div className="container mx-auto px-4 max-w-7xl">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
							Find courts, games, and lessons wherever you go
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Explore thousands of locations worldwide and join a thriving community of
							players
						</p>
					</div>

					{/* Tabs */}
					<div className="flex justify-center gap-8 mb-14 border-b border-gray-200 overflow-x-auto hide-scrollbar">
						{tabs.map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={`pb-4 px-2 text-sm font-bold transition-all duration-300 relative whitespace-nowrap cursor-pointer ${
									activeTab === tab
										? 'text-gray-900'
										: 'text-gray-500 hover:text-gray-900'
								}`}
							>
								{tab}
								{activeTab === tab && (
									<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 rounded-full" />
								)}
							</button>
						))}
					</div>

					{/* Cards for active tab */}
					<div className="relative">
						{/* Left scroll button */}
						{canScrollLeft && (
							<button
								onClick={() => scroll('left')}
								className="absolute left-0 top-[120px] -translate-x-4 bg-teal-500 text-white p-3 rounded-full shadow-xl hover:bg-teal-600 transition-all duration-300 z-10 hover:scale-110"
								aria-label="Scroll left"
							>
								<ChevronLeft className="w-6 h-6" />
							</button>
						)}

						<div
							ref={scrollContainerRef}
							className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar pb-6"
						>
							{activeTab === 'CITIES' && renderCities()}
							{activeTab === 'STATES' && renderStates()}
							{activeTab === 'COUNTRIES' && renderCountries()}
							{activeTab === 'COURT TYPES' && renderCourtTypes()}
							{activeTab === 'AMENITIES' && renderAmenities()}
						</div>

						{/* Right scroll button */}
						{canScrollRight && (
							<button
								onClick={() => scroll('right')}
								className="absolute right-0 top-[120px] translate-x-4 bg-teal-500 text-white p-3 rounded-full shadow-xl hover:bg-teal-600 transition-all duration-300 z-10 hover:scale-110"
								aria-label="Scroll right"
							>
								<ChevronRight className="w-6 h-6" />
							</button>
						)}
					</div>

					{/* Stats Summary */}
					<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
						<div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
							<MapPin className="w-8 h-8 text-teal-500 mx-auto mb-3" />
							<div className="text-3xl font-bold text-gray-900 mb-1">1,200+</div>
							<div className="text-sm text-gray-600 font-medium">Total Locations</div>
						</div>
						<div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
							<Users className="w-8 h-8 text-teal-500 mx-auto mb-3" />
							<div className="text-3xl font-bold text-gray-900 mb-1">5,000+</div>
							<div className="text-sm text-gray-600 font-medium">Active Courts</div>
						</div>
						<div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
							<Calendar className="w-8 h-8 text-teal-500 mx-auto mb-3" />
							<div className="text-3xl font-bold text-gray-900 mb-1">10,000+</div>
							<div className="text-sm text-gray-600 font-medium">Games Played</div>
						</div>
					</div>
				</div>

				{/* Dotted separator */}
				<div className="mt-20 border-t border-dashed border-gray-300" />
			</section>
		</>
	);
}
