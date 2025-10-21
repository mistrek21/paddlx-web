// src/app/country/[name]/page.tsx

import { notFound } from 'next/navigation';
import { MapPin, Users, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { stateData } from '../../_data/states';

interface StatePageProps {
	params: {
		name: string;
	};
}

export default function StatePage({ params }: StatePageProps) {
	const stateName = decodeURIComponent(params.name);
	const state = stateData.find((s) => s.name === stateName);

	if (!state) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			{/* Hero Section */}
			<div className="relative h-[400px] w-full">
				<Image
					src={state.image}
					alt={state.name}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

				<Link
					href="/"
					className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-white/80 transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
				>
					<ArrowLeft className="w-4 h-4" />
					<span className="text-sm font-medium">Back to Home</span>
				</Link>

				<div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
					<div className="container mx-auto max-w-7xl">
						<h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
							{state.name}
						</h1>
						<div className="flex flex-wrap gap-6 text-white/90">
							<div className="flex items-center gap-2">
								<MapPin className="w-5 h-5" />
								<span className="text-lg font-medium">
									{state.cities.length} Cities
								</span>
							</div>
							<div className="flex items-center gap-2">
								<Users className="w-5 h-5" />
								<span className="text-lg font-medium">
									{state.cities.length} Cities
								</span>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="w-5 h-5" />
								<span className="text-lg font-medium">
									{state.cities.length} Cities
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Cities Grid */}
			<div className="container mx-auto max-w-7xl px-4 py-16">
				<div className="mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
						Popular Cities in {state.name}
					</h2>
					<p className="text-lg text-gray-600">
						Explore pickleball courts and games across {state.cities.length} cities
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{state.cities.map((city) => (
						<Link
							key={city.name}
							href={`/city/${encodeURIComponent(
								city.name
							)}?country=${encodeURIComponent('United States')}`}
							className="group"
						>
							<div className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
								{/* City Image */}
								<Image
									src={city.image}
									alt={city.name}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>

								{/* Gradient Overlay - Much lighter by default */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300" />

								{/* Content Overlay */}
								<div className="absolute inset-0 p-6 flex flex-col justify-between">
									{/* Top - City Name */}
									<div>
										<h3 className="text-3xl font-bold text-white drop-shadow-lg">
											{city.name}
										</h3>
									</div>

									{/* Bottom Content - Stats on hover */}
									<div>
										{/* Compact Stats - Only visible on hover */}
										{/* <div className="flex items-center gap-3 text-white/90 text-sm mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
											<div className="flex items-center gap-1.5">
												<MapPin className="w-3.5 h-3.5" />
												<span>{city.locations} locations</span>
											</div>
											<span>•</span>
											<span>{city.courts} courts</span>
											<span>•</span>
											<span>{city.games} games</span>
										</div> */}

										{/* Explore Button */}
										<div className="flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
											<span>Explore City</span>
											<svg
												className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

// THIS IS THE KEY FIX - Import from data file, not client component
export async function generateStaticParams() {
	return stateData.map((state) => ({
		name: encodeURIComponent(state.name),
	}));
}

export async function generateMetadata({ params }: StatePageProps) {
	const countryName = decodeURIComponent(params.name);
	const country = stateData.find((c) => c.name === countryName);

	if (!country) {
		return {
			title: 'State Not Found',
		};
	}

	return {
		title: `Pickleball in ${country.name} - Courts, Games & Locations`,
		description: `Discover ${country.cities.length} pickleball locations and ${country.cities.length} courts across ${country.cities.length} cities in ${country.name}. Find games and connect with players.`,
	};
}
