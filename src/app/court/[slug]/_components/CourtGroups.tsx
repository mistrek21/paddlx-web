'use client';

// /src/app/court/[slug]/_components/CourtGroups.tsx

import { Users, Lock, Globe, ChevronRight, UserPlus } from 'lucide-react';
import { CourtDetail } from '../page';
import Link from 'next/link';
import { useMobileAppModal } from '@/src/hooks/useMobileAppModal';

export default function CourtGroups({ court }: { court: CourtDetail }) {
	const { openModal, ModalComponent } = useMobileAppModal();

	const handleCardClick = (e: React.MouseEvent) => {
		e.preventDefault();
		openModal('view this group');
	};

	return (
		<>
			<div className="mb-8">
				<div className="mb-6">
					<h2 className="text-3xl font-bold text-dark-slate">Groups</h2>
					<p className="text-medium-gray mt-1">
						{court.groups?.length || 0} active group
						{court.groups?.length !== 1 ? 's' : ''} at this court
					</p>
				</div>

				{court.groups && court.groups.length > 0 ? (
					<div className="grid md:grid-cols-2 gap-4">
						{court.groups.map((group) => (
							<Link
								key={group.id}
								href={`/group/${group.id}`}
								onClick={handleCardClick}
								className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20"
							>
								{/* Gradient Background Accent */}
								<div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent" />

								<div className="relative p-6">
									{/* Header Section */}
									<div className="flex items-start gap-4 mb-4">
										{/* Group Avatar */}
										<div className="relative shrink-0">
											{group.imageUrl ? (
												<img
													src={group.imageUrl || ''}
													alt={group.name}
													className="w-16 h-16 rounded-xl object-cover ring-2 ring-white shadow-md"
												/>
											) : (
												<div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-md">
													<Users className="w-8 h-8 text-white" />
												</div>
											)}
											{/* Online Indicator */}
											<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
										</div>

										{/* Group Info */}
										<div className="flex-1 min-w-0">
											<h3 className="text-lg font-bold text-dark-slate group-hover:text-primary transition-colors mb-1 truncate">
												{group.name}
											</h3>

											{/* Meta Tags */}
											<div className="flex flex-wrap items-center gap-2">
												<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/10 rounded-lg text-xs font-semibold text-primary">
													{group.typeOfGame}
												</span>

												<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-medium text-medium-gray">
													{group.visibility === 'private' ||
													group.visibility === 'Private' ? (
														<>
															<Lock className="w-3 h-3" />
															<span>Private</span>
														</>
													) : (
														<>
															<Globe className="w-3 h-3" />
															<span>Public</span>
														</>
													)}
												</span>
											</div>
										</div>
									</div>

									{/* Description */}
									{group.description && (
										<p className="text-sm text-light-slate mb-4 line-clamp-2 leading-relaxed">
											{group.description}
										</p>
									)}

									{/* Members Section */}
									<div className="mb-4">
										<div className="flex items-center justify-between mb-3">
											<div className="flex items-center gap-2">
												<div className="p-1.5 bg-primary/10 rounded-lg">
													<Users className="w-4 h-4 text-primary" />
												</div>
												<span className="text-sm font-semibold text-dark-slate">
													{group.membersCount}{' '}
													{group.membersCount === 1 ? 'Member' : 'Members'}
												</span>
											</div>
										</div>

										{/* Member Avatars */}
										{group.members.length > 0 && (
											<div className="flex items-center">
												<div className="flex -space-x-2">
													{group.members.slice(0, 8).map((m, index) => (
														<img
															key={m.id}
															src={m.user.profilePicture ?? ''}
															alt={m.user.name ?? ''}
															className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-gray-100 transition-transform group-hover:scale-110"
															style={{
																zIndex: 8 - index,
																transitionDelay: `${index * 30}ms`,
															}}
														/>
													))}
													{group.membersCount > 8 && (
														<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-white ring-1 ring-gray-100 flex items-center justify-center">
															<span className="text-xs font-bold text-medium-gray">
																+{group.membersCount - 8}
															</span>
														</div>
													)}
												</div>
											</div>
										)}
									</div>

									{/* Footer - CTA */}
									<div className="flex items-center justify-between pt-4 border-t border-gray-100">
										<div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
											<span>View Group</span>
											<ChevronRight className="w-4 h-4" />
										</div>

										<button
											onClick={(e) => {
												e.preventDefault();
												e.stopPropagation();
												openModal('join this group');
											}}
											className="p-2 rounded-lg bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-200"
										>
											<UserPlus className="w-4 h-4" />
										</button>
									</div>
								</div>

								{/* Hover Effect Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
							</Link>
						))}
					</div>
				) : (
					<div className="bg-white rounded-xl shadow-sm p-12 text-center">
						<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Users className="w-8 h-8 text-gray-300" />
						</div>
						<h3 className="text-xl font-semibold text-dark-slate mb-2">
							No groups yet
						</h3>
						<p className="text-medium-gray mb-6">
							Be the first to create a group at this court
						</p>
						<button
							onClick={() => openModal('create a group')}
							className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
						>
							<UserPlus className="w-4 h-4" />
							Create Group
						</button>
					</div>
				)}
			</div>

			<ModalComponent />
		</>
	);
}
