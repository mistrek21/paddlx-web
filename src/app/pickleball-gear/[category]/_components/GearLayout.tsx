// src/app/pickleball-gear/[category]/_components/GearLayout.tsx
'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface GearLayoutProps {
	children: React.ReactNode;
	currentCategory: string;
	sections?: Array<{ id: string; heading: string }>;
}

export function GearLayout({
	children,
	currentCategory,
	sections = [],
}: GearLayoutProps) {
	const [activeSection, setActiveSection] = useState<string>('');
	const [isScrolled, setIsScrolled] = useState(false);
	const router = useRouter();
	const isUserScrollingRef = useRef(false);
	// @ts-ignore
	const scrollTimeoutRef = useRef<NodeJS.Timeout>();

	// Scroll to hash on initial load
	useEffect(() => {
		const scrollToHash = () => {
			const hash = window.location.hash.replace('#', '');
			if (hash) {
				setTimeout(() => {
					const element = document.getElementById(hash);
					if (element) {
						const offset = 100;
						const elementPosition = element.offsetTop - offset;
						window.scrollTo({
							top: elementPosition,
							behavior: 'smooth',
						});
					}
				}, 100);
			}
		};

		scrollToHash();
		window.addEventListener('hashchange', scrollToHash);
		return () => window.removeEventListener('hashchange', scrollToHash);
	}, []);

	// Optimized scroll spy with throttling - only updates when user is scrolling naturally
	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const scrollPosition = window.scrollY;

					// Update header shadow state
					setIsScrolled(scrollPosition > 10);

					// Only update active section if user is scrolling naturally (not clicking links)
					if (!isUserScrollingRef.current) {
						const scrollWithOffset = scrollPosition + 150;

						for (let i = sections.length - 1; i >= 0; i--) {
							const section = document.getElementById(sections[i].id);
							if (section && section.offsetTop <= scrollWithOffset) {
								if (activeSection !== sections[i].id) {
									setActiveSection(sections[i].id);
									window.history.replaceState(
										null,
										'',
										`${window.location.pathname}#${sections[i].id}`
									);
								}
								break;
							}
						}
					}

					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, [sections, activeSection]);

	const scrollToSection = useCallback((id: string) => {
		const element = document.getElementById(id);
		if (element) {
			// Mark that user is intentionally scrolling
			isUserScrollingRef.current = true;

			const offset = 100;
			const elementPosition = element.offsetTop - offset;
			window.scrollTo({
				top: elementPosition,
				behavior: 'smooth',
			});

			// Immediately update active section
			setActiveSection(id);
			window.history.pushState(null, '', `#${id}`);

			// Reset flag after scroll completes
			if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
			scrollTimeoutRef.current = setTimeout(() => {
				isUserScrollingRef.current = false;
			}, 1000);
		}
	}, []);

	const categoryDisplayNames: Record<string, string> = {
		paddles: 'Paddles',
		shoes: 'Shoes',
		balls: 'Balls',
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-primary-ultra-soft via-white to-primary-super-soft">
			{/* Header with Smooth Shadow Transition */}
			<div
				className={`bg-white/95 backdrop-blur-md border-b sticky top-0 z-50 transition-all duration-300 ${
					isScrolled
						? 'border-primary-soft/30 shadow-md'
						: 'border-transparent shadow-sm'
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-4">
					<nav className="flex items-center space-x-2 text-sm">
						<Link
							href="/"
							className="text-slate-600 hover:text-primary transition-colors duration-200 font-medium"
						>
							Home
						</Link>
						<svg
							className="w-4 h-4 text-slate-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
						<Link
							href="/pickleball-gear/paddles"
							className="text-slate-600 hover:text-primary transition-colors duration-200 font-medium"
						>
							Gear Guide
						</Link>
						<svg
							className="w-4 h-4 text-slate-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
						<span className="text-primary-dark font-semibold">
							{categoryDisplayNames[currentCategory] || currentCategory}
						</span>
					</nav>
				</div>
			</div>

			{/* Main Content Area */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
					{/* Sidebar Navigation */}
					{sections.length > 0 && (
						<aside className="hidden lg:block w-64 flex-shrink-0">
							<div className="sticky top-28 space-y-6 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-hide">
								{/* Table of Contents Card */}
								<nav className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-primary-soft/30 overflow-hidden">
									{/* Card Header */}
									<div className="bg-gradient-to-r from-primary to-primary-dark px-4 py-3 sticky top-0 z-10">
										<div className="flex items-center gap-2">
											<svg
												className="w-4 h-4 text-white/90"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M4 6h16M4 12h16M4 18h7"
												/>
											</svg>
											<h3 className="font-semibold text-white text-xs uppercase tracking-wider">
												On This Page
											</h3>
										</div>
									</div>

									{/* Navigation Links - Scrollable with hidden scrollbar */}
									<div className="p-3 max-h-[50vh] overflow-y-auto scrollbar-hide">
										<ul className="space-y-0.5">
											{sections.map((section) => (
												<li key={section.id}>
													<a
														href={`#${section.id}`}
														onClick={(e) => {
															e.preventDefault();
															scrollToSection(section.id);
														}}
														className={`group flex items-start gap-2 text-sm py-2.5 px-3 rounded-lg transition-all duration-200 ${
															activeSection === section.id
																? 'bg-primary-soft/20 text-primary-dark font-medium border-l-2 border-primary'
																: 'text-slate-600 hover:text-primary-dark hover:bg-primary-ultra-soft'
														}`}
													>
														<span
															className={`flex-shrink-0 w-1 h-1 rounded-full mt-2 transition-all duration-200 ${
																activeSection === section.id
																	? 'bg-primary scale-125'
																	: 'bg-slate-300 group-hover:bg-primary-soft'
															}`}
														/>
														<span className="flex-1 leading-snug">{section.heading}</span>
													</a>
												</li>
											))}
										</ul>
									</div>
								</nav>

								{/* Category Quick Links */}
								<div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-primary-soft/30 overflow-hidden">
									<div className="bg-gradient-to-r from-primary to-primary-dark px-4 py-3">
										<div className="flex items-center gap-2">
											<svg
												className="w-4 h-4 text-white/90"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
												/>
											</svg>
											<h3 className="font-semibold text-white text-xs uppercase tracking-wider">
												Explore Gear
											</h3>
										</div>
									</div>

									<div className="p-3 space-y-1">
										{['paddles', 'shoes', 'balls'].map((cat) => (
											<Link
												key={cat}
												href={`/pickleball-gear/${cat}`}
												className={`group flex items-center gap-3 text-sm py-2.5 px-3 rounded-lg transition-all duration-200 ${
													currentCategory === cat
														? 'bg-gradient-to-r from-primary to-primary-dark text-white font-medium shadow-sm'
														: 'text-slate-600 hover:text-primary-dark hover:bg-primary-ultra-soft'
												}`}
											>
												<span className="text-base">
													{cat === 'paddles' && '🏓'}
													{cat === 'shoes' && '👟'}
													{cat === 'balls' && '🎾'}
												</span>
												<span className="flex-1 capitalize">
													{categoryDisplayNames[cat]}
												</span>
												{currentCategory === cat && (
													<svg
														className="w-4 h-4 text-white"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fillRule="evenodd"
															d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
															clipRule="evenodd"
														/>
													</svg>
												)}
											</Link>
										))}
									</div>
								</div>

								{/* Pro Tip Card */}
								<div className="bg-gradient-to-br from-primary-ultra-soft to-primary-super-soft rounded-xl p-4 border border-primary-soft/30">
									<div className="flex items-start gap-3">
										<div className="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
											<svg
												className="w-4 h-4 text-white"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										</div>
										<div>
											<p className="text-xs font-semibold text-primary-dark uppercase tracking-wide mb-1">
												Pro Tip
											</p>
											<p className="text-sm text-slate-700 leading-relaxed">
												Click any section to jump instantly! The URL updates automatically.
											</p>
										</div>
									</div>
								</div>
							</div>
						</aside>
					)}

					{/* Main Article Content */}
					<main className="flex-1 min-w-0">
						<article className="bg-white rounded-2xl shadow-sm border border-primary-soft/30 overflow-hidden">
							{/* Content Wrapper with Premium Padding */}
							<div className="p-6 sm:p-8 lg:p-12">{children}</div>
						</article>
					</main>
				</div>
			</div>

			{/* Mobile Floating TOC Button */}
			{sections.length > 0 && (
				<div className="lg:hidden fixed bottom-6 right-6 z-40">
					<details className="group">
						<summary className="list-none cursor-pointer">
							<div className="bg-gradient-to-r from-primary to-primary-dark text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
								<svg
									className="w-6 h-6 group-open:rotate-180 transition-transform duration-300"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h7"
									/>
								</svg>
							</div>
						</summary>
						<div className="absolute bottom-20 right-0 w-72 bg-white rounded-xl shadow-xl border border-primary-soft/30 p-4">
							<h3 className="font-semibold text-primary-dark mb-3 text-sm">
								Jump to Section
							</h3>
							<ul className="space-y-1 max-h-96 overflow-y-auto scrollbar-hide">
								{sections.map((section) => (
									<li key={section.id}>
										<a
											href={`#${section.id}`}
											onClick={(e) => {
												e.preventDefault();
												scrollToSection(section.id);
											}}
											className="block text-sm py-2 px-3 text-slate-600 hover:text-primary-dark hover:bg-primary-ultra-soft rounded-lg transition-colors"
										>
											{section.heading}
										</a>
									</li>
								))}
							</ul>
						</div>
					</details>
				</div>
			)}
		</div>
	);
}
