import {
	CalendarDays,
	Globe,
	MapPin,
	Star,
	Thermometer,
	Users,
	Waves,
} from 'lucide-react';
import React from 'react';
import { CityInfo } from '../types';

type Props = {
	cityInfo: CityInfo;
};

const CityCard = ({ cityInfo }: Props) => {
	return (
		<div className="mb-12">
			{!cityInfo?.name ? (
				<div className="animate-pulse">
					<div className="h-80 bg-gray-200 rounded-2xl mb-6"></div>
				</div>
			) : (
				<div className="space-y-4">
					{/* Compact Header Image */}
					{cityInfo.coverImageUrl || cityInfo.imageUrl ? (
						<div className="relative w-full h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl">
							<img
								src={cityInfo.coverImageUrl || cityInfo.imageUrl}
								alt={cityInfo.name}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

							{/* Compact Overlay Content */}
							<div className="absolute inset-0 flex flex-col justify-between p-6">
								{/* Top - Country Badge */}
								{cityInfo.country && (
									<div className="flex justify-end">
										<div className="backdrop-blur-md bg-white/20 px-3 py-1.5 rounded-full border border-white/30 flex items-center gap-2">
											<Globe className="w-4 h-4 text-white" />
											<span className="text-white font-medium text-sm">
												{cityInfo.country}
											</span>
										</div>
									</div>
								)}

								{/* Bottom - City Name & Quick Stats */}
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<MapPin className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
										<h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
											{cityInfo.name}
										</h1>
									</div>

									{/* Inline Stats */}
									<div className="flex flex-wrap gap-2">
										{typeof cityInfo.population === 'number' && (
											<div className="backdrop-blur-md bg-white/15 px-3 py-1.5 rounded-lg border border-white/30 flex items-center gap-2">
												<Users className="w-4 h-4 text-white" />
												<span className="text-white text-sm font-semibold">
													{cityInfo.population.toLocaleString()}
												</span>
											</div>
										)}
										{typeof cityInfo.averageTemp === 'number' && (
											<div className="backdrop-blur-md bg-white/15 px-3 py-1.5 rounded-lg border border-white/30 flex items-center gap-2">
												<Thermometer className="w-4 h-4 text-white" />
												<span className="text-white text-sm font-semibold">
													{cityInfo.averageTemp}°C
												</span>
											</div>
										)}
										{cityInfo.bestTimeToVisit && (
											<div className="backdrop-blur-md bg-white/15 px-3 py-1.5 rounded-lg border border-white/30 flex items-center gap-2">
												<CalendarDays className="w-4 h-4 text-white" />
												<span className="text-white text-sm font-semibold">
													{cityInfo.bestTimeToVisit}
												</span>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					) : (
						/* Fallback for no image */
						<div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-8 shadow-xl">
							<div className="space-y-3">
								<div className="flex items-center gap-3">
									<MapPin className="w-10 h-10 text-white" />
									<h1 className="text-5xl font-bold text-white">{cityInfo.name}</h1>
								</div>
								{cityInfo.country && (
									<div className="flex items-center gap-2 text-white/90">
										<Globe className="w-5 h-5" />
										<span className="text-xl font-medium">{cityInfo.country}</span>
									</div>
								)}
							</div>
						</div>
					)}

					{/* Description - Outside Image */}
					{cityInfo.description && (
						<div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
							<p className="text-gray-700 text-base md:text-lg leading-relaxed">
								{cityInfo.description}
							</p>
						</div>
					)}

					{/* Community & Playing Info Cards */}
					{(cityInfo.communityVibe || cityInfo.playingConditions) && (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{cityInfo.communityVibe && (
								<div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200 shadow-sm">
									<div className="flex items-center gap-3 mb-2">
										<div className="bg-teal-500 p-2 rounded-lg">
											<Star className="w-5 h-5 text-white" />
										</div>
										<h3 className="text-teal-900 font-semibold text-sm uppercase tracking-wide">
											Community Vibe
										</h3>
									</div>
									<p className="text-teal-800 text-base font-medium">
										{cityInfo.communityVibe}
									</p>
								</div>
							)}
							{cityInfo.playingConditions && (
								<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200 shadow-sm">
									<div className="flex items-center gap-3 mb-2">
										<div className="bg-blue-500 p-2 rounded-lg">
											<Waves className="w-5 h-5 text-white" />
										</div>
										<h3 className="text-blue-900 font-semibold text-sm uppercase tracking-wide">
											Playing Conditions
										</h3>
									</div>
									<p className="text-blue-800 text-base font-medium">
										{cityInfo.playingConditions}
									</p>
								</div>
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default CityCard;
