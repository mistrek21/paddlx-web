// src/app/create/_components/RoundRobinSimulator.tsx

'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Users,
	Play,
	Trophy,
	Calendar,
	Target,
	Settings,
	RotateCcw,
	Shuffle,
	TrendingUp,
	Award,
	Clock,
	ChevronDown,
	ChevronRight,
	Plus,
	Minus,
	Eye,
	CheckCircle2,
	XCircle,
	Zap,
	Medal,
} from 'lucide-react';

// Types
interface Player {
	id: string;
	name: string;
	avatar?: string;
	skill?: number;
}

interface Match {
	id: string;
	player1: Player;
	player2: Player;
	score1?: number;
	score2?: number;
	completed: boolean;
	winner?: string;
	round: number;
}

interface TournamentStats {
	wins: number;
	losses: number;
	pointsFor: number;
	pointsAgainst: number;
	matchesPlayed: number;
}

interface TournamentFormat {
	id: string;
	name: string;
	description: string;
	minPlayers: number;
	maxPlayers: number;
	icon: any;
}

// Tournament formats
const TOURNAMENT_FORMATS: TournamentFormat[] = [
	{
		id: 'standard',
		name: 'Standard Round Robin',
		description: 'Everyone plays everyone once. Classic format.',
		minPlayers: 3,
		maxPlayers: 16,
		icon: Users,
	},
	{
		id: 'double',
		name: 'Double Round Robin',
		description: 'Everyone plays everyone twice. More comprehensive.',
		minPlayers: 3,
		maxPlayers: 12,
		icon: RotateCcw,
	},
	{
		id: 'swiss',
		name: 'Swiss System',
		description: 'Paired based on performance. Balanced competition.',
		minPlayers: 4,
		maxPlayers: 20,
		icon: Target,
	},
];

// Round Robin Algorithm Class
class RoundRobinGenerator {
	static generateSchedule(
		players: Player[],
		format: string = 'standard'
	): Match[][] {
		if (players.length < 2) return [];

		const playerList = [...players];

		// Add bye player for odd numbers
		if (playerList.length % 2 === 1) {
			playerList.push({ id: 'bye', name: 'BYE' });
		}

		const n = playerList.length;
		const rounds: Match[][] = [];

		// Circle method algorithm
		for (let roundNum = 0; roundNum < n - 1; roundNum++) {
			const roundMatches: Match[] = [];

			for (let i = 0; i < n / 2; i++) {
				const player1 = playerList[i];
				const player2 = playerList[n - 1 - i];

				if (player1.id !== 'bye' && player2.id !== 'bye') {
					roundMatches.push({
						id: `${roundNum}-${i}`,
						player1,
						player2,
						completed: false,
						round: roundNum + 1,
					});
				}
			}

			rounds.push(roundMatches);

			// Rotate (keep first fixed, rotate others)
			if (n > 2) {
				const last = playerList.pop()!;
				playerList.splice(1, 0, last);
			}
		}

		// Double round robin
		if (format === 'double') {
			const secondRounds = rounds.map((round, roundIndex) =>
				round.map((match) => ({
					...match,
					id: `${roundIndex + rounds.length}-${match.id.split('-')[1]}`,
					player1: match.player2,
					player2: match.player1,
					round: roundIndex + rounds.length + 1,
				}))
			);
			return [...rounds, ...secondRounds];
		}

		return rounds;
	}

	static calculateStats(matches: Match[], playerId: string): TournamentStats {
		const playerMatches = matches.filter(
			(m) =>
				(m.player1.id === playerId || m.player2.id === playerId) && m.completed
		);

		const stats: TournamentStats = {
			wins: 0,
			losses: 0,
			pointsFor: 0,
			pointsAgainst: 0,
			matchesPlayed: playerMatches.length,
		};

		playerMatches.forEach((match) => {
			const isPlayer1 = match.player1.id === playerId;
			const myScore = isPlayer1 ? match.score1! : match.score2!;
			const opponentScore = isPlayer1 ? match.score2! : match.score1!;

			stats.pointsFor += myScore;
			stats.pointsAgainst += opponentScore;

			if (myScore > opponentScore) {
				stats.wins++;
			} else {
				stats.losses++;
			}
		});

		return stats;
	}
}

