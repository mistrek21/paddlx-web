// src/app/_components/modals/MobileAppModal.tsx

'use client';

import { X, Download, Star, Sparkles } from 'lucide-react';
import { useEffect, useState, memo, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface MobileAppModalProps {
	isOpen: boolean;
	onClose: () => void;
	action: string;
}

const MobileAppModal = memo(function MobileAppModal({
	isOpen,
	onClose,
	action,
}: MobileAppModalProps) {
	const [isVisible, setIsVisible] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	useEffect(() => {
		if (isOpen) {
			// Small delay to trigger animation
			requestAnimationFrame(() => {
				setIsVisible(true);
				setIsClosing(false);
			});
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	const handleClose = useCallback(() => {
		setIsClosing(true);
		setIsVisible(false);
		setTimeout(onClose, 300);
	}, [onClose]);

	// Prevent unnecessary renders when modal is closed
	if (!isOpen) return null;

	return (
		<>
			{/* Backdrop */}
			<div
				className={cn(
					'fixed inset-0 z-[9999] bg-dark-slate/70 backdrop-blur-sm transition-opacity duration-300 cursor-pointer',
					isVisible && !isClosing ? 'opacity-100' : 'opacity-0'
				)}
				onClick={handleClose}
				aria-hidden="true"
			/>

			{/* Modal Container */}
			<div
				className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center sm:p-4 pointer-events-none"
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-title"
			>
				<div
					className={cn(
						'relative w-full bg-background transition-all duration-300 ease-out pointer-events-auto',
						'max-w-md shadow-2xl',
						'rounded-t-3xl sm:rounded-3xl',
						'max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col',
						isVisible && !isClosing
							? 'translate-y-0 opacity-100 scale-100'
							: 'translate-y-full sm:translate-y-0 opacity-0 sm:scale-95'
					)}
					onClick={(e) => e.stopPropagation()}
				>
					{/* Drag Handle (Mobile Only) */}
					<div className="flex justify-center pt-3 pb-2 sm:hidden">
						<div className="h-1.5 w-12 rounded-full bg-cool-gray" />
					</div>

					{/* Close Button */}
					<button
						onClick={handleClose}
						className={cn(
							'absolute top-4 right-4 z-10 rounded-full p-2 cursor-pointer',
							'bg-cool-gray/80 backdrop-blur-sm',
							'text-slate-gray hover:text-dark-slate',
							'transition-all duration-200',
							'hover:bg-cool-gray hover:scale-110',
							'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
						)}
						aria-label="Close modal"
					>
						<X className="h-5 w-5" />
					</button>

					{/* Decorative Background Gradient - Simplified */}
					<div className="absolute inset-x-0 top-0 h-48 overflow-hidden pointer-events-none">
						<div className="absolute inset-0 bg-gradient-to-br from-primary-ultra-soft via-light-blue-3 to-transparent" />
					</div>

					{/* Content */}
					<div className="relative px-5 pb-5 pt-6 sm:pt-8 overflow-y-auto overscroll-contain">
						{/* App Icon */}
						<AppIcon isVisible={isVisible} />

						{/* Title & Description */}
						<div className="mb-5 text-center">
							<h2
								id="modal-title"
								className="mb-2 text-balance text-2xl font-black tracking-tight text-dark-slate"
							>
								Get the PaddlX App
							</h2>
							<p className="text-pretty text-sm leading-relaxed text-slate-gray">
								To <span className="font-bold text-primary">{action}</span>, download
								our mobile app for the best experience.
							</p>
						</div>

						{/* Features Grid */}
						<FeaturesList isVisible={isVisible} />

						{/* Download Buttons */}
						<DownloadButtons />

						{/* Rating */}
						<Rating />

						{/* Continue on Web */}
						<button
							onClick={handleClose}
							className={cn(
								'mt-4 w-full rounded-xl py-2.5 text-center text-sm font-semibold cursor-pointer',
								'text-slate-gray transition-all duration-200',
								'hover:text-dark-slate hover:bg-cool-gray',
								'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
								'active:scale-[0.98]'
							)}
						>
							Continue on web instead
						</button>
					</div>
				</div>
			</div>
		</>
	);
});

// Separate memoized components for better performance
const AppIcon = memo(({ isVisible }: { isVisible: boolean }) => (
	<div className="mb-4 flex justify-center">
		<div className="relative">
			<div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-primary/30 via-mint/25 to-ocean/20 blur-xl" />
			<div
				className={cn(
					'relative flex h-20 w-20 items-center justify-center',
					'rounded-[24px] border-[3px] border-white',
					'bg-gradient-to-br from-primary via-primary-light to-mint',
					'shadow-2xl shadow-primary/30',
					'transition-transform duration-300',
					isVisible && 'animate-in zoom-in-50 duration-500'
				)}
			>
				<span className="text-4xl font-black text-white drop-shadow-lg">P</span>
			</div>
			<div
				className={cn(
					'absolute -bottom-1.5 -right-1.5 rounded-full bg-gradient-to-br from-accent to-coral p-2 shadow-lg shadow-accent/40',
					'ring-4 ring-background',
					'transition-all duration-300 delay-200',
					isVisible && 'animate-in zoom-in-50'
				)}
			>
				<Download className="h-3.5 w-3.5 text-white" />
			</div>
			<Sparkles
				className={cn(
					'absolute -top-1.5 -right-1.5 h-5 w-5 text-gold drop-shadow-lg',
					'transition-all duration-300 delay-300',
					isVisible && 'animate-in zoom-in-50'
				)}
			/>
		</div>
	</div>
));
AppIcon.displayName = 'AppIcon';

const features = [
	{
		emoji: '🎾',
		text: 'Book courts instantly',
		gradient: 'from-accent to-coral',
	},
	{
		emoji: '👥',
		text: 'Join sessions & groups',
		gradient: 'from-primary to-mint',
	},
	{
		emoji: '🏆',
		text: 'Track your games & stats',
		gradient: 'from-purple to-lavender',
	},
];

const FeaturesList = memo(({ isVisible }: { isVisible: boolean }) => (
	<div className="mb-5 rounded-2xl border border-border bg-gradient-to-br from-light-blue-4 to-pale-blue p-4 backdrop-blur-sm shadow-sm">
		<div className="space-y-3">
			{features.map((feature, index) => (
				<div
					key={index}
					className={cn(
						'flex items-center gap-3 transition-all duration-300',
						isVisible && `animate-in slide-in-from-left-4 delay-${(index + 1) * 100}`
					)}
				>
					<div
						className={cn(
							'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-md',
							'bg-gradient-to-br',
							feature.gradient
						)}
					>
						<span className="text-xl filter drop-shadow-sm">{feature.emoji}</span>
					</div>
					<p className="text-sm font-semibold text-dark-slate">{feature.text}</p>
				</div>
			))}
		</div>
	</div>
));
FeaturesList.displayName = 'FeaturesList';

const DownloadButtons = memo(() => (
	<div className="space-y-3">
		{/* App Store */}
		<a
			href="https://apps.apple.com/app/paddlx"
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				'group relative flex w-full items-center gap-3 rounded-2xl py-3 px-5 overflow-hidden cursor-pointer',
				'bg-dark-slate',
				'shadow-lg hover:shadow-xl shadow-dark-slate/20',
				'transition-all duration-300 ease-out',
				'hover:scale-[1.02] active:scale-[0.98]',
				'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
				'border border-slate/10'
			)}
		>
			<div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-light/0 to-primary/0 group-hover:from-primary/8 group-hover:via-primary-light/8 group-hover:to-primary/8 transition-all duration-300" />
			<div className="relative flex items-center justify-center rounded-xl bg-white p-2 shadow-md group-hover:scale-110 transition-transform duration-300">
				<svg className="h-7 w-7" fill="black" viewBox="0 0 24 24">
					<path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
				</svg>
			</div>
			<div className="relative text-left flex-1">
				<div className="text-xs font-medium text-white/70 tracking-wide">
					Download on the
				</div>
				<div className="text-lg font-bold text-white -mt-0.5 tracking-tight">
					App Store
				</div>
			</div>
			<svg
				className="h-5 w-5 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2.5}
					d="M9 5l7 7-7 7"
				/>
			</svg>
		</a>

		{/* Google Play */}
		<a
			href="https://play.google.com/store/apps/details?id=com.paddlx"
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				'group relative flex w-full items-center gap-3 rounded-2xl py-3 px-5 overflow-hidden cursor-pointer',
				'bg-gradient-to-br from-[#01875f] via-[#01875f] to-[#006B4D]',
				'shadow-lg hover:shadow-xl shadow-green/20',
				'transition-all duration-300 ease-out',
				'hover:scale-[1.02] active:scale-[0.98]',
				'focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2',
				'border border-white/10'
			)}
		>
			<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/10 transition-all duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" />
			<div className="relative flex items-center justify-center rounded-xl bg-white p-2 shadow-md group-hover:scale-110 transition-transform duration-300">
				<svg className="h-7 w-7" viewBox="0 0 24 24">
					<path
						fill="#00D962"
						d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z"
					/>
					<path
						fill="#00A94F"
						d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z"
					/>
					<path
						fill="#FFCD40"
						d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z"
					/>
					<path fill="#00A2F1" d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
				</svg>
			</div>
			<div className="relative text-left flex-1">
				<div className="text-xs font-medium text-white/80 tracking-wide">
					GET IT ON
				</div>
				<div className="text-lg font-bold text-white -mt-0.5 tracking-tight">
					Google Play
				</div>
			</div>
			<svg
				className="h-5 w-5 text-white/50 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2.5}
					d="M9 5l7 7-7 7"
				/>
			</svg>
		</a>
	</div>
));
DownloadButtons.displayName = 'DownloadButtons';

const Rating = memo(() => (
	<div className="mt-4 flex items-center justify-center gap-2 text-sm">
		<div className="flex items-center gap-0.5">
			{[...Array(5)].map((_, i) => (
				<Star key={i} className="h-3.5 w-3.5 fill-gold text-gold drop-shadow-sm" />
			))}
		</div>
		<span className="font-bold text-dark-slate">4.8</span>
		<span className="text-slate-gray/60">•</span>
		<span className="text-slate-gray font-medium">10K+ downloads</span>
	</div>
));
Rating.displayName = 'Rating';

export default MobileAppModal;
