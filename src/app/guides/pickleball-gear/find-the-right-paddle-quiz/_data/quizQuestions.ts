// quizQuestions.ts

import {
	PaddleShape,
	PlayerArchetype,
	QuizQuestion,
	WeightPreference,
} from '../types';

const quizQuestions: QuizQuestion[] = [
	{
		id: 1,
		section: 'Skill',
		question: 'What is your current pickleball skill rating?',
		helper: 'Use DUPR or USAP rating.',
		options: [
			{
				text: 'Beginner (1.0–2.5)',
				value: 'beginner',
				archetypeScores: { control: 10, defense: 7 },
			},
			{
				text: 'Intermediate (3.0–3.5)',
				value: 'intermediate',
				archetypeScores: { 'all-court': 10 },
			},
			{
				text: 'Advanced (4.0–4.5)',
				value: 'advanced',
				archetypeScores: { power: 10, spin: 10 },
			},
			{
				text: 'Elite (5.0+)',
				value: 'elite',
				archetypeScores: {
					'power': 10,
					'spin': 10,
					'control': 10,
					'all-court': 10,
				},
			},
		],
	},
	{
		id: 2,
		section: 'Style',
		question: 'Which style best describes how you win points?',
		options: [
			{
				text: 'Power drives & finishes',
				value: 'power',
				archetypeScores: { power: 15 },
			},
			{
				text: 'Precision dinks & drops',
				value: 'control',
				archetypeScores: { control: 15 },
			},
			{
				text: 'Spin & deception',
				value: 'spin',
				archetypeScores: { spin: 15 },
			},
			{
				text: 'All-court versatility',
				value: 'all-court',
				archetypeScores: { 'all-court': 15 },
			},
			{
				text: 'Defensive blocks & resets',
				value: 'defense',
				archetypeScores: { defense: 15 },
			},
		],
	},
	{
		id: 3,
		section: 'Physical',
		question: 'Do you experience arm/shoulder/elbow discomfort?',
		helper: 'Affects weight recommendation.',
		options: [
			{
				text: 'No issues',
				value: 'no-issues',
				weightPreference: ['mid', 'mid-heavy', 'heavy'],
			},
			{
				text: 'Minor fatigue after long play',
				value: 'minor-issues',
				weightPreference: ['mid-light', 'mid'],
			},
			{
				text: 'Moderate joint concerns',
				value: 'moderate-issues',
				weightPreference: ['light', 'mid-light'],
			},
			{
				text: 'Significant pain or injury',
				value: 'arm-issues',
				weightPreference: ['light'],
			},
		],
	},
	{
		id: 4,
		section: 'Position',
		question: 'Where do you spend most time on court?',
		options: [
			{
				text: 'Baseline/transition',
				value: 'baseline',
				shapePreference: [PaddleShape.Elongated, PaddleShape.Hybrid],
				archetypeScores: { 'power': 5, 'all-court': 3 },
			},
			{
				text: 'Kitchen/NVZ',
				value: 'kitchen',
				shapePreference: [PaddleShape.Widebody, PaddleShape.Standard],
				archetypeScores: { control: 5, defense: 3 },
			},
			{
				text: 'Mid-court',
				value: 'mid-court',
				shapePreference: [PaddleShape.Hybrid, PaddleShape.Standard],
				archetypeScores: { 'spin': 5, 'all-court': 3 },
			},
			{
				text: 'All zones',
				value: 'everywhere',
				shapePreference: [PaddleShape.Hybrid, PaddleShape.Standard],
				archetypeScores: { 'all-court': 5 },
			},
		],
	},
	{
		id: 5,
		section: 'Shots',
		question: 'Which shot feels most natural?',
		options: [
			{
				text: 'Hard drives & smashes',
				value: 'drives-volleys',
				archetypeScores: { power: 7, spin: 3 },
			},
			{
				text: 'Soft dinks & drops',
				value: 'dinks-drops',
				archetypeScores: { control: 7, defense: 3 },
			},
			{
				text: 'Spin rolls & slices',
				value: 'spin-slice',
				archetypeScores: { spin: 7, power: 3 },
			},
			{
				text: 'Blocks & resets',
				value: 'blocks-resets',
				archetypeScores: { defense: 7, control: 3 },
			},
			{
				text: 'Volleys & speed-ups',
				value: 'volleys-speedups',
				archetypeScores: { 'power': 5, 'all-court': 3 },
			},
		],
	},
	{
		id: 6,
		section: 'Priority',
		question: 'What would help your game most?',
		options: [
			{
				text: 'More power',
				value: 'more-power',
				coreThickness: '11-14mm',
				archetypeScores: { power: 5 },
			},
			{
				text: 'More control',
				value: 'more-control',
				coreThickness: '16-20mm',
				archetypeScores: { control: 5, defense: 3 },
			},
			{
				text: 'More spin',
				value: 'more-spin',
				surface: 'Raw carbon/textured',
				archetypeScores: { spin: 5 },
			},
			{
				text: 'More forgiveness',
				value: 'more-forgiveness',
				coreThickness: '16-20mm',
				shapePreference: [PaddleShape.Widebody],
				archetypeScores: { control: 3, defense: 3 },
			},
			{
				text: 'Faster hands',
				value: 'more-speed',
				weightPreference: ['light', 'mid-light'],
				archetypeScores: { 'all-court': 3 },
			},
		],
	},
	{
		id: 7,
		section: 'Preferences',
		question: 'Which paddle weight do you prefer?',
		helper: 'If unsure select Auto.',
		options: [
			{ text: 'Light (<7.3 oz)', value: 'light' },
			{ text: 'Mid-light (7.3–7.8 oz)', value: 'mid-light' },
			{ text: 'Mid (7.8–8.2 oz)', value: 'mid' },
			{ text: 'Mid-heavy (8.2–8.6 oz)', value: 'mid-heavy' },
			{ text: 'Heavy (>8.6 oz)', value: 'heavy' },
			{ text: 'Auto', value: 'auto' },
		],
	},
	{
		id: 8,
		section: 'Fit',
		question: 'Your preferred grip circumference?',
		helper: 'Measure palm crease to ring finger tip.',
		options: [
			{ text: 'Small (4.0")', value: '4.0' },
			{ text: 'Standard (4.25")', value: '4.25' },
			{ text: 'Large (4.5")', value: '4.5' },
			{ text: 'Unsure', value: 'unsure' },
		],
	},
	{
		id: 9,
		section: 'Background',
		question: 'Your racquet sport experience?',
		options: [
			{
				text: 'Extensive tennis/squash/badminton',
				value: 'extensive-racquet',
				archetypeScores: { 'power': 1, 'all-court': 1 },
			},
			{
				text: 'Some racquet sport',
				value: 'some-racquet',
				archetypeScores: {},
			},
			{
				text: 'First racquet sport',
				value: 'first-racquet',
				archetypeScores: { control: 1 },
			},
			{
				text: 'Table tennis background',
				value: 'table-tennis',
				archetypeScores: { spin: 3, control: 2 },
			},
		],
	},
	{
		id: 10,
		section: 'Budget',
		question: 'Your paddle budget?',
		helper: 'Quality starts at $60.',
		options: [
			{ text: 'Under $100', value: 'budget' },
			{ text: '$100–$150', value: 'mid' },
			{ text: '$150–$250', value: 'premium' },
			{ text: 'No limit', value: 'unlimited' },
		],
	},
];

export default quizQuestions;
