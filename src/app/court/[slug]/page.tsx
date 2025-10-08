// src/app/court/[slug]/page.tsx
import { Suspense } from 'react';
import { notFound, redirect } from 'next/navigation';
import {
	MapPin,
	Phone,
	Clock,
	Star,
	Navigation,
	Calendar,
	MessageSquare,
	ThumbsUp,
	User,
	BadgeCheck,
} from 'lucide-react';
import Link from 'next/link';

import { Metadata } from 'next';

interface Author {
	id: string;
	name: string | null;
	profilePicture: string | null;
}

interface Comment {
	id: string;
	text: string;
	createdAt: Date;
	updatedAt: Date;
	isEdited: boolean;
	editedAt: Date | null;
	isModerated: boolean;
	moderationMessage: string | null;
	author: Author;
}

interface Article {
	id: string;
	title: string;
	content: string;
	imageUrl: string | null;
	publishedAt: Date;
	updatedAt: Date;
	author: Author;
	commentsCount: number;
	comments: Comment[];
}

interface Review {
	id: string;
	rating: number;
	comment: string | null;
	title: string | null;
	images: string[];
	isVerified: boolean;
	createdAt: Date;
	updatedAt: Date;
	helpfulVotes: number;
	user: Author;
	session?: {
		id: string;
		title: string | null;
		date: Date;
	};
}

interface CourtDetailPageProps {
	params: Promise<{ slug: string }>;
}

interface CourtDetail {
	id: string;
	slug?: string;
	name: string;
	city: string;
	country: string;
	address: string;
	phone?: string;
	hours?: string;
	rating?: number;
	totalReviews?: number;
	description?: string;
	amenities?: string[];
	pricePerHour?: number;
	images?: string[];
	latitude?: number;
	longitude?: number;
	articles: Article[];
	reviews: Review[];
}

// src/app/court/[slug]/page.tsx

async function getCourtDetails(slugOrId: string): Promise<CourtDetail | null> {
	try {
		const url = `${process.env.IP_CONFIG}/api/web/courts/${slugOrId}`;
		console.log('🌐 Fetching from URL:', url);

		const response = await fetch(url, {
			cache: 'no-store',
		});

		console.log('📡 Response status:', response.status);
		console.log('📡 Response ok:', response.ok);

		if (!response.ok) {
			const errorText = await response.text();
			console.error('❌ API Error:', errorText);
			return null;
		}

		const data = await response.json();
		console.log('✅ API Data received:', data);
		return data;
	} catch (error) {
		console.error('❌ Error fetching court:', error);
		return null;
	}
}

// Format date helper
function formatDate(date: Date): string {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}

// Format relative time helper
function formatRelativeTime(date: Date): string {
	const now = new Date();
	const diff = now.getTime() - new Date(date).getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	if (days === 0) return 'Today';
	if (days === 1) return 'Yesterday';
	if (days < 7) return `${days} days ago`;
	if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
	if (days < 365) return `${Math.floor(days / 30)} months ago`;
	return `${Math.floor(days / 365)} years ago`;
}

// Generate metadata for SEO
export async function generateMetadata(
	props: CourtDetailPageProps
): Promise<Metadata> {
	const params = await props.params;
	const court = await getCourtDetails(params.slug);

	if (!court) {
		return {
			title: 'Court Not Found',
			description: 'The pickleball court you are looking for does not exist.',
		};
	}

	const title = `${court.name} - Pickleball Court in ${court.city}`;
	const description =
		court.description ||
		`Find pickleball courts and sessions at ${court.name} in ${court.city}, ${court.country}. Book courts, join games, and connect with players.`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url: `/court/${court.slug || params.slug}`,
			type: 'website',
			siteName: 'PaddlX',
			images:
				court.images && court.images.length > 0
					? [
							{
								url: court.images[0],
								width: 1200,
								height: 630,
								alt: court.name,
							},
					  ]
					: [],
			locale: 'en_US',
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: court.images && court.images.length > 0 ? [court.images[0]] : [],
		},
		alternates: {
			canonical: `/court/${court.slug || params.slug}`,
		},
		other: {
			'og:locality': court.city,
			'og:country-name': court.country,
			'og:street-address': court.address,
		},
	};
}

