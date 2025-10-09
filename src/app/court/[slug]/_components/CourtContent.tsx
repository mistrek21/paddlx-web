// /src/app/court/[slug]/_components/CourtContent.tsx

'use client';

import {
	Calendar,
	Clock,
	MapPin,
	Navigation,
	Phone,
	Star,
	Check,
	ChevronDown,
	ChevronUp,
	Sparkles,
} from 'lucide-react';
import { CourtDetail } from '../page';
import Link from 'next/link';
import { useState } from 'react';

const DAYS_ORDER = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

// Category display configuration with your brand colors
const CATEGORY_CONFIG: Record<
	string,
	{ icon: string; title: string; color: string }
> = {
	playingAreas: {
		icon: '🎾',
		title: 'Playing Areas',
		color: 'from-primary-ultra-soft to-primary-super-soft border-primary-soft',
	},
	accessibility: {
		icon: '♿',
		title: 'Accessibility',
		color: 'from-green-50 to-green-100 border-green',
	},
	foodAndBeverage: {
		icon: '🍽️',
		title: 'Food & Beverage',
		color: 'from-sunset/10 to-sunset/20 border-sunset',
	},
	healthAndWellness: {
		icon: '💪',
		title: 'Health & Wellness',
		color: 'from-lavender/10 to-light-lavender border-lavender',
	},
	socialAndCommunity: {
		icon: '👥',
		title: 'Social & Community',
		color: 'from-rose/10 to-rose/20 border-rose',
	},
	retailAndProServices: {
		icon: '🛍️',
		title: 'Retail & Pro Services',
		color: 'from-gold/10 to-gold/20 border-gold',
	},
	operationalAndSupport: {
		icon: '⚙️',
		title: 'Operational & Support',
		color: 'from-cool-gray to-warm-gray-100 border-medium-gray',
	},
	workAndFamilyServices: {
		icon: '👨‍👩‍👧‍👦',
		title: 'Work & Family Services',
		color: 'from-mint/10 to-mint/20 border-mint',
	},
	trainingAndDevelopment: {
		icon: '📚',
		title: 'Training & Development',
		color: 'from-ocean/10 to-primary-light/20 border-ocean',
	},
	playerComfortAndConvenience: {
		icon: '🛋️',
		title: 'Player Comfort & Convenience',
		color: 'from-cream to-light-blue-4 border-primary-light',
	},
	sustainabilityAndEnvironment: {
		icon: '🌱',
		title: 'Sustainability & Environment',
		color: 'from-sage/10 to-sage/20 border-sage',
	},
};

// Convert camelCase to Title Case with spaces
function formatAmenityName(key: string): string {
	return key
		.replace(/([A-Z])/g, ' $1')
		.replace(/^./, (str) => str.toUpperCase())
		.trim();
}

