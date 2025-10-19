// src/app/profile/_components/QuickActions.tsx

import Link from 'next/link';

export function QuickActions() {
	return (
		<div className="bg-white rounded-3xl shadow-xl p-6">
			<h3 className="font-black text-xl text-gray-900 mb-4">Quick Actions</h3>
			<div className="space-y-3">
				<button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-xl transition">
					<Link href="/profile/settings">Edit Profile</Link>
				</button>
				<button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-4 rounded-xl transition">
					<Link href="/profile/settings">Settings</Link>
				</button>
			</div>
		</div>
	);
}
