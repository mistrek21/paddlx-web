// src/app/city/[location]/_components/fetch/fetch.ts

import { config } from '@/lib/config';
import { CityData } from '../../page';

// Trigger AI enhancement for a city (only if not already generated)
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

// Fetch city data, enhance if needed
export async function getCityDataEnhanced(
	location: string,
	country?: string
): Promise<CityData> {
	try {
		const params = new URLSearchParams();
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

			// Fetch the updated data
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

		// Fallback mock data
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
}

// Optional: Function to check if city needs enhancement without fetching full data
export async function checkCityEnhancementStatus(cityId: string): Promise<{
	isEnhanced: boolean;
	enhancedAt?: string;
}> {
	try {
		const response = await fetch(
			`${config.API_BASE_URL}/api/web/cities/${cityId}`,
			{
				cache: 'no-store',
			}
		);

		if (!response.ok) return { isEnhanced: false };

		const data = await response.json();
		return {
			isEnhanced: data.isAiGenerated || false,
			enhancedAt: data.aiGeneratedAt,
		};
	} catch (error) {
		console.error('Error checking enhancement status:', error);
		return { isEnhanced: false };
	}
}

// Optional: Simpler version using autoEnhance flag (background enhancement)
export async function getCityDataWithAutoEnhance(
	location: string,
	country?: string
): Promise<CityData> {
	try {
		const params = new URLSearchParams();
		params.set('autoEnhance', 'true'); // Enable background enhancement
		if (country) params.set('country', country);

		const url = `${config.API_BASE_URL}/api/web/cities/${encodeURIComponent(
			location
		)}?${params.toString()}`;

		console.log('🔍 Fetching city data with auto-enhance:', url);

		const response = await fetch(url, {
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) throw new Error('Failed to fetch city data');

		const data: CityData = await response.json();

		// Note: If city wasn't enhanced yet, it will be enhanced in the background
		// The current response will have whatever data exists in DB
		// On next page load, it will have the enhanced data

		return data;
	} catch (error) {
		console.error('Error fetching city data:', error);
		throw error;
	}
}
