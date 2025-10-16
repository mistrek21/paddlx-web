// src/app/videos/page.tsx

import { Metadata } from 'next';
import { videoData } from './_data/video-data';
import { VideoGallery } from './_components/VideoGallery';
import { VideoPlayerWrapper } from './_components/VideoPlayerWrapper';

export const metadata: Metadata = {
	title: 'Video Guides | paddlX Learning Center',
	description:
		'Watch our complete library of pickleball video tutorials, from beginner clinics covering the basic rules to advanced strategy guides.',
};

// This page accepts searchParams to know which video to show in the modal
export default function VideoGuidesPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const watchVideoId = searchParams?.watch as string;
	const videoToPlay = watchVideoId
		? videoData.find((v) => v.youtubeId === watchVideoId)
		: null;

	return (
		<>
			{/* This renders the modal overlay if a video is selected */}

			<VideoPlayerWrapper
				title={videoToPlay?.title || ''}
				youtubeId={videoToPlay?.youtubeId || ''}
			/>

			{/* This is the main gallery component */}
			<VideoGallery />
		</>
	);
}
