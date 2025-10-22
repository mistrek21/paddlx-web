'use client';

import { useState, useEffect } from 'react';
import CityCard from '../../games/_components/CityCard';
import CourtCard from '../../_components/CourtCard';
import { CityInfo } from '../../games/types';
import { Building2, Loader2 } from 'lucide-react';

interface Club {
	id: string;
	name: string;
	description?: string;
	address: string;
	imageUrl?: string;
	isIndoor: boolean;
	isOutdoor: boolean;
	contactPhone?: string;
	website?: string;
	isVerified: boolean;
	followerCount: number;
	reviewCount: number;
	rating?: number;
	slug: string;
	latitude?: number | null;
	longitude?: number | null;
	location: string;
}

type Props = {
	location: string;
	cachedCity: CityInfo;
};

const API_BASE_URL = process.env.IP_CONFIG || 'https://paddle-api.vercel.app';

export default function AllClubsWrapper({ location, cachedCity }: Props) {
	const [cityInfo] = useState(cachedCity);
	const [clubs, setClubs] = useState<Club[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchClubs() {
			try {
				setLoading(true);
				setError(null);

				const response = await fetch(
					`${API_BASE_URL}/api/web/cities/${cityInfo.name}/courts/all-courts`
				);

				if (!response.ok) {
					throw new Error('Failed to fetch clubs');
				}

				const data = await response.json();
				setClubs(data.courts || []);
			} catch (err) {
				console.error('Error fetching clubs:', err);
				setError('Failed to load clubs');
			} finally {
				setLoading(false);
			}
		}

		if (cityInfo.name) {
			fetchClubs();
		}
	}, [cityInfo.name]);

	return (
		<section className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
			<div className="max-w-7xl mx-auto">
				{/* City Info Hero Section */}
				<CityCard cityInfo={cityInfo} />

				{/* Clubs Section */}
				<div className="relative mt-12">
					<div className="flex items-baseline gap-3 mb-8">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">Clubs</h2>
						{!loading && (
							<div className="bg-teal-600 text-white px-4 py-1 rounded-full text-xl font-bold">
								{clubs.length}
							</div>
						)}
					</div>

					{/* Loading State */}
					{loading && (
						<div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-12">
							<div className="flex flex-col items-center justify-center gap-4">
								<Loader2 className="w-10 h-10 text-primary animate-spin" />
								<p className="text-slate-gray">Loading clubs...</p>
							</div>
						</div>
					)}

					{/* Error State */}
					{error && !loading && (
						<div className="bg-red-50 rounded-2xl border border-red-200 p-12 text-center">
							<p className="text-red-600 font-semibold">{error}</p>
						</div>
					)}

					{/* Clubs Grid */}
					{!loading && !error && clubs.length > 0 && (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{clubs.map((club) => (
								<CourtCard key={club.id} court={club} />
							))}
						</div>
					)}

					{/* Empty State */}
					{!loading && !error && clubs.length === 0 && (
						<div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-12 text-center">
							<div className="max-w-md mx-auto">
								<div className="bg-primary-ultra-soft rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
									<Building2 className="w-10 h-10 text-primary" />
								</div>
								<h3 className="text-2xl font-bold text-dark-slate mb-3">
									No Clubs Yet
								</h3>
								<p className="text-slate-gray mb-6">
									Be the first to bring pickleball to {cityInfo.name}! Start a club and
									build a community of players.
								</p>
								<button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200">
									Create a Club
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