// Component to display a category of amenities - STARTS COLLAPSED
function AmenityCategory({
	categoryKey,
	amenities,
}: {
	categoryKey: string;
	amenities: Record<string, boolean>;
}) {
	const [isExpanded, setIsExpanded] = useState(false);
	const config = CATEGORY_CONFIG[categoryKey] || {
		icon: '✨',
		title: formatAmenityName(categoryKey),
		color: 'from-light-blue-3 to-light-blue-1 border-primary-soft',
	};

	// Filter only true amenities
	const availableAmenities = Object.entries(amenities).filter(
		([_, value]) => value === true
	);

	if (availableAmenities.length === 0) return null;

	return (
		<div className="mb-3">
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className={`w-full flex items-center justify-between p-3 rounded-lg bg-gradient-to-r ${config.color} border hover:shadow-md transition-all`}
			>
				<div className="flex items-center gap-2.5">
					<span className="text-xl">{config.icon}</span>
					<h4 className="font-semibold text-dark-slate">{config.title}</h4>
					<span className="text-xs text-slate-gray bg-white px-2 py-0.5 rounded-full font-medium">
						{availableAmenities.length}
					</span>
				</div>
				{isExpanded ? (
					<ChevronUp className="w-4 h-4 text-slate-gray" />
				) : (
					<ChevronDown className="w-4 h-4 text-slate-gray" />
				)}
			</button>

			{isExpanded && (
				<div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 pl-2">
					{availableAmenities.map(([amenityKey]) => (
						<div
							key={amenityKey}
							className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-border hover:border-primary hover:shadow-sm transition-all"
						>
							<Check className="w-3.5 h-3.5 text-green flex-shrink-0" />
							<span className="text-sm text-light-slate">
								{formatAmenityName(amenityKey)}
							</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

function parseOperatingHours(hours: any) {
	if (!hours) return null;

	if (typeof hours === 'string') {
		try {
			hours = JSON.parse(hours);
		} catch (e) {
			return null;
		}
	}

	if (typeof hours !== 'object' || hours === null) {
		return null;
	}

	if (hours.operatingHours && typeof hours.operatingHours === 'object') {
		hours = hours.operatingHours;
	}

	const hasDays = DAYS_ORDER.some((day) => hours.hasOwnProperty(day));
	if (!hasDays) {
		return null;
	}

	return hours;
}

export default function CourtContent({ court }: { court: CourtDetail }) {
	const [showAmenities, setShowAmenities] = useState(false);

	const operatingHours = parseOperatingHours(court.hours);

	// Parse amenities structure
	let amenitiesData: any = null;
	let isStructuredAmenities = false;

	if (court.amenities) {
		if (typeof court.amenities === 'object' && !Array.isArray(court.amenities)) {
			const amenitiesRecord = court.amenities as Record<string, any>;

			if ('pickleballClubFacilities' in amenitiesRecord) {
				amenitiesData = amenitiesRecord.pickleballClubFacilities;
				isStructuredAmenities = true;
			} else if (
				Object.keys(amenitiesRecord).some(
					(key) => typeof amenitiesRecord[key] === 'object'
				)
			) {
				amenitiesData = amenitiesRecord;
				isStructuredAmenities = true;
			}
		}
	}

	// Get current day for highlighting
	const currentDay =
		DAYS_ORDER[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1];

	// Count total amenities
	const totalAmenities =
		isStructuredAmenities && amenitiesData
			? Object.values(amenitiesData).reduce((total: number, category: any) => {
					return total + Object.values(category).filter((v) => v === true).length;
			  }, 0)
			: Array.isArray(court.amenities)
			? court.amenities.length
			: 0;

	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
			<div className="p-6">
				{/* Header Section */}
				<div className="flex items-start justify-between mb-6">
					<div className="flex-1">
						<h1 className="text-4xl font-bold text-dark-slate mb-2">{court.name}</h1>
						{court.rating && court.totalReviews && court.totalReviews > 0 && (
							<div className="flex items-center gap-2">
								<div className="flex items-center">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`w-5 h-5 ${
												i < Math.floor(court.rating!)
													? 'text-gold fill-gold'
													: 'text-light-gray'
											}`}
										/>
									))}
								</div>
								<span className="text-slate-gray">
									{court.rating.toFixed(1)} ({court.totalReviews} reviews)
								</span>
							</div>
						)}
					</div>
					{court.pricePerHour && (
						<div className="text-right">
							<p className="text-3xl font-bold text-primary">${court.pricePerHour}</p>
							<p className="text-sm text-slate-gray">per hour</p>
						</div>
					)}
				</div>

				{/* Description */}
				{court.description && (
					<p className="text-slate-gray leading-relaxed mb-8">{court.description}</p>
				)}

				{/* Main Content Grid */}
				<div className="grid md:grid-cols-2 gap-8 mb-8">
					{/* Left Column - Contact & Hours */}
					<div className="space-y-6">
						<h3 className="text-xl font-bold text-dark-slate mb-4">
							Court Information
						</h3>

						{/* Address */}
						<div className="flex items-start gap-3">
							<MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
							<div>
								<p className="font-semibold text-dark-slate">Location</p>
								<p className="text-slate-gray">{court.address}</p>
								<p className="text-sm text-medium-gray">
									{court.city}, {court.country}
								</p>
							</div>
						</div>

						{/* Phone */}
						{court.phone && (
							<div className="flex items-start gap-3">
								<Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
								<div>
									<p className="font-semibold text-dark-slate">Phone</p>
									<a
										href={`tel:${court.phone}`}
										className="text-primary hover:text-primary-dark transition-colors"
									>
										{court.phone}
									</a>
								</div>
							</div>
						)}

						{/* Operating Hours - ALWAYS SHOWN */}
						{operatingHours && (
							<div className="flex items-start gap-3">
								<Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
								<div className="flex-1">
									<p className="font-semibold text-dark-slate mb-3">Operating Hours</p>
									<div className="bg-light-blue-3 rounded-lg p-4 border border-primary-super-soft">
										<div className="space-y-2">
											{DAYS_ORDER.map((day) => {
												const dayHours = operatingHours[day];
												const hasHours =
													dayHours && Array.isArray(dayHours) && dayHours.length > 0;
												const isToday = day === currentDay;

												return (
													<div
														key={day}
														className={`flex justify-between items-center py-1 ${
															isToday ? 'bg-primary/5 -mx-2 px-2 rounded' : ''
														}`}
													>
														<span
															className={`font-medium ${
																hasHours ? 'text-light-slate' : 'text-light-gray'
															} ${isToday ? 'text-primary font-semibold' : ''}`}
														>
															{day}
															{isToday && <span className="ml-2 text-xs">(Today)</span>}
														</span>
														<div className="text-right">
															{hasHours ? (
																<div className="flex flex-col gap-1">
																	{dayHours.map(
																		(slot: { open: string; close: string }, i: number) => (
																			<span
																				key={i}
																				className="text-sm font-mono bg-primary-ultra-soft text-primary-dark px-3 py-1 rounded-md"
																			>
																				{slot.open} - {slot.close}
																			</span>
																		)
																	)}
																</div>
															) : (
																<span className="text-sm italic text-light-gray">Closed</span>
															)}
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Right Column - Amenities - COLLAPSIBLE */}
					{totalAmenities > 0 && (
						<div>
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-xl font-bold text-dark-slate flex items-center gap-2">
									<Sparkles className="w-5 h-5 text-primary" />
									Amenities & Facilities
								</h3>
								<button
									onClick={() => setShowAmenities(!showAmenities)}
									className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-semibold text-sm transition-all"
								>
									<span>{totalAmenities} Total</span>
									{showAmenities ? (
										<ChevronUp className="w-4 h-4" />
									) : (
										<ChevronDown className="w-4 h-4" />
									)}
								</button>
							</div>

							{showAmenities && (
								<div className="space-y-3 max-h-96 overflow-y-auto pr-2">
									{isStructuredAmenities && amenitiesData ? (
										Object.entries(amenitiesData).map(([categoryKey, amenities]) => (
											<AmenityCategory
												key={categoryKey}
												categoryKey={categoryKey}
												amenities={amenities as Record<string, boolean>}
											/>
										))
									) : Array.isArray(court.amenities) && court.amenities.length > 0 ? (
										<div className="grid grid-cols-2 gap-3">
											{court.amenities.map((amenity, index) => (
												<div
													key={index}
													className="flex items-center gap-2 px-4 py-3 bg-gradient-to-br from-primary-ultra-soft to-light-blue-1 border border-primary-super-soft rounded-lg hover:shadow-md transition-shadow"
												>
													<div className="w-2 h-2 bg-primary rounded-full"></div>
													<span className="text-light-slate font-medium text-sm">
														{amenity}
													</span>
												</div>
											))}
										</div>
									) : null}
								</div>
							)}
						</div>
					)}
				</div>

				{/* Action Buttons */}
				<div className="flex gap-4 pt-6 border-t border-border">
					<Link
						href={`/book/${court.slug || court.id}`}
						className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
					>
						<Calendar className="w-5 h-5" />
						Book a Court
					</Link>
					<a
						href={
							court.latitude && court.longitude
								? `https://www.google.com/maps/dir/?api=1&destination=${court.latitude},${court.longitude}`
								: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
										court.address
								  )}`
						}
						target="_blank"
						rel="noopener noreferrer"
						className="px-8 py-4 border-2 border-divider hover:border-primary text-light-slate hover:text-primary font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 hover:shadow-md"
					>
						<Navigation className="w-5 h-5" />
						Get Directions
					</a>
				</div>
			</div>
		</div>
	);
}
