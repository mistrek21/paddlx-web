// /src/app/court/[slug]/_components/CourtHero.tsx

import Link from 'next/link';
import { CourtDetail } from '../page';
import {
	MapPin,
	Users,
	TrendingUp,
	Calendar,
	Trophy,
	Dumbbell,
} from 'lucide-react';

export default function CourtHero({ court }: { court: CourtDetail }) {
	const cityDetails = court.cityDetails;

	return (
		<>
			{/* Hero Section */}
			<div className="relative h-96 bg-gradient-to-br from-primary to-primary-dark">
				{court.images && court.images[0] && (
					<img
						src={court.images[0]}
						alt={court.name}
						className="absolute inset-0 w-full h-full object-cover"
					/>
				)}
				<div className="absolute inset-0 bg-dark/30" />
				<div className="absolute bottom-6 left-0 right-0">
					<div className="container mx-auto px-4">
						{/* Breadcrumb Navigation */}
						<nav className="flex items-center gap-2 text-white/80 text-sm mb-2">
							<Link href="/" className="hover:text-white transition-colors">
								Home
							</Link>
							<span>/</span>
							<Link
								href={`/city/${cityDetails?.slug || encodeURIComponent(court.city)}`}
								className="hover:text-white transition-colors"
							>
								{court.city}
							</Link>
							<span>/</span>
							<span className="text-white font-medium">{court.name}</span>
						</nav>
					</div>
				</div>
			</div>

			{/* City Information Banner with LIVE STATS */}
			{cityDetails && (
				<div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border-b border-teal-500/20">
					<div className="container mx-auto px-4 py-6">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
							{/* City Info */}
							<div className="flex-1">
								<div className="flex items-center gap-2 mb-2">
									<MapPin className="w-5 h-5 text-teal-500" />
									<Link
										href={`/city/${cityDetails.slug}`}
										className="text-lg font-semibold hover:text-teal-500 transition-colors"
									>
										{cityDetails.name}, {cityDetails.country}
									</Link>
									{cityDetails.isPopularDestination && (
										<span className="px-2 py-1 bg-teal-500 text-white text-xs rounded-full">
											Popular
										</span>
									)}
									{cityDetails.isTrendingCity && (
										<span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center gap-1">
											<TrendingUp className="w-3 h-3" />
											Trending
										</span>
									)}
								</div>
								{cityDetails.description && (
									<p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
										{cityDetails.description}
									</p>
								)}
								{cityDetails.communityVibe && (
									<p className="text-sm text-gray-500 dark:text-gray-500 mt-1 italic">
										{cityDetails.communityVibe}
									</p>
								)}
							</div>

							{/* LIVE City Stats Grid */}
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								<div className="flex items-center gap-2">
									<div className="p-2 bg-teal-500/10 rounded-lg">
										<MapPin className="w-4 h-4 text-teal-500" />
									</div>
									<div>
										<div className="text-xs text-gray-500 dark:text-gray-400">Clubs</div>
										<div className="font-semibold">{cityDetails.totalClubs}</div>
									</div>
								</div>

								<div className="flex items-center gap-2">
									<div className="p-2 bg-blue-500/10 rounded-lg">
										<Users className="w-4 h-4 text-blue-500" />
									</div>
									<div>
										<div className="text-xs text-gray-500 dark:text-gray-400">
											Players
										</div>
										<div className="font-semibold">{cityDetails.totalPlayers}</div>
									</div>
								</div>

								<div className="flex items-center gap-2">
									<div className="p-2 bg-purple-500/10 rounded-lg">
										<Calendar className="w-4 h-4 text-purple-500" />
									</div>
									<div>
										<div className="text-xs text-gray-500 dark:text-gray-400">
											Sessions
										</div>
										<div className="font-semibold">{cityDetails.totalActiveSessions}</div>
									</div>
								</div>

								<div className="flex items-center gap-2">
									<div className="p-2 bg-green-500/10 rounded-lg">
										<TrendingUp className="w-4 h-4 text-green-500" />
									</div>
									<div>
										<div className="text-xs text-gray-500 dark:text-gray-400">
											Activity
										</div>
										<div className="font-semibold">{cityDetails.activityScore}/100</div>
									</div>
								</div>
							</div>
						</div>

						{/* Additional Stats Row */}
						{(cityDetails.totalGamesPlayed > 0 ||
							cityDetails.totalCoaches > 0 ||
							cityDetails.totalActiveTournaments > 0) && (
							<div className="flex flex-wrap gap-6 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
								{cityDetails.totalGamesPlayed > 0 && (
									<div className="text-sm">
										<span className="text-gray-500 dark:text-gray-400">
											Games Played:
										</span>{' '}
										<span className="font-semibold">
											{cityDetails.totalGamesPlayed.toLocaleString()}
										</span>
									</div>
								)}
								{cityDetails.totalCoaches > 0 && (
									<div className="text-sm flex items-center gap-1">
										<Dumbbell className="w-4 h-4 text-orange-500" />
										<span className="text-gray-500 dark:text-gray-400">
											Coaches:
										</span>{' '}
										<span className="font-semibold">{cityDetails.totalCoaches}</span>
									</div>
								)}
								{cityDetails.totalActiveTournaments > 0 && (
									<div className="text-sm flex items-center gap-1">
										<Trophy className="w-4 h-4 text-yellow-500" />
										<span className="text-gray-500 dark:text-gray-400">
											Active Tournaments:
										</span>{' '}
										<span className="font-semibold">
											{cityDetails.totalActiveTournaments}
										</span>
									</div>
								)}
							</div>
						)}

						{/* City Features */}
						{cityDetails.features && cityDetails.features.length > 0 && (
							<div className="flex flex-wrap gap-2 mt-4">
								{cityDetails.features.slice(0, 4).map((feature) => (
									<div
										key={feature.id}
										className="px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700 flex items-center gap-1.5"
										title={feature.description || undefined}
									>
										{feature.icon && <span>{feature.icon}</span>}
										{feature.title}
									</div>
								))}
							</div>
						)}

						{/* Climate & Best Time Info */}
						{(cityDetails.climateType || cityDetails.bestTimeToVisit) && (
							<div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
								{cityDetails.climateType && <span>🌤️ {cityDetails.climateType}</span>}
								{cityDetails.averageTemp && (
									<span>🌡️ Avg: {cityDetails.averageTemp}°C</span>
								)}
								{cityDetails.bestTimeToVisit && (
									<span>📅 {cityDetails.bestTimeToVisit}</span>
								)}
							</div>
						)}
					</div>
				</div>
			)}

			{/* JSON-LD Structured Data for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BreadcrumbList',
						'itemListElement': [
							{
								'@type': 'ListItem',
								'position': 1,
								'name': 'Home',
								'item': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://paddlx.com'}`,
							},
							{
								'@type': 'ListItem',
								'position': 2,
								'name': court.city,
								'item': `${
									process.env.NEXT_PUBLIC_SITE_URL || 'https://paddlx.com'
								}/city/${cityDetails?.slug || encodeURIComponent(court.city)}`,
							},
							{
								'@type': 'ListItem',
								'position': 3,
								'name': court.name,
								'item': `${
									process.env.NEXT_PUBLIC_SITE_URL || 'https://paddlx.com'
								}/court/${court.slug || court.id}`,
							},
						],
					}),
				}}
			/>
		</>
	);
}
