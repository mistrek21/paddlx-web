// src/app/profile/_components/SubscriptionBadge.tsx

import { Crown, Shield } from 'lucide-react';
import { UserData } from './_types';

interface SubscriptionBadgeProps {
	plan: UserData['subscriptionPlan'];
	daysRemaining: number | null;
}

export function SubscriptionBadge({
	plan,
	daysRemaining,
}: SubscriptionBadgeProps) {
	if (plan === 'PRO') {
		return (
			<div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg">
				<Crown className="w-6 h-6" />
				<div>
					<span className="font-bold text-lg">Pro Member</span>
					{daysRemaining !== null && (
						<p className="text-xs opacity-90">{daysRemaining} days remaining</p>
					)}
				</div>
			</div>
		);
	}

	if (plan === 'PREMIUM') {
		return (
			<div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg">
				<Crown className="w-6 h-6" />
				<div>
					<span className="font-bold text-lg">Premium Member</span>
					{daysRemaining !== null && (
						<p className="text-xs opacity-90">{daysRemaining} days remaining</p>
					)}
				</div>
			</div>
		);
	}

	return (
		<div className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-full">
			<Shield className="w-6 h-6" />
			<span className="font-bold text-lg">Free Plan</span>
		</div>
	);
}
