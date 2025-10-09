import { MessageSquare, User, Calendar, ChevronRight } from 'lucide-react';
import { CourtDetail, formatDate, formatRelativeTime } from '../page';
import Link from 'next/link';
import Image from 'next/image';

export default function CourtArticles({ court }: { court: CourtDetail }) {
	return (
		<div className="mb-8">
			<div className="mb-6">
				<h2 className="text-3xl font-bold text-dark-slate">News & Updates</h2>
				<p className="text-medium-gray mt-1">
					Latest news and announcements from the court
				</p>
			</div>

			{court.articles && court.articles.length > 0 ? (
				<div className="space-y-4">
					{court.articles.map((article) => (
						<article
							key={article.id}
							className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20"
						>
							{/* CHANGED: Removed outer Link wrapper to prevent nested Links */}
							<div className="flex flex-col md:flex-row gap-6 p-6">
								{/* Article Image */}
								{article.imageUrl && (
									<Link
										href={`/article/${article.id}`}
										className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden rounded-xl block"
									>
										<Image
											src={article.imageUrl}
											alt={article.title}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
											width={400}
											height={200}
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
									</Link>
								)}

								{/* Article Content */}
								<div className="flex-1 min-w-0">
									{/* Title & Content */}
									<div className="mb-4">
										{/* CHANGED: Made title a clickable Link */}
										<Link href={`/article/${article.id}`}>
											<h3 className="text-2xl font-bold text-dark-slate group-hover:text-primary transition-colors mb-3 line-clamp-2">
												{article.title}
											</h3>
										</Link>
										<Link href={`/article/${article.id}`} className="block">
											<p className="text-light-slate leading-relaxed line-clamp-3">
												{article.content}
											</p>
										</Link>
									</div>

									{/* Author & Meta Info */}
									<div className="flex flex-wrap items-center gap-4 mb-4 pb-4 border-b border-gray-100">
										{/* Author */}
										<div className="flex items-center gap-2">
											{article.author.profilePicture ? (
												<img
													src={article.author.profilePicture}
													alt={article.author.name || 'Author'}
													className="w-9 h-9 rounded-full ring-2 ring-gray-100"
												/>
											) : (
												<div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
													<User className="w-5 h-5 text-primary" />
												</div>
											)}
											<div>
												<p className="text-sm font-semibold text-dark-slate">
													{article.author.name || 'Anonymous'}
												</p>
												<p className="text-xs text-medium-gray">Author</p>
											</div>
										</div>

										{/* Date */}
										<div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg">
											<Calendar className="w-4 h-4 text-primary" />
											<span className="text-sm text-medium-gray">
												{formatDate(article.publishedAt)}
											</span>
										</div>

										{/* Comments Count */}
										<div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg">
											<MessageSquare className="w-4 h-4 text-primary" />
											<span className="text-sm font-medium text-dark-slate">
												{article.commentsCount}
											</span>
										</div>

										{/* Read More Link */}
										<Link
											href={`/article/${article.id}`}
											className="ml-auto flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all"
										>
											<span>Read More</span>
											<ChevronRight className="w-4 h-4" />
										</Link>
									</div>

									{/* Comments Preview */}
									{article.comments.length > 0 && (
										<div className="space-y-3">
											<div className="flex items-center gap-2 mb-3">
												<div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
												<span className="text-xs font-semibold text-medium-gray uppercase tracking-wide">
													Recent Comments
												</span>
												<div className="h-px flex-1 bg-gradient-to-l from-primary/20 to-transparent" />
											</div>

											<div className="space-y-2">
												{article.comments.slice(0, 2).map((comment) => (
													<div
														key={comment.id}
														className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-100"
													>
														<div className="flex items-start gap-3">
															{/* Comment Author Avatar */}
															{comment.author.profilePicture ? (
																<Image
																	src={comment.author.profilePicture}
																	alt={comment.author.name || 'User'}
																	className="w-8 h-8 rounded-full ring-2 ring-white"
																	width={32}
																	height={32}
																/>
															) : (
																<div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
																	<User className="w-4 h-4 text-primary" />
																</div>
															)}

															<div className="flex-1 min-w-0">
																{/* Comment Header */}
																<div className="flex items-center gap-2 mb-1 flex-wrap">
																	<span className="font-semibold text-sm text-dark-slate">
																		{comment.author.name || 'Anonymous'}
																	</span>
																	<span className="text-xs text-medium-gray">
																		{formatRelativeTime(comment.createdAt)}
																	</span>
																	{comment.isEdited && (
																		<span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-medium-gray">
																			edited
																		</span>
																	)}
																</div>

																{/* Comment Text */}
																<p className="text-sm text-light-slate leading-relaxed line-clamp-2">
																	{comment.text}
																</p>

																{/* Moderation Warning */}
																{comment.isModerated && comment.moderationMessage && (
																	<div className="mt-2 px-3 py-2 bg-red-50 border border-red-100 rounded-lg">
																		<p className="text-xs text-red-600">
																			⚠️ {comment.moderationMessage}
																		</p>
																	</div>
																)}
															</div>
														</div>
													</div>
												))}
											</div>

											{/* View All Comments - Now standalone Link (no longer nested) */}
											{article.comments.length > 2 && (
												<Link
													href={`/article/${article.id}#comments`}
													className="block w-full mt-2 px-4 py-2 bg-primary/5 hover:bg-primary/10 text-primary rounded-lg font-medium text-sm transition-colors text-center"
												>
													<span className="inline-flex items-center gap-2">
														<MessageSquare className="w-4 h-4" />
														View all {article.comments.length} comments
													</span>
												</Link>
											)}
										</div>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			) : (
				<div className="bg-white rounded-xl shadow-sm p-12 text-center">
					<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<MessageSquare className="w-8 h-8 text-gray-300" />
					</div>
					<h3 className="text-xl font-semibold text-dark-slate mb-2">No news yet</h3>
					<p className="text-medium-gray">
						Check back later for updates and announcements
					</p>
				</div>
			)}
		</div>
	);
}
