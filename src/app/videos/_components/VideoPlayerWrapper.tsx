// src/app/videos/_components/VideoPlayerWrapper.tsx

'use client';

import { useEffect, useState } from 'react';
import { VideoPlayerModal } from './VideoPlayerModal';
import { useRouter } from 'next/navigation';

export function VideoPlayerWrapper({
	title,
	youtubeId,
}: {
	title: string;
	youtubeId: string;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	// Sync modal state with youtubeId presence
	useEffect(() => {
		if (youtubeId) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [youtubeId]);

	const handleClose = () => {
		setIsOpen(false);
		// Remove the watch param from URL when closing
		router.push('/videos');
	};

	return (
		<VideoPlayerModal
			title={title}
			youtubeId={youtubeId}
			isOpen={isOpen}
			onClose={handleClose}
		/>
	);
}
