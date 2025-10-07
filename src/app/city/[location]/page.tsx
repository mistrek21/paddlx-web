// src/app/city/[location]/page.tsx

import { Suspense } from 'react';
<<<<<<< HEAD
import { MapPin, Navigation, Users, Calendar } from 'lucide-react';
import Link from 'next/link';
import { config } from '@/lib/config';

interface CityPageProps {
=======
import { config } from '@/lib/config';
import CityPageLoading from './_components/CityPageLoading';
import CityContent from './_components/CityContent';

export interface CityPageProps {
>>>>>>> dev
	params: Promise<{ location: string }>;
	searchParams: Promise<{ country?: string }>;
}

<<<<<<< HEAD
interface Court {
=======
export interface Court {
>>>>>>> dev
	id: string;
	name: string;
	distance: number;
	location: string;
	address?: string;
<<<<<<< HEAD
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
=======
	latitude?: number;
	longitude?: number;
	imageUrl?: string;
	rating?: number;
}

export interface CityFeature {
	id: string;
	featureType: string;
	title: string;
	description?: string;
	icon?: string;
	priority: number;
}

export interface CityData {
	id: string;
	name: string;
	country: string;
	countryCode?: string;
	state?: string;
	stateCode?: string;
	latitude: number;
	longitude: number;
	timezone?: string;
	elevation?: number;

	// Demographics
	population?: number;
	populationYear?: number;
	areaKm2?: number;

	// External IDs (MISSING - Add these)
	geonameId?: number;
	openStreetMapId?: string;
	wikiDataId?: string;

	// Media
	description?: string;
	imageUrl?: string;
	thumbnailUrl?: string;
	coverImageUrl?: string;

	// Climate
	averageTemp?: number;
	climateType?: string;
	bestPlayMonths?: string[];

	// Pickleball Stats
	totalClubs: number;
	totalCourts: number;
	totalActiveSessions: number;
	totalCompletedSessions: number;
	totalActiveTournaments: number;
	totalCompletedTournaments: number;
	totalCoaches: number;
	totalPlayers: number;
	totalGroups: number;

	// Activity & Status
	activityScore: number;
	popularityRank?: number;
	isPopularDestination: boolean;
	isTrendingCity: boolean;

	// Events
	upcomingSessionsCount: number;
	upcomingTournamentsCount: number;
	nextSessionDate?: string;
	nextTournamentDate?: string;

	// Pricing
	averageSessionPrice?: number;
	averageCourtRental?: number;
	currencyUsed: string;

	// Status
	isVerified: boolean;
	hasActiveClubs: boolean;
	dataQuality: string;

	// SEO
	slug: string;
	metaTitle?: string;
	metaDescription?: string;
	keywords: string[];

	// Tracking
	lastStatsUpdate?: string;
	lastExternalSync?: string;
	externalDataSource?: string;

	// AI Content Fields (MISSING - Add these)
	isAiGenerated?: boolean;
	aiGeneratedAt?: string;
	aiGeneratedFields?: string[];
	nearbyAttractions?: string[];
	playingConditions?: string;
	communityVibe?: string;
	bestTimeToVisit?: string;

	// Timestamps (MISSING - Add these)
	createdAt?: string;
	updatedAt?: string;

	// Relationships
	features: CityFeature[];
	courts: Court[];

