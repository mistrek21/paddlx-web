'use client';

import React, { useEffect, useState } from 'react';
import { Mail, CheckCircle2, Sparkles, ArrowRight, Zap } from 'lucide-react';

export default function NewsletterSection() {
	const [email, setEmail] = useState('');
	const [gdprConsent, setGdprConsent] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [marketingConsent, setMarketingConsent] = useState(true); // default true
	const [playerLevel, setPlayerLevel] = useState('beginner'); // let user pick or infer by default
	const [interests, setInterests] = useState(['tips', 'tournaments']); // customizable, array
	const [location, setLocation] = useState(''); // will be set via geolocation

	const [showPrivacyModal, setShowPrivacyModal] = useState(false);
	const [showTermsModal, setShowTermsModal] = useState(false);

	// Geolocation lookup on mount
	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				async (pos) => {
					const { latitude, longitude } = pos.coords;
					try {
						const response = await fetch(
							`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
						);
						const data = await response.json();
						const city =
							data.address?.city || data.address?.town || data.address?.village || '';
						const country = data.address?.country || '';
						const locString = [city, country].filter(Boolean).join(', ');
						setLocation(locString);
					} catch {
						setLocation('');
					}
				},
				() => setLocation('')
			);
		}
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!gdprConsent) {
			alert('Please accept the privacy policy and terms to continue.');
			return;
		}
		setIsSubmitting(true);
		try {
			const apiBase = process.env.NEXT_PUBLIC_IP_CONFIG;
			// OR fallback directly if env not available
			// const apiBase = "https://paddle-api.vercel.app";

			const res = await fetch(`${apiBase}/api/web/newsletter/subscribe`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					gdprConsent,
					marketingConsent,
					playerLevel,
					interests,
					location,
				}),
			});
			const data = await res.json();
			if (res.ok) {
				setIsSuccess(true);
			} else {
				alert(data.error || 'Subscription failed. Please try again.');
			}
		} catch (err) {
			alert('An unexpected error occurred. Please try again.');
		}

		setIsSubmitting(false);

		setTimeout(() => {
			setIsSuccess(false);
			setEmail('');
			setGdprConsent(false);
			setMarketingConsent(true);
			setPlayerLevel('beginner');
			setInterests(['tips', 'tournaments']);
			setLocation('');
		}, 4000);
	};

	return (
		<section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-[#F8FCFD] to-white">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#4DB5C7]/10 to-transparent rounded-full blur-3xl animate-pulse" />
				<div
					className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#FF6B4A]/10 to-transparent rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: '1s' }}
				/>
			</div>

			<div className="relative max-w-6xl mx-auto">
				{isSuccess ? (
					<div className="relative group">
						<div className="absolute inset-0 bg-gradient-to-r from-[#4DB5C7]/20 via-[#FF6B4A]/10 to-[#4DB5C7]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

						<div className="relative bg-white border-2 border-[#E6F7F9] rounded-3xl p-12 shadow-2xl">
							<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
								<div className="relative flex-shrink-0">
									<div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/30 to-[#4DB5C7]/30 rounded-full blur-lg animate-pulse" />
									<div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#E6F7F9] to-[#C7EDF2] flex items-center justify-center animate-bounce">
										<CheckCircle2 className="w-12 h-12 text-[#22C55E]" />
									</div>
								</div>

								<div className="flex-1">
									<h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
										You're all set!
									</h3>
									<p className="text-[#64748B] mb-1">
										Welcome to our exclusive pickleball community.
									</p>
									<p className="text-sm text-[#64748B]">
										Check your inbox for a confirmation email and your first set of expert
										tips.
									</p>
								</div>

								{/* Sparkles */}
								<div className="absolute top-4 right-6 animate-ping">
									<Sparkles className="w-5 h-5 text-[#4DB5C7]" />
								</div>
								<div
									className="absolute top-8 left-6 animate-ping"
									style={{ animationDelay: '0.3s' }}
								>
									<Sparkles className="w-4 h-4 text-[#FF6B4A]" />
								</div>
								<div
									className="absolute bottom-6 right-12 animate-ping"
									style={{ animationDelay: '0.6s' }}
								>
									<Sparkles className="w-4 h-4 text-[#4DB5C7]" />
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Content */}
						<div className="space-y-8">
							<div className="space-y-4">
								<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#E6F7F9] to-[#C7EDF2] border border-[#B8DCE8]">
									<Zap className="w-4 h-4 text-[#2A9DB0]" />
									<span className="text-sm font-bold text-[#2A9DB0] uppercase tracking-wider">
										Pickleball Weekly
									</span>
								</div>

								<div className="space-y-3">
									<h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#0F172A]">
										Master your
										<span className="relative ml-3 inline-block">
											<span className="absolute inset-0 bg-gradient-to-r from-[#4DB5C7] to-[#FF6B4A] blur-lg opacity-75 group-hover:opacity-100 transition-opacity rounded" />
											<span className="relative ">game</span>
										</span>
									</h1>
									<p className="text-lg text-[#64748B] leading-relaxed max-w-md">
										Join thousands of players receiving expert strategies, equipment
										reviews, and tournament preparation guides every week.
									</p>
								</div>
							</div>

							{/* Features */}
							<div className="grid grid-cols-3 gap-4 cursor-pointer">
								{[
									{ icon: '🎯', label: 'Pro Tips' },
									{ icon: '⚙️', label: 'Gear Reviews' },
									{ icon: '🏆', label: 'Strategies' },
								].map((feature, idx) => (
									<div
										key={idx}
										className="group p-4 rounded-xl bg-gradient-to-br from-white to-[#F8FCFD] border border-[#E6F7F9] hover:border-[#4DB5C7] transition-all hover:shadow-lg hover:-translate-y-1"
									>
										<div className="text-3xl mb-2">{feature.icon}</div>
										<p className="text-sm font-semibold text-[#0F172A]">
											{feature.label}
										</p>
									</div>
								))}
							</div>

							{/* Social Proof */}
							<div className="pt-4 border-t border-[#E6F7F9]">
								<p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">
									Trusted by
								</p>
								<div className="flex items-center gap-3">
									<div className="flex -space-x-3">
										{[4, 2, 3, 1].map((num) => (
											<img
												key={num}
												src={`/user-avatar-${num}.jpg`}
												alt={`Subscriber ${num}`}
												className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
											/>
										))}
									</div>
									<div>
										<p className="text-sm font-bold text-[#0F172A]">5,200+</p>
										<p className="text-xs text-[#64748B]">active subscribers</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right Form */}
						<div className="relative group">
							{/* Animated gradient border */}
							<div className="absolute inset-0 bg-gradient-to-br from-[#4DB5C7] via-[#FF6B4A] to-[#4DB5C7] rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:duration-200" />

							<div className="absolute inset-0 bg-gradient-to-br from-[#4DB5C7]/20 to-[#FF6B4A]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

							<div className="relative bg-white backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-[#E6F7F9] group-hover:border-[#4DB5C7]/50 transition-all">
								{/* Header */}
								<div className="mb-8">
									<div className="flex items-center gap-3 mb-3">
										<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E6F7F9] to-[#C7EDF2] flex items-center justify-center">
											<Mail className="w-5 h-5 text-[#2A9DB0]" />
										</div>
										<h3 className="text-lg font-bold text-[#0F172A]">Subscribe Today</h3>
									</div>
									<p className="text-sm text-[#64748B]">
										Get weekly expert insights delivered to your inbox.
									</p>
								</div>

								<form onSubmit={handleSubmit} className="space-y-5">
									{/* Email Input */}
									<div className="space-y-2">
										<label
											htmlFor="email"
											className="block text-xs font-bold text-[#0F172A] uppercase tracking-widest"
										>
											Email Address
										</label>
										<div className="relative group/input">
											<div className="absolute inset-0 bg-gradient-to-r from-[#4DB5C7] to-[#FF6B4A] rounded-xl opacity-0 group-focus-within/input:opacity-20 blur transition-all" />
											<input
												id="email"
												type="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												placeholder="your@email.com"
												className="relative w-full px-5 py-3.5 rounded-xl bg-[#F8FCFD] border-2 border-[#E6F7F9] text-[#0F172A] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#4DB5C7] focus:bg-white transition-all duration-300 font-medium"
												required
												disabled={isSubmitting}
											/>
										</div>
									</div>

									{/* Checkbox */}
									<div
										className={`space-y-3 p-5 rounded-2xl bg-gradient-to-br from-[#E6F7F9]/50 to-[#F8FCFD] border-2 transition-all duration-200
    ${gdprConsent ? 'border-[#4DB5C7] shadow-md scale-105' : 'border-[#E6F7F9]'}
  `}
									>
										<label
											htmlFor="gdpr-consent"
											className="flex items-start gap-3.5 cursor-pointer group/check"
										>
											<input
												id="gdpr-consent"
												type="checkbox"
												checked={gdprConsent}
												onChange={(e) => setGdprConsent(e.target.checked)}
												className="
        w-5 h-5 rounded-lg border-2
        transition-all duration-200
        focus:ring-2 focus:ring-[#4DB5C7]
        accent-[#FF6B4A]
        mt-1 flex-shrink-0
        cursor-pointer
        peer
        " // peer enables advanced styling
												required
												disabled={isSubmitting}
											/>
											<div className="pt-4 border-t border-[#E6F7F9]">
												<p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">
													Trusted by
												</p>
												<div className="flex items-center gap-3">
													<div className="flex -space-x-3">
														{[1, 2, 3, 4].map((num) => (
															<img
																key={num}
																src={`/user-avatar-${num}.jpg`}
																alt={`Subscriber ${num}`}
																className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
															/>
														))}
													</div>
													<div>
														<p className="text-sm font-bold text-[#0F172A]">5,200+</p>
														<p className="text-xs text-[#64748B]">active subscribers</p>
													</div>
												</div>
											</div>
										</label>
									</div>

									{/* Submit Button */}
									<button
										type="submit"
										disabled={isSubmitting || !gdprConsent}
										className="w-full relative group/btn overflow-hidden rounded-xl font-bold text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed py-3.5 text-white"
									>
										{/* Animated gradient background */}
										<div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A] via-[#FF8B6B] to-[#E55A3A] transition-all duration-300" />
										<div className="absolute inset-0 bg-gradient-to-r from-[#E55A3A] via-[#FF6B4A] to-[#FF8B6B] opacity-0 group-hover/btn:opacity-100 transition-all duration-300" />

										{/* Shine effect */}
										<div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity">
											<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
										</div>

										{/* Text Content */}
										<div className="relative flex items-center justify-center gap-2.5 h-full">
											{isSubmitting ? (
												<>
													<div className="w-5 h-5 border-2.5 border-white/40 border-t-white rounded-full animate-spin" />
													<span className="font-bold">Subscribing...</span>
												</>
											) : (
												<>
													<span className="font-bold">Subscribe Now</span>
													<ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
												</>
											)}
										</div>
									</button>

									<p className="text-xs text-center text-[#64748B] font-medium">
										✓ No spam • Unsubscribe anytime • Instant access
									</p>
								</form>
							</div>
						</div>
					</div>
				)}

				<SimpleModal
					show={showPrivacyModal}
					title="Privacy Policy"
					onClose={() => setShowPrivacyModal(false)}
				>
					<div>
						{/* Your privacy policy content, or fetch via API if needed */}
						We value your privacy. Your email will be used to send pickleball tips.
						You can unsubscribe anytime.
					</div>
				</SimpleModal>

				<SimpleModal
					show={showTermsModal}
					title="Terms of Service"
					onClose={() => setShowTermsModal(false)}
				>
					<div>
						{/* Your TOS content, or fetch via API if needed */}
						By subscribing, you agree to receive emails from Pickleball Weekly. No
						spam, ever.
					</div>
				</SimpleModal>
			</div>

			<style>{`
				@keyframes shimmer {
					0% { transform: translateX(-100%); }
					100% { transform: translateX(100%); }
				}
				.animate-shimmer {
					animation: shimmer 2s infinite;
				}
			`}</style>
		</section>
	);
}

function SimpleModal({ show, title, children, onClose }: any) {
	if (!show) return null;
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
			<div className="bg-white rounded-lg p-6 w-full max-w-md relative">
				<h2 className="font-bold text-lg mb-4">{title}</h2>
				<div className="mb-4">{children}</div>
				<button
					onClick={onClose}
					className="mt-2 px-4 py-2 text-[#4DB5C7] font-bold rounded bg-[#E6F7F9] hover:bg-[#4DB5C7]/10 transition-all"
				>
					Close
				</button>
			</div>
		</div>
	);
}
