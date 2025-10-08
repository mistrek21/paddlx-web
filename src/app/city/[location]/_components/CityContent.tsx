// src/app/city/[location]/_components/CityContent.tsx
import Link from 'next/link';
import CityStats from './CityStats';
import {
	Clock,
	MapIcon,
	MapPin,
	Navigation,
	Thermometer,
	TrendingUp,
	Users,
	Calendar,
	DollarSign,
	Award,
	Compass,
	Sun,
	CloudRain,
	Activity,
	Target,
	Sparkles,
	Flag,
	Image as ImageIcon,
	Globe,
	Mountain,
} from 'lucide-react';
import CourtCard from './CourtCard';
import { CityFeature, CityPageProps, Court } from '../page';
import Image from 'next/image';
import InfoCard from './InfoCard';
import CityFeatureCard from './CityFeatureCard';
import { getCityDataEnhanced } from './fetch/fetch';
import MapPreviewWrapper from './MapPreviewWrapper';
import WeatherCard from './WeatherCard';
import { Suspense } from 'react';
import CourtsSectionSkeleton from './CourtsSectionSkeleton';
import CourtsSection from './CourtsSection';

async function CityContent({ params, searchParams }: CityPageProps) {
	const { location } = await params;
	const { country } = await searchParams;
	const decodedLocation = decodeURIComponent(location);
	const cityData = await getCityDataEnhanced(decodedLocation, country);

	console.log('Location:', decodedLocation, 'Country:', country);

	return (
		<div className="min-h-screen bg-gradient-to-b from-cool-gray via-slate-50 to-cool-gray">
			{/* Enhanced Hero Section with Overlay Gradient */}
			<div className="relative h-[32rem] overflow-hidden">
				{(cityData.coverImageUrl || cityData.imageUrl) && (
					<>
						<Image
							src={cityData.coverImageUrl || cityData.imageUrl!}
							fill
							alt={`${cityData.name} banner`}
							className="object-cover"
							priority
						/>
						{/* <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary-dark/70 to-dark-slate/80" /> */}
					</>
				)}
				{!(cityData.coverImageUrl || cityData.imageUrl) && (
					<div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-dark-slate" />
				)}

				{/* Hero Content */}
				<div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
					<div className="max-w-4xl">
						{/* Badges */}
						<div className="flex flex-wrap items-center gap-3 mb-6">
							{cityData.isVerified && (
								<div className="bg-green/20 backdrop-blur-sm border border-green/30 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
									<Award className="w-4 h-4" />
									Verified
								</div>
							)}
							{cityData.isTrendingCity && (
								<div className="bg-accent/20 backdrop-blur-sm border border-accent/30 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
									<TrendingUp className="w-4 h-4" />
									Trending
								</div>
							)}
							{cityData.isPopularDestination && (
								<div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
									<Sparkles className="w-4 h-4" />
									Popular Destination
								</div>
							)}
							{cityData.popularityRank && (
								<div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
									#{cityData.popularityRank} Destination
								</div>
							)}
						</div>

						{/* Title */}
						<h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl leading-tight">
							{cityData.metaTitle || `Pickleball in ${cityData.name}`}
						</h1>

						{/* Subtitle */}
						<p className="text-xl md:text-2xl text-white/95 mb-3 drop-shadow-lg font-medium">
							{cityData.metaDescription ||
								`${cityData.state ? `${cityData.state}, ` : ''}${cityData.country}`}
						</p>

						{/* Community Vibe */}
						{cityData.communityVibe && (
							<p className="text-lg text-white/85 mb-6 drop-shadow-lg italic max-w-2xl">
								"{cityData.communityVibe}"
							</p>
						)}

						{/* Quick Stats Bar */}
						<div className="flex flex-wrap gap-6 mt-8">
							{cityData.totalCourts > 0 && (
								<div className="flex items-center gap-2 text-white/90">
									<div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
										<MapIcon className="w-5 h-5" />
									</div>
									<div>
										<div className="text-2xl font-bold">{cityData.totalCourts}</div>
										<div className="text-sm text-white/70">Courts</div>
									</div>
								</div>
							)}
							{cityData.totalClubs > 0 && (
								<div className="flex items-center gap-2 text-white/90">
									<div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
										<Navigation className="w-5 h-5" />
									</div>
									<div>
										<div className="text-2xl font-bold">{cityData.totalClubs}</div>
										<div className="text-sm text-white/70">Clubs</div>
									</div>
								</div>
							)}
							{cityData.totalPlayers > 0 && (
								<div className="flex items-center gap-2 text-white/90">
									<div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
										<Users className="w-5 h-5" />
									</div>
									<div>
										<div className="text-2xl font-bold">{cityData.totalPlayers}</div>
										<div className="text-sm text-white/70">Players</div>
									</div>
								</div>
							)}
							{cityData.activityScore > 0 && (
								<div className="flex items-center gap-2 text-white/90">
									<div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
										<Activity className="w-5 h-5" />
									</div>
									<div>
										<div className="text-2xl font-bold">
											{cityData.activityScore.toFixed(1)}
										</div>
										<div className="text-sm text-white/70">Activity Score</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 -mt-12 relative z-10">
				{/* Enhanced Stats Cards */}
				<div className="mb-12">
					<CityStats data={cityData} />
				</div>

				{/* Main Content Grid */}
				<div className="grid lg:grid-cols-3 gap-8 mb-12">
					{/* Left Column - Main Description */}
					<div className="lg:col-span-2 space-y-6">
						{/* About Section */}
						<div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
							<div className="flex items-center gap-3 mb-6">
								<div className="bg-primary-ultra-soft p-3 rounded-xl">
									<MapPin className="w-6 h-6 text-primary" />
								</div>
								<h3 className="text-3xl font-bold text-dark-slate">
									About Pickleball in {cityData.name}
								</h3>
							</div>
							<div className="prose prose-lg max-w-none text-slate-gray leading-relaxed">
								{cityData.description ||
									`${cityData.name} is home to a vibrant pickleball community with excellent facilities and year-round playing opportunities.`}
							</div>
						</div>

						{/* Playing Conditions Card */}
						{cityData.playingConditions && (
							<div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
								<div className="flex items-center gap-3 mb-4">
									<div className="bg-blue-500 p-3 rounded-xl">
										<Sun className="w-6 h-6 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-dark-slate">
										Playing Conditions
									</h3>
								</div>
								<p className="text-slate-gray text-lg leading-relaxed">
									{cityData.playingConditions}
								</p>
							</div>
						)}

						{/* Best Time to Visit */}
						{cityData.bestTimeToVisit && (
							<div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-6 border border-green-100">
								<div className="flex items-center gap-3 mb-3">
									<div className="bg-green p-2.5 rounded-xl">
										<Calendar className="w-5 h-5 text-white" />
									</div>
									<h4 className="text-xl font-bold text-dark-slate">
										Best Time to Visit
									</h4>
								</div>
								<p className="text-slate-gray text-lg">{cityData.bestTimeToVisit}</p>
							</div>
						)}

						{/* Nearby Attractions */}
						{cityData.nearbyAttractions && cityData.nearbyAttractions.length > 0 ? (
							<section className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-2xl p-8 border border-purple-100 hover:shadow-3xl transition-shadow duration-300">
								<header className="flex items-center gap-4 mb-6">
									<div className="bg-purple-500/10 p-3 rounded-xl flex items-center justify-center">
										<Flag className="w-7 h-7 text-purple-600" />
									</div>
									<div>
										<h3 className="text-2xl font-bold text-dark-slate mb-1">
											Nearby Attractions
										</h3>
										<p className="text-sm text-purple-700 opacity-75">
											Discover places you’ll love around this city
										</p>
									</div>
								</header>
								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
									{cityData.nearbyAttractions.map((attraction: string, idx: number) => (
										<div
											key={idx}
											tabIndex={0}
											className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-purple-100 cursor-pointer transition-all shadow hover:shadow-lg hover:bg-purple-50 focus:ring-2 focus:ring-purple-300 outline-none"
											style={{ animation: `fadeInUp .3s ease ${idx * 0.1 + 0.2}s both` }}
										>
											<span className="bg-purple-100 group-hover:bg-purple-200 transition-colors rounded-lg p-2">
												<Target className="w-6 h-6 text-purple-700" />
											</span>
											<span className="text-dark-slate font-semibold text-base group-hover:text-purple-800 transition-colors">
												{attraction}
											</span>
										</div>
									))}
								</div>
							</section>
						) : (
							<div className="flex flex-col items-center justify-center bg-gradient-to-r from-white to-purple-50 rounded-2xl shadow-xl p-8 border border-purple-100">
								<Flag className="w-10 h-10 mb-4 text-purple-400" />
								<h4 className="text-lg font-bold text-purple-900 mb-1">
									No Attractions Listed
								</h4>
								<p className="text-purple-600 text-sm">
									We don’t have nearby attractions for this city yet.
								</p>
							</div>
						)}

						{/* Location Map Card */}
						<div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
							<div className="p-6 bg-gradient-to-r from-primary-ultra-soft to-slate-50 border-b border-slate-100">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="bg-primary p-3 rounded-xl">
											<Compass className="w-6 h-6 text-white" />
										</div>
										<div>
											<h4 className="text-xl font-bold text-dark-slate">Location</h4>
											<p className="text-sm text-slate-gray">
												{cityData.latitude.toFixed(6)}°N, {cityData.longitude.toFixed(6)}°E
											</p>
										</div>
									</div>
									<Link
										href={`https://www.google.com/maps?q=${cityData.latitude},${cityData.longitude}`}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-sm"
									>
										<Navigation className="w-4 h-4" />
										Open in Maps
									</Link>
								</div>
							</div>
							<div className="h-80 relative">
								<MapPreviewWrapper
									latitude={cityData.latitude}
									longitude={cityData.longitude}
									cityName={cityData.name}
								/>
							</div>
						</div>

						{/* Geographic Info Grid */}
						<div className="bg-white/95 rounded-2xl shadow-lg border border-slate-100 backdrop-blur-xl p-7">
							<div className="flex items-center mb-6 gap-3">
								<span className="rounded-xl bg-slate-100 p-2 shadow">
									<Globe className="w-6 h-6 text-primary" />
								</span>
								<h4 className="text-2xl font-bold text-slate-900">
									Geographic Details
								</h4>
							</div>
							<div className="w-14 h-1 bg-slate-100 mb-4 rounded-full" />
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
								{cityData.timezone && (
									<InfoCard
										icon={Clock}
										label="Timezone"
										value={cityData.timezone}
										color="gray"
									/>
								)}
								{cityData.elevation !== null && cityData.elevation !== undefined && (
									<InfoCard
										icon={Mountain}
										label="Elevation"
										value={`${cityData.elevation}m`}
										color="gray"
									/>
								)}
								{cityData.averageTemp && (
									<InfoCard
										icon={Thermometer}
										label="Avg Temperature"
										value={`${cityData.averageTemp}°C`}
										color="orange"
									/>
								)}
								{cityData.climateType && (
									<InfoCard
										icon={CloudRain}
										label="Climate"
										value={cityData.climateType}
										color="orange"
									/>
								)}
								{cityData.countryCode && (
									<InfoCard
										icon={Flag}
										label="Country Code"
										value={cityData.countryCode}
										color="blue"
									/>
								)}
								{cityData.stateCode && (
									<InfoCard
										icon={MapPin}
										label="State Code"
										value={cityData.stateCode}
										color="blue"
									/>
								)}
							</div>
						</div>

						{/* Demographics Card */}
						{(cityData.population || cityData.areaKm2 || cityData.populationYear) && (
							<div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
								<h4 className="text-xl font-bold text-dark-slate mb-6 flex items-center gap-2">
									<Users className="w-5 h-5 text-primary" />
									City Demographics
								</h4>
								<div className="grid md:grid-cols-2 gap-4">
									{cityData.population && (
										<div className="space-y-1">
											<InfoCard
												icon={Users}
												label="Population"
												value={cityData.population.toLocaleString()}
												color="blue"
											/>
											{cityData.populationYear && (
												<p className="text-xs text-slate-gray text-center">
													as of {cityData.populationYear}
												</p>
											)}
										</div>
									)}
									{cityData.areaKm2 && (
										<InfoCard
											icon={MapIcon}
											label="Area"
											value={`${cityData.areaKm2.toLocaleString()} km²`}
											color="green"
										/>
									)}
								</div>
							</div>
						)}
					</div>

					{/* Right Sidebar */}
					<div className="space-y-6">
						{/* City Images Showcase */}
						{(cityData.thumbnailUrl || cityData.imageUrl) && (
							<div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
								<div className="p-4 bg-gradient-to-r from-primary-ultra-soft to-slate-50 border-b border-slate-100">
									<div className="flex items-center gap-2">
										<ImageIcon className="w-5 h-5 text-primary" />
										<h4 className="font-bold text-dark-slate">City Gallery</h4>
									</div>
								</div>
								{cityData.thumbnailUrl && (
									<div className="relative h-48">
										<Image
											src={cityData.thumbnailUrl}
											fill
											alt={`${cityData.name} thumbnail`}
											className="object-cover"
										/>
									</div>
								)}
							</div>
						)}

						{/* Activity Statistics */}
						{cityData.totalActiveSessions > 0 ||
							cityData.totalCompletedSessions > 0 ||
							cityData.totalActiveTournaments > 0 ||
							(cityData.totalCompletedTournaments > 0 && (
								<div className="bg-gradient-to-br from-primary-ultra-soft to-white rounded-2xl shadow-xl p-6 border border-primary-soft">
									<div className="flex items-center gap-3 mb-6">
										<div className="bg-primary p-2.5 rounded-xl">
											<Activity className="w-5 h-5 text-white" />
										</div>
										<h4 className="font-bold text-dark-slate text-lg">Activity Stats</h4>
									</div>
									<div className="space-y-3">
										{cityData.totalActiveSessions > 0 && (
											<div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
												<span className="text-slate-gray font-medium">
													Active Sessions:
												</span>
												<span className="font-bold text-primary text-lg">
													{cityData.totalActiveSessions}
												</span>
											</div>
										)}
										{cityData.totalCompletedSessions > 0 && (
											<div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
												<span className="text-slate-gray font-medium">
													Completed Sessions:
												</span>
												<span className="font-bold text-dark-slate text-lg">
													{cityData.totalCompletedSessions}
												</span>
											</div>
										)}
										{cityData.totalActiveTournaments > 0 && (
											<div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
												<span className="text-slate-gray font-medium">
													Active Tournaments:
												</span>
												<span className="font-bold text-primary text-lg">
													{cityData.totalActiveTournaments}
												</span>
											</div>
										)}
										{cityData.totalCompletedTournaments > 0 && (
											<div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
												<span className="text-slate-gray font-medium">
													Completed Tournaments:
												</span>
												<span className="font-bold text-dark-slate text-lg">
													{cityData.totalCompletedTournaments}
												</span>
											</div>
										)}
										{cityData.totalCoaches > 0 && (
											<div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
												<span className="text-slate-gray font-medium">Coaches:</span>
												<span className="font-bold text-dark-slate text-lg">
													{cityData.totalCoaches}
												</span>
											</div>
										)}
										{cityData.totalGroups > 0 && (
											<div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
												<span className="text-slate-gray font-medium">Groups:</span>
												<span className="font-bold text-dark-slate text-lg">
													{cityData.totalGroups}
												</span>
											</div>
										)}
									</div>
								</div>
							))}

						{/* Upcoming Events */}
						{(cityData.upcomingSessionsCount > 0 ||
							cityData.upcomingTournamentsCount > 0) && (
							<div className="bg-gradient-to-br from-accent/10 to-white rounded-2xl shadow-xl p-6 border border-accent/20">
								<div className="flex items-center gap-3 mb-4">
									<div className="bg-accent p-2.5 rounded-lg">
										<Calendar className="w-5 h-5 text-white" />
									</div>
									<h4 className="font-bold text-dark-slate text-lg">Upcoming Events</h4>
								</div>
								<div className="space-y-3">
									{cityData.upcomingSessionsCount > 0 && (
										<div className="p-4 bg-white rounded-lg shadow-sm">
											<div className="flex justify-between items-center mb-2">
												<span className="text-slate-gray font-medium">Sessions:</span>
												<span className="font-bold text-accent text-xl">
													{cityData.upcomingSessionsCount}
												</span>
											</div>
											{cityData.nextSessionDate && (
												<p className="text-xs text-slate-gray">
													Next: {new Date(cityData.nextSessionDate).toLocaleDateString()}
												</p>
											)}
										</div>
									)}
									{cityData.upcomingTournamentsCount > 0 && (
										<div className="p-4 bg-white rounded-lg shadow-sm">
											<div className="flex justify-between items-center mb-2">
												<span className="text-slate-gray font-medium">Tournaments:</span>
												<span className="font-bold text-accent text-xl">
													{cityData.upcomingTournamentsCount}
												</span>
											</div>
											{cityData.nextTournamentDate && (
												<p className="text-xs text-slate-gray">
													Next: {new Date(cityData.nextTournamentDate).toLocaleDateString()}
												</p>
											)}
										</div>
									)}
								</div>
							</div>
						)}

						{/* Best Play Months */}
						{cityData.bestPlayMonths && cityData.bestPlayMonths.length > 0 && (
							<div className="bg-background rounded-2xl shadow-lg border border-cool-gray p-7 hover:shadow-2xl transition-all duration-300">
								<div className="flex items-center gap-4 mb-5">
									<div className="rounded-xl bg-primary p-3 shadow">
										<Calendar className="w-6 h-6 text-white" />
									</div>
									<h4 className="font-bold text-xl text-dark-slate">
										Best Months to Play
									</h4>
								</div>
								<div className="h-1 w-11 bg-primary-super-soft rounded-full mb-2" />
								<div className="flex flex-wrap gap-2">
									{cityData.bestPlayMonths.map((month: string) => (
										<span
											key={month}
											className="px-4 py-2 rounded-full bg-primary-ultra-soft border border-primary-soft text-primary-dark font-semibold text-sm shadow transition-all hover:bg-primary-super-soft hover:-translate-y-[2px] hover:shadow-lg"
										>
											{month}
										</span>
									))}
								</div>
							</div>
						)}

						{/* Pricing Info */}
						{cityData.averageSessionPrice || cityData.averageCourtRental ? (
							<div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-6 border border-green-100 hover:shadow-2xl transition-all duration-300">
								<div className="flex items-center gap-3 mb-4">
									<div className="bg-green p-2.5 rounded-lg">
										<DollarSign className="w-5 h-5 text-white" />
									</div>
									<div>
										<h4 className="font-bold text-dark-slate text-lg">Average Pricing</h4>
										<p className="text-xs text-slate-gray">{cityData.currencyUsed}</p>
									</div>
								</div>
								<div className="space-y-3">
									{cityData.averageSessionPrice && (
										<div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
											<span className="text-slate-gray font-medium">Session:</span>
											<span className="font-bold text-dark-slate text-lg">
												{cityData.currencyUsed} {cityData.averageSessionPrice.toFixed(2)}
											</span>
										</div>
									)}
									{cityData.averageCourtRental && (
										<div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
											<span className="text-slate-gray font-medium">Court Rental:</span>
											<span className="font-bold text-dark-slate text-lg">
												{cityData.currencyUsed} {cityData.averageCourtRental.toFixed(2)}
											</span>
										</div>
									)}
								</div>
							</div>
						) : (
							<div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border border-gray-100">
								<div className="flex items-center gap-3 mb-4">
									<div className="bg-gray-400 p-2.5 rounded-lg">
										<DollarSign className="w-5 h-5 text-white" />
									</div>
									<div>
										<h4 className="font-bold text-dark-slate text-lg">Average Pricing</h4>
										<p className="text-xs text-slate-gray">{cityData.currencyUsed}</p>
									</div>
								</div>
								<p className="text-slate-gray text-center py-4">
									Not enough data available yet
								</p>
							</div>
						)}

						{/* SEO Keywords */}
						{cityData.keywords && cityData.keywords.length > 0 && (
							<div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl border border-slate-100 p-6 hover:shadow-2xl transition-shadow duration-300">
								<h4 className="font-bold text-dark-slate mb-4 flex items-center gap-2">
									<div className="bg-primary/10 p-1.5 rounded-lg">
										<Target className="w-5 h-5 text-primary" />
									</div>
									Popular Searches
								</h4>
								<div className="flex flex-wrap gap-2.5">
									{cityData.keywords.map((keyword: string, idx: number) => (
										<span
											key={idx}
											className="group px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm border border-slate-200 cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95"
											tabIndex={0}
											role="button"
											style={{ animation: `fadeInScale 0.3s ease ${idx * 0.05}s both` }}
										>
											{keyword}
										</span>
									))}
								</div>
							</div>
						)}

						{/* Current Weather */}
						<WeatherCard
							latitude={cityData.latitude}
							longitude={cityData.longitude}
							cityName={cityData.name}
						/>

						{/* Has Active Clubs Badge */}
						{cityData.hasActiveClubs && (
							<div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg border border-green-200 p-6 text-center">
								<div className="inline-flex items-center justify-center w-12 h-12 bg-green rounded-full mb-3">
									<Activity className="w-6 h-6 text-white" />
								</div>
								<h4 className="font-bold text-green-900 text-lg mb-1">
									Active Community
								</h4>
								<p className="text-green-700 text-sm">
									This city has verified active pickleball clubs
								</p>
							</div>
						)}
					</div>
				</div>

				{/* City Features */}
				{cityData.features.length > 0 && (
					<section className="mb-16">
						<div className="text-center mb-12">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-50 to-slate-100 shadow-lg mb-4">
								<svg
									className="w-8 h-8 text-teal-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"
									/>
								</svg>
							</div>
							<h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
								What Makes {cityData.name} Special
							</h3>
							<div className="w-20 h-1 bg-blue-100 rounded-full mx-auto mb-4" />
							<p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
								Discover the unique features of this pickleball destination
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{cityData.features
								.sort((a: CityFeature, b: CityFeature) => b.priority - a.priority)
								.map((feature: CityFeature, index: number) => (
									<CityFeatureCard key={feature.id} feature={feature} index={index} />
								))}
						</div>
					</section>
				)}

				{/* Courts Section */}
				<div className="mb-12">
					<div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-primary/20">
						<div>
							<h2 className="text-4xl font-bold text-dark-slate mb-2">
								Courts in {cityData.name}
							</h2>
							<p className="text-slate-gray">Explore the best pickleball facilities</p>
						</div>
						<Link
							href={`/search?location=${encodeURIComponent(decodedLocation)}${
								country ? `&country=${encodeURIComponent(country)}` : ''
							}`}
							className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-primary-dark font-medium text-sm transition-all shadow hover:shadow-md active:scale-95"
						>
							<span>View All</span>
							<Navigation className="w-4 h-4" />
						</Link>
					</div>

					{/* Courts Section with Fresh Data */}

					<Suspense fallback={<CourtsSectionSkeleton />}>
						<CourtsSection cityId={cityData.id} cityName={cityData.name} />
					</Suspense>

					{/* <div>
						<pre>{JSON.stringify(cityData.courts, null, 2)}</pre>
					</div> */}
				</div>

				{/* SEO Schema Section (hidden, for search engines) */}
				{cityData.slug && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								'@context': 'https://schema.org',
								'@type': 'City',
								'name': cityData.name,
								'description': cityData.description,
								'geo': {
									'@type': 'GeoCoordinates',
									'latitude': cityData.latitude,
									'longitude': cityData.longitude,
								},
								...(cityData.population && { population: cityData.population }),
								...(cityData.areaKm2 && { areaServed: `${cityData.areaKm2} km²` }),
								...(cityData.timezone && { timeZone: cityData.timezone }),
								...(cityData.imageUrl && { image: cityData.imageUrl }),
								'url': `https://yoursite.com/city/${cityData.slug}`,
							}),
						}}
					/>
				)}
			</div>
		</div>
	);
}

export default CityContent;
