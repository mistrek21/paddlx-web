'use client';

import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { VideoPlayerModal } from '../videos/_components/VideoPlayerModal';
import { useState } from 'react';

// Helper function to generate URL-friendly slugs for guides
const generateSlug = (title: string): string => {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
};

// Simple function to build the correct guide URL
const getGuideUrl = (category: string, title: string): string => {
	const categorySlug = generateSlug(category);
	const titleSlug = generateSlug(title);
	return `/guides/${categorySlug}/${titleSlug}`;
};

const guideArticles = [
	{
		category: 'Guides',
		title: 'How to play pickleball - 9 simple rules for beginners',
		image: '/pickleball-court-with-players.jpg',
	},
	{
		category: 'Guides',
		title: 'What is my pickleball skill rating? Take this quiz to get rated',
		image: '/pickleball-player-serving.jpg',
	},
	{
		category: 'Guides',
		title: 'How to run a fixed-partner league on paddlx',
		image: '/pickleball-doubles-team-playing.jpg',
	},
];

export function LearnToPlaySection() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section className="py-20 px-4 bg-white">
			<div className="max-w-7xl mx-auto">
				{/* Header with icon */}
				<div className="flex items-center gap-3 mb-3">
					<div
						className="w-10 h-10 rounded-xl flex items-center justify-center"
						style={{
							background: 'linear-gradient(to bottom right, #4DB5C7, #2A9DB0)',
						}}
					>
						<Sparkles className="w-5 h-5 text-white" />
					</div>
					<h2
						className="text-4xl md:text-5xl font-bold"
						style={{
							background: 'linear-gradient(to right, #2A9DB0, #4DB5C7, #2A9DB0)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
						}}
					>
						Learn to play
					</h2>
				</div>
				<p className="text-slate-600 text-lg mb-12 max-w-2xl">
					Master the game with our expert guides and video tutorials
				</p>

				<div className="grid lg:grid-cols-2 gap-8">
					{/* Left side - Guide articles */}
					<div className="space-y-4">
						{guideArticles.map((article, index) => (
							<Link
								key={index}
								// UPDATED: href now points to the correct guide URL
								href={getGuideUrl(article.category, article.title)}
								className="flex gap-4 group bg-white p-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg border border-slate-100"
							>
								<div className="relative w-36 h-28 flex-shrink-0 rounded-xl overflow-hidden">
									<Image
										src={article.image || '/placeholder.svg'}
										alt={article.title}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
								</div>
								<div className="flex-1 space-y-2 flex flex-col justify-center">
									<span
										className="inline-block text-xs font-bold px-3 py-1 rounded-full w-fit"
										style={{ color: '#2A9DB0', backgroundColor: '#E6F7F9' }}
									>
										{article.category}
									</span>
									<h3 className="text-base font-bold text-slate-800 transition-colors leading-snug group-hover:text-[#2A9DB0]">
										{article.title}
									</h3>
									<div
										className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
										style={{ color: '#2A9DB0' }}
									>
										<span className="text-sm font-semibold">Read more</span>
										<ArrowRight className="w-4 h-4" />
									</div>
								</div>
							</Link>
						))}
					</div>

					{/* Right side - Featured video */}
					<div className="space-y-5">
						<div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
							<Image
								src="/pickleball-clinic-instructor-teaching-beginners.jpg"
								alt="How to play pickleball video"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
									<Play
										onClick={() => setIsOpen(true)}
										className="w-9 h-9 ml-1"
										style={{ color: '#2A9DB0' }}
										fill="currentColor"
									/>
								</div>
							</div>
							{/* Duration badge */}
							<div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-lg">
								12:45
							</div>
						</div>
						<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
							<div className="flex gap-2 mb-4">
								<span
									className="inline-block text-xs font-bold px-3 py-1.5 rounded-full"
									style={{ color: '#2A9DB0', backgroundColor: '#E6F7F9' }}
								>
									Guides
								</span>
								<span
									className="inline-block text-xs font-bold px-3 py-1.5 rounded-full"
									style={{ color: '#2A9DB0', backgroundColor: '#E6F7F9' }}
								>
									Learn
								</span>
							</div>
							<h3 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
								How To Play Pickleball: Free Virtual Clinic for Beginners
							</h3>
							<div className="flex flex-wrap gap-3">
								<Link
									href="/videos?watch=L_h_S12K_sQ"
									className="text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
									style={{ backgroundColor: '#2A9DB0' }}
									onMouseEnter={(e) =>
										(e.currentTarget.style.backgroundColor = '#4DB5C7')
									}
									onMouseLeave={(e) =>
										(e.currentTarget.style.backgroundColor = '#2A9DB0')
									}
								>
									Watch Now
								</Link>
								<Link
									// UPDATED: href now points to the main "guides" section on the homepage
									href="/guides"
									className="flex items-center gap-2 font-bold hover:gap-3 transition-all px-4 py-3 rounded-xl"
									style={{ color: '#2A9DB0' }}
									onMouseEnter={(e) =>
										(e.currentTarget.style.backgroundColor = '#E6F7F9')
									}
									onMouseLeave={(e) =>
										(e.currentTarget.style.backgroundColor = 'transparent')
									}
								>
									Or read our guides
									<ArrowRight className="w-4 h-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<VideoPlayerModal
				title="How To Play Pickleball: Free Virtual Clinic for Beginners"
				youtubeId="L_h_S12K_sQ"
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</section>
	);
}
