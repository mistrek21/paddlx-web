// src/app/profile/my-games/page.tsx

'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/src/hooks/useAuth';
import MyGamesList from './_components/MyGamesList';
import { MyGamesSkeleton } from './_components/MyGamesSkeleton';

export default function MyGamesPage() {
	const API_BASE_URL = process.env.IP_CONFIG || 'https://paddle-api.vercel.app';

	const { user, loading } = useAuth();
	const [games, setGames] = useState<any[]>([]);
	const [fetching, setFetching] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		if (!user) return;

		async function fetchGames() {
			try {
				setFetching(true);
				setError('');
				// Call the API using axios
				const res = await axios.get(
					`${API_BASE_URL}/api/paddle/sessions/my-sessions`,
					{
						params: { userId: user?.id },
					}
				);
				setGames(res.data.session || []);
			} catch (err: any) {
				setError(
					err?.response?.data?.error || err?.message || 'Failed to load games'
				);
			} finally {
				setFetching(false);
			}
		}
		fetchGames();
	}, [user]);

	if (loading || fetching) {
		return <MyGamesSkeleton />;
	}

	if (!user) {
		return (
			<div className="flex justify-center items-center min-h-40">
				<span className="text-gray-500">
					You must be logged in to view your games.
				</span>
			</div>
		);
	}

	if (error) {
		return <div className="text-red-600 text-center my-8">{error}</div>;
	}

	return <MyGamesList games={games} />;
}
