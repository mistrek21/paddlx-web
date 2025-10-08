// src/app/city/[location]/_components/fetch/fetch.ts

import { config } from '@/lib/config';
import { CityData } from '../../page';
import { cache } from 'react';
import { CityStatsData } from '../CityStats';

// ============================================
// 1. CACHED VERSION - For static page content
// ============================================
export const getCityDataCached = cache(
	async (location: string, country?: string): Promise<CityData> => {
		const params = new URLSearchParams();
		if (country) params.set('country', country);
		// No 'fields' param = returns full data

		const url = `${config.API_BASE_URL}/api/web/cities/${encodeURIComponent(
			location
		)}?${params.toString()}`;

		console.log('📦 Fetching CACHED city data (full)');

		const response = await fetch(url, {
			next: { revalidate: 3600 }, // 1 hour cache
		});

		if (!response.ok) throw new Error('Failed to fetch city data');
		return await response.json();
	}
);

// ============================================
// 2. FRESH VERSION - For dynamic stats component
// ============================================
export async function getCityDataFresh(
	location: string,
	country?: string
): Promise<CityData> {
	try {
		const params = new URLSearchParams();
		if (country) params.set('country', country);

		const url = `${config.API_BASE_URL}/api/web/cities/${encodeURIComponent(
			location
		)}?${params.toString()}`;

		console.log('🔍 Fetching FRESH city data from:', url);

		const response = await fetch(url, {
			cache: 'no-store', // Always fresh
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) throw new Error('Failed to fetch city data');
		return await response.json();
	} catch (error) {
		console.error('Error fetching fresh city data:', error);
		return getMockCityData(location, country);
	}
}

// ============================================
// 3. ENHANCED VERSION - With AI enhancement logic
// ============================================
export async function getCityDataEnhanced(
	location: string,
	country?: string
): Promise<CityData> {
	try {
		const params = new URLSearchParams();
		if (country) params.set('country', country);

		const url = `${config.API_BASE_URL}/api/web/cities/${encodeURIComponent(
			location
		)}?${params.toString()}`;

		console.log('🔍 Fetching city data from:', url);

		const response = await fetch(url, {
			next: { revalidate: 3600 }, // Cache for 1 hour
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) throw new Error('Failed to fetch city data');
		const data: CityData = await response.json();

		// Check if city needs AI enhancement
		const needsEnhancement =
			!data.isAiGenerated ||
			!data.description ||
			!data.metaTitle ||
			!data.metaDescription ||
			!data.bestPlayMonths?.length ||
			!data.imageUrl ||
			!data.timezone ||
			!data.elevation;

		if (needsEnhancement) {
			console.log(`🚀 City needs enhancement, triggering now...`);

			// Trigger enhancement (this will update the database)
			await enhanceCity(data.id);

			// Fetch the updated data with no-store to get fresh enhanced data
			const updatedResponse = await fetch(url, {
				cache: 'no-store',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (updatedResponse.ok) {
				const updatedData: CityData = await updatedResponse.json();
				console.log('✅ Fetched enhanced city data');
				return updatedData;
			}
		}

		return data;
	} catch (error) {
		console.error('Error fetching city data:', error);
		return getMockCityData(location, country);
	}
}

// Helper function
async function enhanceCity(cityId: string): Promise<boolean> {
	try {
		console.log(`🤖 Triggering enhancement for city: ${cityId}`);

		const response = await fetch(
			`${config.API_BASE_URL}/api/web/cities/${cityId}/enhance`,
			{
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			}
		);

		if (!response.ok) {
			console.warn('Enhancement failed:', response.status);
			return false;
		}

		const result = await response.json();

		if (result.alreadyGenerated) {
			console.log(`✅ City already enhanced on ${result.aiGeneratedAt}`);
		} else {
			console.log(
				`✅ City enhanced with ${result.fieldsUpdated} fields and ${result.featuresCreated} features`
			);
		}

		return result.success;
	} catch (error) {
		console.error('AI enhancement failed:', error);
		return false;
	}
}

export async function getCityStatsOnly(
	location: string,
	country?: string
): Promise<CityStatsData> {
	const params = new URLSearchParams();
	if (country) params.set('country', country);

	const url = `${config.API_BASE_URL}/api/web/cities/${encodeURIComponent(
		location
	)}/stats?${params.toString()}`;

	console.log('⚡ Fetching FRESH stats (optimized)');

	const response = await fetch(url, {
		cache: 'no-store',
	});

	if (!response.ok) throw new Error('Failed to fetch stats');
	return await response.json();
}

// Mock data helper
function getMockCityData(location: string, country?: string): CityData {
	return {
		id: 'mock',
		name: location,
		country: country || 'Philippines',
		latitude: 14.5995,
		longitude: 120.9842,
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
		isAiGenerated: false,
	};
}
