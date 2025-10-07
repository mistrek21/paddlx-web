// src/app/city/[location]/page.tsx

import { Suspense } from 'react';
import { MapPin, Navigation, Users, Calendar } from 'lucide-react';
import Link from 'next/link';
import { config } from '@/lib/config';

interface CityPageProps {
	params: Promise<{ location: string }>;
	searchParams: Promise<{ country?: string }>;
}

interface Court {
	id: string;
	name: string;
	distance: number;
	location: string;
	address?: string;
	rating?: number;
}

interface CityData {
	name: string;
	country: string;
	courtsCount: number;
	activePlayersCount: number;
	upcomingEventsCount: number;
	courts: Court[];
}

// Fetch city data
async function getCityData(
	location: string,
	country?: string
): Promise<CityData> {
	try {
		const params = new URLSearchParams();
		params.set('location', location);
		if (country) params.set('country', country);

		const response = await fetch(
			`${config.API_BASE_URL}/api/web/cities/${encodeURIComponent(
				location
			)}?${params.toString()}`,
			{ cache: 'no-store' }
		);

		if (!response.ok) {
			throw new Error('Failed to fetch city data');
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching city data:', error);
		// Return mock data for development
		return {
			name: location,
			country: country || 'Philippines',
			courtsCount: 12,
			activePlayersCount: 234,
			upcomingEventsCount: 8,
			courts: [],
		};
	}
}

// Court Card Component
function CourtCard({ court }: { court: Court }) {
	return (
		<Link
			href={`/court/${court.id}`}
			className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
		>
			<div className="relative h-48 bg-gradient-to-br from-teal-400 to-teal-600">
				<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
				<div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
					<div className="flex items-center gap-1">
						<Navigation className="w-4 h-4 text-teal-600" />
						<span className="text-sm font-bold text-gray-900">
							{court.distance}mi
						</span>
					</div>
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
					{court.name}
				</h3>

				<div className="flex items-start gap-2 text-gray-600 mb-4">
					<MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
					<span className="text-sm">{court.address || court.location}</span>
				</div>

				{court.rating && (
					<div className="flex items-center gap-1 mb-4">
						{[...Array(5)].map((_, i) => (
							<svg
								key={i}
								className={`w-4 h-4 ${
									i < Math.floor(court.rating!) ? 'text-yellow-400' : 'text-gray-300'
								}`}
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))}
						<span className="text-sm text-gray-600 ml-1">
							({court.rating.toFixed(1)})
						</span>
					</div>
				)}

				<div className="text-teal-600 font-semibold text-sm group-hover:underline">
					View Details →
				</div>
			</div>
		</Link>
	);
}

// City Stats Component
function CityStats({ data }: { data: CityData }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
			<div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-gray-600 text-sm font-medium mb-1">Courts</p>
						<p className="text-3xl font-bold text-gray-900">{data.courtsCount}</p>
					</div>
					<div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
						<MapPin className="w-6 h-6 text-teal-600" />
					</div>
				</div>
			</div>

			<div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-gray-600 text-sm font-medium mb-1">Active Players</p>
						<p className="text-3xl font-bold text-gray-900">
							{data.activePlayersCount}
						</p>
					</div>
					<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
						<Users className="w-6 h-6 text-blue-600" />
					</div>
				</div>
			</div>

			<div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-gray-600 text-sm font-medium mb-1">Upcoming Events</p>
						<p className="text-3xl font-bold text-gray-900">
							{data.upcomingEventsCount}
						</p>
					</div>
					<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
						<Calendar className="w-6 h-6 text-purple-600" />
					</div>
				</div>
			</div>
		</div>
	);
}

// Loading Component
function CityPageLoading() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="h-64 bg-gradient-to-r from-teal-500 to-teal-600 animate-pulse" />
			<div className="container mx-auto px-4 py-12">
				<div className="h-10 bg-gray-200 rounded w-64 mb-12 animate-pulse" />
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					{[...Array(3)].map((_, i) => (
						<div
							key={i}
							className="bg-white rounded-xl shadow-lg p-6 h-32 animate-pulse"
						/>
					))}
				</div>
			</div>
		</div>
	);
}

// Main City Content Component
async function CityContent({ params, searchParams }: CityPageProps) {
	const { location } = await params;
	const { country } = await searchParams;

	const decodedLocation = decodeURIComponent(location);
	const cityData = await getCityData(decodedLocation, country);

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div className="relative h-64 bg-gradient-to-r from-teal-500 to-teal-600">
				<div className="absolute inset-0 bg-black/20" />
				<div className="relative container mx-auto px-4 h-full flex items-center">
					<div>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
							Pickleball in {cityData.name}
						</h1>
						<p className="text-xl text-white/90">{cityData.country}</p>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className="container mx-auto px-4 py-12">
				{/* Stats */}
				<CityStats data={cityData} />

				{/* Courts Section */}
				<div className="mb-8">
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-3xl font-bold text-gray-900">
							Courts in {cityData.name}
						</h2>
						<Link
							href={`/search?location=${encodeURIComponent(decodedLocation)}${
								country ? `&country=${encodeURIComponent(country)}` : ''
							}`}
							className="text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-2"
						>
							View All
							<Navigation className="w-4 h-4" />
						</Link>
					</div>

					{cityData.courts.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{cityData.courts.map((court) => (
								<CourtCard key={court.id} court={court} />
							))}
						</div>
					) : (
						<div className="text-center py-16 bg-white rounded-xl shadow-md">
							<MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
							<h3 className="text-xl font-bold text-gray-900 mb-2">No courts found</h3>
							<p className="text-gray-600">
								Check back soon for new courts in {cityData.name}
							</p>
						</div>
					)}
				</div>

				{/* Additional Info Section */}
				<div className="bg-white rounded-xl shadow-lg p-8">
					<h3 className="text-2xl font-bold text-gray-900 mb-4">
						About Pickleball in {cityData.name}
					</h3>
					<p className="text-gray-600 leading-relaxed">
						{cityData.name} is home to a vibrant pickleball community with{' '}
						{cityData.courtsCount} courts and {cityData.activePlayersCount} active
						players. Whether you're a beginner or a seasoned player, you'll find the
						perfect court to play at.
					</p>
				</div>
			</div>
		</div>
	);
}

// Main Page Component
export default function CityPage(props: CityPageProps) {
	return (
		<Suspense fallback={<CityPageLoading />}>
			<CityContent {...props} />
		</Suspense>
	);
}
