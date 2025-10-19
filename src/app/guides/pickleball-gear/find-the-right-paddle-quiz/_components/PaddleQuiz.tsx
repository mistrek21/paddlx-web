'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	CheckCircle2,
	RefreshCcw,
	Star,
	Ruler,
	Weight,
	Hand,
	Brain,
	Info,
	Award,
	Target,
	Sparkles,
	Shield,
	Zap,
	Wind,
	ChevronUp,
	ChevronDown,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnswerValue, ComputeResultOutput, Paddle } from '../types';
import questions, { Question } from '../_data/questions';
import archetypes from '../_data/archetypes';
import PADDLE_DATABASE from '../_data/PADDLE_DATABASE';
import { IconType } from 'react-icons/lib';

// Helper components
const RatingBar = ({
	rating,
	label,
	color = 'ocean',
	icon: Icon,
}: {
	rating: number;
	label: string;
	color?: string;
	icon?: IconType;
}) => (
	<div className="flex items-center gap-2">
		<div className="flex items-center gap-1.5 w-20">
			{Icon && <Icon className="w-3.5 h-3.5 text-slate-500" />}
			<span className="text-xs font-medium text-slate-600">{label}</span>
		</div>
		<div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
			<div
				className="bg-gradient-to-r from-ocean to-emerald-500 h-2 rounded-full transition-all duration-700 ease-out"
				style={{ width: `${(rating / 10) * 100}%` }}
			/>
		</div>
		<span className="text-xs font-bold text-slate-700 w-8 text-right">
			{rating}
		</span>
	</div>
);

