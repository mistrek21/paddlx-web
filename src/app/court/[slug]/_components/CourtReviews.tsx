// /src/app/court/[slug]/_components/CourtReviews.tsx

import {
	BadgeCheck,
	Star,
	ThumbsUp,
	User,
	Calendar,
	Award,
} from 'lucide-react';
import { CourtDetail, formatRelativeTime } from '../page';

export default function CourtReviews({ court }: { court: CourtDetail }) {
	// Calculate average rating
	const avgRating =
		court.reviews.length > 0
			? court.reviews.reduce((sum, r) => sum + r.rating, 0) / court.reviews.length
			: 0;

	// Calculate rating distribution
	const ratingDistribution = [5, 4, 3, 2, 1].map((stars) => ({
		stars,
		count: court.reviews.filter((r) => Math.floor(r.rating) === stars).length,
		percentage:
			court.reviews.length > 0
				? (court.reviews.filter((r) => Math.floor(r.rating) === stars).length /
						court.reviews.length) *
				  100
				: 0,
	}));

	return (
		<div className="mb-8">
			<div className="mb-6">
				<h2 className="text-3xl font-bold text-dark-slate">Customer Reviews</h2>
				<p className="text-medium-gray mt-1">
					{court.reviews.length} review{court.reviews.length !== 1 ? 's' : ''} from
					our community
				</p>
			</div>

			{court.reviews.length > 0 ? (
				<>
					{/* Rating Overview */}
					<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
						<div className="grid md:grid-cols-2 gap-8">
							{/* Average Rating */}
							<div className="flex flex-col items-center justify-center text-center py-4">
								<div className="mb-3">
									<div className="text-6xl font-bold text-dark-slate mb-2">
										{avgRating.toFixed(1)}
									</div>
									<div className="flex items-center justify-center gap-1 mb-2">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`w-6 h-6 ${
													i < Math.floor(avgRating)
														? 'text-yellow-400 fill-yellow-400'
														: 'text-gray-300'
												}`}
											/>
										))}
									</div>
									<p className="text-medium-gray text-sm">
										Based on {court.reviews.length} reviews
									</p>
								</div>
							</div>

							{/* Rating Distribution */}
							<div className="space-y-2">
								{ratingDistribution.map(({ stars, count, percentage }) => (
									<div key={stars} className="flex items-center gap-3">
										<div className="flex items-center gap-1 w-16">
											<span className="text-sm font-medium text-dark-slate">{stars}</span>
											<Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
										</div>
										<div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
											<div
												className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
												style={{ width: `${percentage}%` }}
											/>
										</div>
										<span className="text-sm text-medium-gray w-12 text-right">
											{count}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Reviews List */}
					<div className="space-y-4">
						{court.reviews.map((review) => (
							<div
								key={review.id}
								className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden"
							>
								<div className="p-6">
									{/* Review Header */}
									<div className="flex items-start gap-4 mb-4">
										{/* User Avatar */}
										<div className="relative">
											{review.user.profilePicture ? (
												<img
													src={review.user.profilePicture}
													alt={review.user.name || 'User'}
													className="w-14 h-14 rounded-full ring-2 ring-gray-100 object-cover"
												/>
											) : (
												<div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center ring-2 ring-gray-100">
													<User className="w-7 h-7 text-primary" />
												</div>
											)}
											{review.isVerified && (
												<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center ring-2 ring-white">
													<BadgeCheck className="w-4 h-4 text-white" />
												</div>
											)}
										</div>

										<div className="flex-1">
											{/* User Name & Badge */}
											<div className="flex items-center gap-2 mb-1">
												<h4 className="font-bold text-dark-slate text-lg">
													{review.user.name || 'Anonymous'}
												</h4>
												{review.isVerified && (
													<span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
														Verified
													</span>
												)}
											</div>

											{/* Date & Rating */}
											<div className="flex flex-wrap items-center gap-3 mb-2">
												<div className="flex items-center gap-1">
													{[...Array(5)].map((_, i) => (
														<Star
															key={i}
															className={`w-4 h-4 ${
																i < Math.floor(review.rating)
																	? 'text-yellow-400 fill-yellow-400'
																	: 'text-gray-300'
															}`}
														/>
													))}
													<span className="ml-1 text-sm font-bold text-dark-slate">
														{review.rating.toFixed(1)}
													</span>
												</div>
												<span className="text-sm text-medium-gray">
													{formatRelativeTime(review.createdAt)}
												</span>
											</div>

											{/* Session Badge */}
											{review.session && (
												<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
													<Calendar className="w-3.5 h-3.5 text-primary" />
													<span className="text-xs font-medium text-primary">
														{review.session.title}
													</span>
												</div>
											)}
										</div>
									</div>

									{/* Review Title */}
									{review.title && (
										<h3 className="text-xl font-bold text-dark-slate mb-3">
											{review.title}
										</h3>
									)}

									{/* Review Comment */}
									{review.comment && (
										<p className="text-light-slate leading-relaxed mb-4">
											{review.comment}
										</p>
									)}

									{/* Review Images */}
									{review.images && review.images.length > 0 && (
										<div className="flex flex-wrap gap-2 mb-4">
											{review.images.map((image, idx) => (
												<div
													key={idx}
													className="relative group overflow-hidden rounded-xl"
												>
													<img
														src={image}
														alt={`Review image ${idx + 1}`}
														className="w-24 h-24 object-cover group-hover:scale-110 transition-transform duration-300"
													/>
													<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
												</div>
											))}
										</div>
									)}

									{/* Review Footer */}
									<div className="flex items-center justify-between pt-4 border-t border-gray-100">
										<button className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-primary/10 text-medium-gray hover:text-primary rounded-lg font-medium text-sm transition-all group">
											<ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
											<span>Helpful ({review.helpfulVotes})</span>
										</button>

										{review.isVerified && (
											<div className="flex items-center gap-1.5 text-xs text-primary font-medium">
												<Award className="w-4 h-4" />
												<span>Verified Purchase</span>
											</div>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</>
			) : (
				<div className="bg-white rounded-xl shadow-sm p-12 text-center">
					<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<Star className="w-8 h-8 text-gray-300" />
					</div>
					<h3 className="text-xl font-semibold text-dark-slate mb-2">
						No reviews yet
					</h3>
					<p className="text-medium-gray mb-6">
						Be the first to share your experience at this court
					</p>
					<button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
						<Star className="w-4 h-4" />
						Write a Review
					</button>
				</div>
			)}
		</div>
	);
}
