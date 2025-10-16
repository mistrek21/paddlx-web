'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	CheckCircle2,
	RefreshCcw,
	Zap,
	Shield,
	Star,
	Ruler,
	Weight,
	Hand,
	Brain,
	Info,
	DollarSign,
	Award,
	Target,
	Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Types
type AnswerValue =
	| 'beginner'
	| 'intermediate'
	| 'advanced'
	| 'no-issues'
	| 'minor-issues'
	| 'arm-issues'
	| 'tennis'
	| 'some-racquet'
	| 'first-racquet'
	| 'power'
	| 'control'
	| 'all-court'
	| 'defense'
	| 'drives-volleys'
	| 'dinks-drops'
	| 'spin-placement'
	| 'returns-resets'
	| 'light'
	| 'mid'
	| 'heavy'
	| 'auto'
	| 'baseline'
	| 'kitchen'
	| 'mid-court'
	| 'everywhere'
	| 'more-power'
	| 'more-control'
	| 'more-spin'
	| 'more-forgiveness';

type Paddle = {
	id: string;
	name: string;
	brand: string;
	price: number;
	image: string;
	weight: string;
	core_thickness: string;
	surface: string;
	shape: string;
	handle_length: string;
	grip_circumference: string;
	power_rating: number;
	control_rating: number;
	spin_rating: number;
	forgiveness_rating: number;
	skill_level: string[];
	description: string;
	key_features: string[];
	best_for: string[];
	pros: string[];
	cons: string[];
};

type Question = {
	id: number;
	section:
		| 'Skill'
		| 'Physical'
		| 'Background'
		| 'Style'
		| 'Shots'
		| 'Weight'
		| 'Position'
		| 'Priority';
	question: string;
	helper?: string;
	options: { text: string; value: AnswerValue; hint?: string }[];
};

type ResultSpec = {
	Icon: any;
	title: string;
	description: string;
	specSummary: string;
	specs: {
		weight: string;
		core: string;
		surface: string;
		shape: string;
	};
	topPicks: Paddle[];
	avoid?: string[];
	nextSteps?: string[];
};

