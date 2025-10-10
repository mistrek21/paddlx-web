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

	// External IDs
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

	// AI Content Fields
	isAiGenerated?: boolean;
	aiGeneratedAt?: string;
	aiGeneratedFields?: string[];
	nearbyAttractions?: string[];
	playingConditions?: string;
	communityVibe?: string;
	bestTimeToVisit?: string;

	// Timestamps
	createdAt?: string;
	updatedAt?: string;

	// Relationships
	features: CityFeature[];
	courts: Court[];

	// Optional
	nearbyCities?: CityData[];
	featuredClubs?: Court[];
	aiContent?: AIContentResponse;
	totalFacilities?: number;
	averageRating?: number;
}

// Additional types
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

export interface CityDataStrict
	extends Omit<CityData, 'dataQuality' | 'features'> {
	dataQuality: CityDataQuality;
	features: CityFeatureStrict[];
}

export interface CityFeatureStrict extends Omit<CityFeature, 'featureType'> {
	featureType: CityFeatureType;
}

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

export interface CityPageParams {
	location: string;
}

export interface CityPageSearchParams {
	country?: string;
}

// CRITICAL: Make this route fully dynamic during development
// Once AI generation is stable, you can switch to ISR
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// For production with ISR (uncomment when ready):
// export const dynamic = 'auto';
// export const revalidate = 3600; // 1 hour

export default async function CityPage(props: CityPageProps) {
	return (
		<Suspense fallback={<CityPageLoading />}>
			<CityContent {...props} />
		</Suspense>
	);
}
