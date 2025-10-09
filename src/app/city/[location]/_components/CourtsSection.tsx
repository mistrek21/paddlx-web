// src/app/city/[location]/_components/CourtsSection.tsx

import { MapPin } from 'lucide-react';
import CourtCard from './CourtCard';

interface CourtsSectionProps {
	cityId: string;
	cityName: string;
}

interface Court {
	id: string;
	name: string;
	description?: string;
	address: string;
	latitude: number;
	longitude: number;
	imageUrl?: string;
	images?: string[];
	isIndoor: boolean;
	isOutdoor: boolean;
	contactPhone?: string;
	contactEmail?: string;
	website?: string;
	amenities?: any;
	priceInfo?: any;
	operatingHours?: any;
	isVerified: boolean;
	followerCount: number;
	reviewCount: number;
	rating?: number;
	distance: number;
	slug: string;
}

export default async function CourtsSection({
	cityId,
	cityName,
}: CourtsSectionProps) {
	const baseUrl = process.env.IP_CONFIG || 'http://localhost:3000';

	try {
		// Always fetch fresh court data from API (no cache)
		const response = await fetch(
			`${baseUrl}/api/web/cities/${cityId}/courts?limit=60`,
			{
				cache: 'no-store', // Always fresh!
			}
		);

		if (!response.ok) {
			console.error('Failed to fetch courts:', response.status);
			return <EmptyState cityName={cityName} />;
		}

		const data = await response.json();
		// Debug log for troubleshooting:
		// console.log("Courts fetched from API:", data.courts);

		const courts: Court[] = data.courts || [];

		if (courts.length === 0) {
			return <EmptyState cityName={cityName} />;
		}

		return (
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{courts.map((court) => (
					<CourtCard key={court.id} court={court} />
				))}
			</div>
		);
	} catch (error) {
		console.error('Error in CourtsSection:', error);
		return <EmptyState cityName={cityName} />;
	}
}

// Separate Empty State Component
function EmptyState({ cityName }: { cityName: string }) {
	return (
		<div className="text-center py-20 bg-gradient-to-br from-white to-cool-gray rounded-2xl shadow-xl border border-slate-100">
			<div className="bg-primary-ultra-soft w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
				<MapPin className="w-12 h-12 text-primary" />
			</div>
			<h3 className="text-2xl font-bold text-dark-slate mb-3">No courts found</h3>
			<p className="text-slate-gray text-lg">
				Check back soon for new courts in {cityName}
			</p>
		</div>
	);
}
