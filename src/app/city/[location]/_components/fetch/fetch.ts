// src/app/city/[location]/_components/fetch/fetch.ts

import { config } from '@/lib/config';
import { CityData } from '../../page';

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
