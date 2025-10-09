// src/app/_components/TopBanner.tsx

'use client';

import { useMobileAppModal } from '@/src/hooks/useMobileAppModal';
import { X, ArrowRight } from 'lucide-react';

type Props = {
	onClose: () => void;
	fixed?: boolean;
	compact?: boolean;
};

export function TopBanner({ onClose, fixed, compact }: Props) {
	const { openModal, ModalComponent } = useMobileAppModal();

	return (
		<>
			<div
				className={`
                    ${fixed ? 'fixed w-full left-0 z-[9999]' : ''}
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
						className="flex items-center justify-center w-6 h-6 rounded-full bg-accent hover:bg-accent-dark transition-colors shadow"
						aria-label="Learn more"
						onClick={() => openModal('Download App')}
					>
						<ArrowRight className="w-3 h-3 text-white" />
					</button>
				</div>
				<div className="flex-1 flex justify-end">
					<button
						className="text-slate-gray hover:text-accent transition-colors"
						aria-label="Close banner"
						onClick={onClose}
					>
						<X className="w-4 h-4" />
					</button>
				</div>
			</div>
			<ModalComponent />
		</>
	);
}