	// Optional relationship data (if you want to include them)
	nearbyCities?: CityData[];
	featuredClubs?: Court[]; // or create a separate Club interface
}

// Additional types for better type safety
export type CityDataQuality = 'BASIC' | 'COMPLETE' | 'VERIFIED';

export type CityFeatureType =
	| 'OUTDOOR_COURTS'
	| 'INDOOR_FACILITIES'
	| 'PROFESSIONAL_COACHING'
	| 'TOURNAMENT_VENUE'
	| 'COMMUNITY_PROGRAMS'
	| 'BEGINNER_FRIENDLY'
	| 'COMPETITIVE_SCENE'
	| 'YEAR_ROUND_PLAY'
	| 'SCENIC_LOCATIONS'
	| 'AFFORDABLE_RATES';

// Enhanced interface with strict typing
export interface CityDataStrict
	extends Omit<CityData, 'dataQuality' | 'features'> {
	dataQuality: CityDataQuality;
	features: CityFeatureStrict[];
}

export interface CityFeatureStrict extends Omit<CityFeature, 'featureType'> {
	featureType: CityFeatureType;
}

// API Response types
export interface CityAPIResponse {
	success: boolean;
	data: CityData;
	error?: string;
}

export interface AIContentResponse {
	metaTitle?: string;
	metaDescription?: string;
	description?: string;
	bestPlayMonths?: string[];
	nearbyAttractions?: string[];
	playingConditions?: string;
	communityVibe?: string;
	bestTimeToVisit?: string;
	keywords?: string[];
	isAiGenerated: boolean;
	aiGeneratedFields: string[];
}

// For the page props
export interface CityPageParams {
	location: string;
}

export interface CityPageSearchParams {
	country?: string;
}

export interface CityPageProps {
	params: Promise<CityPageParams>;
	searchParams: Promise<CityPageSearchParams>;
}

async function fetchAIDescription(city: CityData): Promise<Partial<CityData>> {
	try {
		const response = await fetch(
			`${config.API_BASE_URL}/api/web/ai/generate-city-content`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: city.name,
					country: city.country,
					state: city.state,
					population: city.population,
					totalClubs: city.totalClubs,
					totalCourts: city.totalCourts,
					totalPlayers: city.totalPlayers,
					climateType: city.climateType,
					averageTemp: city.averageTemp,
					activityScore: city.activityScore,
					isPopularDestination: city.isPopularDestination,
				}),
			}
		);

		if (!response.ok) return {};
		const aiContent = await response.json();

		// Optionally save enhanced data back to database
		if (aiContent.metaTitle || aiContent.description) {
			await fetch(`/api/web/cities/${city.id}/enhance`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(aiContent),
			}).catch(console.error);
		}

		return aiContent;
	} catch (error) {
		console.error('AI enhancement failed', error);
		return {};
	}
}

// Fetch city data, then fill missing fields from AI if needed
export async function getCityDataEnhanced(
>>>>>>> dev
	location: string,
	country?: string
): Promise<CityData> {
	try {
		const params = new URLSearchParams();
		params.set('location', location);
		if (country) params.set('country', country);

<<<<<<< HEAD
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
=======
		// Use the location as the id parameter
		const url = `${config.API_BASE_URL}/api/web/cities/${encodeURIComponent(
			location
		)}?${params.toString()}`;

		console.log('🔍 Fetching city data from:', url);

		const response = await fetch(url, {
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) throw new Error('Failed to fetch city data');
		const data: CityData = await response.json();

		// Enhance with AI if critical fields are missing
		if (
			!data.description ||
			!data.metaTitle ||
			!data.metaDescription ||
			!data.bestPlayMonths?.length
		) {
			const aiEnhancements = await fetchAIDescription(data);
			return { ...data, ...aiEnhancements };
		}

		return data;
	} catch (error) {
		console.error('Error fetching city data:', error);
		return {
			id: 'mock',
			name: location,
			country: country || 'Philippines',
			latitude: 0,
			longitude: 0,
			totalClubs: 12,
			totalCourts: 45,
			totalActiveSessions: 8,
			totalCompletedSessions: 156,
			totalActiveTournaments: 3,
			totalCompletedTournaments: 12,
			totalCoaches: 18,
			totalPlayers: 234,
			totalGroups: 15,
			activityScore: 85.5,
			isPopularDestination: false,
			isTrendingCity: false,
			upcomingSessionsCount: 8,
			upcomingTournamentsCount: 3,
			currencyUsed: 'USD',
			isVerified: false,
			hasActiveClubs: true,
			dataQuality: 'BASIC',
			slug: location.toLowerCase().replace(/\s+/g, '-'),
			keywords: [],
			features: [],
>>>>>>> dev
			courts: [],
		};
	}
}

<<<<<<< HEAD
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
=======
>>>>>>> dev
export default function CityPage(props: CityPageProps) {
	return (
		<Suspense fallback={<CityPageLoading />}>
			<CityContent {...props} />
		</Suspense>
	);
}
