// src/app/city/[location]/_components/CityFeatureCard.tsx

import React from 'react';
import {
	MapPin,
	Users,
	Calendar,
	Award,
	Zap,
	Heart,
	Star,
	Clock,
	Shield,
	Sparkles,
} from 'lucide-react';
import { CityFeature } from '../page';

// Icon mapping for different feature types
const getFeatureIcon = (title: string) => {
	const titleLower = title.toLowerCase();

	if (titleLower.includes('court') || titleLower.includes('facility'))
		return MapPin;
	if (titleLower.includes('community') || titleLower.includes('player'))
		return Users;
	if (titleLower.includes('tournament') || titleLower.includes('event'))
		return Calendar;
	if (titleLower.includes('award') || titleLower.includes('championship'))
		return Award;
	if (titleLower.includes('climate') || titleLower.includes('weather'))
		return Zap;
	if (titleLower.includes('popular') || titleLower.includes('favorite'))
		return Heart;
	if (titleLower.includes('rating') || titleLower.includes('quality'))
		return Star;
	if (titleLower.includes('hours') || titleLower.includes('time')) return Clock;
	if (titleLower.includes('safety') || titleLower.includes('secure'))
		return Shield;

	return Sparkles; // Default icon
};

// Color themes for variety
const colorThemes = [
	{
		card: 'from-blue-50 to-slate-50 border-blue-100',
		icon: 'bg-blue-500',
		accent: 'text-blue-700',
		hover: 'hover:shadow-blue-200/50',
	},
	{
		card: 'from-emerald-50 to-slate-50 border-emerald-100',
		icon: 'bg-emerald-500',
		accent: 'text-emerald-700',
		hover: 'hover:shadow-emerald-200/50',
	},
	{
		card: 'from-orange-50 to-slate-50 border-orange-100',
		icon: 'bg-orange-500',
		accent: 'text-orange-700',
		hover: 'hover:shadow-orange-200/50',
	},
	{
		card: 'from-purple-50 to-slate-50 border-purple-100',
		icon: 'bg-purple-500',
		accent: 'text-purple-700',
		hover: 'hover:shadow-purple-200/50',
	},
	{
		card: 'from-pink-50 to-slate-50 border-pink-100',
		icon: 'bg-pink-500',
		accent: 'text-pink-700',
		hover: 'hover:shadow-pink-200/50',
	},
	{
		card: 'from-teal-50 to-slate-50 border-teal-100',
		icon: 'bg-teal-500',
		accent: 'text-teal-700',
		hover: 'hover:shadow-teal-200/50',
	},
];

interface CityFeatureCardProps {
	feature: CityFeature;
	index: number;
}

function CityFeatureCard({ feature, index }: CityFeatureCardProps) {
	const IconComponent = getFeatureIcon(feature.title);
	const theme = colorThemes[index % colorThemes.length];

	return (
		<div
			className={`
                group relative overflow-hidden rounded-2xl border shadow-lg
                bg-gradient-to-br ${theme.card} ${theme.hover}
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                cursor-pointer
            `}
			style={{
				animation: `cardSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${
					index * 0.1
				}s both`,
			}}
		>
			{/* Subtle gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none" />

			{/* Content */}
			<div className="relative p-6 flex flex-col h-full">
				{/* Icon Header */}
				<div className="flex items-center gap-4 mb-4">
					<div
						className={`
                        flex items-center justify-center w-12 h-12 rounded-xl
                        ${theme.icon} shadow-lg ring-2 ring-white/50
                        group-hover:scale-110 transition-transform duration-300
                    `}
					>
						<IconComponent className="w-6 h-6 text-white" strokeWidth={2.5} />
					</div>
					<div className="flex-1">
						<h4 className={`font-bold text-lg ${theme.accent} leading-tight`}>
							{feature.title}
						</h4>
						{feature.priority > 8 && (
							<span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mt-1">
								<Star className="w-3 h-3" />
								Featured
							</span>
						)}
					</div>
				</div>

				{/* Description */}
				{feature.description && (
					<p className="text-slate-600 text-sm leading-relaxed font-medium flex-1">
						{feature.description}
					</p>
				)}

				{/* Bottom accent line */}
				<div
					className={`w-full h-1 ${theme.icon} opacity-20 rounded-full mt-4 
                    group-hover:opacity-40 transition-opacity duration-300`}
				/>
			</div>

			{/* Shine effect on hover */}
			<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
			</div>
		</div>
	);
}

export default CityFeatureCard;