// Paddle Database
const PADDLE_DATABASE: Record<string, Paddle[]> = {
	'power': [
		{
			id: 'crbn-1x-power',
			name: 'CRBN 1X Power Series',
			brand: 'CRBN',
			price: 229.99,
			image: '/api/placeholder/300/200',
			weight: '7.8-8.3 oz',
			core_thickness: '13mm/14mm',
			surface: 'Raw T700 Carbon Fiber',
			shape: 'Elongated',
			handle_length: '5.5"',
			grip_circumference: '4.25"',
			power_rating: 9,
			control_rating: 7,
			spin_rating: 9,
			forgiveness_rating: 6,
			skill_level: ['intermediate', 'advanced'],
			description:
				'Tour-level power paddle with raw carbon face for explosive drives and spin. Features UNIBODY design for durability.',
			key_features: [
				'Raw carbon fiber face for maximum spin',
				'Elongated shape for reach and power',
				'Foam-injected edges for stability',
				'UNIBODY construction eliminates weak points',
			],
			best_for: [
				'Power baseline play',
				'Aggressive net finishing',
				'Tournament competition',
			],
			pros: [
				'Explosive power',
				'Excellent spin generation',
				'Durable construction',
				'Pro-level performance',
			],
			cons: [
				'Smaller sweet spot',
				'Less forgiving on mishits',
				'Premium price point',
			],
		},
		{
			id: 'joola-perseus-14mm',
			name: 'JOOLA Perseus Pro IV 14mm',
			brand: 'JOOLA',
			price: 199.95,
			image: '/api/placeholder/300/200',
			weight: '7.9-8.3 oz',
			core_thickness: '14mm',
			surface: 'Textured Carbon Fiber',
			shape: 'Elongated',
			handle_length: '5.5"',
			grip_circumference: '4.25"',
			power_rating: 10,
			control_rating: 7,
			spin_rating: 8,
			forgiveness_rating: 6,
			skill_level: ['advanced'],
			description:
				'Ben Johns signature paddle with explosive power. Features TechFlex Power technology for optimized energy transfer.',
			key_features: [
				'TechFlex Power (TFP) technology',
				'Propulsion core for explosive power',
				'Hyper-Foam edge wall',
				'Textured carbon surface for spin',
			],
			best_for: [
				'Aggressive baseline play',
				'Power finishing shots',
				'Tournament level competition',
			],
			pros: [
				'Maximum power output',
				'Pro-level performance',
				'Good spin capability',
				'Tour-proven design',
			],
			cons: [
				'Less forgiving',
				'Requires advanced technique',
				'Can overhit easily',
			],
		},
		{
			id: 'engage-pursuit-pro-mx',
			name: 'Engage Pursuit Pro MX',
			brand: 'Engage',
			price: 207.99,
			image: '/api/placeholder/300/200',
			weight: '7.8-8.2 oz',
			core_thickness: '12.7mm',
			surface: 'Raw T700 Carbon Fiber',
			shape: 'Elongated',
			handle_length: '5.875"',
			grip_circumference: '4.25"',
			power_rating: 9,
			control_rating: 7,
			spin_rating: 9,
			forgiveness_rating: 7,
			skill_level: ['intermediate', 'advanced'],
			description:
				'Premium power paddle with Variable Release 2.0 technology. Excellent for players seeking power with spin.',
			key_features: [
				'Variable Release 2.0 technology',
				'Raw Toray T700 carbon surface',
				'MachPro polymer core',
				'Vortex Barrier Edge technology',
			],
			best_for: ['Power with spin', 'Aggressive net play', 'All-court power'],
			pros: [
				'Excellent power and spin',
				'Quality construction',
				'Good reach',
				'Proven performance',
			],
			cons: [
				'Premium pricing',
				'Less forgiving than control paddles',
				'May be too powerful for beginners',
			],
		},
	],
	'control': [
		{
			id: 'selkirk-luxx-control',
			name: 'Selkirk LUXX Control Air',
			brand: 'Selkirk',
			price: 249.99,
			image: '/api/placeholder/300/200',
			weight: '7.8-8.1 oz',
			core_thickness: '20mm',
			surface: 'Florek Carbon Fiber',
			shape: 'Invikta (Elongated)',
			handle_length: '5.35"',
			grip_circumference: '4.25"',
			power_rating: 7,
			control_rating: 10,
			spin_rating: 8,
			forgiveness_rating: 10,
			skill_level: ['intermediate', 'advanced'],
			description:
				'Ultimate control paddle with massive sweet spot. Thermoformed construction with 20mm core for maximum forgiveness.',
			key_features: [
				'20mm X7 Thikset Honeycomb core',
				'Florek Carbon Fiber face',
				'360° Proto Molding construction',
				'Aero-DuraEdge Edgeless technology',
			],
			best_for: ['Precision placement', 'Dink battles', 'Consistent touch shots'],
			pros: [
				'Massive sweet spot',
				'Excellent control',
				'Premium feel',
				'Very forgiving',
			],
			cons: [
				'Expensive',
				'Less power than competitors',
				'May feel too controlled for power players',
			],
		},
		{
			id: 'joola-perseus-16mm',
			name: 'JOOLA Perseus Pro IV 16mm',
			brand: 'JOOLA',
			price: 199.95,
			image: '/api/placeholder/300/200',
			weight: '7.9-8.3 oz',
			core_thickness: '16mm',
			surface: 'Textured Carbon Fiber',
			shape: 'Elongated',
			handle_length: '5.5"',
			grip_circumference: '4.25"',
			power_rating: 8,
			control_rating: 9,
			spin_rating: 8,
			forgiveness_rating: 8,
			skill_level: ['intermediate', 'advanced'],
			description:
				'Balanced control version of the Perseus with 16mm core for softer feel and better touch around the net.',
			key_features: [
				'16mm Propulsion core',
				'TechFlex Power technology',
				'Textured carbon surface',
				'Enhanced dwell time',
			],
			best_for: ['All-court control', 'Touch shots', 'Balanced power and control'],
			pros: [
				'Great balance of power/control',
				'Good spin',
				'Quality construction',
				'Proven tour paddle',
			],
			cons: [
				'Still requires skill to master',
				'Premium price',
				'May lack power for some',
			],
		},
	],
	'all-court': [
		{
			id: 'paddletek-bantam-tko',
			name: 'Paddletek Bantam TKO-C',
			brand: 'Paddletek',
			price: 249.99,
			image: '/api/placeholder/300/200',
			weight: '7.8-8.2 oz',
			core_thickness: '12.7mm/14.3mm',
			surface: 'PT-700 Raw Carbon Fiber',
			shape: 'Elongated',
			handle_length: '5.25"',
			grip_circumference: '4.25"',
			power_rating: 9,
			control_rating: 8,
			spin_rating: 9,
			forgiveness_rating: 8,
			skill_level: ['intermediate', 'advanced'],
			description:
				'Designed with pro Christian Alshon for balanced power and control. Excellent for all-court play.',
			key_features: [
				'PT-700 unidirectional raw carbon',
				'Bantam PolyCore with Quick Response',
				'Two thickness options',
				'Professional design input',
			],
			best_for: [
				'All-court versatility',
				'Power with control',
				'Intermediate to advanced play',
			],
			pros: [
				'Great balance',
				'Excellent spin',
				'Durable construction',
				'Versatile performance',
			],
			cons: [
				'Premium price',
				'Slightly head-heavy',
				'May be too powerful for beginners',
			],
		},
		{
			id: 'engage-pursuit-pro-ex',
			name: 'Engage Pursuit Pro EX 6.0',
			brand: 'Engage',
			price: 207.99,
			image: '/api/placeholder/300/200',
			weight: '7.8-8.2 oz',
			core_thickness: '15.2mm',
			surface: 'Raw T700 Carbon Fiber',
			shape: 'Standard',
			handle_length: '5.875"',
			grip_circumference: '4.25"',
			power_rating: 8,
			control_rating: 8,
			spin_rating: 8,
			forgiveness_rating: 8,
			skill_level: ['intermediate', 'advanced'],
			description:
				'Balanced all-court paddle with standard shape for maximum maneuverability and consistent performance.',
			key_features: [
				'Standard shape for balance',
				'16mm MachPro core',
				'Raw carbon surface',
				'Variable Release 2.0',
			],
			best_for: [
				'Balanced gameplay',
				'All-court versatility',
				'Consistent performance',
			],
			pros: [
				'Well-balanced specs',
				'Good for multiple playing styles',
				'Quality construction',
				'Proven design',
			],
			cons: [
				'Jack of all trades approach',
				'Premium pricing',
				'May not excel in specific areas',
			],
		},
	],
	'beginner': [
		{
			id: 'selkirk-luxx-epic',
			name: 'Selkirk LUXX Control Air Epic',
			brand: 'Selkirk',
			price: 249.99,
			image: '/api/placeholder/300/200',
			weight: '7.8-8.1 oz',
			core_thickness: '20mm',
			surface: 'Florek Carbon Fiber',
			shape: 'Standard (Epic)',
			handle_length: '5.35"',
			grip_circumference: '4.25"',
			power_rating: 6,
			control_rating: 10,
			spin_rating: 7,
			forgiveness_rating: 10,
			skill_level: ['beginner', 'intermediate'],
			description:
				'Most forgiving paddle available with massive sweet spot. Standard shape provides maximum stability for developing players.',
			key_features: [
				'Massive 20mm sweet spot',
				'Standard shape for stability',
				'Thermoformed construction',
				'Premium materials',
			],
			best_for: [
				'Learning fundamentals',
				'Consistent contact',
				'Building confidence',
			],
			pros: [
				'Most forgiving',
				'Large sweet spot',
				'Premium quality',
				'Great for learning',
			],
			cons: ['Expensive for beginners', 'Less power', 'May outgrow quickly'],
		},
	],
};

