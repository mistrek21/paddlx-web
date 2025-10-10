// src/app/court/[slug]/article/[articleId]/_components/ArticleDetail.tsx

'use client';

import {
	ArrowLeft,
	Calendar,
	Clock,
	Edit2,
	MessageSquare,
	User,
	MapPin,
	Phone,
	Globe,
	Star,
	Users,
	CheckCircle,
	ThumbsUp,
	Flag,
	MoreVertical,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Article, Comment } from './types';
import { useMobileAppModal } from '@/src/hooks/useMobileAppModal';

interface CommentItemProps {
	comment: Comment;
	onLike: () => void;
	onReply: () => void;
	onReport: () => void;
}

function CommentItem({ comment, onLike, onReply, onReport }: CommentItemProps) {
	const commentDate = new Date(comment.createdAt);
	const isEdited = comment.isEdited && comment.editedAt;

	return (
		<div className="group">
			<div className="flex gap-4">
				{/* Author Avatar */}
				<div className="shrink-0">
					{comment.author.avatarUrl ? (
						<Image
							src={comment.author.avatarUrl}
							alt={comment.author.username || 'User'}
							width={40}
							height={40}
							className="rounded-full ring-2 ring-gray-100"
						/>
					) : (
						<div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
							<User className="w-5 h-5 text-primary" />
						</div>
					)}
				</div>

				{/* Comment Content */}
				<div className="flex-1 min-w-0">
					<div className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
						{/* Author & Date Header */}
						<div className="flex items-center gap-2 mb-2 flex-wrap">
							<span className="font-semibold text-dark-slate">
								{comment.author.username || 'Anonymous'}
							</span>
							<span className="text-xs text-medium-gray">•</span>
							<time className="text-xs text-medium-gray">
								{formatRelativeTime(commentDate)}
							</time>
							{isEdited && (
								<>
									<span className="text-xs text-medium-gray">•</span>
									<span className="text-xs text-medium-gray italic">Edited</span>
								</>
							)}
						</div>

						{/* Comment Text */}
						{comment.isModerated ? (
							<div className="text-sm text-medium-gray italic py-2">
								<Flag className="w-4 h-4 inline mr-2" />
								This comment has been moderated.
								{comment.moderationMessage && (
									<span className="block mt-1 text-xs">
										Reason: {comment.moderationMessage}
									</span>
								)}
							</div>
						) : (
							<p className="text-sm text-light-slate leading-relaxed whitespace-pre-wrap break-words">
								{comment.text}
							</p>
						)}
					</div>

					{/* Comment Actions */}
					{!comment.isModerated && (
						<div className="flex items-center gap-4 mt-2 ml-4">
							<button
								onClick={onLike}
								className="text-xs text-medium-gray hover:text-primary transition-colors font-medium flex items-center gap-1"
							>
								<ThumbsUp className="w-3.5 h-3.5" />
								Like
							</button>
							<button
								onClick={onReply}
								className="text-xs text-medium-gray hover:text-primary transition-colors font-medium"
							>
								Reply
							</button>
							<button
								onClick={onReport}
								className="text-xs text-medium-gray hover:text-red-500 transition-colors font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100"
							>
								<Flag className="w-3.5 h-3.5" />
								Report
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

function ArticleDetail({
	article,
	courtSlug,
}: {
	article: Article;
	courtSlug: string;
}) {
	const publishedDate = new Date(article.publishedAt);
	const updatedDate = new Date(article.updatedAt);
	const isUpdated = updatedDate > publishedDate;

	// Initialize modal hook
	const { openModal, ModalComponent } = useMobileAppModal();

	// Handler functions for comment actions
	const handleLike = () => {
		openModal('like this comment');
	};

	const handleReply = () => {
		openModal('reply to this comment');
	};

	const handleReport = () => {
		openModal('report this comment');
	};

	const handlePostComment = () => {
		openModal('post a comment');
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Back Button */}
			<div className="bg-white border-b border-gray-200">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<Link
						href={`/court/${courtSlug}`}
						className="inline-flex items-center gap-2 text-medium-gray hover:text-primary transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						<span className="text-sm font-medium">Back to {article.club.name}</span>
					</Link>
				</div>
			</div>

			{/* Article Header */}
			<article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Featured Image */}
				{article.imageUrl && (
					<div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
						<Image
							src={article.imageUrl}
							alt={article.title}
							fill
							className="object-cover"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
					</div>
				)}

				{/* Title & Meta */}
				<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
					<h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-6 leading-tight">
						{article.title}
					</h1>

					{/* Author & Date Info */}
					<div className="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-100">
						{/* Author */}
						<div className="flex items-center gap-3">
							{article.author.profilePicture ? (
								<Image
									src={article.author.profilePicture}
									alt={article.author.name || 'Author'}
									width={48}
									height={48}
									className="rounded-full ring-2 ring-primary/20"
								/>
							) : (
								<div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
									<User className="w-6 h-6 text-primary" />
								</div>
							)}
							<div>
								<p className="font-semibold text-dark-slate">
									{article.author.name || 'Anonymous'}
								</p>
								<p className="text-sm text-medium-gray">Author</p>
							</div>
						</div>

						{/* Published Date */}
						<div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
							<Calendar className="w-5 h-5 text-primary" />
							<div>
								<p className="text-xs text-medium-gray">Published</p>
								<p className="text-sm font-medium text-dark-slate">
									{publishedDate.toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</p>
							</div>
						</div>

						{/* Updated Date */}
						{isUpdated && (
							<div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
								<Edit2 className="w-5 h-5 text-primary" />
								<div>
									<p className="text-xs text-medium-gray">Last Updated</p>
									<p className="text-sm font-medium text-dark-slate">
										{updatedDate.toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										})}
									</p>
								</div>
							</div>
						)}

						{/* Comments Count */}
						<div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-lg">
							<MessageSquare className="w-5 h-5 text-primary" />
							<span className="text-sm font-semibold text-dark-slate">
								{article.commentsCount}{' '}
								{article.commentsCount === 1 ? 'Comment' : 'Comments'}
							</span>
						</div>
					</div>
				</div>

				{/* Article Content */}
				<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
					<div className="prose prose-lg max-w-none">
						<div className="text-light-slate leading-relaxed whitespace-pre-wrap">
							{article.content}
						</div>
					</div>
				</div>

				{/* Club Information Sidebar */}
				<div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl shadow-sm border border-primary/20 p-8 mb-8">
					<div className="flex items-start gap-4 mb-6">
						{article.club.images && article.club.images.length > 0 && (
							<div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
								<Image
									src={article.club.images[0]}
									alt={article.club.name}
									fill
									className="object-cover"
								/>
							</div>
						)}
						<div className="flex-1">
							<div className="flex items-center gap-2 mb-2">
								<h3 className="text-2xl font-bold text-dark-slate">
									{article.club.name}
								</h3>
								{article.club.isVerified && (
									<CheckCircle className="w-6 h-6 text-primary" />
								)}
							</div>
							{article.club.description && (
								<p className="text-light-slate line-clamp-2">
									{article.club.description}
								</p>
							)}
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* Location */}
						{article.club.address && (
							<div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
								<MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
								<div className="flex-1 min-w-0">
									<p className="text-xs text-medium-gray mb-1">Location</p>
									<p className="text-sm font-medium text-dark-slate">
										{article.club.address}
										{article.club.city && (
											<span className="block text-xs text-medium-gray mt-1">
												{article.club.city.name}, {article.club.city.country}
											</span>
										)}
									</p>
								</div>
							</div>
						)}

						{/* Contact */}
						{article.club.contactPhone && (
							<div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
								<Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
								<div>
									<p className="text-xs text-medium-gray mb-1">Phone</p>
									<p className="text-sm font-medium text-dark-slate">
										{article.club.contactPhone}
									</p>
								</div>
							</div>
						)}

						{/* Website */}
						{article.club.website && (
							<div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
								<Globe className="w-5 h-5 text-primary shrink-0 mt-0.5" />
								<div className="flex-1 min-w-0">
									<p className="text-xs text-medium-gray mb-1">Website</p>
									<a
										href={article.club.website}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-medium text-primary hover:underline truncate block"
									>
										{article.club.website}
									</a>
								</div>
							</div>
						)}

						{/* Rating */}
						{article.club.averageRating && (
							<div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
								<Star className="w-5 h-5 text-primary shrink-0 mt-0.5" />
								<div>
									<p className="text-xs text-medium-gray mb-1">Rating</p>
									<p className="text-sm font-medium text-dark-slate">
										{article.club.averageRating} / 5.0{' '}
										<span className="text-xs text-medium-gray">
											({article.club.totalReviewsCount} reviews)
										</span>
									</p>
								</div>
							</div>
						)}

						{/* Followers */}
						{article.club.followerCount > 0 && (
							<div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
								<Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
								<div>
									<p className="text-xs text-medium-gray mb-1">Followers</p>
									<p className="text-sm font-medium text-dark-slate">
										{article.club.followerCount.toLocaleString()}
									</p>
								</div>
							</div>
						)}
					</div>

					{/* Facility Type Badges */}
					<div className="flex gap-2 mt-4">
						{article.club.isIndoor && (
							<span className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-dark-slate">
								Indoor
							</span>
						)}
						{article.club.isOutdoor && (
							<span className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-dark-slate">
								Outdoor
							</span>
						)}
					</div>

					{/* CTA Button */}
					<Link
						href={`/court/${courtSlug}`}
						className="mt-6 w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
					>
						Visit {article.club.name}
						<ArrowLeft className="w-4 h-4 rotate-180" />
					</Link>
				</div>

				{/* Comments Section */}
				<div
					id="comments"
					className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
				>
					{/* Comments Header */}
					<div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
						<div className="flex items-center gap-3">
							<MessageSquare className="w-6 h-6 text-primary" />
							<h2 className="text-2xl font-bold text-dark-slate">
								{article.commentsCount}{' '}
								{article.commentsCount === 1 ? 'Comment' : 'Comments'}
							</h2>
						</div>
					</div>

					{/* Add Comment Form */}
					<div className="mb-8">
						<div className="flex gap-4">
							<div className="shrink-0">
								<div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
									<User className="w-5 h-5 text-primary" />
								</div>
							</div>
							<div className="flex-1">
								<textarea
									placeholder="Write a comment..."
									rows={3}
									className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-sm"
								/>
								<div className="flex justify-end gap-2 mt-3">
									<button className="px-4 py-2 text-sm font-medium text-medium-gray hover:text-dark-slate transition-colors">
										Cancel
									</button>
									<button
										onClick={handlePostComment}
										className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-sm transition-colors"
									>
										Post Comment
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Comments List */}
					<div className="space-y-6">
						{article.comments && article.comments.length > 0 ? (
							article.comments.map((comment) => (
								<CommentItem
									key={comment.id}
									comment={comment}
									onLike={handleLike}
									onReply={handleReply}
									onReport={handleReport}
								/>
							))
						) : (
							<div className="text-center py-12">
								<MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
								<p className="text-medium-gray text-lg font-medium mb-2">
									No comments yet
								</p>
								<p className="text-light-slate text-sm">
									Be the first to share your thoughts!
								</p>
							</div>
						)}
					</div>
				</div>
			</article>

			{/* Render Modal */}
			<ModalComponent />
		</div>
	);
}

export default ArticleDetail;

// Helper function to format relative time
function formatRelativeTime(date: Date | string): string {
	const now = new Date();
	const past = new Date(date);
	const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

	if (diffInSeconds < 60) return 'just now';
	if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
	if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
	if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

	return past.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}
