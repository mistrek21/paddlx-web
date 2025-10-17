// app/profile/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/src/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
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
} from 'lucide-react';
import Image from 'next/image';
import { apiClient } from '@/lib/api-client';

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface Payment {
	id: string;
	amount: number;
	currency: string;
	status: string;
	createdAt: string;
	stripeSessionId: string;
}

interface UserData {
	id: string;
	username: string;
	email: string;
	name?: string;
	surname?: string;
	avatarUrl?: string;
	isPremium: boolean;
	createdAt: string;
}

export default function ProfilePage() {
	const { user, loading: authLoading } = useAuth();
	const [userData, setUserData] = useState<UserData | null>(null);
	const [payments, setPayments] = useState<Payment[]>([]);
	const [loading, setLoading] = useState(true);
	const [checkoutLoading, setCheckoutLoading] = useState(false);
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
			const response = await fetch(`/api/paddle/users/${user!.id}`);
			if (response.ok) {
				const data = await response.json();
				setUserData(data.user);
			}
		} catch (error) {
			console.error('Error fetching user data:', error);
		} finally {
			setLoading(false);
		}
	}

	async function fetchPayments() {
		try {
			const response = await fetch(`/api/paddle/users/${user!.id}/payments`);
			if (response.ok) {
				const data = await response.json();
				setPayments(data.payments);
			}
		} catch (error) {
			console.error('Error fetching payments:', error);
		}
	}

	async function handleUpgradeToPremium() {
		setCheckoutLoading(true);

		try {
			const { url } = await apiClient('/api/stripe/checkout', {
				method: 'POST',
				body: JSON.stringify({
					userId: user!.id,
					userEmail: user!.email,
					priceId: 'price_xxxxx', // Your Stripe price ID
				}),
			});

			if (url) {
				window.location.href = url;
			}
		} catch (error) {
			console.error('Error:', error);
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
		return null;
	}

	return (
		<main className="min-h-screen bg-gradient-to-br from-teal-50 via-slate-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
					<div className="flex items-start justify-between">
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
							{userData.isPremium ? (
								<div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
									<Crown className="w-6 h-6" />
									<span className="font-bold text-lg">Premium Member</span>
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
						{/* Subscription Status */}
						{!userData.isPremium && (
							<div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-xl p-8 border-2 border-orange-200">
								<div className="flex items-start gap-4 mb-6">
									<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
										<Crown className="w-8 h-8 text-white" />
									</div>
									<div className="flex-1">
										<h2 className="text-2xl font-black text-gray-900 mb-2">
											Upgrade to Premium
										</h2>
										<p className="text-gray-600">
											Get access to exclusive features at a better price than our mobile
											app!
										</p>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4 mb-6">
									<div className="flex items-start gap-3">
										<Zap className="w-5 h-5 text-orange-600 mt-0.5" />
										<div>
											<p className="font-bold text-gray-900">Unlimited Games</p>
											<p className="text-sm text-gray-600">Create unlimited sessions</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<Users className="w-5 h-5 text-orange-600 mt-0.5" />
										<div>
											<p className="font-bold text-gray-900">Priority Support</p>
											<p className="text-sm text-gray-600">24/7 premium support</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<TrendingUp className="w-5 h-5 text-orange-600 mt-0.5" />
										<div>
											<p className="font-bold text-gray-900">Advanced Stats</p>
											<p className="text-sm text-gray-600">Detailed analytics</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<Shield className="w-5 h-5 text-orange-600 mt-0.5" />
										<div>
											<p className="font-bold text-gray-900">Ad-Free</p>
											<p className="text-sm text-gray-600">No advertisements</p>
										</div>
									</div>
								</div>

								<div className="bg-white rounded-2xl p-6 mb-6">
									<div className="flex items-baseline gap-2 mb-2">
										<span className="text-5xl font-black text-gray-900">$9.99</span>
										<span className="text-gray-600">/month</span>
									</div>
									<p className="text-sm text-green-600 font-bold">
										Save $2/month vs. mobile app pricing!
									</p>
								</div>

								<button
									onClick={handleUpgradeToPremium}
									disabled={checkoutLoading}
									className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
								>
									{checkoutLoading ? (
										<>
											<Loader2 className="w-5 h-5 animate-spin" />
											Processing...
										</>
									) : (
										<>
											<Crown className="w-5 h-5" />
											Upgrade Now
										</>
									)}
								</button>
							</div>
						)}

						{/* Payment History */}
						<div className="bg-white rounded-3xl shadow-xl p-8">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
									<CreditCard className="w-6 h-6 text-white" />
								</div>
								<h2 className="text-2xl font-black text-gray-900">Payment History</h2>
							</div>

							{payments.length === 0 ? (
								<div className="text-center py-12">
									<CreditCard className="w-16 h-16 text-gray-300 mx-auto mb-4" />
									<p className="text-gray-500 text-lg">No payment history yet</p>
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
														${payment.amount.toFixed(2)} {payment.currency.toUpperCase()}
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
												</div>
											</div>
											<div>
												{payment.status === 'completed' ? (
													<span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">
														<CheckCircle className="w-4 h-4" />
														Completed
													</span>
												) : (
													<span className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold text-sm">
														<XCircle className="w-4 h-4" />
														{payment.status}
													</span>
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
