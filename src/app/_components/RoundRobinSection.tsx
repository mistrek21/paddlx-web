'use client';

// src/app/_components/RoundRobinSection.tsx

import {
	Grid3x3,
	Users,
	Trophy,
	Send,
	Play,
	ExternalLink,
	Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function RoundRobinSection() {
	const features = [
		{ icon: Grid3x3, text: 'Choose from 10 fun formats' },
		{ icon: Users, text: 'Any number of courts or players' },
		{ icon: Trophy, text: 'Add scores and view live standings' },
		{ icon: Send, text: 'Send scores to DUPR with instant validation' },
	];

	return (
		<section className="py-20 px-4 bg-white">
			<div className="max-w-7xl mx-auto">
				{/* Top Row */}
				<div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
					<div className="flex-1">
						<div className="flex items-center gap-3 mb-6">
							<div
								className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
								style={{
									background: 'linear-gradient(to bottom right, #4DB5C7, #2A9DB0)',
								}}
							>
								<Sparkles className="w-5 h-5 text-white" />
							</div>
							<span
								className="text-sm font-bold uppercase tracking-wider"
								style={{ color: '#2A9DB0' }}
							>
								New Feature
							</span>
						</div>
						<h2
							className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent mb-6 leading-tight"
							style={{
								background: 'linear-gradient(to right, #2A9DB0, #4DB5C7, #7BC9D6)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text',
							}}
						>
							Mix it up with our NEW round robin tool!
						</h2>
						<p className="text-slate-700 text-lg leading-relaxed mb-8 max-w-2xl">
							Add a fun twist to your weekly games with our{' '}
							<span className="font-bold" style={{ color: '#2A9DB0' }}>
								free round robin tool
							</span>
							. It's the most flexible way to organize play!
						</p>
						<ul className="space-y-4">
							{features.map((feature, index) => (
								<li key={index} className="flex items-start gap-4 group">
									<div
										className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm"
										style={{
											background: 'linear-gradient(to bottom right, #E6F7F9, #B8DCE8)',
										}}
									>
										<feature.icon
											className="w-6 h-6"
											style={{ color: '#2A9DB0' }}
											strokeWidth={2}
										/>
									</div>
									<span className="text-slate-700 font-medium text-lg pt-2.5">
										{feature.text}
									</span>
								</li>
							))}
						</ul>
					</div>
					<div className="flex-shrink-0">
						<Link
							href="/help/why-paddlx"
							className="text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:scale-105"
							style={{ background: 'linear-gradient(to right, #2A9DB0, #4DB5C7)' }}
							onMouseEnter={(e) =>
								(e.currentTarget.style.background =
									'linear-gradient(to right, #4DB5C7, #7BC9D6)')
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.background =
									'linear-gradient(to right, #2A9DB0, #4DB5C7)')
							}
						>
							Learn more
						</Link>
					</div>
				</div>

				{/* Previews */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
					<Link
						href="/help/round-robin-overview"
						className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border cursor-pointer group hover:-translate-y-2"
						style={{ borderColor: '#B8DCE8' }}
					>
						<div
							className="aspect-video rounded-2xl mb-6 overflow-hidden relative shadow-inner"
							style={{
								background: 'linear-gradient(to bottom right, #E6F7F9, #B8DCE8)',
							}}
						>
							<Image
								src="/pickleball-court-simulator-interface-with-players-.jpg"
								alt="Round robin tool preview"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-500"
							/>
						</div>
						<h3 className="text-2xl font-bold text-slate-900 mb-3">
							Preview the tool
						</h3>
						<p className="text-slate-600 text-base mb-5 leading-relaxed">
							Use the simulator to understand how each round robin format works.
						</p>
						<button
							// href="/help/round-robin-overview"
							className="font-bold text-base inline-flex items-center gap-2 group-hover:gap-3 transition-all"
							style={{ color: '#2A9DB0' }}
							onMouseEnter={(e) => (e.currentTarget.style.color = '#4DB5C7')}
							onMouseLeave={(e) => (e.currentTarget.style.color = '#2A9DB0')}
						>
							Try it now
							<ExternalLink className="w-5 h-5" />
						</button>
					</Link>

					<Link
						href="/create"
						className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border cursor-pointer group hover:-translate-y-2"
						style={{ borderColor: '#7BC9D6' }}
					>
						<div
							className="aspect-video rounded-2xl mb-6 overflow-hidden relative shadow-inner"
							style={{
								background: 'linear-gradient(to bottom right, #7BC9D6, #B8DCE8)',
							}}
						>
							<Image
								src="/mobile-app-showing-pickleball-round-robin-matchups.jpg"
								alt="Create a round robin"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-500"
							/>
						</div>
						<h3 className="text-2xl font-bold text-slate-900 mb-3">
							Create a round robin
						</h3>
						<p className="text-slate-600 text-base mb-5 leading-relaxed">
							Generate matchups, collect scores and view live standings!
						</p>
						<button
							className="font-bold text-base inline-flex items-center gap-2 group-hover:gap-3 transition-all"
							style={{ color: '#2A9DB0' }}
							onMouseEnter={(e) => (e.currentTarget.style.color = '#4DB5C7')}
							onMouseLeave={(e) => (e.currentTarget.style.color = '#2A9DB0')}
						>
							Learn more
							<ExternalLink className="w-5 h-5" />
						</button>
					</Link>
				</div>

				{/* Video */}
				<div
					className="rounded-3xl p-8 shadow-lg border-2 hover:shadow-xl transition-all duration-300"
					style={{
						background: 'linear-gradient(to right, #ffffff, #E6F7F9)',
						borderColor: '#B8DCE8',
					}}
				>
					<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
						<div className="flex items-center gap-6">
							<div
								className="w-20 h-20 rounded-2xl flex-shrink-0 overflow-hidden relative shadow-md group cursor-pointer"
								style={{
									background: 'linear-gradient(to bottom right, #E6F7F9, #B8DCE8)',
								}}
							>
								<Image
									src="/person-explaining-pickleball-round-robin.jpg"
									alt="Video thumbnail"
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
									<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
										<Play
											className="w-6 h-6 ml-1"
											style={{ color: '#2A9DB0' }}
											fill="currentColor"
										/>
									</div>
								</div>
							</div>
							<div>
								<h3 className="font-bold text-slate-900 text-xl mb-2">
									See it in action - watch the video series!
								</h3>
								<p className="text-slate-600 text-base">
									Get an in-depth look at all{' '}
									<span className="font-bold" style={{ color: '#2A9DB0' }}>
										10 formats
									</span>{' '}
									and what running a round robin looks like on paddlx!
								</p>
							</div>
						</div>
						<Link
							href="/videos"
							className="text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105"
							style={{ background: 'linear-gradient(to right, #2A9DB0, #4DB5C7)' }}
							onMouseEnter={(e) =>
								(e.currentTarget.style.background =
									'linear-gradient(to right, #4DB5C7, #7BC9D6)')
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.background =
									'linear-gradient(to right, #2A9DB0, #4DB5C7)')
							}
						>
							Watch now
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
