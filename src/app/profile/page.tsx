// app/profile/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/src/hooks/useAuth';
import { useRouter } from 'next/navigation';
import {
	CreditCard,
	Crown,
	CheckCircle,
	XCircle,
	Loader2,
	Calendar,
	DollarSign,
	Zap,
	Shield,
	Users,
	TrendingUp,
	Sparkles,
	Bot,
	Palette,
	Code,
	AlertCircle,
} from 'lucide-react';
import Image from 'next/image';
import { apiClient } from '@/lib/api-client';

interface Payment {
	id: string;
	amount: number;
	currency: string;
	paymentStatus: string;
	paymentMethod: string;
	transactionId: string | null;
	receiptUrl: string | null;
	createdAt: string;
	paymentGateway: string;
	booking?: {
		id: string;
		court: {
			name: string;
		};
	} | null;
}

interface UserData {
	id: string;
	username: string;
	email: string;
	name?: string;
	surname?: string;
	avatarUrl?: string;
	isPremium: boolean;
	subscriptionPlan: 'BASIC' | 'PREMIUM' | 'PRO';
	subscriptionEndDate?: string;
	createdAt: string;
}

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

export default function ProfilePage() {
	const { user, loading: authLoading } = useAuth();
	const [userData, setUserData] = useState<UserData | null>(null);
	const [payments, setPayments] = useState<Payment[]>([]);
	const [loading, setLoading] = useState(true);
	const [checkoutLoading, setCheckoutLoading] = useState(false);
	const [selectedPlan, setSelectedPlan] = useState<'PREMIUM' | 'PRO'>('PREMIUM');
	const [apiError, setApiError] = useState<string | null>(null);
	const [paymentsError, setPaymentsError] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		if (!authLoading && !user) {
			router.push('/login');
		}
	}, [user, authLoading, router]);

	useEffect(() => {
		if (user) {
			fetchUserData();
			fetchPayments();
		}
	}, [user]);

	async function fetchUserData() {
		try {
			const data = await apiClient(`/api/paddle/profile-users/${user!.id}`, {
				method: 'GET',
			});
			setUserData(data.user);
			setApiError(null);
		} catch (error: any) {
			console.error('Error fetching user data:', error);
			setApiError(error.message || 'Failed to load user data');
			// Set fallback user data from Supabase auth
			setUserData({
				id: user!.id,
				username: user!.email?.split('@')[0] || 'User',
				email: user!.email || '',
				subscriptionPlan: 'BASIC',
				isPremium: false,
				createdAt: new Date().toISOString(),
			});
		} finally {
			setLoading(false);
		}
	}

	async function fetchPayments() {
		try {
			const data = await apiClient(
				`/api/paddle/profile-users/${user!.id}/payments`,
				{
					method: 'GET',
				}
			);
			setPayments(data.payments);
			setPaymentsError(null);
		} catch (error: any) {
			console.error('Error fetching payments:', error);
			setPaymentsError(error.message || 'Failed to load payment history');
			setPayments([]);
		}
	}

	async function handleUpgrade(plan: 'PREMIUM' | 'PRO', duration: string) {
		setCheckoutLoading(true);

		try {
			const { url } = await apiClient('/api/stripe/create-checkout-session', {
				method: 'POST',
				body: JSON.stringify({
					userId: user!.id,
					userEmail: user!.email,
					plan,
					duration,
				}),
			});

			if (url) window.location.href = url;
		} catch (error: any) {
			console.error('Error:', error);
			alert(`Failed to start checkout: ${error.message}`);
		} finally {
			setCheckoutLoading(false);
		}
	}

	if (authLoading || loading) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-slate-100 to-blue-50">
				<Loader2 className="w-12 h-12 animate-spin text-teal-600" />
			</div>
		);
	}

	if (!userData) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-slate-100 to-blue-50 px-4">
				<div className="bg-white rounded-3xl shadow-xl p-8 max-w-md text-center">
					<AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
					<h2 className="text-2xl font-black text-gray-900 mb-2">
						Unable to Load Profile
					</h2>
					<p className="text-gray-600 mb-6">
						Please try again or contact support if the problem persists.
					</p>
					<button
						onClick={() => window.location.reload()}
						className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full"
					>
						Retry
					</button>
				</div>
			</div>
		);
	}

	const isBasic = userData.subscriptionPlan === 'BASIC';
	const daysRemaining = userData.subscriptionEndDate
		? Math.ceil(
				(new Date(userData.subscriptionEndDate).getTime() - Date.now()) /
					(1000 * 60 * 60 * 24)
		  )
		: null;

	return (
		<main className="min-h-screen bg-gradient-to-br from-teal-50 via-slate-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* API Error Alert */}
				{apiError && (
					<div className="mb-6 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 flex items-start gap-3">
						<AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 shrink-0" />
						<div>
							<p className="font-bold text-yellow-900">Limited Profile Data</p>
							<p className="text-sm text-yellow-700">
								{apiError}. Showing basic information from your account.
							</p>
						</div>
					</div>
				)}

				{/* Header */}
				<div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
					<div className="flex items-start justify-between flex-wrap gap-4">
						<div className="flex items-center gap-6">
							{userData.avatarUrl ? (
								<Image
									src={userData.avatarUrl}
									alt={userData.username}
									width={96}
									height={96}
									className="rounded-full border-4 border-teal-200"
								/>
							) : (
								<div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white text-4xl font-bold">
									{userData.username[0].toUpperCase()}
								</div>
							)}
							<div>
								<h1 className="text-4xl font-black text-gray-900 mb-2">
									{userData.name && userData.surname
										? `${userData.name} ${userData.surname}`
										: userData.username}
								</h1>
								<p className="text-gray-600 text-lg">@{userData.username}</p>
								<p className="text-gray-500 text-sm mt-1">{userData.email}</p>
								<p className="text-gray-400 text-xs mt-2">
									Member since{' '}
									{new Date(userData.createdAt).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
									})}
								</p>
							</div>
						</div>

						{/* Subscription Badge */}
						<div>
							{userData.subscriptionPlan === 'PRO' ? (
								<div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg">
									<Crown className="w-6 h-6" />
									<div>
										<span className="font-bold text-lg">Pro Member</span>
										{daysRemaining && (
											<p className="text-xs opacity-90">{daysRemaining} days remaining</p>
										)}
									</div>
								</div>
							) : userData.subscriptionPlan === 'PREMIUM' ? (
								<div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg">
									<Crown className="w-6 h-6" />
									<div>
										<span className="font-bold text-lg">Premium Member</span>
										{daysRemaining && (
											<p className="text-xs opacity-90">{daysRemaining} days remaining</p>
										)}
									</div>
								</div>
							) : (
								<div className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-full">
									<Shield className="w-6 h-6" />
									<span className="font-bold text-lg">Free Plan</span>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Main Content */}
					<div className="lg:col-span-2 space-y-8">
						{/* Pricing Plans - ALWAYS SHOW */}
						<div className="bg-white rounded-3xl shadow-xl p-8">
							<h2 className="text-3xl font-black text-gray-900 mb-2">
								{isBasic ? 'Choose Your Plan' : 'Upgrade Your Plan'}
							</h2>
							<p className="text-gray-600 mb-6">
								{isBasic
									? 'Unlock premium features and take your game to the next level'
									: 'Switch to a different plan or extend your subscription'}
							</p>

							{/* Plan Selector */}
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

							{/* Selected Plan Details */}
							{pricingOptions
								.filter((opt) => opt.plan === selectedPlan)
								.map((selectedOption) => (
									<div key={selectedOption.plan}>
										{/* Features */}
										<div className="grid grid-cols-2 gap-4 mb-8">
											{selectedOption.features.map((feature, idx) => (
												<div key={idx} className="flex items-start gap-3">
													<feature.icon className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
													<span className="font-semibold text-gray-900">{feature.text}</span>
												</div>
											))}
										</div>

										{/* Price Options */}
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
															<h4 className="text-xl font-bold text-gray-900">
																{price.label}
															</h4>
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
															onClick={() =>
																handleUpgrade(selectedOption.plan, price.duration)
															}
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

						{/* Payment History */}
						<div className="bg-white rounded-3xl shadow-xl p-8">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
									<CreditCard className="w-6 h-6 text-white" />
								</div>
								<h2 className="text-2xl font-black text-gray-900">Payment History</h2>
							</div>

							{paymentsError ? (
								<div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-3">
									<AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
									<div>
										<p className="font-bold text-red-900">
											Unable to Load Payment History
										</p>
										<p className="text-sm text-red-700 mt-1">{paymentsError}</p>
										<button
											onClick={fetchPayments}
											className="mt-3 text-sm text-red-600 hover:text-red-700 font-bold underline"
										>
											Try Again
										</button>
									</div>
								</div>
							) : payments.length === 0 ? (
								<div className="text-center py-12">
									<CreditCard className="w-16 h-16 text-gray-300 mx-auto mb-4" />
									<p className="text-gray-500 text-lg">No payment history yet</p>
									<p className="text-gray-400 text-sm mt-2">
										Your transactions will appear here
									</p>
								</div>
							) : (
								<div className="space-y-4">
									{payments.map((payment) => (
										<div
											key={payment.id}
											className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border-2 border-gray-200 hover:border-teal-300 transition-all"
										>
											<div className="flex items-center gap-4">
												<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
													<DollarSign className="w-6 h-6 text-white" />
												</div>
												<div>
													<p className="font-bold text-gray-900">
														${payment.amount.toFixed(2)} {payment.currency}
													</p>
													<div className="flex items-center gap-2 mt-1">
														<Calendar className="w-4 h-4 text-gray-400" />
														<p className="text-sm text-gray-600">
															{new Date(payment.createdAt).toLocaleDateString('en-US', {
																year: 'numeric',
																month: 'long',
																day: 'numeric',
															})}
														</p>
													</div>
													{payment.booking ? (
														<p className="text-xs text-gray-500 mt-1">
															Booking: {payment.booking.court.name}
														</p>
													) : (
														<p className="text-xs text-gray-500 mt-1">Subscription Payment</p>
													)}
												</div>
											</div>
											<div className="flex flex-col items-end gap-2">
												{payment.paymentStatus === 'PAID' ||
												payment.paymentStatus === 'COMPLETED' ? (
													<span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">
														<CheckCircle className="w-4 h-4" />
														Completed
													</span>
												) : payment.paymentStatus === 'FAILED' ? (
													<span className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold text-sm">
														<XCircle className="w-4 h-4" />
														Failed
													</span>
												) : (
													<span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold text-sm">
														<Loader2 className="w-4 h-4" />
														{payment.paymentStatus}
													</span>
												)}
												{payment.receiptUrl && (
													<a
														href={payment.receiptUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="text-xs text-teal-600 hover:text-teal-700 font-medium"
													>
														View Receipt →
													</a>
												)}
											</div>
										</div>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						{/* Stats Card */}
						<div className="bg-white rounded-3xl shadow-xl p-6">
							<h3 className="font-black text-xl text-gray-900 mb-4">Account Stats</h3>
							<div className="space-y-4">
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Total Games</span>
									<span className="font-bold text-2xl text-teal-600">0</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Total Groups</span>
									<span className="font-bold text-2xl text-teal-600">0</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Win Rate</span>
									<span className="font-bold text-2xl text-teal-600">-</span>
								</div>
							</div>
						</div>

						{/* Quick Actions */}
						<div className="bg-white rounded-3xl shadow-xl p-6">
							<h3 className="font-black text-xl text-gray-900 mb-4">Quick Actions</h3>
							<div className="space-y-3">
								<button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-xl transition">
									Edit Profile
								</button>
								<button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-4 rounded-xl transition">
									Settings
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
