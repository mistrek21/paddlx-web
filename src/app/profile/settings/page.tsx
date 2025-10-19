// src/app/profile/settings/page.tsx
'use client';

import { useState } from 'react';
import { useAuth } from '@/src/hooks/useAuth';
import { createClient } from '@/lib/supabase/client';

export default function SettingsPage() {
	const { user, loading } = useAuth();
	const [deleteConfirm, setDeleteConfirm] = useState(false);
	const [deleting, setDeleting] = useState(false);
	const [deleted, setDeleted] = useState(false);

	// Only allow authenticated users to see the page
	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<span className="text-gray-500">Loading...</span>
			</div>
		);
	}

	if (!user) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<span className="text-gray-500">
					You must be logged in to access settings.
				</span>
			</div>
		);
	}

	// Supabase sign out (for demonstration; real account delete requires backend logic)
	async function handleDeleteAccount() {
		setDeleting(true);
		const supabase = createClient();
		// Here you should call your backend endpoint/API to truly delete the user
		// For demonstration, we'll just sign out
		await supabase.auth.signOut(); // JUST signs out; replace with actual delete logic
		setTimeout(() => {
			setDeleting(false);
			setDeleted(true);
		}, 1200);
	}

	if (deleted) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen">
				<h1 className="text-2xl font-bold text-red-600 mb-4">Account Deleted</h1>
				<p className="text-gray-600">Your account has been deleted/signed out.</p>
			</div>
		);
	}

	return (
		<div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-md rounded-xl">
			<h1 className="text-2xl font-bold mb-6">Settings</h1>
			<div className="mb-8">
				<p className="text-lg font-semibold mb-2">Account Info</p>
				<div className="text-gray-800">
					<div>
						<span className="font-medium">Email:</span> {user.email}
					</div>
				</div>
			</div>

			<div className="border-t pt-6">
				<p className="text-red-700 font-semibold mb-2">Danger Zone</p>
				<button
					className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
					onClick={() => setDeleteConfirm(true)}
					disabled={deleting}
				>
					Delete Account
				</button>
			</div>

			{deleteConfirm && (
				<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
					<div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
						<h2 className="text-xl font-bold mb-3 text-red-500">Delete Account?</h2>
						<p className="mb-5 text-gray-700">
							This action is <span className="font-bold">permanent</span> and cannot be
							undone. Are you sure you want to delete your account?
						</p>
						<div className="flex gap-3 justify-center">
							<button
								onClick={() => setDeleteConfirm(false)}
								className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300"
								disabled={deleting}
							>
								Cancel
							</button>
							<button
								onClick={handleDeleteAccount}
								className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
								disabled={deleting}
							>
								{deleting ? 'Deleting...' : 'Delete'}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
