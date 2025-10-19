'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/src/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api-client';
import { Payment, UserData } from './_components/_types';
import { LoadingSpinner } from './_components/LoadingSpinner';
import { ProfileError } from './_components/ProfileError';
import { ApiErrorAlert } from './_components/ApiErrorAlert';

import { UserProfileHeader } from './_components/UserProfileHeader';
import { PricingSection } from './_components/PricingSection';
import { PaymentHistory } from './_components/PaymentHistory';
import { ProfileSidebar } from './_components/ProfileSidebar';
import AppDownloadModal from './_components/AppDownloadModal';

export default function ProfilePage() {
	const { user, loading: authLoading } = useAuth();
	const [userData, setUserData] = useState<UserData | null>(null);
	const [payments, setPayments] = useState<Payment[]>([]);
	const [loading, setLoading] = useState(true);
	const [checkoutLoading, setCheckoutLoading] = useState(false);
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
		if (!user) return;
		try {
			const data = await apiClient(`/api/paddle/profile-users/${user.id}`, {
				method: 'GET',
			});
			setUserData(data.user);
			setApiError(null);
		} catch (error: any) {
			console.error('Error fetching user data:', error);
			setApiError(error.message || 'Failed to load user data');
			setUserData({
				id: user.id,
				username: user.email?.split('@')[0] || 'User',
				email: user.email || '',
				subscriptionPlan: 'BASIC',
				isPremium: false,
				createdAt: new Date().toISOString(),
			});
		} finally {
			setLoading(false);
		}
	}

	async function fetchPayments() {
		if (!user) return;
		try {
			const data = await apiClient(
				`/api/paddle/profile-users/${user.id}/payments`,
				{ method: 'GET' }
			);
			setPayments(data.payments);
			setPaymentsError(null);
		} catch (error: any) {
			console.error('Error fetching payments:', error);
			setPaymentsError(error.message || 'Failed to load payment history');
			setPayments([]);
		}
	}

	const [gamesPlayedCount, setGamesPlayedCount] = useState<number | null>(null);
	const [groupsCount, setGroupsCount] = useState<number | null>(null);

	useEffect(() => {
		if (!user) return;
		async function fetchStats() {
			try {
				const res = await apiClient(`/api/paddle/users/${user?.id}/stats`, {
					method: 'GET',
				});
				setGamesPlayedCount(res.gamesPlayed ?? 0);
				setGroupsCount(res.groupsJoined ?? 0);
			} catch {
				setGamesPlayedCount(0);
				setGroupsCount(0);
			}
		}
		fetchStats();
	}, [user]);

	async function handleUpgrade(plan: 'PREMIUM' | 'PRO', duration: string) {
		if (!user) return;
		setCheckoutLoading(true);
		try {
			const { url } = await apiClient('/api/stripe/create-checkout-session', {
				method: 'POST',
				body: JSON.stringify({
					userId: user.id,
					userEmail: user.email,
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
		return <LoadingSpinner />;
	}

	if (!userData) {
		return <ProfileError />;
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
				{apiError && <ApiErrorAlert message={apiError} />}

				<AppDownloadModal />

				<UserProfileHeader user={userData} daysRemaining={daysRemaining} />

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-8">
						<PricingSection
							isBasic={isBasic}
							checkoutLoading={checkoutLoading}
							onUpgrade={handleUpgrade}
						/>
						<PaymentHistory
							payments={payments}
							error={paymentsError}
							onRetry={fetchPayments}
						/>
					</div>

					<ProfileSidebar
						gamesPlayedCount={gamesPlayedCount || 0}
						groupsCount={groupsCount || 0}
					/>
				</div>
			</div>
		</main>
	);
}
