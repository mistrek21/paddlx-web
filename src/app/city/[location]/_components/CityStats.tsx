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
	gradient: string;
	glowColor: string;
	trend?: number;
	badges?: Badge[];
	delay: number;
}

function StatCard({
	icon: Icon,
	label,
	value,
	subtitle,
	gradient,
	glowColor,
	trend,
	badges = [],
	delay,
}: StatCardProps) {
	return (
		<div
			className="group relative h-full"
			style={{
				animation: `slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`,
			}}
		>
			{/* Glow effect on hover */}
			<div
				className={`absolute -inset-0.5 ${gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
			/>

			{/* Main card */}
			<div className="relative h-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col">
				{/* Animated gradient background */}
				<div
					className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
				/>

				{/* Top gradient bar with shimmer effect */}
				<div className="relative h-1.5 overflow-hidden">
					<div className={`absolute inset-0 ${gradient}`} />
					<div
						className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 animate-shimmer`}
					/>
				</div>

				{/* Content */}
				<div className="relative flex-1 p-6 flex flex-col">
					{/* Header with icon */}
					<div className="flex items-start justify-between mb-4">
						<div className="flex-1">
							<div className="flex items-center gap-2 mb-3">
								<span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
									{label}
								</span>
								{trend !== undefined && (
									<div
										className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full text-xs font-bold ${
											trend > 0
												? 'bg-emerald-50 text-emerald-700'
												: trend < 0
												? 'bg-red-50 text-red-700'
												: 'bg-gray-50 text-gray-700'
										}`}
									>
										{trend > 0 && <ArrowUpRight className="w-3 h-3" />}
										{trend > 0 ? '+' : ''}
										{trend}%
									</div>
								)}
							</div>

							{/* Main value with animation */}
							<div className="mb-2 overflow-hidden">
								<p className="text-5xl font-black text-gray-900 tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left leading-none">
									{value}
								</p>
							</div>

							<p className="text-sm text-gray-600 font-medium">{subtitle}</p>
						</div>

						{/* Icon with glassmorphism effect */}
						<div className="relative">
							<div
								className={`absolute inset-0 ${gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}
							/>
							<div
								className={`relative ${gradient} rounded-2xl p-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
							>
								<Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
							</div>
						</div>
					</div>

					{/* Spacer to push badges to bottom */}
					<div className="flex-1" />

					{/* Badges */}
					{badges.length > 0 && (
						<div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
							{badges.map((badge, idx) => (
								<span
									key={idx}
									className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl font-bold ${badge.className} transition-all duration-200 hover:scale-105`}
								>
									{badge.icon && (
										<badge.icon className="w-3.5 h-3.5" strokeWidth={2.5} />
									)}
									{badge.text}
								</span>
							))}
						</div>
					)}
				</div>

				{/* Bottom shine effect */}
				<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
			</div>
		</div>
	);
}

