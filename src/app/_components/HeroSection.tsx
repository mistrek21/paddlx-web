'use client';

import { MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<section className="relative h-[500px] flex items-center justify-center">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				<div
					className="w-full h-full bg-cover bg-center"
					style={{
						backgroundImage:
							'url(/placeholder.svg?height=500&width=1920&query=people+playing+pickleball+on+outdoor+courts)',
					}}
				/>
				{/* Use semantic dark color for overlay */}
				<div className="absolute inset-0 bg-dark/40" />
			</div>

			{/* Content */}
			<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
				<h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
					Find pickleball near you
				</h1>
				<p className="text-xl text-white mb-8">Discover local courts and games</p>

				{/* Search Bar */}
				<div className="max-w-2xl mx-auto mb-6">
					<div className="relative flex items-center bg-white rounded-full shadow-lg overflow-hidden">
						<div className="pl-6 pr-3 py-4 flex items-center">
							{/* Use primary color from palette */}
							<MapPin className="w-5 h-5 text-primary" />
						</div>
						<input
							type="text"
							placeholder="Search by city, state, or facility"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="flex-1 py-4 pr-4 text-base text-text placeholder:text-slate-gray focus:outline-none"
						/>
						<button
							className="m-2 flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-primary-dark transition-colors"
							aria-label="Search"
						>
							<ArrowRight className="w-5 h-5 text-white" />
						</button>
					</div>
				</div>

				{/* Link */}
				<button className="text-white hover:text-white/90 transition-colors flex items-center gap-2 mx-auto group">
					<span className="text-sm font-medium">
						Or see all nearby places to play
					</span>
					<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
				</button>
			</div>
		</section>
	);
}
