// src/hooks/useMobileAppModal.tsx

'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the modal with no SSR
const MobileAppModal = dynamic(
	() => import('../app/_components/modals/MobileAppModal'),
	{
		ssr: false,
		loading: () => null, // No loading state needed for modals
	}
);

export function useMobileAppModal() {
	const [isOpen, setIsOpen] = useState(false);
	const [action, setAction] = useState('');

	const openModal = (actionText: string) => {
		setAction(actionText);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const ModalComponent = () =>
		isOpen ? (
			<MobileAppModal isOpen={isOpen} onClose={closeModal} action={action} />
		) : null;

	return {
		openModal,
		closeModal,
		ModalComponent,
	};
}