// Questions (same as before)
const questions: Question[] = [
	{
		id: 1,
		section: 'Skill',
		question: 'What best describes your current pickleball skill level?',
		helper: 'Use the USA Pickleball rating system as reference.',
		options: [
			{
				text: 'Beginner (1.0–2.5): learning rules and strokes',
				value: 'beginner',
			},
			{
				text: 'Intermediate (3.0–3.5): consistent with basic shots',
				value: 'intermediate',
			},
			{
				text: 'Advanced (4.0+): strong fundamentals and strategy',
				value: 'advanced',
			},
		],
	},
	{
		id: 2,
		section: 'Physical',
		question: 'Which statement best describes your arm/shoulder comfort?',
		options: [
			{ text: 'No issues — strong and healthy', value: 'no-issues' },
			{ text: 'Some fatigue or minor joint concerns', value: 'minor-issues' },
			{ text: 'Frequent pain or recovering from injury', value: 'arm-issues' },
		],
	},
	{
		id: 3,
		section: 'Background',
		question: 'What is your racquet sport background?',
		options: [
			{ text: 'Extensive tennis/badminton/squash background', value: 'tennis' },
			{ text: 'Some racquet sport experience', value: 'some-racquet' },
			{ text: 'Pickleball is my first racquet sport', value: 'first-racquet' },
		],
	},
	{
		id: 4,
		section: 'Style',
		question: 'How do you prefer to win points?',
		options: [
			{ text: 'Aggressive power and fast pace', value: 'power' },
			{ text: 'Strategic placement and soft game control', value: 'control' },
			{ text: 'Balanced — adapt to the situation', value: 'all-court' },
			{ text: 'Defensive consistency — outlast opponents', value: 'defense' },
		],
	},
	{
		id: 5,
		section: 'Shots',
		question: 'Which shots feel most effective or enjoyable?',
		options: [
			{ text: 'Hard drives and put-away volleys', value: 'drives-volleys' },
			{ text: 'Precise dinks and third-shot drops', value: 'dinks-drops' },
			{ text: 'Spinny rolls and deceptive placement', value: 'spin-placement' },
			{ text: 'Consistent returns and resets', value: 'returns-resets' },
		],
	},
	{
		id: 6,
		section: 'Weight',
		question: 'What paddle weight feel do you prefer?',
		helper: 'Lighter = faster hands, heavier = more plow-through.',
		options: [
			{ text: 'Light and maneuverable (under ~7.5 oz)', value: 'light' },
			{ text: 'Balanced feel (7.5–8.2 oz)', value: 'mid' },
			{ text: 'Solid and substantial (8.2+ oz)', value: 'heavy' },
			{ text: 'Not sure — choose for me based on my answers', value: 'auto' },
		],
	},
	{
		id: 7,
		section: 'Position',
		question: 'Where do you feel most confident on court?',
		options: [
			{ text: 'Baseline — drives and deep returns', value: 'baseline' },
			{ text: 'Kitchen — dinks and hand battles', value: 'kitchen' },
			{ text: 'Mid-court — transition and resets', value: 'mid-court' },
			{ text: 'Comfortable everywhere', value: 'everywhere' },
		],
	},
	{
		id: 8,
		section: 'Priority',
		question: 'What would benefit your game the most right now?',
		options: [
			{ text: 'More power to finish points', value: 'more-power' },
			{ text: 'More control for consistency', value: 'more-control' },
			{ text: 'More spin for variety', value: 'more-spin' },
			{ text: 'More forgiveness (bigger sweet spot)', value: 'more-forgiveness' },
		],
	},
];

