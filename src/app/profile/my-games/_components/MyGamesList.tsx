// src/app/profile/my-games/_components/MyGamesList.tsx

'use client';

import { useState } from 'react';

export default function MyGamesList({ games }: { games: any[] }) {
	const [search, setSearch] = useState('');
	const [expanded, setExpanded] = useState<string | null>(null);
	const [filterStatus, setFilterStatus] = useState<string>('ALL');

	function handleExpand(id: string) {
		setExpanded((prev) => (prev === id ? null : id));
	}

	// Filter by title and status
	const filteredGames = games.filter((g) => {
		const matchesSearch = g.session.title
			.toLowerCase()
			.includes(search.toLowerCase());
		const matchesStatus =
			filterStatus === 'ALL' || g.session.status === filterStatus;
		return matchesSearch && matchesStatus;
	});

	// Helper for status style
	function statusConfig(status: string) {
		switch (status) {
			case 'NOT_STARTED':
				return {
					bg: 'bg-amber-50',
					text: 'text-amber-700',
					border: 'border-amber-200',
					label: 'Not Started',
				};
			case 'IN_PROGRESS':
				return {
					bg: 'bg-blue-50',
					text: 'text-blue-700',
					border: 'border-blue-200',
					label: 'In Progress',
				};
			case 'COMPLETED':
				return {
					bg: 'bg-green-50',
					text: 'text-green-700',
					border: 'border-green-200',
					label: 'Completed',
				};
			case 'CANCELLED':
				return {
					bg: 'bg-red-50',
					text: 'text-red-700',
					border: 'border-red-200',
					label: 'Cancelled',
				};
			default:
				return {
					bg: 'bg-gray-50',
					text: 'text-gray-700',
					border: 'border-gray-200',
					label: status.replace('_', ' '),
				};
		}
	}

	// Helper for format category
	function formatCategoryDisplay(category: string) {
		return category
			.split('_')
			.map((word) => word.charAt(0) + word.slice(1).toLowerCase())
			.join(' ');
	}

	const statusOptions = [
		'ALL',
		'NOT_STARTED',
		'IN_PROGRESS',
		'COMPLETED',
		'CANCELLED',
	];

	return (
		<div className="max-w-4xl mx-auto px-4 py-8">
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">My Games</h1>
				<p className="text-gray-600">Manage and track your paddle sessions</p>
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
						placeholder="Search games by title..."
						className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
					/>
				</div>

				{/* Status filter */}
				<div className="flex flex-wrap gap-2">
					{statusOptions.map((status) => (
						<button
							key={status}
							onClick={() => setFilterStatus(status)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
								filterStatus === status
									? 'bg-primary text-white shadow-md'
									: 'bg-gray-100 text-gray-700 hover:bg-primary-ultra-soft'
							}`}
						>
							{status === 'ALL' ? 'All Games' : statusConfig(status).label}
						</button>
					))}
				</div>
			</div>

			{/* Results count */}
			{games.length > 0 && (
				<div className="mb-4 text-sm text-gray-600">
					Showing {filteredGames.length} of {games.length} games
				</div>
			)}

			{/* Empty states */}
			{games.length === 0 ? (
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
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								/>
							</svg>
						</div>
					</div>
					<h3 className="text-xl font-semibold text-gray-900 mb-2">No games yet</h3>
					<p className="text-gray-600 mb-6">
						You haven't joined any games. Start by browsing available sessions!
					</p>
					<a
						href="/browse"
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
						Browse Games
					</a>
				</div>
			) : filteredGames.length === 0 ? (
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
					{filteredGames.map((participation) => {
						const session = participation.session;
						const isExpanded = expanded === session.id;
						const status = statusConfig(session.status);

						return (
							<div
								key={session.id}
								className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden hover:border-primary-soft"
							>
								<button
									onClick={() => handleExpand(session.id)}
									className="w-full text-left p-6 focus:outline-none transition-colors hover:bg-primary-ultra-soft"
								>
									{/* Header row */}
									<div className="flex items-start justify-between gap-4 mb-4">
										<div className="flex-1 min-w-0">
											<h3 className="text-xl font-bold text-gray-900 mb-1 truncate">
												{session.title}
											</h3>
											<div className="flex flex-wrap gap-2 items-center">
												<span
													className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${status.bg} ${status.text} ${status.border}`}
												>
													{status.label}
												</span>
												<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-ultra-soft text-primary-dark">
													{formatCategoryDisplay(session.formatCategory)}
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

									{/* Info grid */}
									<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
										<div className="flex items-start gap-2">
											<span className="text-gray-400 mt-0.5">📍</span>
											<div className="flex-1 min-w-0">
												<div className="text-xs text-gray-500 mb-0.5">Location</div>
												<div className="text-sm font-medium text-gray-900 truncate">
													{session.location}
												</div>
											</div>
										</div>

										<div className="flex items-start gap-2">
											<span className="text-gray-400 mt-0.5">📅</span>
											<div className="flex-1 min-w-0">
												<div className="text-xs text-gray-500 mb-0.5">Date</div>
												<div className="text-sm font-medium text-gray-900">
													{new Date(session.date).toLocaleDateString('en-US', {
														month: 'short',
														day: 'numeric',
														year: 'numeric',
													})}
												</div>
											</div>
										</div>

										<div className="flex items-start gap-2">
											<span className="text-gray-400 mt-0.5">⏰</span>
											<div className="flex-1 min-w-0">
												<div className="text-xs text-gray-500 mb-0.5">Time</div>
												<div className="text-sm font-medium text-gray-900">
													{new Date(session.startTime).toLocaleTimeString([], {
														hour: '2-digit',
														minute: '2-digit',
													})}
													{' - '}
													{new Date(session.endTime).toLocaleTimeString([], {
														hour: '2-digit',
														minute: '2-digit',
													})}
												</div>
											</div>
										</div>

										<div className="flex items-start gap-2">
											<span className="text-gray-400 mt-0.5">👥</span>
											<div className="flex-1 min-w-0">
												<div className="text-xs text-gray-500 mb-0.5">Players</div>
												<div className="text-sm font-medium text-gray-900">
													{session.numPlayers}
												</div>
											</div>
										</div>
									</div>
								</button>

								{/* Expanded details */}
								{isExpanded && (
									<div className="px-6 pb-6 border-t border-gray-100 pt-4 space-y-4">
										{session.description && (
											<div>
												<h4 className="text-sm font-semibold text-gray-900 mb-2">
													Description
												</h4>
												<p className="text-gray-700 leading-relaxed">
													{session.description}
												</p>
											</div>
										)}

										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="bg-primary-ultra-soft rounded-lg p-4 border border-primary-soft">
												<div className="text-xs font-semibold text-primary-dark uppercase mb-1">
													Suggested Level
												</div>
												<div className="text-base font-medium text-gray-900">
													{session.suggestedLevel || 'Any Level'}
												</div>
											</div>

											{session.amountPerPlayer > 0 && (
												<div className="bg-accent-light rounded-lg p-4 border border-accent">
													<div className="text-xs font-semibold text-accent-dark uppercase mb-1">
														Cost Per Player
													</div>
													<div className="text-base font-bold text-accent-dark">
														₱{session.amountPerPlayer.toFixed(2)}
													</div>
												</div>
											)}
										</div>

										{session.additionalNotes && (
											<div>
												<h4 className="text-sm font-semibold text-gray-900 mb-2">
													Additional Notes
												</h4>
												<p className="text-gray-600 text-sm leading-relaxed">
													{session.additionalNotes}
												</p>
											</div>
										)}

										{session.isWeekly && (
											<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
												<div className="flex items-center gap-2 text-blue-700">
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
															d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
														/>
													</svg>
													<span className="text-sm font-semibold">
														Recurring Weekly Game
													</span>
												</div>
											</div>
										)}

										{/* Action buttons */}
										<div className="flex flex-wrap gap-3 pt-2">
											<button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-sm shadow-sm">
												View Details
											</button>
											<button className="px-4 py-2 bg-primary-ultra-soft text-primary-dark rounded-lg hover:bg-primary-soft transition-colors font-medium text-sm">
												Message Organizer
											</button>
										</div>
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
