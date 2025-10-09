// /src/app/court/[slug]/_components/CourtSessions.tsx

import {
	Calendar,
	User,
	Clock,
	Users,
	Lock,
	Globe,
	ChevronRight,
} from 'lucide-react';
import { CourtDetail, formatDate } from '../page';
import { SessionCard } from './SessionCard';

export default function CourtSessions({ court }: { court: CourtDetail }) {
	return (
		<div className="mb-8">
			<div className="mb-6">
				<h2 className="text-3xl font-bold text-dark-slate">Upcoming Sessions</h2>
				<p className="text-medium-gray mt-1">
					{court.sessions?.length || 0} session
					{court.sessions?.length !== 1 ? 's' : ''} available
				</p>
			</div>

			<div className="grid gap-4">
				{court.sessions && court.sessions.length > 0 ? (
					court.sessions.map((session) => (
						<SessionCard
							key={session.id}
							sessionId={session.id}
							sessionTitle={session.title}
						>
							<div className="group block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20">
								<div className="p-6">
									<div className="flex items-start justify-between gap-6">
										{/* Left Content */}
										<div className="flex-1 min-w-0">
											{/* Header */}
											<div className="flex items-start justify-between mb-3">
												<div className="flex-1">
													<h3 className="text-xl font-bold text-dark-slate group-hover:text-primary transition-colors mb-2">
														{session.title}
													</h3>

													{/* Date & Time */}
													<div className="flex flex-wrap items-center gap-4 text-sm text-medium-gray mb-3">
														<div className="flex items-center gap-1.5">
															<Calendar className="w-4 h-4 text-primary" />
															<span className="font-medium">{formatDate(session.date)}</span>
														</div>
														{session.startTime && session.endTime && (
															<div className="flex items-center gap-1.5">
																<Clock className="w-4 h-4 text-primary" />
																<span>
																	{new Date(session.startTime).toLocaleTimeString([], {
																		hour: '2-digit',
																		minute: '2-digit',
																	})}
																	{' - '}
																	{new Date(session.endTime).toLocaleTimeString([], {
																		hour: '2-digit',
																		minute: '2-digit',
																	})}
																</span>
															</div>
														)}
													</div>
												</div>
											</div>

											{/* Description */}
											{session.description && (
												<p className="text-light-slate text-sm mb-4 line-clamp-2">
													{session.description}
												</p>
											)}

											{/* Meta Info */}
											<div className="flex flex-wrap items-center gap-3 mb-4">
												{/* Player Count */}
												<div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg">
													<Users className="w-4 h-4 text-primary" />
													<span className="text-sm font-medium text-dark-slate">
														{session.participantsCount}/{session.numPlayers}
													</span>
												</div>

												{/* Level Badge */}
												{session.suggestedLevel && (
													<div className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
														<span className="text-sm font-semibold text-primary">
															{session.suggestedLevel}
														</span>
													</div>
												)}

												{/* Privacy Badge */}
												<div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg">
													{session.isPrivate ? (
														<>
															<Lock className="w-3.5 h-3.5 text-medium-gray" />
															<span className="text-xs font-medium text-medium-gray">
																Private
															</span>
														</>
													) : (
														<>
															<Globe className="w-3.5 h-3.5 text-medium-gray" />
															<span className="text-xs font-medium text-medium-gray">
																Public
															</span>
														</>
													)}
												</div>
											</div>

											{/* Creator & Participants */}
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-3">
													{/* Creator */}
													<div className="flex items-center gap-2">
														<div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
															<User className="w-4 h-4 text-white" />
														</div>
														<div>
															<p className="text-xs text-medium-gray">Organized by</p>
															<p className="text-sm font-semibold text-dark-slate">
																{session.creator.name}
															</p>
														</div>
													</div>

													{/* Participant Avatars */}
													{session.participants.length > 0 && (
														<div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
															<div className="flex -space-x-2">
																{session.participants.slice(0, 4).map((p) => (
																	<img
																		key={p.id}
																		src={p.user.profilePicture ?? ''}
																		alt={p.user.name ?? ''}
																		className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-gray-100"
																	/>
																))}
																{session.participantsCount > 4 && (
																	<div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white ring-1 ring-gray-100 flex items-center justify-center">
																		<span className="text-xs font-semibold text-medium-gray">
																			+{session.participantsCount - 4}
																		</span>
																	</div>
																)}
															</div>
														</div>
													)}
												</div>
											</div>
										</div>

										{/* Right Side - Price & CTA */}
										<div className="flex flex-col items-end justify-between gap-4 shrink-0">
											{/* Price */}
											<div className="text-right">
												<p className="text-xs text-medium-gray mb-1">Per Player</p>
												<div className="px-4 py-2 bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg shadow-primary/20">
													<p className="text-2xl font-bold text-white">
														{session.sessionCurrency}{' '}
														{(
															session.sessionPrice || session.amountPerPlayer
														).toLocaleString()}
													</p>
												</div>
											</div>

											{/* View Button */}
											<div className="flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
												<span>View Details</span>
												<ChevronRight className="w-4 h-4" />
											</div>
										</div>
									</div>
								</div>

								{/* Progress Bar */}
								<div className="h-1 bg-gray-100 overflow-hidden">
									<div
										className="h-full bg-gradient-to-r from-primary to-primary-dark transition-all duration-500"
										style={{
											width: `${(session.participantsCount / session.numPlayers) * 100}%`,
										}}
									/>
								</div>
							</div>
						</SessionCard>
					))
				) : (
					<div className="bg-white rounded-xl shadow-sm p-12 text-center">
						<Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
						<h3 className="text-xl font-semibold text-dark-slate mb-2">
							No upcoming sessions
						</h3>
						<p className="text-medium-gray">
							Check back later for new sessions at this court
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
