// src/app/profile/_components/UserProfileHeader.tsx

import Image from 'next/image';
import { SubscriptionBadge } from './SubscriptionBadge';
import { UserData } from './_types';

interface UserProfileHeaderProps {
	user: UserData;
	daysRemaining: number | null;
}

export function UserProfileHeader({
	user,
	daysRemaining,
}: UserProfileHeaderProps) {
	return (
		<div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
			<div className="flex items-start justify-between flex-wrap gap-4">
				<div className="flex items-center gap-6">
					{user.avatarUrl ? (
						<Image
							src={user.avatarUrl}
							alt={user.username}
							width={96}
							height={96}
							className="rounded-full border-4 border-teal-200"
						/>
					) : (
						<div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white text-4xl font-bold">
							{user.username?.[0]?.toUpperCase() ?? 'U'}
						</div>
					)}
					<div>
						<h1 className="text-4xl font-black text-gray-900 mb-2">
							{user.name && user.surname
								? `${user.name} ${user.surname}`
								: user.username}
						</h1>
						<p className="text-gray-600 text-lg">@{user.username}</p>
						<p className="text-gray-500 text-sm mt-1">{user.email}</p>
						<p className="text-gray-400 text-xs mt-2">
							Member since{' '}
							{new Date(user.createdAt).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
							})}
						</p>
					</div>
				</div>
				<SubscriptionBadge
					plan={user.subscriptionPlan}
					daysRemaining={daysRemaining}
				/>
			</div>
		</div>
	);
}