// Components
const PlayerCard = ({
	player,
	stats,
	rank,
}: {
	player: Player;
	stats: TournamentStats;
	rank: number;
}) => {
	const winPercentage =
		stats.matchesPlayed > 0 ? (stats.wins / stats.matchesPlayed) * 100 : 0;
	const pointDiff = stats.pointsFor - stats.pointsAgainst;

	const getRankColor = (rank: number) => {
		if (rank === 1)
			return 'text-yellow-600 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-300 shadow-yellow-100';
		if (rank === 2)
			return 'text-gray-600 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300 shadow-gray-100';
		if (rank === 3)
			return 'text-amber-600 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-300 shadow-amber-100';
		return 'text-slate-600 bg-white border-slate-200 hover:border-slate-300';
	};

	return (
		<motion.div
			layout
			className={`p-5 lg:p-6 rounded-2xl border-2 ${getRankColor(
				rank
			)} transition-all duration-300 shadow-sm hover:shadow-md`}
			whileHover={{ scale: 1.02, y: -2 }}
		>
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-3">
					<div
						className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-base lg:text-lg shadow-sm ${
							rank <= 3 ? 'bg-white ring-2 ring-white/50' : 'bg-slate-100'
						}`}
					>
						{rank}
					</div>
					<div>
						<h3 className="font-bold text-base lg:text-lg text-charcoal">
							{player.name}
						</h3>
						<p className="text-sm text-slate-500 font-medium">
							{stats.wins}W - {stats.losses}L
						</p>
					</div>
				</div>

				{rank <= 3 && (
					<Medal
						className={`w-6 h-6 lg:w-7 lg:h-7 ${
							rank === 1
								? 'text-yellow-500 drop-shadow-md'
								: rank === 2
								? 'text-gray-500 drop-shadow-md'
								: 'text-amber-500 drop-shadow-md'
						}`}
					/>
				)}
			</div>

			<div className="grid grid-cols-3 gap-3 lg:gap-4 pt-3 border-t border-current/10">
				<div className="text-center">
					<div className="font-bold text-xl lg:text-2xl">
						{winPercentage.toFixed(0)}%
					</div>
					<div className="text-xs lg:text-sm text-slate-500 font-medium mt-1">
						Win Rate
					</div>
				</div>
				<div className="text-center">
					<div className="font-bold text-xl lg:text-2xl">{stats.pointsFor}</div>
					<div className="text-xs lg:text-sm text-slate-500 font-medium mt-1">
						Points
					</div>
				</div>
				<div className="text-center">
					<div
						className={`font-bold text-xl lg:text-2xl ${
							pointDiff >= 0 ? 'text-green-600' : 'text-red-600'
						}`}
					>
						{pointDiff >= 0 ? '+' : ''}
						{pointDiff}
					</div>
					<div className="text-xs lg:text-sm text-slate-500 font-medium mt-1">
						Diff
					</div>
				</div>
			</div>
		</motion.div>
	);
};

const MatchCard = ({
	match,
	onScoreUpdate,
}: {
	match: Match;
	onScoreUpdate: (matchId: string, score1: number, score2: number) => void;
}) => {
	const [score1, setScore1] = useState(match.score1 || 0);
	const [score2, setScore2] = useState(match.score2 || 0);
	const [isEditing, setIsEditing] = useState(false);

	const handleSave = () => {
		onScoreUpdate(match.id, score1, score2);
		setIsEditing(false);
	};

	const simulateMatch = () => {
		const newScore1 = Math.floor(Math.random() * 10) + 11;
		const newScore2 = Math.floor(Math.random() * 10) + 11;

		// Ensure win by 2
		const finalScore1 =
			Math.max(newScore1, newScore2) + (Math.random() > 0.5 ? 2 : 0);
		const finalScore2 =
			newScore1 === Math.max(newScore1, newScore2)
				? Math.min(newScore1, newScore2)
				: Math.max(newScore1, newScore2) + 2;

		setScore1(finalScore1);
		setScore2(finalScore2);
	};

	return (
		<div
			className={`p-5 lg:p-6 rounded-2xl border-2 transition-all duration-300 shadow-sm hover:shadow-md ${
				match.completed
					? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300 shadow-green-100'
					: 'bg-white border-slate-200 hover:border-ocean/50'
			}`}
		>
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-2">
					{match.completed ? (
						<CheckCircle2 className="w-5 h-5 text-green-600" />
					) : (
						<Clock className="w-5 h-5 text-slate-400" />
					)}
					<span className="text-sm font-bold text-slate-500 uppercase tracking-wide">
						Round {match.round}
					</span>
				</div>

				{match.winner && (
					<Trophy className="w-5 h-5 text-yellow-600 drop-shadow-sm" />
				)}
			</div>

			<div className="space-y-4">
				<div className="flex items-center justify-between p-3 rounded-lg bg-white/50 border border-slate-100">
					<span
						className={`font-semibold text-base lg:text-lg ${
							match.winner === match.player1.id ? 'text-green-600' : 'text-charcoal'
						}`}
					>
						{match.player1.name}
					</span>
					{isEditing ? (
						<input
							type="number"
							value={score1}
							onChange={(e) => setScore1(Number(e.target.value))}
							className="w-20 px-3 py-2 border-2 border-ocean rounded-lg text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-ocean/50"
							min="0"
							max="99"
						/>
					) : (
						<span className="font-bold text-2xl lg:text-3xl text-charcoal">
							{score1}
						</span>
					)}
				</div>

				<div className="flex items-center justify-between p-3 rounded-lg bg-white/50 border border-slate-100">
					<span
						className={`font-semibold text-base lg:text-lg ${
							match.winner === match.player2.id ? 'text-green-600' : 'text-charcoal'
						}`}
					>
						{match.player2.name}
					</span>
					{isEditing ? (
						<input
							type="number"
							value={score2}
							onChange={(e) => setScore2(Number(e.target.value))}
							className="w-20 px-3 py-2 border-2 border-ocean rounded-lg text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-ocean/50"
							min="0"
							max="99"
						/>
					) : (
						<span className="font-bold text-2xl lg:text-3xl text-charcoal">
							{score2}
						</span>
					)}
				</div>
			</div>

			<div className="flex gap-2 mt-5">
				{isEditing ? (
					<>
						<button
							onClick={handleSave}
							className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl text-sm font-bold hover:bg-green-700 transition-all hover:shadow-lg"
						>
							Save Score
						</button>
						<button
							onClick={() => setIsEditing(false)}
							className="px-4 py-3 bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-300 transition-all"
						>
							Cancel
						</button>
					</>
				) : (
					<>
						<button
							onClick={() => setIsEditing(true)}
							className="flex-1 bg-ocean text-white py-3 px-4 rounded-xl text-sm font-bold hover:bg-ocean-dark transition-all hover:shadow-lg"
						>
							{match.completed ? 'Edit Score' : 'Enter Score'}
						</button>
						<button
							onClick={simulateMatch}
							className="px-4 py-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-all hover:shadow-md"
							title="Simulate match"
						>
							<Zap className="w-5 h-5" />
						</button>
					</>
				)}
			</div>
		</div>
	);
};

// Main Component
export default function RoundRobinSimulator() {
	const [players, setPlayers] = useState<Player[]>([
		{ id: '1', name: 'Alex Chen' },
		{ id: '2', name: 'Maria Rodriguez' },
		{ id: '3', name: 'James Wilson' },
		{ id: '4', name: 'Sarah Kim' },
	]);

	const [tournamentFormat, setTournamentFormat] = useState('standard');
	const [matches, setMatches] = useState<Match[]>([]);
	const [currentRound, setCurrentRound] = useState(1);
	const [newPlayerName, setNewPlayerName] = useState('');
	const [selectedView, setSelectedView] = useState<
		'setup' | 'matches' | 'standings'
	>('setup');

	// Generate schedule when players or format changes
	useEffect(() => {
		if (players.length >= 2) {
			const schedule = RoundRobinGenerator.generateSchedule(
				players,
				tournamentFormat
			);
			setMatches(schedule.flat());
			setCurrentRound(1);
		}
	}, [players, tournamentFormat]);

	// Calculate tournament statistics
	const tournamentStats = useMemo(() => {
		const totalMatches = matches.length;
		const completedMatches = matches.filter((m) => m.completed).length;
		const totalRounds =
			matches.length > 0 ? Math.max(...matches.map((m) => m.round)) : 0;
		const completedRounds = Math.max(
			...matches.filter((m) => m.completed).map((m) => m.round),
			0
		);

		return {
			totalMatches,
			completedMatches,
			totalRounds,
			completedRounds,
			progress: totalMatches > 0 ? (completedMatches / totalMatches) * 100 : 0,
		};
	}, [matches]);

	// Calculate player standings
	const standings = useMemo(() => {
		return players
			.map((player) => ({
				player,
				stats: RoundRobinGenerator.calculateStats(matches, player.id),
			}))
			.sort((a, b) => {
				// Sort by wins, then by point differential
				if (a.stats.wins !== b.stats.wins) {
					return b.stats.wins - a.stats.wins;
				}
				const diffA = a.stats.pointsFor - a.stats.pointsAgainst;
				const diffB = b.stats.pointsFor - b.stats.pointsAgainst;
				return diffB - diffA;
			});
	}, [players, matches]);

	// Event handlers
	const addPlayer = () => {
		if (newPlayerName.trim() && players.length < 16) {
			const newPlayer: Player = {
				id: Date.now().toString(),
				name: newPlayerName.trim(),
			};
			setPlayers([...players, newPlayer]);
			setNewPlayerName('');
		}
	};

	const removePlayer = (playerId: string) => {
		setPlayers(players.filter((p) => p.id !== playerId));
	};

	const updateMatchScore = (matchId: string, score1: number, score2: number) => {
		setMatches(
			matches.map((match) => {
				if (match.id === matchId) {
					const winner = score1 > score2 ? match.player1.id : match.player2.id;
					return {
						...match,
						score1,
						score2,
						completed: true,
						winner,
					};
				}
				return match;
			})
		);
	};

	const resetTournament = () => {
		setMatches(
			matches.map((match) => ({
				...match,
				score1: undefined,
				score2: undefined,
				completed: false,
				winner: undefined,
			}))
		);
		setCurrentRound(1);
	};

	const simulateRound = (round: number) => {
		const roundMatches = matches.filter((m) => m.round === round && !m.completed);

		const updatedMatches = matches.map((match) => {
			if (match.round === round && !match.completed) {
				const score1 = Math.floor(Math.random() * 10) + 11;
				const score2 = Math.floor(Math.random() * 10) + 11;
				const finalScore1 =
					Math.max(score1, score2) + (Math.random() > 0.5 ? 2 : 0);
				const finalScore2 =
					score1 === Math.max(score1, score2)
						? Math.min(score1, score2)
						: Math.max(score1, score2) + 2;

				return {
					...match,
					score1: finalScore1,
					score2: finalScore2,
					completed: true,
					winner: finalScore1 > finalScore2 ? match.player1.id : match.player2.id,
				};
			}
			return match;
		});

		setMatches(updatedMatches);
	};

	// Get matches for current round
	const currentRoundMatches = matches.filter((m) => m.round === currentRound);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 lg:p-8">
			<div className="max-w-7xl mx-auto">
				<div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
					{/* Header */}
					<div className="bg-gradient-to-r from-ocean via-ocean-dark to-ocean text-white p-6 lg:p-8">
						<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-6">
							<div className="flex-1">
								<h2 className="text-3xl lg:text-4xl font-bold mb-2 lg:mb-3">
									Round Robin Tournament
								</h2>
								<p className="text-base lg:text-lg text-ocean-light">
									Simulate and manage your pickleball tournaments
								</p>
							</div>
							<div className="text-left lg:text-right">
								<div className="text-4xl lg:text-5xl font-bold">
									{tournamentStats.progress.toFixed(0)}%
								</div>
								<div className="text-sm lg:text-base text-ocean-light font-medium">
									Complete
								</div>
							</div>
						</div>

						{/* Progress Bar */}
						<div className="mt-6 bg-ocean-dark/30 rounded-full h-3 overflow-hidden shadow-inner">
							<motion.div
								className="bg-white h-3 rounded-full shadow-sm"
								initial={{ width: 0 }}
								animate={{ width: `${tournamentStats.progress}%` }}
								transition={{ duration: 0.5 }}
							/>
						</div>
					</div>

					{/* Navigation */}
					<div className="border-b border-slate-200 bg-slate-50/50">
						<div className="flex">
							{[
								{ id: 'setup', label: 'Setup', icon: Settings },
								{ id: 'matches', label: 'Matches', icon: Play },
								{ id: 'standings', label: 'Standings', icon: Trophy },
							].map(({ id, label, icon: Icon }) => (
								<button
									key={id}
									onClick={() => setSelectedView(id as any)}
									className={`flex-1 flex items-center justify-center gap-2 py-4 lg:py-5 px-6 font-bold text-sm lg:text-base transition-all ${
										selectedView === id
											? 'text-ocean border-b-4 border-ocean bg-white shadow-sm'
											: 'text-slate-600 hover:text-ocean hover:bg-white/50'
									}`}
								>
									<Icon size={20} />
									{label}
								</button>
							))}
						</div>
					</div>

					{/* Content */}
					<div className="p-6 lg:p-8 min-h-[600px]">
						<AnimatePresence mode="wait">
							{selectedView === 'setup' && (
								<motion.div
									key="setup"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									className="space-y-8 lg:space-y-10"
								>
									{/* Tournament Format */}
									<div>
										<h3 className="font-bold text-xl lg:text-2xl text-charcoal mb-4 lg:mb-5">
											Tournament Format
										</h3>
										<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
											{TOURNAMENT_FORMATS.map((format) => (
												<button
													key={format.id}
													onClick={() => setTournamentFormat(format.id)}
													className={`p-5 lg:p-6 rounded-2xl border-2 text-left transition-all shadow-sm hover:shadow-md ${
														tournamentFormat === format.id
															? 'border-ocean bg-ocean/10 ring-2 ring-ocean/20'
															: 'border-slate-200 hover:border-ocean/50 bg-white'
													}`}
												>
													<div className="flex items-center gap-3 mb-3">
														<format.icon className="w-6 h-6 text-ocean" />
														<h4 className="font-bold text-base lg:text-lg text-charcoal">
															{format.name}
														</h4>
													</div>
													<p className="text-sm lg:text-base text-slate-600 mb-3">
														{format.description}
													</p>
													<p className="text-xs lg:text-sm text-slate-500 font-medium">
														{format.minPlayers}-{format.maxPlayers} players
													</p>
												</button>
											))}
										</div>
									</div>

									{/* Players Management */}
									<div>
										<h3 className="font-bold text-xl lg:text-2xl text-charcoal mb-4 lg:mb-5">
											Players ({players.length})
										</h3>

										{/* Add Player */}
										<div className="flex gap-3 mb-5 lg:mb-6">
											<input
												type="text"
												value={newPlayerName}
												onChange={(e) => setNewPlayerName(e.target.value)}
												placeholder="Enter player name"
												className="flex-1 px-5 py-3 lg:py-4 border-2 border-slate-200 rounded-xl text-base lg:text-lg focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20 transition-all"
												onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
											/>
											<button
												onClick={addPlayer}
												disabled={!newPlayerName.trim() || players.length >= 16}
												className="px-6 lg:px-8 py-3 lg:py-4 bg-ocean text-white rounded-xl font-bold hover:bg-ocean-dark transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
											>
												<Plus size={20} />
											</button>
										</div>

										{/* Player List */}
										<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
											{players.map((player) => (
												<div
													key={player.id}
													className="flex items-center justify-between p-4 lg:p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-sm"
												>
													<span className="font-semibold text-base lg:text-lg text-charcoal">
														{player.name}
													</span>
													<button
														onClick={() => removePlayer(player.id)}
														className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
													>
														<Minus size={18} />
													</button>
												</div>
											))}
										</div>
									</div>

									{/* Tournament Info */}
									{matches.length > 0 && (
										<div className="bg-gradient-to-br from-ocean/5 to-ocean/10 rounded-2xl p-6 lg:p-8 border border-ocean/20">
											<h4 className="font-bold text-lg lg:text-xl text-charcoal mb-5">
												Tournament Overview
											</h4>
											<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
												<div>
													<div className="font-bold text-3xl lg:text-4xl text-ocean mb-1">
														{tournamentStats.totalRounds}
													</div>
													<div className="text-sm lg:text-base text-slate-600 font-medium">
														Total Rounds
													</div>
												</div>
												<div>
													<div className="font-bold text-3xl lg:text-4xl text-ocean mb-1">
														{tournamentStats.totalMatches}
													</div>
													<div className="text-sm lg:text-base text-slate-600 font-medium">
														Total Matches
													</div>
												</div>
												<div>
													<div className="font-bold text-3xl lg:text-4xl text-ocean mb-1">
														{Math.ceil(tournamentStats.totalMatches / 2)}
													</div>
													<div className="text-sm lg:text-base text-slate-600 font-medium">
														Est. Hours
													</div>
												</div>
												<div>
													<div className="font-bold text-3xl lg:text-4xl text-ocean mb-1">
														{(players.length * (players.length - 1)) / 2}
													</div>
													<div className="text-sm lg:text-base text-slate-600 font-medium">
														Total Games
													</div>
												</div>
											</div>
										</div>
									)}
								</motion.div>
							)}

							{selectedView === 'matches' && (
								<motion.div
									key="matches"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									className="space-y-6 lg:space-y-8"
								>
									{/* Round Controls */}
									<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
										<div className="flex items-center gap-4">
											<h3 className="font-bold text-2xl lg:text-3xl text-charcoal">
												Round {currentRound}
											</h3>
											<div className="flex items-center gap-2">
												<button
													onClick={() => setCurrentRound(Math.max(1, currentRound - 1))}
													disabled={currentRound <= 1}
													className="p-3 bg-slate-200 text-slate-600 rounded-xl hover:bg-slate-300 transition-all disabled:opacity-50 hover:shadow-md"
												>
													<ChevronDown className="w-5 h-5 rotate-90" />
												</button>
												<button
													onClick={() =>
														setCurrentRound(
															Math.min(tournamentStats.totalRounds, currentRound + 1)
														)
													}
													disabled={currentRound >= tournamentStats.totalRounds}
													className="p-3 bg-slate-200 text-slate-600 rounded-xl hover:bg-slate-300 transition-all disabled:opacity-50 hover:shadow-md"
												>
													<ChevronRight className="w-5 h-5" />
												</button>
											</div>
										</div>

										<div className="flex gap-2 w-full sm:w-auto">
											<button
												onClick={() => simulateRound(currentRound)}
												className="flex-1 sm:flex-none px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all hover:shadow-lg"
											>
												<Shuffle size={18} className="inline mr-2" />
												Simulate Round
											</button>
										</div>
									</div>

									{/* Matches Grid */}
									<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
										{currentRoundMatches.map((match) => (
											<MatchCard
												key={match.id}
												match={match}
												onScoreUpdate={updateMatchScore}
											/>
										))}
									</div>

									{currentRoundMatches.length === 0 && (
										<div className="text-center py-16 lg:py-24 text-slate-500">
											<Calendar size={64} className="mx-auto mb-6 opacity-40" />
											<p className="text-lg lg:text-xl font-medium">
												No matches in this round
											</p>
										</div>
									)}
								</motion.div>
							)}

							{selectedView === 'standings' && (
								<motion.div
									key="standings"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									className="space-y-6 lg:space-y-8"
								>
									<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
										<h3 className="font-bold text-2xl lg:text-3xl text-charcoal">
											Tournament Standings
										</h3>
										<button
											onClick={resetTournament}
											className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all hover:shadow-lg"
										>
											<RotateCcw size={18} className="inline mr-2" />
											Reset Tournament
										</button>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
										{standings.map(({ player, stats }, index) => (
											<PlayerCard
												key={player.id}
												player={player}
												stats={stats}
												rank={index + 1}
											/>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
}
