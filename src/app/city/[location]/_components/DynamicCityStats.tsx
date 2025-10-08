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
	// Fetch ONLY the stats, always fresh
	const statsData = await getCityStatsOnly(location, country);

	return <CityStats data={statsData} />;
}