// Loading Component
function CourtDetailLoading() {
	return (
		<div className="min-h-screen bg-light-blue-3">
			<div className="h-96 bg-cool-gray animate-pulse" />
			<div className="container mx-auto px-4 py-12">
				<div className="bg-white rounded-2xl shadow-xl p-8">
					<div className="h-10 bg-cool-gray rounded w-3/4 mb-6 animate-pulse" />
					<div className="space-y-4">
						{[...Array(3)].map((_, i) => (
							<div key={i} className="h-6 bg-cool-gray rounded animate-pulse" />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

async function CourtDetailContent({ params }: CourtDetailPageProps) {
	const { slug } = await params;
	const court = await getCourtDetails(slug);

	if (!court) {
		notFound();
	}

	if (court.slug && court.slug !== slug) {
		redirect(`/court/${court.slug}`);
	}

	return (
		<div className="min-h-screen bg-light-blue-3">
			{/* Hero Image */}
			<div className="relative h-96 bg-gradient-to-br from-primary to-primary-dark">
				{court.images && court.images[0] && (
					<img
						src={court.images[0]}
						alt={court.name}
						className="absolute inset-0 w-full h-full object-cover"
					/>
				)}
				<div className="absolute inset-0 bg-dark/30" />
				<div className="absolute bottom-6 left-0 right-0">
					<div className="container mx-auto px-4">
						<nav className="flex items-center gap-2 text-white/80 text-sm mb-2">
							<Link href="/" className="hover:text-white transition-colors">
								Home
							</Link>
							<span>/</span>
							<Link
								href={`/city/${encodeURIComponent(court.city)}`}
								className="hover:text-white transition-colors"
							>
								{court.city}
							</Link>
							<span>/</span>
							<span className="text-white font-medium">{court.name}</span>
						</nav>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 py-12">
				{/* Main Info Card */}
				<div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
					<div className="p-8">
						<div className="flex items-start justify-between mb-6">
							<div className="flex-1">
								<h1 className="text-4xl font-bold text-dark-slate mb-2">
									{court.name}
								</h1>
								{court.rating && court.totalReviews && court.totalReviews > 0 && (
									<div className="flex items-center gap-2">
										<div className="flex items-center">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className={`w-5 h-5 ${
														i < Math.floor(court.rating!)
															? 'text-yellow fill-yellow'
															: 'text-light-gray'
													}`}
												/>
											))}
										</div>
										<span className="text-slate-gray">
											{court.rating.toFixed(1)} ({court.totalReviews} reviews)
										</span>
									</div>
								)}
							</div>
							{court.pricePerHour && (
								<div className="text-right">
									<p className="text-3xl font-bold text-primary">
										${court.pricePerHour}
									</p>
									<p className="text-sm text-slate-gray">per hour</p>
								</div>
							)}
						</div>

						{court.description && (
							<p className="text-slate-gray leading-relaxed mb-8">
								{court.description}
							</p>
						)}

						<div className="grid md:grid-cols-2 gap-8 mb-8">
							<div className="space-y-4">
								<h3 className="text-xl font-bold text-dark-slate mb-4">
									Court Information
								</h3>

								<div className="flex items-start gap-3">
									<MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
									<div>
										<p className="font-semibold text-dark-slate">Location</p>
										<p className="text-slate-gray">{court.address}</p>
										<p className="text-sm text-medium-gray">
											{court.city}, {court.country}
										</p>
									</div>
								</div>

								{court.phone && (
									<div className="flex items-start gap-3">
										<Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
										<div>
											<p className="font-semibold text-dark-slate">Phone</p>
											<a
												href={`tel:${court.phone}`}
												className="text-primary hover:text-primary-dark transition-colors"
											>
												{court.phone}
											</a>
										</div>
									</div>
								)}

								{court.hours && (
									<div className="flex items-start gap-3">
										<Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
										<div>
											<p className="font-semibold text-dark-slate">Hours</p>
											<p className="text-slate-gray">{court.hours}</p>
										</div>
									</div>
								)}
							</div>

							{court.amenities && court.amenities.length > 0 && (
								<div>
									<h3 className="text-xl font-bold text-dark-slate mb-4">Amenities</h3>
									<div className="flex flex-wrap gap-2">
										{court.amenities.map((amenity, index) => (
											<span
												key={index}
												className="px-4 py-2 bg-primary-ultra-soft text-primary-dark rounded-lg font-medium"
											>
												{amenity}
											</span>
										))}
									</div>
								</div>
							)}
						</div>

						<div className="flex gap-4">
							<Link
								href={`/book/${court.slug || court.id}`}
								className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
							>
								<Calendar className="w-5 h-5" />
								Book a Court
							</Link>
							<a
								href={
									court.latitude && court.longitude
										? `https://www.google.com/maps/dir/?api=1&destination=${court.latitude},${court.longitude}`
										: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
												court.address
										  )}`
								}
								target="_blank"
								rel="noopener noreferrer"
								className="px-8 py-4 border-2 border-border hover:border-primary text-slate-gray hover:text-primary font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
							>
								<Navigation className="w-5 h-5" />
								Get Directions
							</a>
						</div>
					</div>
				</div>

				{/* Articles/News Section */}
				{court.articles && court.articles.length > 0 && (
					<div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
						<div className="p-8">
							<h2 className="text-2xl font-bold text-dark-slate mb-6">
								News & Updates
							</h2>
							<div className="space-y-6">
								{court.articles.map((article) => (
									<div
										key={article.id}
										className="border-b border-divider last:border-b-0 pb-6"
									>
										<div className="flex items-start gap-4">
											{article.imageUrl && (
												<img
													src={article.imageUrl}
													alt={article.title}
													className="w-32 h-32 object-cover rounded-lg"
												/>
											)}
											<div className="flex-1">
												<h3 className="text-xl font-bold text-dark-slate mb-2">
													{article.title}
												</h3>
												<p className="text-slate-gray mb-3 line-clamp-3">
													{article.content}
												</p>
												<div className="flex items-center gap-4 text-sm text-medium-gray">
													<div className="flex items-center gap-2">
														{article.author.profilePicture ? (
															<img
																src={article.author.profilePicture}
																alt={article.author.name || 'Author'}
																className="w-6 h-6 rounded-full"
															/>
														) : (
															<User className="w-6 h-6 text-light-gray" />
														)}
														<span className="font-medium">
															{article.author.name || 'Anonymous'}
														</span>
													</div>
													<span>{formatDate(article.publishedAt)}</span>
													<div className="flex items-center gap-1">
														<MessageSquare className="w-4 h-4" />
														<span>{article.commentsCount} comments</span>
													</div>
												</div>

												{/* Article Comments */}
												{article.comments.length > 0 && (
													<div className="mt-4 pl-4 border-l-2 border-primary-ultra-soft space-y-3">
														<p className="text-sm font-semibold text-light-slate">
															Comments:
														</p>
														{article.comments.slice(0, 3).map((comment) => (
															<div key={comment.id} className="bg-light-blue-3 p-3 rounded-lg">
																<div className="flex items-start gap-2 mb-2">
																	{comment.author.profilePicture ? (
																		<img
																			src={comment.author.profilePicture}
																			alt={comment.author.name || 'User'}
																			className="w-8 h-8 rounded-full"
																		/>
																	) : (
																		<User className="w-8 h-8 text-light-gray" />
																	)}
																	<div className="flex-1">
																		<div className="flex items-center gap-2">
																			<span className="font-semibold text-sm text-dark-slate">
																				{comment.author.name || 'Anonymous'}
																			</span>
																			<span className="text-xs text-medium-gray">
																				{formatRelativeTime(comment.createdAt)}
																			</span>
																			{comment.isEdited && (
																				<span className="text-xs text-light-gray">(edited)</span>
																			)}
																		</div>
																		<p className="text-sm text-light-slate mt-1">
																			{comment.text}
																		</p>
																		{comment.isModerated && comment.moderationMessage && (
																			<p className="text-xs text-error mt-1">
																				Moderated: {comment.moderationMessage}
																			</p>
																		)}
																	</div>
																</div>
															</div>
														))}
														{article.comments.length > 3 && (
															<button className="text-sm text-primary hover:text-primary-dark font-medium">
																View all {article.comments.length} comments
															</button>
														)}
													</div>
												)}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				)}

				{/* Reviews Section */}
				{court.reviews && court.reviews.length > 0 && (
					<div className="bg-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-8">
							<h2 className="text-2xl font-bold text-dark-slate mb-6">
								Customer Reviews
							</h2>
							<div className="space-y-6">
								{court.reviews.map((review) => (
									<div
										key={review.id}
										className="border-b border-divider last:border-b-0 pb-6"
									>
										<div className="flex items-start gap-4">
											<div>
												{review.user.profilePicture ? (
													<img
														src={review.user.profilePicture}
														alt={review.user.name || 'User'}
														className="w-12 h-12 rounded-full"
													/>
												) : (
													<div className="w-12 h-12 bg-cool-gray rounded-full flex items-center justify-center">
														<User className="w-6 h-6 text-light-gray" />
													</div>
												)}
											</div>
											<div className="flex-1">
												<div className="flex items-center gap-2 mb-2">
													<span className="font-bold text-dark-slate">
														{review.user.name || 'Anonymous'}
													</span>
													{review.isVerified && (
														<BadgeCheck className="w-5 h-5 text-primary" />
													)}
													<span className="text-sm text-medium-gray">
														{formatRelativeTime(review.createdAt)}
													</span>
												</div>

												<div className="flex items-center gap-2 mb-2">
													<div className="flex items-center">
														{[...Array(5)].map((_, i) => (
															<Star
																key={i}
																className={`w-4 h-4 ${
																	i < Math.floor(review.rating)
																		? 'text-yellow fill-yellow'
																		: 'text-light-gray'
																}`}
															/>
														))}
													</div>
													<span className="text-sm font-semibold text-dark-slate">
														{review.rating.toFixed(1)}
													</span>
												</div>

												{review.title && (
													<h4 className="font-bold text-dark-slate mb-2">{review.title}</h4>
												)}

												{review.comment && (
													<p className="text-light-slate mb-3">{review.comment}</p>
												)}

												{review.images && review.images.length > 0 && (
													<div className="flex gap-2 mb-3">
														{review.images.map((image, idx) => (
															<img
																key={idx}
																src={image}
																alt={`Review image ${idx + 1}`}
																className="w-20 h-20 object-cover rounded-lg"
															/>
														))}
													</div>
												)}

												<div className="flex items-center gap-4 text-sm">
													<button className="flex items-center gap-1 text-slate-gray hover:text-primary transition-colors">
														<ThumbsUp className="w-4 h-4" />
														<span>Helpful ({review.helpfulVotes})</span>
													</button>
													{review.session && (
														<span className="text-medium-gray">
															Attended session: {review.session.title}
														</span>
													)}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default function CourtDetailPage(props: CourtDetailPageProps) {
	return (
		<Suspense fallback={<CourtDetailLoading />}>
			<CourtDetailContent {...props} />
		</Suspense>
	);
}
