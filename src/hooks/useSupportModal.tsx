// src/hooks/useSupportModal.ts
import { atom, useAtom } from 'jotai';

// Atom for modal open/close state
export const supportModalAtom = atom(false);

// Atom for modal state with data persistence
export const supportModalStateAtom = atom({
	isOpen: false,
	data: null as any,
});

// Basic hook
export function useSupportModal() {
	const [isOpen, setIsOpen] = useAtom(supportModalAtom);

	return {
		isOpen,
		open: () => setIsOpen(true),
		close: () => setIsOpen(false),
		toggle: () => setIsOpen((prev) => !prev),
	};
}

// Advanced hook with data persistence
export function useSupportModalAdvanced() {
	const [state, setState] = useAtom(supportModalStateAtom);

	return {
		isOpen: state.isOpen,
		data: state.data,
		open: (data = null) => setState((prev) => ({ ...prev, isOpen: true, data })),
		close: () => setState((prev) => ({ ...prev, isOpen: false, data: null })),
		toggle: () => setState((prev) => ({ ...prev, isOpen: !prev.isOpen })),
		setData: (data: any) => setState((prev) => ({ ...prev, data })),
	};
}
