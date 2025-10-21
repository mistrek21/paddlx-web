// src/app/_components/DownloadButtons.tsx

'use client';

import Link from 'next/link';
import { Apple, Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function DownloadButtons() {
	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="space-y-2">
				<p className="text-sm font-semibold text-primary uppercase tracking-widest">
					Download the app
				</p>
				<p className="text-sm text-muted-foreground">
					Get paddlX on your device and start playing instantly
				</p>
			</div>

			{/* Buttons Container */}
			<div className="flex flex-col sm:flex-row gap-4">
				{/* App Store Button */}
				<Link
					href="https://apps.apple.com/app/paddlx"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative flex items-center gap-4 px-6 py-4 bg-white text-slate-900 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:shadow-lg border border-slate-100 overflow-hidden"
					aria-label="Download paddlX on the Apple App Store"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

					{/* Content */}
					<div className="relative flex items-center gap-4 w-full">
						<div className="flex-shrink-0">
							<Apple
								className="h-6 w-6 text-slate-900 group-hover:scale-110 transition-transform duration-300"
								aria-hidden="true"
							/>
						</div>
						<div className="flex flex-col flex-grow">
							<span className="text-xs text-slate-500 font-medium">Download on</span>
							<span className="text-base font-bold text-slate-900">App Store</span>
						</div>
						<ArrowRight className="h-5 w-5 text-slate-400 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
					</div>
				</Link>

				{/* Google Play Button */}
				<Link
					href="https://play.google.com/store/apps/details?id=com.paddlx"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative flex items-center gap-4 px-6 py-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:shadow-lg border border-blue-500/30 overflow-hidden"
					aria-label="Get paddlX on Google Play Store"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

					{/* Content */}
					<div className="relative flex items-center gap-4 w-full">
						<div className="flex-shrink-0">
							<Download
								className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300"
								aria-hidden="true"
							/>
						</div>
						<div className="flex flex-col flex-grow">
							<span className="text-xs text-blue-100 font-medium">Get it on</span>
							<span className="text-base font-bold text-white">Google Play</span>
						</div>
						<ArrowRight className="h-5 w-5 text-blue-200 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
					</div>
				</Link>
			</div>

			{/* Trust Badge */}
			{/* Trust Badge with Player Avatars */}
			<section className="max-w-6xl mx-auto px-4 py-2">
				<div className="flex flex-col items-center gap-2">
					{/* Player Avatars */}
					<div className="flex items-center gap-4">
						<div className="flex -space-x-3">
							{/* Player 1 */}
							<div className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-blue-500 flex items-center justify-center text-white font-bold">
								<Image
									src="/pickleball-player-avatar-1.jpg"
									alt="Player 1"
									width={40}
									height={40}
									className="w-full h-full object-cover"
								/>
							</div>
							{/* Player 2 */}
							<div className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-green-500 flex items-center justify-center text-white font-bold">
								<Image
									src="/pickleball-player-avatar-2.jpg"
									alt="Player 2"
									width={40}
									height={40}
									className="w-full h-full object-cover"
								/>
							</div>
							{/* Player 3 */}
							<div className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-orange-500 flex items-center justify-center text-white font-bold">
								<Image
									src="/pickleball-player-avatar-3.jpg"
									alt="Player 3"
									width={40}
									height={40}
									className="w-full h-full object-cover"
								/>
							</div>
							{/* Player 4 */}
							<div className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-purple-500 flex items-center justify-center text-white font-bold">
								<Image
									src="/pickleball-player-avatar-4.jpg"
									alt="Player 4"
									width={40}
									height={40}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<span className="text-sm font-semibold text-foreground">+2K more</span>
					</div>

					{/* Trust Text */}
					<p className="text-center text-muted-foreground">
						<span className="font-semibold text-foreground">
							Trusted by 50K+ players worldwide
						</span>
						<br />
						Join the fastest-growing pickleball community
					</p>
				</div>
			</section>
		</div>
	);
}
