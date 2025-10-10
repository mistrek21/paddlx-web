// src/app/court/[slug]/article/[articleSlug]/loading.tsx

import { ArrowLeft, MessageSquare, Calendar, Edit2, User } from 'lucide-react';

export default function ArticleLoading() {
	return (
		<div className="min-h-screen bg-gray-50 animate-pulse">
			{/* Back Button Skeleton */}
			<div className="bg-white border-b border-gray-200">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="inline-flex items-center gap-2">
						<ArrowLeft className="w-4 h-4 text-gray-300" />
						<div className="h-4 w-32 bg-gray-200 rounded" />
					</div>
				</div>
			</div>

			{/* Article Content */}
			<article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Featured Image Skeleton */}
				<div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8 bg-gray-200">
					<div className="absolute inset-0 flex items-center justify-center">
						<svg
							className="w-20 h-20 text-gray-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 18"
						>
							<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
						</svg>
					</div>
				</div>

				{/* Title & Meta Skeleton */}
				<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
					{/* Title */}
					<div className="space-y-4 mb-6">
						<div className="h-10 bg-gray-200 rounded w-full" />
						<div className="h-10 bg-gray-200 rounded w-3/4" />
					</div>

					{/* Author & Date Info */}
					<div className="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-100">
						{/* Author Skeleton */}
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-full bg-gray-200" />
							<div className="space-y-2">
								<div className="h-4 w-24 bg-gray-200 rounded" />
								<div className="h-3 w-16 bg-gray-200 rounded" />
							</div>
						</div>

						{/* Published Date Skeleton */}
						<div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
							<Calendar className="w-5 h-5 text-gray-300" />
							<div className="space-y-2">
								<div className="h-3 w-16 bg-gray-200 rounded" />
								<div className="h-4 w-32 bg-gray-200 rounded" />
							</div>
						</div>

						{/* Comments Count Skeleton */}
						<div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
							<MessageSquare className="w-5 h-5 text-gray-300" />
							<div className="h-4 w-20 bg-gray-200 rounded" />
						</div>
					</div>
				</div>

				{/* Article Content Skeleton */}
				<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
					<div className="space-y-3">
						<div className="h-4 bg-gray-200 rounded w-full" />
						<div className="h-4 bg-gray-200 rounded w-full" />
						<div className="h-4 bg-gray-200 rounded w-5/6" />
						<div className="h-4 bg-gray-200 rounded w-full" />
						<div className="h-4 bg-gray-200 rounded w-4/5" />
						<div className="h-4 bg-gray-200 rounded w-full" />
						<div className="h-4 bg-gray-200 rounded w-3/4" />
						<div className="h-4 bg-gray-200 rounded w-full" />
						<div className="h-4 bg-gray-200 rounded w-5/6" />
						<div className="h-4 bg-gray-200 rounded w-full" />
						<div className="h-4 bg-gray-200 rounded w-2/3" />
					</div>
				</div>

				{/* Club Information Skeleton */}
				<div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
					<div className="flex items-start gap-4 mb-6">
						<div className="relative w-20 h-20 rounded-xl bg-gray-200" />
						<div className="flex-1 space-y-3">
							<div className="h-6 bg-gray-200 rounded w-48" />
							<div className="h-4 bg-gray-200 rounded w-full" />
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{[...Array(4)].map((_, i) => (
							<div
								key={i}
								className="flex items-start gap-3 p-3 bg-white/60 rounded-lg"
							>
								<div className="w-5 h-5 bg-gray-200 rounded" />
								<div className="flex-1 space-y-2">
									<div className="h-3 bg-gray-200 rounded w-16" />
									<div className="h-4 bg-gray-200 rounded w-32" />
								</div>
							</div>
						))}
					</div>

					<div className="flex gap-2 mt-4">
						<div className="h-6 w-16 bg-gray-200 rounded-full" />
						<div className="h-6 w-20 bg-gray-200 rounded-full" />
					</div>

					<div className="mt-6 w-full h-12 bg-gray-200 rounded-lg" />
				</div>

				{/* Comments Section Skeleton */}
				<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
					{/* Comments Header */}
					<div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
						<div className="flex items-center gap-3">
							<MessageSquare className="w-6 h-6 text-gray-300" />
							<div className="h-6 w-32 bg-gray-200 rounded" />
						</div>
					</div>

					{/* Add Comment Form Skeleton */}
					<div className="mb-8">
						<div className="flex gap-4">
							<div className="w-10 h-10 rounded-full bg-gray-200" />
							<div className="flex-1 space-y-3">
								<div className="h-24 bg-gray-200 rounded-xl" />
								<div className="flex justify-end gap-2">
									<div className="h-9 w-20 bg-gray-200 rounded-lg" />
									<div className="h-9 w-32 bg-gray-200 rounded-lg" />
								</div>
							</div>
						</div>
					</div>

					{/* Comments List Skeleton */}
					<div className="space-y-6">
						{[...Array(3)].map((_, i) => (
							<div key={i} className="flex gap-4">
								<div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
								<div className="flex-1">
									<div className="bg-gray-50 rounded-2xl p-4">
										<div className="flex items-center gap-2 mb-2">
											<div className="h-4 w-24 bg-gray-200 rounded" />
											<div className="h-3 w-16 bg-gray-200 rounded" />
										</div>
										<div className="space-y-2">
											<div className="h-3 bg-gray-200 rounded w-full" />
											<div className="h-3 bg-gray-200 rounded w-5/6" />
										</div>
									</div>
									<div className="flex items-center gap-4 mt-2 ml-4">
										<div className="h-4 w-12 bg-gray-200 rounded" />
										<div className="h-4 w-12 bg-gray-200 rounded" />
										<div className="h-4 w-14 bg-gray-200 rounded" />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</article>
		</div>
	);
}
