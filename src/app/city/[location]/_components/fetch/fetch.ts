// src/app/city/[location]/_components/fetch/fetch.ts

import { config } from '@/lib/config';
import { CityData } from '../../page';
import { cache } from 'react';
import { CityStatsData } from '../CityStats';

// ============================================
// SMART CACHED VERSION - Adapts based on AI status
// ============================================
export const getCityDataCached = cache(
	async (location: string, country?: string): Promise<CityData> => {
		const params = new URLSearchParams();
		if (country) params.set('country', country);

		const url = `${config.API_BASE_URL}/api/web/cities/${encodeURIComponent(
			location
		)}?${params.toString()}`;

		// First fetch to check AI status
		const response = await fetch(url, {
			cache: 'no-store', // Always check fresh first
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error('❌ Failed to fetch city data:', {
				status: response.status,
				location,
				country,
				url,
				error: errorText,
			});

			// Return mock data instead of throwing
			console.warn('⚠️ Returning mock data for development');
			return getMockCityData(location, country);
		}

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
			// Trigger enhancement and WAIT for it
			const enhanced = await enhanceCity(data.id);

			if (enhanced) {
				// Fetch the updated data immediately
				const updatedResponse = await fetch(url, {
					cache: 'no-store',
				});

				if (updatedResponse.ok) {
					const updatedData: CityData = await updatedResponse.json();

					return updatedData;
				}
			} else {
			}
		}

		return data;
	}
);

// ============================================
// FRESH VERSION - For dynamic stats component
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

		const response = await fetch(url, {
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) throw new Error('Failed to fetch city data');
		return await response.json();
	} catch (error) {
		console.error('❌ [getCityDataFresh] Error:', error);
		return getMockCityData(location, country);
	}
}

// ============================================
// ENHANCED VERSION (kept for compatibility)
// ============================================
export async function getCityDataEnhanced(
	location: string,
	country?: string
): Promise<CityData> {
	// Just use the smart cached version
	return getCityDataCached(location, country);
}

// ============================================
// ENHANCEMENT HELPER - Now with better error handling
// ============================================
async function enhanceCity(cityId: string): Promise<boolean> {
	try {
		const response = await fetch(
			`${config.API_BASE_URL}/api/web/cities/${cityId}/enhance`,
			{
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			}
		);

		if (!response.ok) {
			const errorText = await response.text();
			console.warn(
				'⚠️ [enhanceCity] Enhancement failed:',
				response.status,
				errorText
			);
			return false;
		}

		const result = await response.json();

		if (result.alreadyGenerated) {
			return true;
		} else if (result.success) {
			return true;
		}

		return false;
	} catch (error) {
		console.error('❌ [enhanceCity] Enhancement error:', error);
		return false;
	}
}

// ============================================
// STATS ONLY - Always fresh
// ============================================
export async function getCityStatsOnly(
	location: string,
	country?: string
): Promise<CityStatsData> {
	const params = new URLSearchParams();
	if (country) params.set('country', country);

	const url = `${config.API_BASE_URL}/api/web/cities/${encodeURIComponent(
		location
	)}/stats?${params.toString()}`;

	const response = await fetch(url, {
		cache: 'no-store',
	});

	if (!response.ok) {
		console.error('❌ [getCityStatsOnly] Failed:', response.status);
		throw new Error('Failed to fetch stats');
	}

	return await response.json();
}

// ============================================
// MOCK DATA HELPER
// ============================================
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
