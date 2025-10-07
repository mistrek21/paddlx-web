// src/app/_components/TopBanner.tsx

'use client';

import { X, ArrowRight } from 'lucide-react';

type Props = {
	onClose: () => void;
	fixed?: boolean;
	compact?: boolean;
};

export function TopBanner({ onClose, fixed, compact }: Props) {
	return (
		<div
			className={`
      ${fixed ? 'fixed w-full left-0 z-50' : ''}
      bg-primary-ultra-soft border-b border-primary-soft text-dark-slate
      ${compact ? 'py-0 h-9' : 'py-2 h-12'}
      px-4 flex items-center justify-between shadow-sm
      transition-all duration-300
    `}
		>
			<div className="flex-1" />
			<div className="flex items-center gap-3">
				<span
					className={`text-sm font-medium text-dark-slate ${
						compact ? 'text-xs' : ''
					}`}
				>
					Run a mini-tournament on{' '}
					<span className="text-accent font-bold">paddlx!</span>
				</span>
				<button
					className="flex items-center justify-center w-8 h-8 rounded-full bg-accent hover:bg-accent-dark transition-colors shadow"
					aria-label="Learn more"
				>
					<ArrowRight className="w-4 h-4 text-white" />
				</button>
			</div>
			<div className="flex-1 flex justify-end">
				<button
					className="text-slate-gray hover:text-accent transition-colors"
					aria-label="Close banner"
					onClick={onClose}
				>
					<X className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
}
