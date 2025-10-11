'use client';

import Image from 'next/image';
import { Award, CheckCircle2 } from 'lucide-react';

export function FederationSection() {
	return (
		<section className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-10 px-3 overflow-hidden">
			{/* Decorative background elements */}
			<div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
			<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

			<div className="max-w-7xl mx-auto relative">
				{/* Badge */}
				<div className="flex justify-center mb-5">
					<div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full border border-teal-200/50 shadow-sm">
						<Award className="w-4 h-4" />
						<span className="text-sm font-semibold">Official Partner</span>
					</div>
				</div>

				{/* Main content card */}
				<div className="bg-white rounded-2xl shadow-xl border border-slate-200/50 p-6 md:p-8">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-8">
						{/* Text content */}
						<div className="flex-1 text-center lg:text-left">
							<div className="inline-flex items-start gap-2 mb-3">
								<CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
								<h2 className="text-xl md:text-2xl lg:text-3xl text-slate-900 font-bold leading-tight">
									The official court and game finder of{' '}
									<span className="text-teal-600">USA Pickleball</span> and the{' '}
									<span className="text-teal-600">Global Pickleball Federation</span>
								</h2>
							</div>
							<p className="text-slate-600 text-base leading-relaxed mt-2">
								Trusted by millions of players worldwide to find courts, connect with
								communities, and grow the sport.
							</p>
						</div>

						{/* Logos */}
						<div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
							<div className="group">
								<div className="relative w-32 h-24 bg-white rounded-xl shadow-md border border-slate-200/50 p-3 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-teal-300">
									<Image
										src="/usa-pickleball-logo.jpg"
										alt="USA Pickleball"
										fill
										className="object-contain p-2"
									/>
								</div>
								<p className="text-center text-sm text-slate-600 font-medium mt-2">
									USA Pickleball
								</p>
							</div>

							<div className="hidden sm:block w-px h-16 bg-slate-200" />

							<div className="group">
								<div className="relative w-32 h-24 bg-white rounded-xl shadow-md border border-slate-200/50 p-3 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-teal-300">
									<Image
										src="/global-pickleball-federation-logo.jpg"
										alt="Global Pickleball Federation"
										fill
										className="object-contain p-2"
									/>
								</div>
								<p className="text-center text-sm text-slate-600 font-medium mt-2">
									Global Federation
								</p>
							</div>
						</div>
					</div>

					{/* Stats bar */}
					{/* <div className="mt-8 pt-6 border-t border-slate-200/50">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							<div className="text-center">
								<div className="text-2xl font-bold text-teal-600">5M+</div>
								<div className="text-sm text-slate-600 mt-1">Active Players</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-teal-600">50K+</div>
								<div className="text-sm text-slate-600 mt-1">Courts Listed</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-teal-600">180+</div>
								<div className="text-sm text-slate-600 mt-1">Countries</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-teal-600">100%</div>
								<div className="text-sm text-slate-600 mt-1">Free to Use</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
}
