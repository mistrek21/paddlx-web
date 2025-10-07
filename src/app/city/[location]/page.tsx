// src/app/city/[location]/page.tsx

import { Suspense } from 'react';
import { config } from '@/lib/config';
import CityPageLoading from './_components/CityPageLoading';
import CityContent from './_components/CityContent';

export interface CityPageProps {
	params: Promise<{ location: string }>;
	searchParams: Promise<{ country?: string }>;
}

export interface Court {
	id: string;
	name: string;
	distance: number;
	location: string;
	address?: string;
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
			await fetch(`${config.API_BASE_URL}/api/web/cities/${city.id}/enhance`, {
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
	location: string,
	country?: string
): Promise<CityData> {
	try {
		const params = new URLSearchParams();
		params.set('location', location);
		if (country) params.set('country', country);

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
			courts: [],
		};
	}
}

export default function CityPage(props: CityPageProps) {
	return (
		<Suspense fallback={<CityPageLoading />}>
			<CityContent {...props} />
		</Suspense>
	);
}
