// src/hooks/useMobileAppModal.tsx

'use client';

import { useState } from 'react';
import MobileAppModal from '../app/_components/modals/MobileAppModal';

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

	const ModalComponent = () => (
		<MobileAppModal isOpen={isOpen} onClose={closeModal} action={action} />
	);

	return {
		openModal,
		closeModal,
		ModalComponent,
	};
}
