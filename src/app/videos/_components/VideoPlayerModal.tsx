// src/app/videos/_components/VideoPlayerModal.tsx

'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface VideoPlayerModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	youtubeId: string;
}

export function VideoPlayerModal({
	isOpen,
	onClose,
	title,
	youtubeId,
}: VideoPlayerModalProps) {
	// Effect to prevent body scrolling when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		// Cleanup function to restore scrolling when component unmounts
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose} // Close when clicking the background
					className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
				>
					<motion.div
						initial={{ scale: 0.9, y: 20 }}
						animate={{ scale: 1, y: 0 }}
						exit={{ scale: 0.9, y: 20, opacity: 0 }}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the modal content
						className="bg-charcoal rounded-xl w-full max-w-4xl shadow-2xl relative overflow-hidden"
					>
						<div className="p-4 flex justify-between items-center border-b border-slate-700">
							<h3 className="text-white font-bold text-lg truncate pr-8">{title}</h3>
							<button
								onClick={onClose}
								className="text-slate-400 hover:text-white transition-colors absolute top-3.5 right-4"
								aria-label="Close video player"
							>
								<X size={24} />
							</button>
						</div>
						<div className="aspect-video">
							<iframe
								width="100%"
								height="100%"
								src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
								title={title}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