// Core archetype definitions
const archetypes: Record<
	'power' | 'control' | 'all-court' | 'defense',
	ResultSpec
> = {
	'power': {
		Icon: Zap,
		title: "You're a Power Player!",
		description:
			'Thrives on aggressive pace and put-aways. Prefers pop, drive penetration, and quick finishes.',
		specSummary:
			'Elongated shape, thinner core, stiffer face, mid-to-heavy weight.',
		specs: {
			weight: '7.8–8.4 oz',
			core: '11–14mm (more pop)',
			surface: 'Raw carbon/graphite (spin & stiffness)',
			shape: 'Elongated for reach',
		},
		topPicks: PADDLE_DATABASE.power,
		avoid: [
			'Ultra-light builds that reduce put-away power',
			'Overly thick cores that dampen pop',
		],
		nextSteps: [
			'Practice compact swings on drives to keep balls in',
			'Add lead tape at 3/9 for stability if needed',
		],
	},
	'control': {
		Icon: Shield,
		title: "You're a Control Maestro!",
		description:
			'Wins with precision, patience, and soft hands. Prefers feel, stability, and forgiveness.',
		specSummary: 'Widebody, thick core, softer face, light-to-mid weight.',
		specs: {
			weight: '7.6–8.0 oz',
			core: '16–20mm (softer, bigger sweet spot)',
			surface: 'Raw carbon for grab/feel',
			shape: 'Standard/widebody for stability',
		},
		topPicks: PADDLE_DATABASE.control,
		avoid: [
			'Very thin cores that spray on mishits',
			'Excessively heavy builds causing fatigue at the kitchen',
		],
		nextSteps: [
			'Drill third-shot drops and resets to maximize paddle strengths',
			'Try slightly thicker grips for added touch',
		],
	},
	'all-court': {
		Icon: Star,
		title: "You're an All-Court Strategist!",
		description:
			'Balanced style — switches between pace and touch. Needs versatility for every zone.',
		specSummary:
			'Hybrid shape, mid-core thickness, mid weight, spin-capable face.',
		specs: {
			weight: '7.8–8.2 oz',
			core: '14–16mm (balanced)',
			surface: 'Raw carbon or hybrid composite',
			shape: 'Hybrid/standard',
		},
		topPicks: PADDLE_DATABASE['all-court'],
		avoid: ['Extreme specs (ultra-thin or ultra-thick) unless targeted need'],
		nextSteps: [
			'Tune with edge weight if seeking more plow or faster hands',
			'Switch balls/courts to test adaptability',
		],
	},
	'defense': {
		Icon: Shield,
		title: 'Defensive Counterpuncher!',
		description:
			'Prioritizes consistency and depth. Values stability, forgiveness, and low error rates.',
		specSummary: 'Widebody, thicker core, head-light to mid weight.',
		specs: {
			weight: '7.6–8.1 oz (head-light preferred)',
			core: '16–20mm for stability',
			surface: 'Raw carbon for grab on resets',
			shape: 'Standard/widebody',
		},
		topPicks: PADDLE_DATABASE.control, // Use control paddles for defensive style
		avoid: ['Head-heavy builds that slow hands at the kitchen'],
		nextSteps: [
			'Work on counterattacks off blocks to add threat',
			'Consider a slightly thicker overgrip for stability',
		],
	},
};

