// src/app/court/[id]/page.tsx

import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import {
	MapPin,
	Phone,
	Clock,
	Star,
	Navigation,
	Users,
	Calendar,
} from 'lucide-react';
import Link from 'next/link';
import { config } from '@/lib/config';

interface CourtDetailPageProps {
	params: Promise<{ id: string }>;
}

interface CourtDetail {
	id: string;
	name: string;
	city: string;
	country: string;
	address: string;
	phone?: string;
	hours?: string;
	rating?: number;
	totalReviews?: number;
	description?: string;
	amenities?: string[];
	pricePerHour?: number;
	images?: string[];
}

async function getCourtDetails(id: string): Promise<CourtDetail | null> {
	try {
		const response = await fetch(`${config.API_BASE_URL}/api/web/courts/${id}`, {
			cache: 'no-store',
		});

		if (!response.ok) {
			return null;
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching court:', error);
		return null;
	}
}

// Loading Component
function CourtDetailLoading() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="h-96 bg-gray-200 animate-pulse" />
			<div className="container mx-auto px-4 py-12">
				<div className="bg-white rounded-2xl shadow-xl p-8">
					<div className="h-10 bg-gray-200 rounded w-3/4 mb-6 animate-pulse" />
					<div className="space-y-4">
						{[...Array(3)].map((_, i) => (
							<div key={i} className="h-6 bg-gray-200 rounded animate-pulse" />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

// Main Court Detail Component
async function CourtDetailContent({ params }: CourtDetailPageProps) {
	const { id } = await params;
	const court = await getCourtDetails(id);

	if (!court) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Image */}
			<div className="relative h-96 bg-gradient-to-br from-teal-400 to-teal-600">
				<div className="absolute inset-0 bg-black/20" />
				<div className="absolute bottom-6 left-0 right-0">
					<div className="container mx-auto px-4">
						<div className="flex items-center gap-2 text-white/80 text-sm mb-2">
							<Link href="/" className="hover:text-white">
								Home
							</Link>
							<span>/</span>
							<Link
								href={`/city/${encodeURIComponent(court.city)}`}
								className="hover:text-white"
							>
								{court.city}
							</Link>
							<span>/</span>
							<span className="text-white">{court.name}</span>
						</div>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 py-12">
				<div className="bg-white rounded-2xl shadow-xl overflow-hidden">
					<div className="p-8">
						<div className="flex items-start justify-between mb-6">
							<div className="flex-1">
								<h1 className="text-4xl font-bold text-gray-900 mb-2">{court.name}</h1>
								{court.rating && (
									<div className="flex items-center gap-2">
										<div className="flex items-center">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className={`w-5 h-5 ${
														i < Math.floor(court.rating!)
															? 'text-yellow-400 fill-yellow-400'
															: 'text-gray-300'
													}`}
												/>
											))}
										</div>
										<span className="text-gray-600">
											{court.rating.toFixed(1)} ({court.totalReviews} reviews)
										</span>
									</div>
								)}
							</div>
							{court.pricePerHour && (
								<div className="text-right">
									<p className="text-3xl font-bold text-teal-600">
										${court.pricePerHour}
									</p>
									<p className="text-sm text-gray-600">per hour</p>
								</div>
							)}
						</div>

						{court.description && (
							<p className="text-gray-600 leading-relaxed mb-8">{court.description}</p>
						)}

						<div className="grid md:grid-cols-2 gap-8 mb-8">
							<div className="space-y-4">
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									Court Information
								</h3>

								<div className="flex items-start gap-3">
									<MapPin className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
									<div>
										<p className="font-semibold text-gray-900">Location</p>
										<p className="text-gray-600">{court.address}</p>
										<p className="text-sm text-gray-500">
											{court.city}, {court.country}
										</p>
									</div>
								</div>

								{court.phone && (
									<div className="flex items-start gap-3">
										<Phone className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
										<div>
											<p className="font-semibold text-gray-900">Phone</p>
											<a
												href={`tel:${court.phone}`}
												className="text-teal-600 hover:text-teal-700"
											>
												{court.phone}
											</a>
										</div>
									</div>
								)}

								{court.hours && (
									<div className="flex items-start gap-3">
										<Clock className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
										<div>
											<p className="font-semibold text-gray-900">Hours</p>
											<p className="text-gray-600">{court.hours}</p>
										</div>
									</div>
								)}
							</div>

							{court.amenities && court.amenities.length > 0 && (
								<div>
									<h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
									<div className="flex flex-wrap gap-2">
										{court.amenities.map((amenity, index) => (
											<span
												key={index}
												className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg font-medium"
											>
												{amenity}
											</span>
										))}
									</div>
								</div>
							)}
						</div>

						<div className="flex gap-4">
							<button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
								<Calendar className="w-5 h-5" />
								Book a Court
							</button>
							<button className="px-8 py-4 border-2 border-gray-300 hover:border-teal-500 text-gray-700 hover:text-teal-600 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
								<Navigation className="w-5 h-5" />
								Get Directions
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// Main Page Component
export default function CourtDetailPage(props: CourtDetailPageProps) {
	return (
		<Suspense fallback={<CourtDetailLoading />}>
			<CourtDetailContent {...props} />
		</Suspense>
	);
}
