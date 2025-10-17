// components/DynamicCtaSection.tsx
'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SupportContactModal } from '@/src/app/_components/modals/SupportContactModal';
import { useSupportModalAdvanced } from '@/src/hooks/useSupportModal';
import colorSchemes, { ColorScheme } from '../palettes/colorSchemes';

// --- TypeScript setup
type ColorSchemeKey = keyof typeof colorSchemes;

type DynamicCtaSectionProps = {
	title: string;
	subtitle: string;
	buttonText: string;
	buttonHref: string;
	featureList: string[];
	buttonSubtext?: string;
	supportLabel?: string;
	colorScheme?: ColorSchemeKey;
};

// Improved utility to determine if background is dark
function isDarkBackground(palette: ColorScheme): boolean {
	const darkPatterns = [
		'blue-700',
		'blue-800',
		'blue-900',
		'indigo-700',
		'indigo-800',
		'indigo-900',
		'gray-800',
		'gray-900',
		'slate-700',
		'slate-800',
		'slate-900',
		'teal-700',
		'teal-800',
		'teal-900',
		'purple-700',
		'purple-800',
		'purple-900',
		'emerald-700',
		'emerald-800',
		'emerald-900',
		'cyan-700',
		'cyan-800',
		'cyan-900',
		'green-700',
		'green-800',
		'green-900',
		'orange-700',
		'orange-800',
		'orange-900',
		'orange-500',
		'orange-600',
		'amber-700',
		'amber-800',
		'amber-900',
	];

	return darkPatterns.some((pattern) => palette.background.includes(pattern));
}

