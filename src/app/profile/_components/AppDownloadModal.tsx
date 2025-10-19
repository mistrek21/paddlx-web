// src/app/profile/_components/AppDownloadModal.tsx

'use client';

import { Download, Apple, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AppDownloadModal() {
	const [isOpen, setIsOpen] = useState(true);

	// Handle escape key press
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsOpen(false);
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<>
			<style>{`
				:root {
					--color-primary: #2A9DB0;
					--color-primary-dark: #1A8DA0;
					--color-primary-light: #4DB5C7;
					--color-primary-soft: #7BC9D6;
					--color-primary-super-soft: #B8DCE8;
					--color-primary-ultra-soft: #E6F7F9;
					--color-accent: #FF6B4A;
					--color-accent-dark: #E55A3A;
					--color-accent-light: #FF8B6B;
				}
				
				.bg-primary {
					background-color: var(--color-primary);
				}
				
				.bg-primary-dark {
					background-color: var(--color-primary-dark);
				}
				
				.bg-primary-light {
					background-color: var(--color-primary-light);
				}
				
				.bg-primary-ultra-soft {
					background-color: var(--color-primary-ultra-soft);
				}
				
				.bg-accent {
					background-color: var(--color-accent);
				}
				
				.bg-accent-dark {
					background-color: var(--color-accent-dark);
				}
				
				.text-primary {
					color: var(--color-primary);
				}
				
				.text-primary-dark {
					color: var(--color-primary-dark);
				}
				
				.text-accent {
					color: var(--color-accent);
				}
				
				.border-primary-soft {
					border-color: var(--color-primary-soft);
				}
				
				.bg-gradient-primary {
					background: linear-gradient(to bottom right, var(--color-primary-ultra-soft), var(--color-primary-super-soft), #ffffff);
				}
				
				.bg-gradient-primary-button {
					background: linear-gradient(to bottom right, var(--color-primary), var(--color-primary-dark));
				}
				
				.bg-gradient-accent-button {
					background: linear-gradient(to bottom right, var(--color-accent), var(--color-accent-dark));
				}
				
				.badge-primary {
					background-color: var(--color-primary-ultra-soft);
					color: var(--color-primary-dark);
				}
				
				.hover\\:bg-primary-light:hover {
					background-color: var(--color-primary-light);
				}
				
				.hover\\:bg-accent-light:hover {
					background-color: var(--color-accent-light);
				}
			`}</style>

			<div
				className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm"
				onClick={() => setIsOpen(false)}
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-title"
			>
				<div
					className="relative w-full sm:max-w-3xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-gradient-primary p-6 sm:p-8 shadow-xl border-t sm:border border-primary-soft animate-in slide-in-from-bottom sm:fade-in sm:zoom-in duration-300"
					onClick={(e) => e.stopPropagation()}
				>
					{/* Drag Handle for Mobile */}
					<div className="flex justify-center mb-3 sm:hidden">
						<div
							className="w-12 h-1.5 rounded-full"
							style={{ backgroundColor: 'var(--color-primary-soft)' }}
						/>
					</div>

					{/* Close Button */}
					<button
						onClick={() => setIsOpen(false)}
						className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors duration-200 group cursor-pointer shadow-sm"
						aria-label="Close modal"
					>
						<X className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
					</button>

					{/* Header Section */}
					<div className="mb-6">
						<div className="inline-block mb-3 px-3 py-1 badge-primary rounded-full">
							<p className="text-xs font-semibold uppercase tracking-wider">
								Mobile App
							</p>
						</div>
						<h2
							id="modal-title"
							className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3"
						>
							Get the Full Experience
						</h2>
						<p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
							Download our app to book courts, join games, create groups, chat, and
							access all features. The web portal is exclusively for{' '}
							<span className="font-bold text-accent">Premium subscriptions</span> at
							special web pricing.
						</p>
					</div>

					{/* Download Buttons */}
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
						{/* App Store Button */}
						<a
							href="https://apps.apple.com/app/pickleheads"
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 bg-gradient-to-br from-gray-900 to-gray-800"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
							<div className="relative flex items-center justify-center gap-3">
								<Apple className="w-6 h-6 text-white" />
								<div className="text-left">
									<p className="text-xs text-gray-300 font-medium">Download on</p>
									<p className="text-lg font-bold text-white">App Store</p>
								</div>
							</div>
						</a>

						{/* Google Play Button */}
						<a
							href="https://play.google.com/store/apps/details?id=com.pickleheads.app"
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 group relative overflow-hidden rounded-2xl bg-gradient-primary-button p-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 hover:bg-primary-light"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
							<div className="relative flex items-center justify-center gap-3">
								<Download className="w-6 h-6 text-white" />
								<div className="text-left">
									<p className="text-xs text-white/90 font-medium">Get it on</p>
									<p className="text-lg font-bold text-white">Google Play</p>
								</div>
							</div>
						</a>
					</div>

					{/* Features List */}
					<div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary-soft">
						<p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
							What you get
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
							{[
								{ icon: '🎾', label: 'Book Courts' },
								{ icon: '👥', label: 'Join Games' },
								{ icon: '💬', label: 'Live Chat' },
								{ icon: '🏆', label: 'Tournaments' },
							].map((feature) => (
								<div
									key={feature.label}
									className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/70 hover:bg-white transition-all duration-200 hover:shadow-md"
								>
									<span className="text-2xl">{feature.icon}</span>
									<p className="text-xs font-semibold text-gray-700 text-center">
										{feature.label}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Safe area padding for mobile devices with home indicators */}
					<div className="h-4 sm:hidden" />
				</div>
			</div>
		</>
	);
}
