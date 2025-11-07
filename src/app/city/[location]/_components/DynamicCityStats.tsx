// src/app/city/[location]/_components/DynamicCityStats.tsx

import CityStats from './CityStats';
import { getCityStatsOnly } from './fetch/fetch';

export default async function DynamicCityStats({
	location,
	country,
}: {
	location: string;
	country?: string;
}) {
	const statsData = await getCityStatsOnly(location, country);

	// ✅ If null, return null (don't render anything)
	if (!statsData) {
		console.warn(
			'⚠️ [DynamicCityStats] No stats data available, skipping render'
		);
		return null;
	}

	return <CityStats data={statsData} locationSlug={location} />;
}
