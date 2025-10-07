// src/app/city/[location]/_components/CityContent.tsx

import Link from 'next/link';
import dynamic from 'next/dynamic';
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
import {
	CityFeature,
	CityPageProps,
	Court,
	getCityDataEnhanced,
} from '../page';
import Image from 'next/image';
import InfoCard from './InfoCard';
import CityFeatureCard from './CityFeatureCard';
import MapPreview from './MapPreview';

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

				{/* Bottom Wave */}
				<div className="absolute bottom-0 left-0 right-0">
					<svg
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
						className="w-full h-16 md:h-20"
					>
						<path
							d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
							opacity=".25"
							className="fill-cool-gray"
						></path>
						<path
							d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
							opacity=".5"
							className="fill-cool-gray"
						></path>
						<path
							d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
							className="fill-cool-gray"
						></path>
					</svg>
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
								<MapPreview
									latitude={cityData.latitude}
									longitude={cityData.longitude}
									cityName={cityData.name}
								/>
							</div>
						</div>

						{/* Geographic Info Grid */}
						<div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
							<h4 className="text-xl font-bold text-dark-slate mb-6 flex items-center gap-2">
								<MapIcon className="w-5 h-5 text-primary" />
								Geographic Details
							</h4>
							<div className="grid md:grid-cols-2 gap-4">
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
							<div className="bg-gradient-to-br from-white to-primary-ultra-soft rounded-2xl shadow-xl p-6 border border-primary/10 hover:shadow-2xl transition-all duration-300">
								<div className="flex items-center gap-3 mb-4">
									<div className="bg-primary p-2.5 rounded-lg">
										<Calendar className="w-5 h-5 text-white" />
									</div>
									<h4 className="font-bold text-dark-slate text-lg">
										Best Months to Play
									</h4>
								</div>
								<div className="flex flex-wrap gap-2">
									{cityData.bestPlayMonths.map((month: string) => (
										<span
											key={month}
											className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
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
						<div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 hover:shadow-2xl transition-all duration-300">
							<div className="flex items-center gap-3 mb-4">
								<div className="bg-info-soft p-2.5 rounded-lg">
									<Award className="w-5 h-5 text-info" />
								</div>
								<h4 className="font-bold text-dark-slate text-lg">Data Information</h4>
							</div>
							<div className="space-y-3">
								<div className="flex justify-between items-center p-3 bg-cool-gray rounded-lg">
									<span className="text-slate-gray text-sm font-medium">Quality:</span>
									<span
										className={`font-semibold text-sm px-3 py-1 rounded-full ${
											cityData.dataQuality === 'VERIFIED'
												? 'bg-green/20 text-green'
												: cityData.dataQuality === 'COMPLETE'
												? 'bg-info/20 text-info'
												: 'bg-slate-200 text-slate-gray'
										}`}
									>
										{cityData.dataQuality}
									</span>
								</div>
								{cityData.externalDataSource && (
									<div className="flex justify-between items-center p-3 bg-cool-gray rounded-lg">
										<span className="text-slate-gray text-sm font-medium">Source:</span>
										<span className="font-medium text-dark-slate text-sm">
											{cityData.externalDataSource}
										</span>
									</div>
								)}
								{cityData.lastStatsUpdate && (
									<div className="flex justify-between items-center p-3 bg-cool-gray rounded-lg">
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
					<div className="mb-12">
						<div className="text-center mb-8">
							<h3 className="text-4xl font-bold text-dark-slate mb-3">
								What Makes {cityData.name} Special
							</h3>
							<p className="text-slate-gray text-lg">
								Discover the unique features of this pickleball destination
							</p>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{cityData.features
								.sort((a: CityFeature, b: CityFeature) => b.priority - a.priority)
								.map((feature: CityFeature) => (
									<CityFeatureCard key={feature.id} feature={feature} />
								))}
						</div>
					</div>
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
