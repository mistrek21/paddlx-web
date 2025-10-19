// src/app/profile/_components/ProfileSidebar.tsx

import { AccountStats } from './AccountStats';
import { QuickActions } from './QuickActions';

export function ProfileSidebar({
	gamesPlayedCount,
	groupsCount,
}: {
	gamesPlayedCount: number;
	groupsCount: number;
}) {
	return (
		<div className="space-y-6">
			<AccountStats
				gamesPlayedCount={gamesPlayedCount}
				groupsCount={groupsCount}
			/>
			<QuickActions />
		</div>
	);
}
