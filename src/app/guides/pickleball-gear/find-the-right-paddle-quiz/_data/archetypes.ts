// archetypes.ts

import { PlayerArchetype, Paddle } from '../types';
import PADDLE_DATABASE from './PADDLE_DATABASE';
import { Zap, Shield, Star, Target } from 'lucide-react';

type ArchetypeDefinition = {
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
	nextSteps: string[];
	avoid: string[];
};

const archetypes: Record<PlayerArchetype, ArchetypeDefinition> = {
	'power': {
		Icon: Zap,
		title: "You're a Power Player!",
		description:
			'You thrive on aggressive pace, hard drives, and quick finishes. You want a paddle that delivers effortless pop and lets you attack from anywhere on the court.',
		specSummary:
			'Elongated shape, thinner core (11–14mm), stiffer raw carbon surface, mid-to-heavy weight for max power and reach.',
		specs: {
			weight: '7.8–8.6 oz',
			core: '11–14mm (pop & power)',
			surface: 'Raw carbon/graphite for spin & stiffness',
			shape: 'Elongated for max reach',
		},
		topPicks: PADDLE_DATABASE['power'],
		nextSteps: [
			'Drill compact swing mechanics to stay in control at high speed.',
			'Add edge lead tape at 3/9 for stability if needed.',
		],
		avoid: [
			'Ultra-light builds that reduce your put-away potential.',
			'Thick (16–20mm) cores that kill pop.',
			'Small grip sizes if you generate too much wrist snap.',
		],
	},
	'control': {
		Icon: Shield,
		title: "You're a Control Maestro!",
		description:
			'You win with precision, patience, and soft hands. You need a paddle that gives you a big, forgiving sweet spot and extra dwell time for dinks and drops.',
		specSummary:
			'Widebody or standard shape, thick core (16–20mm), raw carbon for supreme feel, light-to-mid weight for fast hands.',
		specs: {
			weight: '7.6–8.0 oz',
			core: '16–20mm (max forgiveness)',
			surface: 'Raw carbon for touch and control',
			shape: 'Standard/widebody for stability',
		},
		topPicks: PADDLE_DATABASE['control'],
		nextSteps: [
			'Focus on resetting blocks and third-shot drops to dominate the kitchen.',
			'Try slightly thicker replacement grips for even more plush feel.',
		],
		avoid: [
			'Thin cores (<14mm) can spray on mishits (avoid if you want pure consistency).',
			'Excessively heavy paddles that can cause fatigue at the net.',
		],
	},
	'spin': {
		Icon: Star,
		title: "You're a Spin Artist!",
		description:
			'You love rolling your shots, adding variety and deception to your game. You need a paddle with a textured or raw carbon face and an optimal shape for generating heavy spin.',
		specSummary:
			'Hybrid or elongated shape, raw/textured carbon, core 14–16mm, medium weight.',
		specs: {
			weight: '7.8–8.4 oz',
			core: '14–16mm (spin & control)',
			surface: 'Raw/textured carbon for max spin',
			shape: 'Hybrid/elongated for leverage',
		},
		topPicks: PADDLE_DATABASE['all-court'] ?? [],
		nextSteps: [
			'Practice brushing up the back of the ball for wicked topspin.',
			'Test different balls to find which take spin best.',
		],
		avoid: [
			'Smooth-surface paddles or fiberglass faces (lower spin).',
			'Cores that are too thick or dead-feeling (reduces dwell).',
		],
	},
	'all-court': {
		Icon: Target,
		title: "You're an All-Court Strategist!",
		description:
			'You switch between power and touch as needed and want a paddle as versatile as your game. A balanced spec offers you both offense and forgiving defense.',
		specSummary:
			'Hybrid or standard shape, 14–16mm core, midweight, spin-capable face.',
		specs: {
			weight: '7.8–8.2 oz',
			core: '14–16mm (balanced)',
			surface: 'Raw carbon or composite',
			shape: 'Hybrid/standard for versatility',
		},
		topPicks: PADDLE_DATABASE['all-court'],
		nextSteps: [
			'Add edge tape or try changing overgrips to tune swing weight.',
			'Play different balls/courts to test adaptability.',
		],
		avoid: [
			'Extreme specs (very thin or very thick) unless for a specific need.',
			'Super head-heavy paddles if you value quick hands.',
		],
	},
	'defense': {
		Icon: Shield,
		title: "You're a Defensive Wall!",
		description:
			'You pride yourself on consistency, outlasting opponents and keeping the ball alive. You want maximum forgiveness, a huge sweet spot, and a paddle that feels stable everywhere.',
		specSummary:
			'Widebody/standard shape, core 16–20mm, mid-light weight, head-light balance.',
		specs: {
			weight: '7.6–8.1 oz (head-light)',
			core: '16–20mm (ultimate forgiveness)',
			surface: 'Raw carbon for grabs on resets',
			shape: 'Standard/widebody for best defense',
		},
		topPicks: PADDLE_DATABASE['control'],
		nextSteps: [
			'Drill blocks/counterattacks to turn defense into offense.',
			'Try a thick soft overgrip to further expand the sweet spot.',
		],
		avoid: [
			'Head-heavy or ultra-stiff paddles that slow your hands down.',
			'Thin fast pop paddles—more errors than you like.',
		],
	},
};

export default archetypes;
