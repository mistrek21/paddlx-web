// src/app/profile/_components/PricingSection.tsx

'use client';
import { useState } from 'react';
import {
	Crown,
	Loader2,
	Zap,
	TrendingUp,
	Users,
	Shield,
	Sparkles,
	Bot,
	Palette,
	Code,
} from 'lucide-react';

const pricingOptions = [
	{
		plan: 'PREMIUM' as const,
		name: 'Premium',
		gradient: 'from-orange-500 to-red-500',
		features: [
			{ icon: Zap, text: 'Unlimited Games' },
			{ icon: TrendingUp, text: 'Advanced Stats' },
			{ icon: Users, text: 'Priority Support' },
			{ icon: Shield, text: 'Ad-Free Experience' },
		],
		prices: [
			{ duration: '4', label: '4 Weeks', price: 19.99, savings: null },
			{
				duration: '52',
				label: '52 Weeks',
				price: 199.99,
				savings: '20% OFF',
				popular: true,
			},
			{ duration: 'monthly', label: 'Monthly', price: 9.99, savings: null },
		],
	},
	{
		plan: 'PRO' as const,
		name: 'Pro',
		gradient: 'from-purple-500 to-pink-500',
		features: [
			{ icon: Sparkles, text: 'Everything in Premium' },
			{ icon: Bot, text: 'AI Match Insights' },
			{ icon: Palette, text: 'Custom Branding' },
			{ icon: Code, text: 'API Access' },
		],
		prices: [
			{ duration: '4', label: '4 Weeks', price: 39.99, savings: null },
			{
				duration: '52',
				label: '52 Weeks',
				price: 399.99,
				savings: '20% OFF',
				popular: true,
			},
			{ duration: 'monthly', label: 'Monthly', price: 19.99, savings: null },
		],
	},
];

interface PricingSectionProps {
	isBasic: boolean;
	checkoutLoading: boolean;
	onUpgrade: (plan: 'PREMIUM' | 'PRO', duration: string) => void;
}

export function PricingSection({
	isBasic,
	checkoutLoading,
	onUpgrade,
}: PricingSectionProps) {
	const [selectedPlan, setSelectedPlan] = useState<'PREMIUM' | 'PRO'>('PREMIUM');

	return (
		<div className="bg-white rounded-3xl shadow-xl p-8">
			<h2 className="text-3xl font-black text-gray-900 mb-2">
				{isBasic ? 'Choose Your Plan' : 'Upgrade Your Plan'}
			</h2>
			<p className="text-gray-600 mb-6">
				{isBasic
					? 'Unlock premium features and take your game to the next level'
					: 'Switch to a different plan or extend your subscription'}
			</p>

			<div className="flex gap-4 mb-8">
				{pricingOptions.map((option) => (
					<button
						key={option.plan}
						onClick={() => setSelectedPlan(option.plan)}
						className={`flex-1 p-6 rounded-2xl border-2 transition-all ${
							selectedPlan === option.plan
								? `border-transparent bg-gradient-to-br ${option.gradient} text-white shadow-lg`
								: 'border-gray-200 hover:border-gray-300'
						}`}
					>
						<Crown className="w-8 h-8 mb-2" />
						<h3 className="text-2xl font-black mb-2">{option.name}</h3>
						<p
							className={
								selectedPlan === option.plan ? 'text-white/90' : 'text-gray-600'
							}
						>
							{option.plan === 'PREMIUM' ? 'Most Popular' : 'Best Value'}
						</p>
					</button>
				))}
			</div>

			{pricingOptions
				.filter((opt) => opt.plan === selectedPlan)
				.map((selectedOption) => (
					<div key={selectedOption.plan}>
						<div className="grid grid-cols-2 gap-4 mb-8">
							{selectedOption.features.map((feature, idx) => (
								<div key={idx} className="flex items-start gap-3">
									<feature.icon className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
									<span className="font-semibold text-gray-900">{feature.text}</span>
								</div>
							))}
						</div>

						<div className="space-y-4">
							{selectedOption.prices.map((price) => (
								<div
									key={price.duration}
									className={`relative p-6 rounded-2xl border-2 transition-all ${
										price.popular
											? 'border-teal-500 bg-teal-50'
											: 'border-gray-200 hover:border-teal-300'
									}`}
								>
									{price.popular && (
										<span className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
											BEST VALUE
										</span>
									)}
									<div className="flex items-center justify-between">
										<div>
											<h4 className="text-xl font-bold text-gray-900">{price.label}</h4>
											<div className="flex items-baseline gap-2 mt-1">
												<span className="text-3xl font-black text-gray-900">
													${price.price}
												</span>
												{price.duration === 'monthly' && (
													<span className="text-gray-600">/month</span>
												)}
											</div>
											{price.savings && (
												<span className="text-sm text-green-600 font-bold">
													{price.savings}
												</span>
											)}
										</div>
										<button
											onClick={() => onUpgrade(selectedOption.plan, price.duration)}
											disabled={checkoutLoading}
											className={`bg-gradient-to-r ${selectedOption.gradient} text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50`}
										>
											{checkoutLoading ? (
												<Loader2 className="w-5 h-5 animate-spin" />
											) : (
												'Select'
											)}
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
		</div>
	);
}
