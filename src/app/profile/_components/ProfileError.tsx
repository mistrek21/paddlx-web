// src/app/profile/_components/ProfileError.tsx

import { AlertCircle } from 'lucide-react';

export function ProfileError() {
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
