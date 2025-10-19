// src/app/profile/_components/LoadingSpinner.tsx

import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-slate-100 to-blue-50">
			<div className="relative">
				{/* Outer rotating ring */}
				<div className="absolute inset-0 rounded-full border-4 border-teal-200 animate-ping opacity-20"></div>

				{/* Middle rotating ring */}
				<div
					className="absolute inset-0 rounded-full border-t-4 border-teal-400 animate-spin"
					style={{ animationDuration: '1.5s' }}
				></div>

				{/* Inner content container */}
				<div className="relative bg-white rounded-full p-8 shadow-2xl border border-teal-100">
					{/* Pulsing background glow */}
					<div className="absolute inset-0 rounded-full bg-teal-400 opacity-10 animate-pulse"></div>

					{/* Main spinner icon */}
					<Loader2 className="w-12 h-12 animate-spin text-teal-600 relative z-10" />
				</div>

				{/* Orbiting dots */}
				<div
					className="absolute inset-0 animate-spin"
					style={{ animationDuration: '3s' }}
				>
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-teal-500 rounded-full"></div>
				</div>
				<div
					className="absolute inset-0 animate-spin"
					style={{ animationDuration: '3s', animationDelay: '1s' }}
				>
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
				</div>
				<div
					className="absolute inset-0 animate-spin"
					style={{ animationDuration: '3s', animationDelay: '2s' }}
				>
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-500 rounded-full"></div>
				</div>
			</div>

			{/* Optional loading text */}
			<div className="absolute mt-40">
				<p className="text-teal-600 font-medium animate-pulse">Loading...</p>
			</div>
		</div>
	);
}