function CityStats({ data }: { data: CityData }) {
	const stats = [
		{
			icon: MapPin,
			label: 'Total Courts',
			value: data.totalCourts,
			subtitle: `Across ${data.totalClubs} active clubs`,
			gradient: 'bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600',
			glowColor: 'blue',
			trend: 12,
			badges:
				data.totalClubs > 10
					? [
							{
								text: 'Well Established',
								className: 'bg-blue-100 text-blue-800',
								icon: Award,
							},
					  ]
					: [],
			delay: 0,
		},
		{
			icon: Users,
			label: 'Active Players',
			value: data.totalPlayers,
			subtitle: `${data.totalCoaches} professional coaches`,
			gradient: 'bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600',
			glowColor: 'purple',
			trend: 8,
			badges: [
				{
					text: `${data.totalCoaches} Coaches`,
					className: 'bg-purple-100 text-purple-800',
					icon: Sparkles,
				},
			],
			delay: 0.1,
		},
		{
			icon: Calendar,
			label: 'Active Events',
			value: data.totalActiveSessions + data.totalActiveTournaments,
			subtitle: `${data.upcomingSessionsCount} sessions upcoming`,
			gradient: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600',
			glowColor: 'orange',
			trend: 15,
			badges: [
				{
					text: `${data.totalActiveSessions} Sessions`,
					className: 'bg-orange-100 text-orange-800',
				},
				{
					text: `${data.totalActiveTournaments} Tournaments`,
					className: 'bg-red-100 text-red-800',
				},
			],
			delay: 0.2,
		},
		{
			icon: TrendingUp,
			label: 'Activity Score',
			value: data.activityScore.toFixed(1),
			subtitle: data.isPopularDestination
				? 'Top destination'
				: 'Growing community',
			gradient: 'bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600',
			glowColor: 'green',
			badges: [
				...(data.isPopularDestination
					? [
							{
								text: 'Popular',
								className: 'bg-emerald-100 text-emerald-800',
								icon: Award,
							},
					  ]
					: []),
				...(data.isTrendingCity
					? [
							{
								text: 'Trending Now',
								className: 'bg-green-100 text-green-800',
								icon: Zap,
							},
					  ]
					: []),
			],
			delay: 0.3,
		},
	];

	return (
		<section className="mb-20">
			{/* Animated Gradient Header */}
			<div className="mb-10">
				<div className="relative flex items-center gap-4 mb-4 animate-[headerPop_0.7s_cubic-bezier(0.6,0,0.3,1)_both]">
					{/* Icon Hero Accent */}
					<div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-500 via-blue-500 to-fuchsia-600 shadow-lg ring-4 ring-white/40">
						<svg width="32" height="32" fill="none" viewBox="0 0 32 32">
							<circle cx="16" cy="16" r="16" fill="url(#paint0_radial)" />
							<path
								stroke="#FFF"
								strokeWidth="2"
								strokeLinecap="round"
								d="M10.5 21.5h11M13 10.5l3 3m0 0l3-3m-3 3v7"
							/>
							<defs>
								<radialGradient
									id="paint0_radial"
									cx="0"
									cy="0"
									r="1"
									gradientTransform="rotate(90 7.5 8.5) scale(24)"
								>
									<stop stopColor="#14b8a6" />
									<stop offset="0.7" stopColor="#818cf8" />
									<stop offset="1" stopColor="#a21caf" />
								</radialGradient>
							</defs>
						</svg>
					</div>
					<h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight drop-shadow-xl">
						Community Overview
					</h2>
				</div>
				<div className="pl-16 -mt-2">
					<p className="text-lg text-slate-500 font-medium animate-[subFade_1.1s_ease_both]">
						Your window into the pulse of local pickleball
					</p>
				</div>
			</div>

			{/* Stats Grid with Glassmorphism Cards & Motion */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{stats.map((stat, idx) => (
					<div
						key={idx}
						className="
							bg-gradient-to-tr from-white via-slate-50 to-teal-50/80 
							rounded-2xl shadow-xl transition-transform duration-300
							hover:scale-105 hover:shadow-2xl
							border border-teal-400/10
							relative 
							overflow-hidden
							group
							animate-[cardUp_0.8s_cubic-bezier(0.6,0,0.3,1)_both]
						"
						style={{
							minHeight: '130px',
						}}
					>
						{/* Dynamic Animated Glow Accent */}
						<div className="absolute -left-8 -top-8 z-0 h-24 w-24 rounded-full bg-gradient-to-br from-teal-500 to-pink-500 blur-lg opacity-20 group-hover:opacity-40 transition-all duration-300 pointer-events-none" />

						{/* Stat Content */}
						<div className="relative z-10 p-6 flex flex-col h-full justify-between">
							<div className="flex items-center gap-2 mb-4">
								{stat.icon && (
									<span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-teal-100 text-teal-700 shadow-sm">
										<stat.icon className="w-6 h-6" />
									</span>
								)}

								<span className="text-lg font-bold text-teal-700">{stat.label}</span>
							</div>
							<div className="text-3xl md:text-4xl font-black text-slate-900">
								{stat.value}
							</div>
							<div className="text-xs text-slate-400 mt-2">{stat.subtitle}</div>
						</div>
						{/* Shimmer on hover */}
						<div className="absolute inset-0 pointer-events-none">
							<div className="h-full w-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 animate-[shimmerCard_2.7s_linear_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default CityStats;
