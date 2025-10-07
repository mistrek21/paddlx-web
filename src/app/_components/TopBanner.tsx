'use client';

import { X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function TopBanner() {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) return null;

	return (
		<div className="bg-dark text-white py-3 px-4 flex items-center justify-between">
			<div className="flex-1" />
			<div className="flex items-center gap-3">
				<span className="text-sm font-medium">
					Run a mini-tournament on paddlx!
				</span>
				<button
					className="flex items-center justify-center w-8 h-8 rounded-full bg-primary hover:bg-primary-dark transition-colors"
					aria-label="Learn more"
				>
					<ArrowRight className="w-4 h-4" />
				</button>
			</div>
			<div className="flex-1 flex justify-end">
				<button
					onClick={() => setIsVisible(false)}
					className="text-white/80 hover:text-white transition-colors"
					aria-label="Close banner"
				>
					<X className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
}
