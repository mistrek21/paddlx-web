// src/app/court/[slug]/_components/SessionCard.tsx
'use client';

import MobileAppModal from '@/src/app/_components/modals/MobileAppModal';
import { useState } from 'react';

interface SessionCardProps {
	children: React.ReactNode;
	sessionId: string;
	sessionTitle: string;
}

export function SessionCard({
	children,
	sessionId,
	sessionTitle,
}: SessionCardProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsOpen(true);
	};

	return (
		<>
			<div onClick={handleClick} className="cursor-pointer">
				{children}
			</div>
			<MobileAppModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				action={`View ${sessionTitle}`}
			/>
		</>
	);
}