export default function DynamicCtaSection({
	title,
	subtitle,
	buttonText,
	buttonHref,
	featureList,
	buttonSubtext,
	supportLabel = 'Need help? Contact Support',
	colorScheme = 'teal',
}: DynamicCtaSectionProps) {
	const palette = colorSchemes[colorScheme] ?? colorSchemes['teal'];
	const { open: openSupportModal } = useSupportModalAdvanced();

	const isDark = isDarkBackground(palette);

	// Standardized text colors based on background
	const textColors = {
		title: isDark ? 'text-white' : 'text-gray-900',
		subtitle: isDark ? 'text-white/90' : 'text-gray-700',
		feature: isDark ? 'text-white/95' : 'text-gray-800',
		support: isDark ? 'text-white/80' : 'text-gray-600',
		supportHover: isDark ? 'text-white' : 'text-gray-900',
		buttonSubtext: isDark ? 'text-white/85' : 'text-gray-600',
	};

	return (
		<section
			className={`${palette.background} relative overflow-hidden py-20 lg:py-24`}
		>
			{/* Subtle overlay for depth */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />

			<div className="container relative z-10 mx-auto px-6">
				<div className="mx-auto max-w-4xl text-center">
					{/* Title */}
					<h2
						className={`mb-6 text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl ${textColors.title}`}
					>
						{title}
					</h2>

					{/* Subtitle */}
					<p
						className={`mx-auto mb-10 max-w-2xl text-lg font-medium leading-relaxed lg:text-xl ${textColors.subtitle}`}
					>
						{subtitle}
					</p>

					{/* CTA Button */}
					<div className="mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Button
							asChild
							size="lg"
							className={`
								group
								rounded-full 
								px-8 py-6 
								text-lg font-semibold 
								shadow-lg 
								transition-all 
								duration-200
								hover:scale-105 
								hover:shadow-xl
								focus-visible:outline-none 
								focus-visible:ring-2 
								focus-visible:ring-offset-2
								${palette.ctaButton} 
								${palette.ctaButtonHover}
							`}
						>
							<Link href={buttonHref} className="flex items-center gap-2">
								{buttonText}
								<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
							</Link>
						</Button>
					</div>

					{/* Button Subtext */}
					{buttonSubtext && (
						<p className={`mb-10 text-sm ${textColors.buttonSubtext}`}>
							{buttonSubtext}
						</p>
					)}

					{/* Support Link */}
					{!buttonSubtext && (
						<div className="mb-10">
							<Button
								variant="link"
								onClick={() => openSupportModal()}
								className={`
									text-sm
									font-medium
									underline-offset-4
									transition-all
									duration-150
									hover:underline
									focus-visible:outline-none
									focus-visible:ring-2
									focus-visible:ring-offset-2
									${textColors.support}
								`}
								style={{
									color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgb(75, 85, 99)',
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.color = isDark
										? 'rgb(255, 255, 255)'
										: 'rgb(17, 24, 39)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.color = isDark
										? 'rgba(255, 255, 255, 0.8)'
										: 'rgb(75, 85, 99)';
								}}
							>
								{supportLabel}
							</Button>
						</div>
					)}

					{/* Feature List */}
					<div className="relative mt-12">
						{/* Decorative line with center dot */}
						<div
							className="absolute left-1/2 top-0 h-px w-full max-w-md -translate-x-1/2"
							style={{
								background: isDark
									? 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.25), transparent)'
									: 'linear-gradient(to right, transparent, rgba(209, 213, 219, 0.5), transparent)',
							}}
						/>
						<div
							className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
							style={{
								backgroundColor: isDark
									? 'rgba(255, 255, 255, 0.35)'
									: 'rgba(156, 163, 175, 0.5)',
								boxShadow: isDark
									? '0 0 0 4px rgba(255, 255, 255, 0.1)'
									: '0 0 0 4px rgba(209, 213, 219, 0.2)',
							}}
						/>

						<div className="pt-12">
							<div
								className={`mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ${textColors.feature}`}
							>
								{featureList.map((feature, index) => (
									<div
										key={feature}
										style={{
											animationDelay: `${index * 100}ms`,
										}}
										className={`
											group relative overflow-hidden rounded-xl p-4 shadow-lg backdrop-blur-sm 
											transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5
											${
												isDark
													? 'border border-white/15 bg-gradient-to-br from-white/10 to-white/5 hover:border-white/25 hover:from-white/15 hover:to-white/10'
													: 'border border-gray-200/50 bg-gradient-to-br from-gray-100/50 to-gray-50/30 hover:border-gray-300/70 hover:from-gray-200/60 hover:to-gray-100/40'
											}
										`}
									>
										{/* Shine effect on hover */}
										<div
											className="absolute inset-0 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"
											style={{
												background: isDark
													? 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent)'
													: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)',
											}}
										/>

										<div className="relative flex items-start gap-3">
											{/* Icon container with glow */}
											<div className="relative flex-shrink-0">
												<div
													className="absolute inset-0 rounded-full blur-md transition-all"
													style={{
														backgroundColor: isDark
															? 'rgba(52, 211, 153, 0.2)'
															: 'rgba(16, 185, 129, 0.15)',
													}}
												/>
												<div
													className="relative flex h-8 w-8 items-center justify-center rounded-full ring-1 transition-all"
													style={{
														backgroundColor: isDark
															? 'rgba(16, 185, 129, 0.1)'
															: 'rgba(209, 250, 229, 0.8)',
														borderColor: isDark
															? 'rgba(52, 211, 153, 0.2)'
															: 'rgba(16, 185, 129, 0.3)',
													}}
												>
													<CheckCircle2
														className="h-4.5 w-4.5 transition-transform group-hover:scale-110"
														style={{
															color: 'white',
														}}
													/>
												</div>
											</div>

											{/* Feature text */}
											<span className="flex-1 pt-0.5 text-sm font-semibold leading-relaxed">
												{feature}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Support Link Below Features (when buttonSubtext exists) */}
					{buttonSubtext && (
						<div className="mt-8">
							<Button
								variant="link"
								onClick={() => openSupportModal()}
								className={`
									text-sm
									font-medium
									underline-offset-4
									transition-all
									duration-150
									hover:underline
									focus-visible:outline-none
									focus-visible:ring-2
									focus-visible:ring-offset-2
									${textColors.support}
								`}
								style={{
									color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgb(75, 85, 99)',
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.color = isDark
										? 'rgb(255, 255, 255)'
										: 'rgb(17, 24, 39)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.color = isDark
										? 'rgba(255, 255, 255, 0.8)'
										: 'rgb(75, 85, 99)';
								}}
							>
								{supportLabel}
							</Button>
						</div>
					)}
				</div>
			</div>

			<SupportContactModal colorScheme={colorScheme} />
		</section>
	);
}