const PaddleCard = ({
	paddle,
	isTop = false,
}: {
	paddle: Paddle;
	isTop?: boolean;
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div
			className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
				isTop
					? 'ring-2 ring-ocean shadow-2xl shadow-ocean/20'
					: 'border border-slate-200 hover:border-ocean/30 hover:shadow-xl'
			}`}
		>
			{/* Top Pick Badge */}
			{isTop && (
				<div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-gradient-to-r from-ocean to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
					<Award size={14} strokeWidth={2.5} />
					Top Pick
				</div>
			)}

			{/* Image Section */}
			<div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
				<img
					src={paddle.image}
					alt={paddle.name}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

				{/* Price Tag */}
				<div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
					<span className="text-lg font-bold text-ocean">${paddle.price}</span>
				</div>
			</div>

			{/* Content Section */}
			<div className="p-5 space-y-4">
				{/* Header */}
				<div>
					<h4 className="font-bold text-charcoal text-base mb-1 group-hover:text-ocean transition-colors">
						{paddle.name}
					</h4>
					<div className="flex items-center justify-between">
						<p className="text-sm text-slate-600 font-medium">{paddle.brand}</p>
						<div className="flex gap-1">
							{paddle.skill_level.map((level, i) => (
								<span
									key={i}
									className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full font-medium"
								>
									{level}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* Description */}
				<p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
					{paddle.description}
				</p>

				{/* Performance Metrics */}
				<div className="space-y-2 py-3 border-y border-slate-100">
					<RatingBar rating={paddle.power_rating} label="Power" icon={Zap} />
					<RatingBar rating={paddle.control_rating} label="Control" icon={Target} />
					<RatingBar rating={paddle.spin_rating} label="Spin" icon={Wind} />
					<RatingBar
						rating={paddle.forgiveness_rating}
						label="Sweet"
						icon={Shield}
					/>
				</div>

				{/* Quick Specs Grid */}
				<div className="grid grid-cols-3 gap-2">
					<div className="bg-slate-50 rounded-lg p-2.5 text-center border border-slate-100">
						<p className="text-[10px] text-slate-500 font-medium mb-0.5">Weight</p>
						<p className="text-xs font-bold text-slate-700">{paddle.weight}</p>
					</div>
					<div className="bg-slate-50 rounded-lg p-2.5 text-center border border-slate-100">
						<p className="text-[10px] text-slate-500 font-medium mb-0.5">Core</p>
						<p className="text-xs font-bold text-slate-700">
							{paddle.core_thickness}
						</p>
					</div>
					<div className="bg-slate-50 rounded-lg p-2.5 text-center border border-slate-100">
						<p className="text-[10px] text-slate-500 font-medium mb-0.5">Shape</p>
						<p className="text-xs font-bold text-slate-700">{paddle.shape}</p>
					</div>
				</div>

				{/* Expandable Details */}
				{isExpanded && (
					<div className="space-y-3 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
						{/* Key Features */}
						<div className="bg-emerald-50/50 rounded-xl p-3 border border-emerald-100">
							<h5 className="text-xs font-bold text-emerald-800 mb-2 flex items-center gap-1.5">
								<div className="w-1 h-4 bg-emerald-500 rounded-full" />
								Key Features
							</h5>
							<ul className="space-y-1.5">
								{paddle.key_features.slice(0, 3).map((feature, i) => (
									<li
										key={i}
										className="text-[11px] text-emerald-900/80 flex items-start gap-2"
									>
										<span className="text-emerald-500 mt-0.5">●</span>
										<span className="flex-1">{feature}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Pros & Cons */}
						<div className="grid grid-cols-2 gap-3">
							<div className="bg-green-50/50 rounded-xl p-3 border border-green-100">
								<h6 className="text-xs font-bold text-green-700 mb-2">Pros</h6>
								<ul className="space-y-1">
									{paddle.pros.slice(0, 3).map((pro, i) => (
										<li
											key={i}
											className="text-[10px] text-green-900/70 flex items-start gap-1.5"
										>
											<span className="text-green-500 mt-0.5">✓</span>
											<span className="flex-1">{pro}</span>
										</li>
									))}
								</ul>
							</div>
							<div className="bg-red-50/50 rounded-xl p-3 border border-red-100">
								<h6 className="text-xs font-bold text-red-700 mb-2">Cons</h6>
								<ul className="space-y-1">
									{paddle.cons.slice(0, 3).map((con, i) => (
										<li
											key={i}
											className="text-[10px] text-red-900/70 flex items-start gap-1.5"
										>
											<span className="text-red-400 mt-0.5">✗</span>
											<span className="flex-1">{con}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Additional Specs */}
						<div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
							<h5 className="text-xs font-bold text-slate-700 mb-2">Full Specs</h5>
							<div className="grid grid-cols-2 gap-x-3 gap-y-2 text-[11px]">
								<div className="flex justify-between">
									<span className="text-slate-500">Surface:</span>
									<span className="font-medium text-slate-700">{paddle.surface}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-slate-500">Handle:</span>
									<span className="font-medium text-slate-700">
										{paddle.handle_length}
									</span>
								</div>
								<div className="flex justify-between col-span-2">
									<span className="text-slate-500">Grip Circumference:</span>
									<span className="font-medium text-slate-700">
										{paddle.grip_circumference}
									</span>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Action Buttons */}
				<div className="flex gap-2 pt-2">
					<button className="flex-1 bg-gradient-to-r from-ocean to-emerald-500 hover:from-ocean-dark hover:to-emerald-600 text-white py-2.5 px-4 rounded-xl text-sm font-bold transition-all shadow-lg shadow-ocean/20 hover:shadow-xl hover:shadow-ocean/30 hover:scale-[1.02] active:scale-[0.98]">
						View Details
					</button>
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95"
						aria-label={isExpanded ? 'Show less' : 'Show more'}
					>
						{isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
					</button>
				</div>
			</div>
		</div>
	);
};

// Helper: Progress sub-label per section
const sectionSubLabel: Record<Question['section'], string> = {
	Skill: 'Skill Assessment',
	Physical: 'Physical Needs',
	Background: 'Background',
	Style: 'Play Style',
	Shots: 'Shot Preference',
	Weight: 'Weight Feel',
	Position: 'Court Position',
	Priority: 'Improvement Priority',
};

// Scoring engine (same as before)
export function computeResult(
	answers: Record<number, AnswerValue>
): ComputeResultOutput {
	const score: Record<'power' | 'control' | 'all-court' | 'defense', number> = {
		'power': 0,
		'control': 0,
		'all-court': 0,
		'defense': 0,
	};

	const W = {
		SKILL: 2,
		PHYSICAL: 2,
		STYLE: 3,
		SHOTS: 2,
		WEIGHT: 1,
		POSITION: 1,
		PRIORITY: 3,
		BACKGROUND: 1,
	};

	// Extract answers
	const skill = answers[1];
	const physical = answers[2];
	const background = answers[3];
	const style = answers[4];
	const shots = answers[5];
	const weight = answers[6];
	const position = answers[7];
	const priority = answers[8];

	// Skill influences
	if (skill === 'beginner') {
		score.control += 2 * W.SKILL;
		score.defense += 1 * W.SKILL;
	} else if (skill === 'intermediate') {
		score['all-court'] += 2 * W.SKILL;
	} else if (skill === 'advanced') {
		score.power += 1 * W.SKILL;
		score['all-court'] += 1 * W.SKILL;
	}

	// Physical considerations
	if (physical === 'arm-issues') {
		score.control += 2 * W.PHYSICAL;
		score.defense += 2 * W.PHYSICAL;
	} else if (physical === 'minor-issues') {
		score.control += 1 * W.PHYSICAL;
		score.defense += 1 * W.PHYSICAL;
	} else {
		score.power += 1;
	}

	// Background (MUST match questions/options)
	if (background === 'extensive-racquet') {
		score.power += 1 * W.BACKGROUND;
		score['all-court'] += 1 * W.BACKGROUND;
	} else if (background === 'first-racquet') {
		score.control += 1 * W.BACKGROUND;
	} else if (background === 'table-tennis') {
		// if you want to factor spin archetype, otherwise just add to control as before
		// score.spin += 2;
		score.control += 1;
	}

	// Style
	if (style === 'power') score.power += 1 * W.STYLE;
	if (style === 'control') score.control += 1 * W.STYLE;
	if (style === 'all-court') score['all-court'] += 1 * W.STYLE;
	if (style === 'defense') score.defense += 1 * W.STYLE;

	// Shots (must match quiz options, not arbitrary strings)
	if (shots === 'drives-volleys') score.power += 1 * W.SHOTS;
	if (shots === 'dinks-drops') score.control += 1 * W.SHOTS;
	if (shots === 'spin-slice') score['all-court'] += 1 * W.SHOTS;
	if (shots === 'blocks-resets') score.defense += 1 * W.SHOTS;
	if (shots === 'volleys-speedups') score.power += 1;

	// Position
	if (position === 'baseline') score.power += 1 * W.POSITION;
	if (position === 'kitchen') score.control += 1 * W.POSITION;
	if (position === 'mid-court') score.defense += 1 * W.POSITION;
	if (position === 'everywhere') score['all-court'] += 1 * W.POSITION;

	// Priority
	if (priority === 'more-power') score.power += 1 * W.PRIORITY;
	if (priority === 'more-control') score.control += 1 * W.PRIORITY;
	if (priority === 'more-spin') score['all-court'] += 1 * W.PRIORITY;
	if (priority === 'more-forgiveness') score.defense += 1 * W.PRIORITY;

	// Beginner override (controls both archetype and paddle array for beginner)
	// Beginner override (controls both archetype and paddle array for beginner)
	if (skill === 'beginner') {
		return {
			archetypeKey: 'control',
			resolvedWeight: 'mid',
			result: {
				Icon: archetypes.control.Icon,
				title: 'Perfect for Learning!',
				description:
					'As a beginner, focus on control and forgiveness to build fundamentals. These paddles will help you develop consistent shots.',
				specSummary: archetypes.control.specSummary,
				specs: {
					weight: '≈7.8–8.2 oz (balanced feel)',
					core: '16–20mm (maximum sweet spot)',
					surface: 'Raw carbon for touch and control',
					shape: 'Standard/widebody for stability',
				},
				topPicks: PADDLE_DATABASE.beginner,
				avoid: archetypes.control.avoid ?? [],
				nextSteps: archetypes.control.nextSteps ?? [],
			},
		};
	}

	// Determine winner
	const entries = Object.entries(score) as Array<[keyof typeof score, number]>;
	entries.sort((a, b) => b[1] - a[1]);
	const [winner] = entries[0];

	// Weight resolution — ONLY ever output 'light' | 'mid' | 'heavy'
	// Weight resolution — ONLY ever output 'light' | 'mid' | 'heavy'
	const physicalBias =
		physical === 'arm-issues'
			? 'light'
			: physical === 'minor-issues'
			? 'mid'
			: 'mid';
	let resolvedWeight: 'light' | 'mid' | 'heavy' = 'mid';
	if (weight === 'light') resolvedWeight = 'light';
	else if (weight === 'heavy') resolvedWeight = 'heavy';
	else if (weight === 'auto') resolvedWeight = physicalBias as any;
	else if (weight === 'mid') resolvedWeight = 'mid';

	// Explicitly type spec to match ResultSpec
	const spec: {
		weight: string;
		core: string;
		surface: string;
		shape: string;
	} = { ...archetypes[winner].specs };

	if (resolvedWeight === 'light')
		spec.weight = '≈7.3–7.8 oz (arm-friendly, fast hands)';
	if (resolvedWeight === 'mid') spec.weight = '≈7.8–8.2 oz (balanced feel)';
	if (resolvedWeight === 'heavy')
		spec.weight = '≈8.2–8.6 oz (plow-through, stability)';

	if (priority === 'more-forgiveness')
		spec.core = '16–20mm (maximum sweet spot)';
	if (priority === 'more-power')
		spec.core = spec.core.includes('11–14mm') ? spec.core : '14mm (balanced pop)';

	return {
		archetypeKey: winner,
		resolvedWeight,
		result: { ...archetypes[winner], specs: spec },
	};
}

export function PaddleQuiz() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});
	const [showResults, setShowResults] = useState(false);
	const [selectedOption, setSelectedOption] = useState<AnswerValue | null>(null);
	const [hoveredOption, setHoveredOption] = useState<AnswerValue | null>(null);

	const total = questions.length;
	const progress = ((currentQuestionIndex + 1) / total) * 100;

	const handleAnswer = (value: AnswerValue) => {
		setSelectedOption(value);

		setTimeout(() => {
			const q = questions[currentQuestionIndex];
			const next = { ...answers, [q.id]: value };
			setAnswers(next);
			setSelectedOption(null);

			if (currentQuestionIndex < total - 1) {
				setCurrentQuestionIndex((i) => i + 1);
			} else {
				setShowResults(true);
			}
		}, 400);
	};

	const handleBack = () => {
		if (currentQuestionIndex === 0) return;
		setCurrentQuestionIndex((i) => i - 1);
	};

	const handleReset = () => {
		setAnswers({});
		setCurrentQuestionIndex(0);
		setShowResults(false);
	};

	const final = useMemo(() => {
		if (!showResults) return null;
		return computeResult(answers);
	}, [showResults, answers]);

	return (
		<div className="relative bg-gradient-to-br from-slate-50 via-white to-ocean/5 rounded-3xl shadow-2xl border border-slate-200/60 overflow-hidden">
			{/* Decorative background elements */}
			<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />
			<div className="absolute top-0 right-0 w-96 h-96 bg-ocean/5 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

			<div className="relative p-6 sm:p-10 lg:p-12 min-h-[560px] flex flex-col justify-center">
				<AnimatePresence mode="wait">
					{!showResults ? (
						<motion.div
							key={currentQuestionIndex}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
						>
							{/* Progress Header */}
							<div className="mb-8">
								<div className="flex justify-between items-center mb-3">
									<div className="flex items-center gap-3">
										<div className="bg-ocean/10 text-ocean px-3 py-1.5 rounded-full text-sm font-bold">
											{currentQuestionIndex + 1}/{total}
										</div>
										<span className="text-sm font-medium text-slate-600">
											{
												sectionSubLabel[
													questions[currentQuestionIndex]
														.section as keyof typeof sectionSubLabel
												]
											}
										</span>
									</div>
									<span className="text-xs font-semibold text-ocean bg-ocean/5 px-3 py-1 rounded-full">
										{Math.round(progress)}% Complete
									</span>
								</div>

								{/* Enhanced Progress Bar */}
								<div className="relative w-full h-2.5 bg-slate-200/60 rounded-full overflow-hidden shadow-inner">
									<motion.div
										className="absolute inset-y-0 left-0 bg-gradient-to-r from-ocean to-emerald-500 rounded-full shadow-lg"
										initial={{ width: `${(currentQuestionIndex / total) * 100}%` }}
										animate={{ width: `${progress}%` }}
										transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
									/>
									<motion.div
										className="absolute inset-y-0 left-0 bg-white/30 rounded-full"
										initial={{ width: `${(currentQuestionIndex / total) * 100}%` }}
										animate={{ width: `${progress}%` }}
										transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
									/>
								</div>
							</div>

							{/* Question */}
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}
							>
								<h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-3 leading-tight">
									{questions[currentQuestionIndex].question}
								</h2>
								{questions[currentQuestionIndex].helper && (
									<div className="flex items-start gap-2.5 p-4 bg-blue-50/80 border border-blue-100 rounded-xl mb-8">
										<Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
										<p className="text-sm text-blue-900/80 leading-relaxed">
											{questions[currentQuestionIndex].helper}
										</p>
									</div>
								)}
							</motion.div>

							{/* Options */}
							<div className="grid grid-cols-1 gap-3.5 mt-8">
								{questions[currentQuestionIndex].options.map((option, idx) => {
									const isSelected = selectedOption === option.value;
									const isHovered = hoveredOption === option.value;

									return (
										<motion.button
											key={option.value}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.15 + idx * 0.05 }}
											onClick={() => handleAnswer(option.value)}
											onMouseEnter={() => setHoveredOption(option.value)}
											onMouseLeave={() => setHoveredOption(null)}
											className={`group relative w-full text-left p-5 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean/40 focus:ring-offset-2 ${
												isSelected
													? 'bg-ocean text-white shadow-lg shadow-ocean/30 scale-[0.98] border-2 border-ocean'
													: isHovered
													? 'bg-white border-2 border-ocean shadow-lg shadow-ocean/10 scale-[1.01]'
													: 'bg-white border-2 border-slate-200 hover:border-ocean/40 hover:shadow-md'
											}`}
										>
											{/* Gradient overlay on hover */}
											<div
												className={`absolute inset-0 bg-gradient-to-r from-ocean/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
													isSelected ? 'opacity-0' : ''
												}`}
											/>

											<div className="relative flex items-center justify-between gap-4">
												<span
													className={`flex-1 transition-colors duration-200 ${
														isSelected ? 'text-white' : 'text-charcoal group-hover:text-ocean'
													}`}
												>
													{option.text}
												</span>
												<motion.div
													initial={false}
													animate={{
														scale: isSelected ? 1.1 : isHovered ? 1.05 : 1,
														rotate: isSelected ? 360 : 0,
													}}
													transition={{ duration: 0.3 }}
												>
													<CheckCircle2
														className={`w-6 h-6 flex-shrink-0 transition-all duration-300 ${
															isSelected
																? 'text-white fill-white'
																: isHovered
																? 'text-ocean'
																: 'text-slate-300'
														}`}
													/>
												</motion.div>
											</div>

											{option.hint && (
												<p
													className={`text-xs mt-2 transition-colors duration-200 ${
														isSelected ? 'text-white/80' : 'text-slate-500'
													}`}
												>
													{option.hint}
												</p>
											)}
										</motion.button>
									);
								})}
							</div>

							{/* Navigation */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
								className="mt-8 flex items-center justify-between pt-6 border-t border-slate-200"
							>
								<button
									onClick={handleBack}
									disabled={currentQuestionIndex === 0}
									className="flex items-center gap-2 text-slate-600 font-semibold hover:text-charcoal transition-colors disabled:opacity-40 disabled:cursor-not-allowed px-4 py-2 rounded-lg hover:bg-slate-100"
								>
									<svg
										className="w-4 h-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 19l-7-7 7-7"
										/>
									</svg>
									Back
								</button>

								<div className="flex items-center gap-2">
									{questions.map((_, idx) => (
										<div
											key={idx}
											className={`w-2 h-2 rounded-full transition-all duration-300 ${
												idx < currentQuestionIndex
													? 'bg-ocean w-6'
													: idx === currentQuestionIndex
													? 'bg-ocean w-3 h-3'
													: 'bg-slate-300'
											}`}
										/>
									))}
								</div>
							</motion.div>
						</motion.div>
					) : (
						<motion.div
							key="results"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
							className="w-full"
						>
							{final && (
								<>
									{/* Results Header */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 }}
										className="text-center mb-10"
									>
										<motion.div
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
											className="relative inline-block mb-6"
										>
											<div className="absolute inset-0 bg-ocean/20 blur-2xl rounded-full" />
											<div className="relative bg-gradient-to-br from-ocean to-emerald-500 text-white rounded-full p-6 shadow-xl">
												<final.result.Icon size={48} strokeWidth={2} />
											</div>
										</motion.div>

										<motion.h2
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.4 }}
											className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-ocean to-emerald-600 bg-clip-text text-transparent mb-4"
										>
											{final.result.title}
										</motion.h2>

										<motion.p
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.5 }}
											className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
										>
											{final.result.description}
										</motion.p>
									</motion.div>

									{/* Recommended Paddles */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.6 }}
										className="mb-10"
									>
										<div className="flex items-center gap-3 mb-6">
											<div className="bg-ocean/10 p-2 rounded-lg">
												<Target className="w-6 h-6 text-ocean" />
											</div>
											<h3 className="text-2xl font-bold text-charcoal">
												Your Perfect Paddle Matches
											</h3>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
											{final.result.topPicks
												.slice(0, 3)
												.map((paddle: Paddle, index: number) => (
													<motion.div
														key={paddle.id}
														initial={{ opacity: 0, y: 20 }}
														animate={{ opacity: 1, y: 0 }}
														transition={{ delay: 0.7 + index * 0.1 }}
													>
														<PaddleCard paddle={paddle} isTop={index === 0} />
													</motion.div>
												))}
										</div>

										{final.result.topPicks.length > 3 && (
											<button className="text-ocean font-semibold hover:underline text-sm flex items-center gap-2 mx-auto hover:gap-3 transition-all">
												View {final.result.topPicks.length - 3} more recommendations
												<svg
													className="w-4 h-4"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 5l7 7-7 7"
													/>
												</svg>
											</button>
										)}
									</motion.div>

									{/* Specifications & Tips */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.9 }}
										className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
									>
										<div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 shadow-sm">
											<div className="flex items-center gap-2 mb-4">
												<div className="bg-ocean/10 p-2 rounded-lg">
													<Brain className="w-5 h-5 text-ocean" />
												</div>
												<h3 className="font-bold text-charcoal text-lg">
													Why This Fits You
												</h3>
											</div>

											<p className="text-slate-700 text-sm mb-4 leading-relaxed">
												{final.result.specSummary}
											</p>

											<div className="space-y-3">
												{[
													{
														label: 'Weight',
														value: final.result.specs.weight,
														icon: Weight,
													},
													{ label: 'Core', value: final.result.specs.core, icon: Ruler },
													{
														label: 'Surface',
														value: final.result.specs.surface,
														icon: Hand,
													},
													{ label: 'Shape', value: final.result.specs.shape, icon: Star },
												].map(({ label, value, icon: Icon }) => (
													<div
														key={label}
														className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100"
													>
														<div className="flex items-center gap-2">
															<Icon className="w-4 h-4 text-ocean" />
															<span className="text-slate-600 font-medium text-sm">
																{label}:
															</span>
														</div>
														<span className="font-semibold text-charcoal text-sm">
															{value}
														</span>
													</div>
												))}
											</div>
										</div>

										<div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
											<div className="flex items-center gap-2 mb-4">
												<div className="bg-emerald-500/10 p-2 rounded-lg">
													<Sparkles className="w-5 h-5 text-emerald-600" />
												</div>
												<h4 className="font-bold text-emerald-800 text-lg">Next Steps</h4>
											</div>

											<ul className="space-y-3">
												{(
													final.result.nextSteps ?? [
														'Demo paddles in the recommended spec range',
														'Start with the top pick and adjust from there',
														'Consider grip size (measure palm to ring finger)',
													]
												).map((step: string, i: number) => (
													<li
														key={i}
														className="flex items-start gap-3 text-emerald-900/90 text-sm"
													>
														<div className="bg-emerald-500/10 rounded-full p-1 mt-0.5">
															<CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
														</div>
														<span className="flex-1 leading-relaxed">{step}</span>
													</li>
												))}
											</ul>
										</div>
									</motion.div>

									{/* Action Buttons */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 1 }}
										className="flex flex-wrap gap-4 items-center justify-center pt-6 border-t border-slate-200"
									>
										<Link
											href="/pickleball-gear/paddles"
											className="group bg-gradient-to-r from-ocean to-emerald-500 hover:from-ocean-dark hover:to-emerald-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-ocean/30 hover:shadow-2xl hover:shadow-ocean/40 hover:scale-105"
										>
											<span className="flex items-center gap-2">
												Shop Recommended Paddles
												<svg
													className="w-5 h-5 group-hover:translate-x-1 transition-transform"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M13 7l5 5m0 0l-5 5m5-5H6"
													/>
												</svg>
											</span>
										</Link>

										<button
											onClick={handleReset}
											className="flex items-center gap-2 text-slate-600 font-semibold hover:text-charcoal transition-all px-6 py-4 rounded-full hover:bg-slate-100"
										>
											<RefreshCcw size={18} />
											Retake Quiz
										</button>
									</motion.div>
								</>
							)}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
