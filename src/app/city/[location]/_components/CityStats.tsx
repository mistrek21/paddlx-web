// src/app/city/[location]/_components/CityStats.tsx

'use client';

import React from 'react';
import {
	Calendar,
	MapPin,
	TrendingUp,
	Users,
	Award,
	Sparkles,
	ArrowUpRight,
	ArrowDownRight,
	Zap,
} from 'lucide-react';
import { CityData } from '../page';

interface Badge {
	text: string;
	className: string;
	icon?: any;
}

interface StatCardProps {
	icon: any;
	label: string;
	value: string | number;
	subtitle: string;
	accent: string;
	iconBg: string;
	statColor: string;
	bar: string;
	trend?: number;
	badges?: Badge[];
	delay: number;
}

function StatCard({
	icon: Icon,
	label,
	value,
	subtitle,
	accent,
	iconBg,
	statColor,
	bar,
	trend,
	badges = [],
	delay,
}: StatCardProps) {
	return (
		<div
			className={`
                group relative rounded-2xl shadow-lg overflow-hidden flex flex-col select-none 
                bg-gradient-to-br from-white via-slate-50 to-slate-200 
                border border-slate-200/70
                transition-transform duration-400 hover:scale-[1.02]
            `}
			style={{
				animation: `cardEnter 0.6s cubic-bezier(0.53,1.33,0.41,0.95) ${delay}s both`,
				minHeight: 158,
			}}
		>
			<div className={`absolute top-0 left-0 w-full h-1.5 ${bar} opacity-90`} />
			<div className="relative z-10 flex flex-row items-center gap-2 pt-5 px-6">
				{/* Icon bubble */}
				<span
					className={`flex items-center justify-center rounded-xl ${iconBg} shadow ring-1 ring-white/60 p-2`}
				>
					<Icon className="w-7 h-7 text-white" strokeWidth={2.2} />
				</span>
				<span className={`font-semibold text-md ${accent}`}>{label}</span>
			</div>
			<div className="relative px-6 mt-2 flex items-end gap-2">
				<p className={`font-bold text-4xl ${statColor}`}>{value}</p>
				{trend !== undefined && (
					<span
						className={`
                        inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full shadow 
                        ${
																									trend > 0
																										? 'bg-teal-100 text-teal-700'
																										: trend < 0
																										? 'bg-red-100 text-red-700'
																										: 'bg-gray-100 text-gray-700'
																								}
                    `}
					>
						{trend > 0 && <ArrowUpRight className="w-3 h-3" />}
						{trend < 0 && <ArrowDownRight className="w-3 h-3" />}
						{trend > 0 ? '+' : ''}
						{trend}%
					</span>
				)}
			</div>
			<div className="px-6 mt-1 mb-2 text-sm text-slate-500 font-medium">
				{subtitle}
			</div>
			{badges.length > 0 && (
				<div className="flex gap-2 px-6 pb-3">
					{badges.map((badge, idx) => (
						<span
							key={idx}
							className={`
                                inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-md font-medium shadow
                                bg-slate-100 text-slate-700 border border-slate-200
                                hover:scale-105 transition-transform
                            `}
						>
							{badge.icon && <badge.icon className="w-3.5 h-3.5" strokeWidth={2.1} />}
							{badge.text}
						</span>
					))}
				</div>
			)}
		</div>
	);
}