// Helper components
const RatingBar = ({
	rating,
	label,
	color = 'ocean',
}: {
	rating: number;
	label: string;
	color?: string;
}) => (
	<div className="flex items-center gap-2 text-sm">
		<span className="w-16 text-slate-600">{label}</span>
		<div className="flex-1 bg-sand rounded-full h-1.5">
			<div
				className={`bg-${color} h-1.5 rounded-full transition-all duration-500`}
				style={{ width: `${(rating / 10) * 100}%` }}
			/>
		</div>
		<span className="text-xs text-slate-500 w-6">{rating}/10</span>
	</div>
);

const PaddleCard = ({
	paddle,
	isTop = false,
}: {
	paddle: Paddle;
	isTop?: boolean;
}) => (
	<div
		className={`bg-white rounded-xl border ${
			isTop ? 'border-ocean shadow-lg' : 'border-sand'
		} p-4 hover:shadow-md transition-shadow`}
	>
		{isTop && (
			<div className="flex items-center gap-1 text-ocean font-semibold text-sm mb-2">
				<Award size={14} />
				Top Pick
			</div>
		)}

		<div className="relative mb-3">
			<Image
				src={paddle.image}
				alt={paddle.name}
				width={300}
				height={200}
				className="w-full h-32 object-cover rounded-lg bg-sand"
			/>
			<div className="absolute top-2 right-2 bg-ocean text-white px-2 py-1 rounded-full text-xs font-semibold">
				${paddle.price}
			</div>
		</div>

		<div className="space-y-3">
			<div>
				<h4 className="font-bold text-charcoal text-sm">{paddle.name}</h4>
				<p className="text-xs text-slate-600">{paddle.brand}</p>
			</div>

			<p className="text-xs text-slate-700 line-clamp-2">{paddle.description}</p>

			<div className="grid grid-cols-2 gap-2">
				<RatingBar rating={paddle.power_rating} label="Power" />
				<RatingBar rating={paddle.control_rating} label="Control" />
				<RatingBar rating={paddle.spin_rating} label="Spin" />
				<RatingBar rating={paddle.forgiveness_rating} label="Sweet Spot" />
			</div>

			<div className="space-y-2 text-xs">
				<div className="flex justify-between">
					<span className="text-slate-500">Weight:</span>
					<span className="font-medium">{paddle.weight}</span>
				</div>
				<div className="flex justify-between">
					<span className="text-slate-500">Core:</span>
					<span className="font-medium">{paddle.core_thickness}</span>
				</div>
				<div className="flex justify-between">
					<span className="text-slate-500">Surface:</span>
					<span className="font-medium">{paddle.surface}</span>
				</div>
			</div>

			<div className="space-y-2">
				<div>
					<h5 className="text-xs font-semibold text-emerald-700 mb-1">
						Key Features:
					</h5>
					<ul className="text-xs text-slate-600 space-y-1">
						{paddle.key_features.slice(0, 2).map((feature, i) => (
							<li key={i} className="flex items-start gap-1">
								<Sparkles size={10} className="mt-0.5 text-emerald-500 flex-shrink-0" />
								{feature}
							</li>
						))}
					</ul>
				</div>

				<div className="grid grid-cols-2 gap-2 text-xs">
					<div>
						<h6 className="font-semibold text-emerald-600 mb-1">Pros:</h6>
						<ul className="text-slate-600 space-y-1">
							{paddle.pros.slice(0, 2).map((pro, i) => (
								<li key={i}>• {pro}</li>
							))}
						</ul>
					</div>
					<div>
						<h6 className="font-semibold text-red-600 mb-1">Cons:</h6>
						<ul className="text-slate-600 space-y-1">
							{paddle.cons.slice(0, 2).map((con, i) => (
								<li key={i}>• {con}</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<button className="w-full bg-ocean hover:bg-ocean-dark text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors">
				View Details & Buy
			</button>
		</div>
	</div>
);

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
function computeResult(answers: Record<number, AnswerValue>) {
	const score = { 'power': 0, 'control': 0, 'all-court': 0, 'defense': 0 };

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

	// Background
	if (background === 'tennis') {
		score.power += 1 * W.BACKGROUND;
		score['all-court'] += 1 * W.BACKGROUND;
	} else if (background === 'first-racquet') {
		score.control += 1 * W.BACKGROUND;
	}

	// Style
	if (style === 'power') score.power += 1 * W.STYLE;
	if (style === 'control') score.control += 1 * W.STYLE;
	if (style === 'all-court') score['all-court'] += 1 * W.STYLE;
	if (style === 'defense') score.defense += 1 * W.STYLE;

	// Shots
	if (shots === 'drives-volleys') score.power += 1 * W.SHOTS;
	if (shots === 'dinks-drops') score.control += 1 * W.SHOTS;
	if (shots === 'spin-placement') score['all-court'] += 1 * W.SHOTS;
	if (shots === 'returns-resets') score.defense += 1 * W.SHOTS;

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

	// Handle beginner override
	if (skill === 'beginner') {
		return {
			archetypeKey: 'control' as const,
			resolvedWeight: 'mid' as const,
			result: {
				...archetypes.control,
				title: 'Perfect for Learning!',
				description:
					'As a beginner, focus on control and forgiveness to build fundamentals. These paddles will help you develop consistent shots.',
				topPicks: PADDLE_DATABASE.beginner,
			},
		};
	}

	// Determine winner
	const entries = Object.entries(score) as Array<[keyof typeof score, number]>;
	entries.sort((a, b) => b[1] - a[1]);
	const [winner] = entries[0];

	// Weight resolution
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

	const spec = { ...archetypes[winner].specs };
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
											{sectionSubLabel[questions[currentQuestionIndex].section]}
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
											{final.result.topPicks.slice(0, 3).map((paddle, index) => (
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
												).map((step, i) => (
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
