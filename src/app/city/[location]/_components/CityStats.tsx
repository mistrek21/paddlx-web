import React from 'react';
import {
	Calendar,
	MapPin,
	Users,
	Award,
	Sparkles,
	ArrowUpRight,
	ArrowDownRight,
	Zap,
	Activity,
	Target,
} from 'lucide-react';

export interface CityStatsData {
	totalCourts: number;
	totalClubs: number;
	totalActiveSessions: number;
	totalActiveTournaments: number;
	totalCoaches: number;
	totalPlayers: number;
	totalGroups: number;
	activityScore: number;
	isPopularDestination: boolean;
	totalGamesPlayed: number;
	isTrendingCity: boolean;
	upcomingSessionsCount: number;
}

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
			className="group relative rounded-2xl shadow-lg overflow-hidden flex flex-col select-none bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
			style={{
				animation: `cardEnter 0.6s cubic-bezier(0.53,1.33,0.41,0.95) ${delay}s both`,
				minHeight: 158,
			}}
		>
			<div className={`absolute top-0 left-0 w-full h-1.5 ${bar} opacity-90`} />

			<div className="relative z-10 flex flex-row items-center gap-3 pt-5 px-6">
				<span
					className={`flex items-center justify-center rounded-xl ${iconBg} shadow ring-1 ring-white/60 p-2.5`}
				>
					<Icon className="w-7 h-7 text-white" strokeWidth={2.2} />
				</span>
				<span className={`font-semibold text-md ${accent}`}>{label}</span>

				{trend !== undefined && (
					<span
						className={`ml-auto inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm
                        ${
																									trend > 0
																										? 'bg-emerald-100 text-emerald-700'
																										: trend < 0
																										? 'bg-red-100 text-red-700'
																										: 'bg-gray-100 text-gray-700'
																								}`}
					>
						{trend > 0 && <ArrowUpRight className="w-3.5 h-3.5" />}
						{trend < 0 && <ArrowDownRight className="w-3.5 h-3.5" />}
						{trend > 0 ? '+' : ''}
						{trend}%
					</span>
				)}
			</div>

			<div className="relative px-6 mt-2 flex items-end gap-2">
				<p className={`font-bold text-4xl ${statColor}`}>{value}</p>
			</div>

			<div className="px-6 mt-2 text-sm text-slate-600 font-medium mb-2">
				{subtitle}
			</div>

			{badges.length > 0 && (
				<div className="flex flex-wrap gap-2 px-6 pb-4 mt-auto">
					{badges.map((badge, idx) => (
						<span
							key={idx}
							className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium shadow-sm bg-white/80 text-slate-700 border border-slate-200 hover:scale-105 transition-transform"
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

function CityStats({ data }: { data: CityStatsData }) {
	// Calculate engagement metrics
	const avgPlayersPerCourt =
		data.totalCourts > 0 ? Math.round(data.totalPlayers / data.totalCourts) : 0;
	const eventDensity =
		data.totalClubs > 0
			? (
					(data.totalActiveSessions + data.totalActiveTournaments) /
					data.totalClubs
			  ).toFixed(1)
			: '0';

	const stats: StatCardProps[] = [
		{
			icon: MapPin,
			label: 'Courts & Clubs',
			value: data.totalCourts,
			subtitle: `${data.totalClubs} active clubs • ${avgPlayersPerCourt} players per court`,
			accent: 'text-blue-700',
			iconBg: 'bg-blue-600',
			statColor: 'text-blue-800',
			bar: 'bg-blue-100',
			trend: 12,
			badges:
				data.totalClubs > 10
					? [{ text: 'Well Established', icon: Award, className: 'text-blue-700' }]
					: [],
			delay: 0,
		},
		{
			icon: Users,
			label: 'Active Players',
			value: data.totalPlayers,
			subtitle: `${data.totalCoaches} certified coaches available`,
			accent: 'text-fuchsia-700',
			iconBg: 'bg-fuchsia-600',
			statColor: 'text-fuchsia-900',
			bar: 'bg-fuchsia-100',
			trend: 8,
			badges: [
				{
					text: `${data.totalCoaches} Coaches`,
					icon: Sparkles,
					className: 'text-fuchsia-700',
				},
			],
			delay: 0.1,
		},
		{
			icon: Calendar,
			label: 'Active Events',
			value: data.totalActiveSessions + data.totalActiveTournaments,
			subtitle: `${data.upcomingSessionsCount} upcoming • ${eventDensity} events per club`,
			accent: 'text-orange-700',
			iconBg: 'bg-orange-500',
			statColor: 'text-orange-800',
			bar: 'bg-orange-100',
			trend: 15,
			badges: [
				{
					text: `${data.totalActiveSessions} Sessions`,
					icon: Sparkles,
					className: 'text-orange-700',
				},
				{
					text: `${data.totalActiveTournaments} Tournaments`,
					icon: Sparkles,
					className: 'text-orange-700',
				},
			],
			delay: 0.2,
		},
		{
			icon: Award,
			label: 'Games Played',
			value: data.totalGamesPlayed.toLocaleString(),
			subtitle: 'Total competitive matches completed',
			accent: 'text-violet-700',
			iconBg: 'bg-violet-600',
			statColor: 'text-violet-900',
			bar: 'bg-violet-100',
			badges: [],
			delay: 0.3,
		},
		{
			icon: Target,
			label: 'Communities',
			value: data.totalGroups,
			subtitle: 'Active player groups & networks',
			accent: 'text-cyan-700',
			iconBg: 'bg-cyan-600',
			statColor: 'text-cyan-900',
			bar: 'bg-cyan-100',
			badges: [],
			delay: 0.4,
		},
	];

	return (
		<section className="mb-20">
			{/* Enhanced Hero Header with Activity Score */}
			<div className="relative w-full mb-12">
				{/* Ambient background effects */}
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
					<div
						className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
						style={{ animationDelay: '1s' }}
					/>
				</div>

				<div className="max-w-6xl mx-auto">
					{/* Main header card */}
					<div className="relative rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-2xl overflow-hidden">
						{/* Top gradient accent */}
						<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />

						{/* Content wrapper */}
						<div className="relative px-6 py-10 md:px-12 md:py-12 lg:py-14">
							<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
								{/* Left side - Main info */}
								<div className="text-center lg:text-left">
									{/* Icon badge */}
									<div className="flex justify-center lg:justify-start mb-6">
										<div className="relative">
											<div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-40 animate-pulse" />
											<div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl">
												<Activity
													className="w-8 h-8 md:w-10 md:h-10 text-white"
													strokeWidth={2.5}
												/>
											</div>
										</div>
									</div>

									{/* Main headline */}
									<h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent mb-4 md:mb-5">
										Community Insights
									</h2>

									{/* Decorative divider */}
									<div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
										<div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-slate-300 to-slate-300 lg:to-transparent" />
										<div className="flex gap-1.5">
											<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
											<div
												className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"
												style={{ animationDelay: '0.2s' }}
											/>
											<div
												className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"
												style={{ animationDelay: '0.4s' }}
											/>
										</div>
										<div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent via-slate-300 to-slate-300 lg:to-transparent" />
									</div>

									{/* Subtitle with metrics */}
									<p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-6">
										Real-time data from{' '}
										<span className="font-bold text-slate-900">{data.totalClubs}</span>{' '}
										clubs,
										<span className="font-bold text-slate-900">
											{' '}
											{data.totalPlayers}
										</span>{' '}
										players, and
										<span className="font-bold text-slate-900">
											{' '}
											{data.totalGamesPlayed.toLocaleString()}
										</span>{' '}
										games played
									</p>

									{/* Status badges */}
									<div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3">
										<span className="relative px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs md:text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
											<span className="relative z-10 flex items-center gap-1.5">
												<span className="w-2 h-2 bg-white rounded-full animate-pulse" />
												Live Data
											</span>
										</span>
										<span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs md:text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
											Verified Stats
										</span>
										{data.isTrendingCity && (
											<span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs md:text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-1.5">
												<Zap className="w-3.5 h-3.5" fill="currentColor" />
												Trending
											</span>
										)}
									</div>
								</div>

								{/* Right side - Activity Score Display */}
								<div className="flex justify-center lg:justify-end">
									<div className="relative">
										{/* Glow effect */}
										<div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />

										{/* Main score card */}
										<div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-white/20">
											<div className="text-center">
												<div className="text-emerald-100 text-sm md:text-base font-semibold tracking-wider uppercase mb-3">
													Activity Score
												</div>

												<div className="relative inline-block">
													<div className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-2">
														{data.activityScore.toFixed(1)}
													</div>
													<div className="absolute -right-2 -top-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
													<div className="absolute -right-2 -top-2 w-3 h-3 bg-yellow-400 rounded-full" />
												</div>

												<div className="text-emerald-50 text-xs md:text-sm font-medium mb-4">
													{data.isPopularDestination
														? 'Top Destination'
														: 'Growing Community'}
												</div>

												{/* Badges */}
												<div className="flex flex-wrap justify-center gap-2">
													{data.isPopularDestination && (
														<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">
															<Award className="w-3.5 h-3.5" />
															Popular
														</span>
													)}
													{data.isTrendingCity && (
														<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">
															<Zap className="w-3.5 h-3.5" fill="currentColor" />
															Trending
														</span>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Bottom gradient overlay */}
						<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50/50 to-transparent pointer-events-none" />
					</div>
				</div>
			</div>

			{/* Stats grid - 5 cards in a row on large screens */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
				{stats.map((stat, idx) => (
					<StatCard key={idx} {...stat} />
				))}
			</div>

			<style>{`
				@keyframes cardEnter {
					from {
						opacity: 0;
						transform: translateY(20px) scale(0.95);
					}
					to {
						opacity: 1;
						transform: translateY(0) scale(1);
					}
				}
			`}</style>
		</section>
	);
}

export default CityStats;
