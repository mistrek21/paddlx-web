import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const guideArticles = [
	{
		category: 'Guides',
		title: 'How to play pickleball - 9 simple rules for beginners',
		image: '/pickleball-court-play.jpg',
	},
	{
		category: 'Guides',
		title: 'What is my pickleball skill rating? Take this quiz to get rated',
		image: '/pickleball-player-serve.jpg',
	},
	{
		category: 'Guides',
		title: 'How to run a fixed-partner league on paddlx',
		image: '/pickleball-doubles-play.jpg',
	},
];

export function LearnToPlaySection() {
	return (
		<section className="py-16 px-4 bg-white">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-teal mb-8">
					Learn to play
				</h2>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Left side - Guide articles */}
					<div className="space-y-4">
						{guideArticles.map((article, index) => (
							<Link
								key={index}
								href="#"
								className="flex gap-4 group hover:bg-light-gray p-3 rounded-lg transition-colors"
							>
								<div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
									<Image
										src={article.image || '/placeholder.svg'}
										alt={article.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="flex-1 space-y-2">
									<span className="inline-block text-xs font-semibold text-teal">
										{article.category}
									</span>
									<h3 className="text-base font-bold text-dark-slate group-hover:text-teal transition-colors leading-tight">
										{article.title}
									</h3>
								</div>
							</Link>
						))}
					</div>

					{/* Right side - Featured video */}
					<div className="space-y-4">
						<div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
							<Image
								src="/pickleball-clinic-video.jpg"
								alt="How to play pickleball video"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
								<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
									<Play className="w-8 h-8 text-teal ml-1" fill="currentColor" />
								</div>
							</div>
						</div>
						<div className="space-y-3">
							<div className="flex gap-2">
								<span className="inline-block text-xs font-semibold text-teal bg-teal/10 px-3 py-1 rounded">
									Guides
								</span>
								<span className="inline-block text-xs font-semibold text-teal bg-teal/10 px-3 py-1 rounded">
									Learn
								</span>
							</div>
							<h3 className="text-2xl font-bold text-dark-slate">
								How To Play Pickleball: Free Virtual Clinic for Beginners
							</h3>
							<div className="flex flex-wrap gap-3">
								<button className="bg-teal text-white px-6 py-2.5 rounded-md font-semibold hover:bg-teal/90 transition-colors">
									Watch Now
								</button>
								<Link
									href="#"
									className="flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
								>
									Or read our guides
									<ArrowRight className="w-4 h-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
