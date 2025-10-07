'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const tabs = [
	{ id: 'trending', label: 'TRENDING' },
	{ id: 'fixed-partner', label: 'Run a fixed-partner league on paddlx' },
	{ id: 'run-league', label: 'How to run a league on paddlx' },
	{
		id: 'scale-group',
		label: 'How to scale your pickleball group with paddlx',
	},
	{ id: 'browse', label: 'Browse all content' },
];

const gearArticles = [
	{
		category: 'Pickleball Gear',
		title: 'Best pickleball paddles 2025',
		image: '/paddles-gear.jpg',
	},
	{
		category: 'Blog',
		title: 'Watch this space - adidas is making waves in pickleball',
		image: '/adidas-pickleball.jpg',
	},
	{
		category: 'Pickleball Gear',
		title: 'Best pickleball balls in 2025 - top 5 compared',
		image: '/pickleball-balls.jpg',
	},
];

export function GuidesReviewsSection() {
	const [activeTab, setActiveTab] = useState('trending');

	return (
		<section className="py-16 px-4 bg-white">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-8">
					Up your game with our guides & reviews
				</h2>

				{/* Tabs */}
				<div className="flex flex-wrap gap-3 mb-8 border-b border-divider">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`pb-3 px-1 text-sm font-medium transition-colors whitespace-nowrap ${
								activeTab === tab.id
									? 'text-coral border-b-2 border-coral'
									: 'text-slate-gray hover:text-dark-slate'
							}`}
						>
							{tab.label}
						</button>
					))}
				</div>

				{/* Content Grid */}
				<div className="grid md:grid-cols-2 gap-8">
					{/* Featured Article */}
					<div className="space-y-4">
						<div className="relative aspect-[4/3] rounded-lg overflow-hidden">
							<Image
								src="/paddle-quiz-person.jpg"
								alt="Person holding paddle with question mark"
								fill
								className="object-cover"
							/>
						</div>
						<div className="space-y-3">
							<span className="inline-block text-xs font-semibold text-teal bg-teal/10 px-3 py-1 rounded">
								Pickleball Gear
							</span>
							<h3 className="text-2xl font-bold text-dark-slate">
								Find the right paddle for your game — take our quiz!
							</h3>
							<div className="flex flex-wrap gap-3">
								<button className="bg-teal text-white px-6 py-2.5 rounded-md font-semibold hover:bg-teal/90 transition-colors">
									Take the quiz
								</button>
								<Link
									href="#"
									className="flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
								>
									More Gear Reviews
									<ArrowRight className="w-4 h-4" />
								</Link>
							</div>
						</div>
					</div>

					{/* Gear We Love */}
					<div className="space-y-6">
						<h3 className="text-2xl font-bold text-teal">Gear we love</h3>
						<div className="space-y-4">
							{gearArticles.map((article, index) => (
								<Link
									key={index}
									href="#"
									className="flex gap-4 group hover:bg-light-gray p-2 rounded-lg transition-colors"
								>
									<div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
										<Image
											src={article.image || '/placeholder.svg'}
											alt={article.title}
											fill
											className="object-cover"
										/>
									</div>
									<div className="flex-1 space-y-1">
										<span className="inline-block text-xs font-semibold text-teal">
											{article.category}
										</span>
										<h4 className="text-base font-bold text-dark-slate group-hover:text-teal transition-colors">
											{article.title}
										</h4>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
