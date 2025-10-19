// src/app/profile/my-groups/page.tsx

'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/src/hooks/useAuth';
import MyGroupsSkeleton from './_components/MyGroupsSkeleton';
import MyGroupsList from './_components/MyGroupsList';

// Type for one group membership (as returned by your API)
export type GroupMembership = {
	id: string; // group_member id (from Paddle_GroupMember)
	userId: string;
	groupId: string;
	joinedAt: string; // ISO date string
	role: 'OWNER' | 'ADMIN' | 'MEMBER'; // GROUP_MEMBER_ROLE
	status: 'ACTIVE' | 'INACTIVE' | 'PENDING'; // GROUP_MEMBER_STATUS

	group: {
		id: string;
		name: string;
		description?: string | null;
		courtId?: string | null;
		clubId?: string | null;
		location?: string | null;
		typeOfGame: string; // PADDLE_TYPEOFGAME
		visibility: 'PUBLIC' | 'PRIVATE'; // PADDLE_VISIBILITY
		password?: string | null;
		skillLevel?: string | null;
		duprLvl: number[];
		inviteOthers: boolean;
		contactMe: boolean;
		imageUrl?: string | null;
		createdAt: string; // ISO date string
		updatedAt: string;
		ownerId: string;
		// Add foreign key fields if needed, otherwise omit for UI
		members: GroupMembership[];
	};
};

export default function MyGroupsPage() {
	const API_BASE_URL = process.env.IP_CONFIG || 'https://paddle-api.vercel.app';

	const { user, loading } = useAuth();
	const [groups, setGroups] = useState([]);
	const [fetching, setFetching] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		if (!user) return;
		async function fetchGroups() {
			try {
				setFetching(true);
				setError('');
				const res = await axios.get(`${API_BASE_URL}/api/paddle/groups/my-groups`, {
					params: { userId: user?.id },
				});
				setGroups(res.data.groups || []);
			} catch (err: any) {
				setError(
					err?.response?.data?.error || err?.message || 'Failed to load groups'
				);
			} finally {
				setFetching(false);
			}
		}
		fetchGroups();
	}, [user]);

	if (loading || fetching) return <MyGroupsSkeleton num={3} />;
	if (!user)
		return (
			<div className="flex justify-center items-center min-h-40">
				<span className="text-gray-500">
					You must be logged in to view your groups.
				</span>
			</div>
		);
	if (error) return <div className="text-red-600 text-center my-8">{error}</div>;

	return <MyGroupsList groups={groups} />;
}
