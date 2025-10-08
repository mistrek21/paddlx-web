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
} from 'lucide-react';
import CourtCard from './CourtCard';
import { CityFeature, CityPageProps, Court } from '../page';
import Image from 'next/image';
import InfoCard from './InfoCard';
import CityFeatureCard from './CityFeatureCard';
import { getCityDataEnhanced } from './fetch/fetch';
import MapPreviewWrapper from './MapPreviewWrapper';

async function CityContent({ params, searchParams }: CityPageProps) {
	const { location } = await params;
	const { country } = await searchParams;

	const decodedLocation = decodeURIComponent(location);
	const cityData = await getCityDataEnhanced(decodedLocation, country);

	return (
		<div className="min-h-screen bg-gradient-to-b from-cool-gray via-slate-50 to-cool-gray">
			{/* Enhanced Hero Section with Overlay Gradient */}
			<div className="relative h-[32rem] overflow-hidden">
				{(cityData.coverImageUrl || cityData.imageUrl) && (
					<Image
						src={cityData.coverImageUrl || cityData.imageUrl!}
						fill
						alt={`${cityData.name} banner`}
						className="object-cover"
						style={{ opacity: 0.3 }}
						priority
					/>
				)}
				<div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-dark-slate opacity-90" />

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
							{cityData.totalFacilities > 0 && (
								<div className="flex items-center gap-2 text-white/90">
									<div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
										<Navigation className="w-5 h-5" />
									</div>
									<div>
										<div className="text-2xl font-bold">{cityData.totalFacilities}</div>
										<div className="text-sm text-white/70">Facilities</div>
									</div>
								</div>
							)}
							{cityData.averageRating && (
								<div className="flex items-center gap-2 text-white/90">
									<div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
										<Award className="w-5 h-5" />
									</div>
									<div>
										<div className="text-2xl font-bold">
											{cityData.averageRating.toFixed(1)}
										</div>
										<div className="text-sm text-white/70">Avg Rating</div>
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

							{/* Interactive Map Preview */}
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
									<MapIcon className="w-6 h-6 text-primary" />
								</span>
								<h4 className="text-2xl font-bold text-slate-900">
									Geographic Details
								</h4>
							</div>
							{/* Accent bar / divider */}
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
								{cityData.elevation && (
									<InfoCard
										icon={MapPin}
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
										icon={Thermometer}
										label="Climate"
										value={cityData.climateType}
										color="orange"
									/>
								)}
							</div>
						</div>

						{/* Demographics Card */}
						{(cityData.population || cityData.areaKm2) && (
							<div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
								<h4 className="text-xl font-bold text-dark-slate mb-6 flex items-center gap-2">
									<Users className="w-5 h-5 text-primary" />
									City Demographics
								</h4>
								<div className="grid md:grid-cols-2 gap-4">
									{cityData.population && (
										<InfoCard
											icon={Users}
											label="Population"
											value={cityData.population.toLocaleString()}
											color="blue"
										/>
									)}
									{cityData.areaKm2 && (
										<InfoCard
											icon={MapIcon}
											label="Area"
											value={`${cityData.areaKm2} km²`}
											color="green"
										/>
									)}
								</div>
							</div>
						)}
					</div>

					{/* Right Sidebar */}
					<div className="space-y-6">
						{/* Best Play Months */}
						{cityData.bestPlayMonths && cityData.bestPlayMonths.length > 0 && (
							<div className="bg-background rounded-2xl shadow-lg border border-cool-gray p-7 hover:shadow-2xl transition-all duration-300">
								{/* Header Row */}
								<div className="flex items-center gap-4 mb-5">
									<div className="rounded-xl bg-primary p-3 shadow">
										<Calendar className="w-6 h-6 text-white" />
									</div>
									<h4 className="font-bold text-xl text-dark-slate">
										Best Months to Play
									</h4>
								</div>
								{/* Accent divider */}
								<div className="h-1 w-11 bg-primary-super-soft rounded-full mb-2" />
								{/* Month Pills */}
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
						{(cityData.averageSessionPrice || cityData.averageCourtRental) && (
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
												{cityData.currencyUsed} {cityData.averageSessionPrice}
											</span>
										</div>
									)}
									{cityData.averageCourtRental && (
										<div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
											<span className="text-slate-gray font-medium">Court Rental:</span>
											<span className="font-bold text-dark-slate text-lg">
												{cityData.currencyUsed} {cityData.averageCourtRental}
											</span>
										</div>
									)}
								</div>
							</div>
						)}

						{/* Data Quality */}
						<div
							className="bg-background rounded-2xl shadow-lg border border-cool-gray backdrop-blur-md p-8 
    hover:shadow-2xl transition-all duration-300 max-w-xl mx-auto relative"
						>
							{/* Header Row */}
							<div className="flex items-center gap-4 mb-6">
								<span className="rounded-xl bg-primary-ultra-soft p-3 shadow">
									<Award className="w-6 h-6 text-primary" />
								</span>
								<h4 className="font-bold text-2xl text-dark-slate">Data Information</h4>
							</div>
							{/* Accent Bar */}
							<div className="h-1 w-12 bg-primary-super-soft rounded-full mb-3" />

							{/* Meta Info Grid */}
							<div className="space-y-4">
								{/* Data Quality Row */}
								<div className="flex justify-between items-center p-3 rounded-lg bg-cool-gray border border-border shadow-sm">
									<span className="text-slate-gray text-sm font-medium">Quality:</span>
									<span
										className={`font-semibold text-sm px-3 py-1 rounded-full
                    ${
																					cityData.dataQuality === 'VERIFIED'
																						? 'bg-success-light text-success border border-success/30'
																						: cityData.dataQuality === 'COMPLETE'
																						? 'bg-primary-ultra-soft text-primary-dark border border-primary/30'
																						: 'bg-light-gray-2 text-slate-gray border border-border'
																				}`}
									>
										{cityData.dataQuality}
									</span>
								</div>
								{/* External Source Row */}
								{cityData.externalDataSource && (
									<div className="flex justify-between items-center p-3 rounded-lg bg-cool-gray border border-border shadow-sm">
										<span className="text-slate-gray text-sm font-medium">Source:</span>
										<span className="font-medium text-dark-slate text-sm">
											{cityData.externalDataSource}
										</span>
									</div>
								)}
								{/* Last Update Row */}
								{cityData.lastStatsUpdate && (
									<div className="flex justify-between items-center p-3 rounded-lg bg-cool-gray border border-border shadow-sm">
										<span className="text-slate-gray text-sm font-medium">Updated:</span>
										<span className="font-medium text-dark-slate text-sm">
											{new Date(cityData.lastStatsUpdate).toLocaleDateString()}
										</span>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* City Features */}
				{cityData.features.length > 0 && (
					<section className="mb-16">
						{/* Enhanced Header */}
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

						{/* Enhanced Grid */}
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
							className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
						>
							View All ({cityData.totalCourts})
							<Navigation className="w-5 h-5" />
						</Link>
					</div>

					{cityData.courts.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{cityData.courts.slice(0, 6).map((court: Court) => (
								<CourtCard key={court.id} court={court} />
							))}
						</div>
					) : (
						<div className="text-center py-20 bg-gradient-to-br from-white to-cool-gray rounded-2xl shadow-xl border border-slate-100">
							<div className="bg-primary-ultra-soft w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
								<MapPin className="w-12 h-12 text-primary" />
							</div>
							<h3 className="text-2xl font-bold text-dark-slate mb-3">
								No courts found
							</h3>
							<p className="text-slate-gray text-lg">
								Check back soon for new courts in {cityData.name}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default CityContent;
