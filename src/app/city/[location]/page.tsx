// src/app/city/[location]/page.tsx

import { Suspense } from 'react';
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

	// AI Content Fields (MISSING - Add these)
	aiContent?: AIContentResponse;

	totalFacilities?: number; // Add this optional property
	averageRating?: number;
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

export default async function CityPage(props: CityPageProps) {
	return (
		<Suspense fallback={<CityPageLoading />}>
			<CityContent {...props} />
		</Suspense>
	);
}
