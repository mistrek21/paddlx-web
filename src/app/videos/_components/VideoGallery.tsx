// src/app/videos/_components/VideoGallery.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { videoData } from '../_data/video-data';

export function VideoGallery() {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
				<div className="text-center pb-12">
					<h1 className="text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight text-balance">
						Video Learning Center
					</h1>
					<p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto text-balance">
						Master the game with our expert video tutorials. Click any video to watch
						instantly.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
					{videoData.map((video) => (
						<Link
							key={video.id}
							href={`/videos?watch=${video.youtubeId}`}
							scroll={false} // Prevents page from scrolling to top when opening modal
							className="group space-y-3 block"
						>
							<div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
								<Image
									src={video.thumbnail}
									alt={video.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
										<Play className="w-8 h-8 ml-1 text-[#2A9DB0]" fill="currentColor" />
									</div>
								</div>
								<div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-md">
									{video.duration}
								</div>
							</div>
							<div className="px-1">
								<span className="inline-block text-xs font-bold px-3 py-1 rounded-full w-fit text-[#2A9DB0] bg-[#E6F7F9] mb-2">
									{video.category}
								</span>
								<h3 className="text-base font-bold text-charcoal group-hover:text-ocean transition-colors leading-snug">
									{video.title}
								</h3>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