function CityStats({ data }: { data: CityData }) {
	const stats: StatCardProps[] = [
		{
			icon: MapPin,
			label: 'Total Courts',
			value: data.totalCourts,
			subtitle: `Across ${data.totalClubs} active clubs`,
			accent: 'text-blue-700',
			iconBg: 'bg-blue-600',
			statColor: 'text-blue-800',
			bar: 'bg-blue-100',
			trend: 12,
			badges:
				data.totalClubs > 10
					? [{ text: 'Well Established', className: '', icon: Award }]
					: [],
			delay: 0,
		},
		{
			icon: Users,
			label: 'Active Players',
			value: data.totalPlayers,
			subtitle: `${data.totalCoaches} professional coaches`,
			accent: 'text-fuchsia-700',
			iconBg: 'bg-fuchsia-600',
			statColor: 'text-fuchsia-900',
			bar: 'bg-fuchsia-100',
			trend: 8,
			badges: [
				{ text: `${data.totalCoaches} Coaches`, className: '', icon: Sparkles },
			],
			delay: 0.11,
		},
		{
			icon: Calendar,
			label: 'Active Events',
			value: data.totalActiveSessions + data.totalActiveTournaments,
			subtitle: `${data.upcomingSessionsCount} sessions upcoming`,
			accent: 'text-orange-700',
			iconBg: 'bg-orange-500',
			statColor: 'text-orange-800',
			bar: 'bg-orange-100',
			trend: 15,
			badges: [
				{ text: `${data.totalActiveSessions} Sessions`, className: '' },
				{ text: `${data.totalActiveTournaments} Tournaments`, className: '' },
			],
			delay: 0.22,
		},
		{
			icon: TrendingUp,
			label: 'Activity Score',
			value: data.activityScore.toFixed(1),
			subtitle: data.isPopularDestination
				? 'Top destination'
				: 'Growing community',
			accent: 'text-emerald-800',
			iconBg: 'bg-emerald-600',
			statColor: 'text-emerald-900',
			bar: 'bg-emerald-100',
			badges: [
				...(data.isPopularDestination
					? [{ text: 'Popular', className: '', icon: Award }]
					: []),
				...(data.isTrendingCity
					? [{ text: 'Trending Now', className: '', icon: Zap }]
					: []),
			],
			delay: 0.34,
		},
	];

	return (
		<section className="mb-20">
			{/* Enhanced Header Area */}
			<div className="relative w-full flex justify-center mb-12">
				{/* Floating background elements */}
				<div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-ultra-soft rounded-full blur-xl opacity-60 animate-pulse" />
				<div className="absolute -bottom-2 -right-6 w-16 h-16 bg-primary-super-soft rounded-full blur-lg opacity-50 animate-pulse delay-1000" />

				{/* Main header container */}
				<div className="relative max-w-4xl mx-auto text-center">
					{/* Glass panel with enhanced styling */}
					<div className="rounded-3xl border border-cool-gray shadow-xl bg-background/95 backdrop-blur-xl px-10 py-8 relative overflow-hidden">
						{/* Subtle gradient overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-primary-ultra-soft/20 via-transparent to-primary-ultra-soft/10 pointer-events-none" />

						{/* Content */}
						<div className="relative z-10">
							{/* Icon accent */}
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary shadow-lg mb-4 ring-4 ring-primary-ultra-soft">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>

							{/* Main headline */}
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-slate mb-4 leading-tight">
								Community Overview
							</h2>

							{/* Enhanced accent bar */}
							<div className="flex items-center justify-center gap-2 mb-4">
								<div className="h-1 w-12 bg-gradient-to-r from-primary to-primary-light rounded-full" />
								<div className="w-2 h-2 bg-primary rounded-full opacity-60" />
								<div className="h-1 w-8 bg-gradient-to-l from-primary to-primary-light rounded-full" />
							</div>

							{/* Subtitle */}
							<p className="text-lg md:text-xl text-slate-gray font-medium max-w-2xl mx-auto leading-relaxed">
								Your window into the pulse of local pickleball
							</p>

							{/* Stats preview pills */}
							<div className="flex items-center justify-center gap-3 mt-6">
								<span className="px-3 py-1.5 bg-primary-ultra-soft text-primary-dark text-sm font-semibold rounded-full">
									Live Data
								</span>
								<span className="px-3 py-1.5 bg-success-light text-success text-sm font-semibold rounded-full">
									Verified
								</span>
								<span className="px-3 py-1.5 bg-primary-ultra-soft text-primary-dark text-sm font-semibold rounded-full">
									Real-time
								</span>
							</div>
						</div>

						{/* Bottom shine effect */}
						<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-soft to-transparent opacity-30" />
					</div>
				</div>
			</div>

			{/* Stats grid with enhanced spacing */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{stats.map((stat, idx) => (
					<StatCard key={idx} {...stat} />
				))}
			</div>
		</section>
	);
}

export default CityStats;
