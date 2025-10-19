// src/app/profile/my-groups/_components/MyGroupsList.tsx
'use client';

import { useState } from 'react';
import { GroupMembership } from '../page';

export default function MyGroupsList({
	groups,
}: {
	groups: GroupMembership[];
}) {
	const [search, setSearch] = useState('');
	const [filterVisibility, setFilterVisibility] = useState<string>('ALL');
	const [filterRole, setFilterRole] = useState<string>('ALL');
	const [expanded, setExpanded] = useState<string | null>(null);

	function handleExpand(id: string) {
		setExpanded((prev) => (prev === id ? null : id));
	}

	// Filter by name, visibility, and role
	const filteredGroups = groups.filter((g) => {
		const matchesSearch = g.group.name
			.toLowerCase()
			.includes(search.toLowerCase());
		const matchesVisibility =
			filterVisibility === 'ALL' || g.group.visibility === filterVisibility;
		const matchesRole = filterRole === 'ALL' || g.role === filterRole;
		return matchesSearch && matchesVisibility && matchesRole;
	});

	// Helper for visibility config
	function visibilityConfig(visibility: string) {
		switch (visibility) {
			case 'PUBLIC':
				return {
					bg: 'bg-green-50',
					text: 'text-green-700',
					border: 'border-green-200',
					icon: '🌍',
					label: 'Public',
				};
			case 'PRIVATE':
				return {
					bg: 'bg-gray-50',
					text: 'text-gray-700',
					border: 'border-gray-200',
					icon: '🔒',
					label: 'Private',
				};
			case 'FRIENDS_ONLY':
				return {
					bg: 'bg-blue-50',
					text: 'text-blue-700',
					border: 'border-blue-200',
					icon: '👥',
					label: 'Friends Only',
				};
			default:
				return {
					bg: 'bg-gray-50',
					text: 'text-gray-700',
					border: 'border-gray-200',
					icon: '❓',
					label: visibility,
				};
		}
	}

	// Helper for role config
	function roleConfig(role: string) {
		switch (role) {
			case 'OWNER':
				return {
					bg: 'bg-primary-soft',
					text: 'text-primary-dark',
					border: 'border-primary',
					icon: '👑',
					label: 'Owner',
				};
			case 'ADMIN':
				return {
					bg: 'bg-accent-light',
					text: 'text-accent-dark',
					border: 'border-accent',
					icon: '⭐',
					label: 'Admin',
				};
			default:
				return {
					bg: 'bg-gray-50',
					text: 'text-gray-700',
					border: 'border-gray-200',
					icon: '👤',
					label: 'Member',
				};
		}
	}

	// Helper for game type display
	function gameTypeDisplay(type: string) {
		return type
			.split('_')
			.map((word) => word.charAt(0) + word.slice(1).toLowerCase())
			.join(' ');
	}

	const visibilityOptions = ['ALL', 'PUBLIC', 'PRIVATE', 'FRIENDS_ONLY'];
	const roleOptions = ['ALL', 'OWNER', 'ADMIN', 'MEMBER'];

	return (
		<div className="max-w-4xl mx-auto px-4 py-8">
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">My Groups</h1>
				<p className="text-gray-600">
					Manage your paddle communities and memberships
				</p>
			</div>

			{/* Filters */}
			<div className="mb-6 space-y-4">
				{/* Search bar */}
				<div className="relative">
					<svg
						className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
					<input
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search groups by name..."
						className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
					/>
				</div>

				{/* Filter pills row */}
				<div className="space-y-3">
					{/* Visibility filter */}
					<div>
						<div className="text-xs font-semibold text-gray-500 uppercase mb-2">
							Visibility
						</div>
						<div className="flex flex-wrap gap-2">
							{visibilityOptions.map((vis) => (
								<button
									key={vis}
									onClick={() => setFilterVisibility(vis)}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
										filterVisibility === vis
											? 'bg-primary text-white shadow-md'
											: 'bg-gray-100 text-gray-700 hover:bg-primary-ultra-soft'
									}`}
								>
									{vis === 'ALL' ? 'All' : visibilityConfig(vis).label}
								</button>
							))}
						</div>
					</div>

					{/* Role filter */}
					<div>
						<div className="text-xs font-semibold text-gray-500 uppercase mb-2">
							Your Role
						</div>
						<div className="flex flex-wrap gap-2">
							{roleOptions.map((role) => (
								<button
									key={role}
									onClick={() => setFilterRole(role)}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
										filterRole === role
											? 'bg-primary text-white shadow-md'
											: 'bg-gray-100 text-gray-700 hover:bg-primary-ultra-soft'
									}`}
								>
									{role === 'ALL' ? 'All Roles' : roleConfig(role).label}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Results count */}
			{groups.length > 0 && (
				<div className="mb-4 text-sm text-gray-600">
					Showing {filteredGroups.length} of {groups.length} groups
				</div>
			)}

			{/* Empty states */}
			{groups.length === 0 ? (
				<div className="py-16 text-center">
					<div className="mb-4 flex justify-center">
						<div className="w-16 h-16 bg-primary-ultra-soft rounded-full flex items-center justify-center">
							<svg
								className="w-8 h-8 text-primary"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</div>
					</div>
					<h3 className="text-xl font-semibold text-gray-900 mb-2">No groups yet</h3>
					<p className="text-gray-600 mb-6">
						You haven't joined or created any groups. Start building your community!
					</p>
					<a
						href="/groups/browse"
						className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold shadow-md hover:shadow-lg"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						Browse Groups
					</a>
				</div>
			) : filteredGroups.length === 0 ? (
				<div className="py-16 text-center">
					<div className="mb-4 flex justify-center">
						<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
							<svg
								className="w-8 h-8 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
					</div>
					<h3 className="text-xl font-semibold text-gray-900 mb-2">
						No matches found
					</h3>
					<p className="text-gray-600">Try adjusting your filters or search term</p>
				</div>
			) : (
				<div className="space-y-4">
					{filteredGroups.map((membership) => {
						const group = membership.group;
						const isExpanded = expanded === group.id;
						const visibility = visibilityConfig(group.visibility);
						const role = roleConfig(membership.role);

						return (
							<div
								key={group.id}
								className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden hover:border-primary-soft"
							>
								<button
									onClick={() => handleExpand(group.id)}
									className="w-full text-left p-6 focus:outline-none transition-colors hover:bg-primary-ultra-soft"
								>
									<div className="flex gap-4 items-start">
										{/* Group Image */}
										<div className="flex-shrink-0">
											<div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary-soft bg-primary-ultra-soft">
												{group.imageUrl ? (
													<img
														src={group.imageUrl}
														alt={group.name}
														className="w-full h-full object-cover"
													/>
												) : (
													<div className="w-full h-full flex items-center justify-center text-2xl">
														🏓
													</div>
												)}
											</div>
										</div>

										{/* Group Info */}
										<div className="flex-1 min-w-0">
											<div className="flex items-start justify-between gap-4 mb-2">
												<div className="flex-1 min-w-0">
													<h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
														{group.name}
													</h3>
													<div className="flex flex-wrap gap-2 items-center">
														<span
															className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${visibility.bg} ${visibility.text} ${visibility.border}`}
														>
															<span>{visibility.icon}</span>
															<span>{visibility.label}</span>
														</span>
														<span
															className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${role.bg} ${role.text} ${role.border}`}
														>
															<span>{role.icon}</span>
															<span>{role.label}</span>
														</span>
														<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-ultra-soft text-primary-dark">
															{gameTypeDisplay(group.typeOfGame)}
														</span>
													</div>
												</div>
												<svg
													className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
														isExpanded ? 'rotate-180' : ''
													}`}
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M19 9l-7 7-7-7"
													/>
												</svg>
											</div>

											{/* Quick Info */}
											<div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-3">
												{group.location && (
													<div className="flex items-center gap-1">
														<span>📍</span>
														<span>{group.location}</span>
													</div>
												)}
												<div className="flex items-center gap-1">
													<span>👥</span>
													<span>{group.members?.length || 0} members</span>
												</div>
											</div>

											{/* Description preview (when collapsed) */}
											{!isExpanded && group.description && (
												<p className="text-gray-500 text-sm mt-2 line-clamp-1">
													{group.description}
												</p>
											)}
										</div>
									</div>
								</button>

								{/* Expanded details */}
								{isExpanded && (
									<div className="px-6 pb-6 border-t border-gray-100 pt-4 space-y-4">
										{group.description && (
											<div>
												<h4 className="text-sm font-semibold text-gray-900 mb-2">About</h4>
												<p className="text-gray-700 leading-relaxed">{group.description}</p>
											</div>
										)}

										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											{group.skillLevel && (
												<div className="bg-primary-ultra-soft rounded-lg p-4 border border-primary-soft">
													<div className="text-xs font-semibold text-primary-dark uppercase mb-1">
														Skill Level
													</div>
													<div className="text-base font-medium text-gray-900">
														{group.skillLevel}
													</div>
												</div>
											)}

											{group.duprLvl && group.duprLvl.length > 0 && (
												<div className="bg-primary-ultra-soft rounded-lg p-4 border border-primary-soft">
													<div className="text-xs font-semibold text-primary-dark uppercase mb-1">
														DUPR Level
													</div>
													<div className="text-base font-medium text-gray-900">
														{group.duprLvl.join(' - ')}
													</div>
												</div>
											)}
										</div>

										{/* Group Settings */}
										<div className="bg-gray-50 rounded-lg p-4 space-y-2">
											<h4 className="text-sm font-semibold text-gray-900 mb-3">
												Group Settings
											</h4>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
												<div className="flex items-center gap-2">
													<span
														className={group.inviteOthers ? 'text-green-600' : 'text-red-600'}
													>
														{group.inviteOthers ? '✓' : '✗'}
													</span>
													<span className="text-gray-700">Members can invite others</span>
												</div>
												<div className="flex items-center gap-2">
													<span
														className={group.contactMe ? 'text-green-600' : 'text-red-600'}
													>
														{group.contactMe ? '✓' : '✗'}
													</span>
													<span className="text-gray-700">Contact info visible</span>
												</div>
											</div>
										</div>

										{/* Action buttons */}
										{/* <div className="flex flex-wrap gap-3 pt-2">
											<button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-sm shadow-sm">
												View Group
											</button>
											<button className="px-4 py-2 bg-primary-ultra-soft text-primary-dark rounded-lg hover:bg-primary-soft transition-colors font-medium text-sm">
												Message Members
											</button>
											{(membership.role === 'OWNER' || membership.role === 'ADMIN') && (
												<button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm">
													Manage Group
												</button>
											)}
										</div> */}
									</div>
								)}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
