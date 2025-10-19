import { PlayerArchetype, WeightPreference, RenderWeight } from '../types';
import archetypes from './archetypes';

interface Result {
	archetypeKey: PlayerArchetype;
	resolvedWeight: WeightPreference;
	displayWeight: RenderWeight;
	result: {
		Icon: any;
		title: string;
		description: string;
		specSummary: string;
		specs: Record<string, string>;
		topPicks: any[];
		nextSteps: string[];
		avoid: string[];
	};
}

// SAFE MAPPER: always outputs a "render bucket"
export function mapToRenderWeight(weight: WeightPreference): RenderWeight {
	if (weight === 'light' || weight === 'mid-light') return 'light';
	if (weight === 'mid-heavy' || weight === 'heavy') return 'heavy';
	return 'mid'; // handles 'mid' and 'auto'
}

export default function computeResult(answers: Record<number, string>): Result {
	const score: Record<PlayerArchetype, number> = {
		'power': 0,
		'control': 0,
		'all-court': 0,
		'defense': 0,
		'spin': 0,
	};
	const W = {
		skill: 3,
		style: 5,
		physical: 3,
		shots: 3,
		position: 2,
		priority: 4,
		background: 1,
	};

	const getAnswer = (id: number) => answers[id];

	// --- scoring logic as before ---
	const skill = getAnswer(1);
	if (skill === 'beginner') {
		score.control += 2 * W.skill;
		score.defense += 1 * W.skill;
	} else if (skill === 'intermediate') score['all-court'] += 2 * W.skill;
	else if (skill === 'advanced') {
		score.power += 1 * W.skill;
		score.spin += 1 * W.skill;
	} else if (skill === 'elite')
		Object.keys(score).forEach((k) => (score[k as PlayerArchetype] += W.skill));

	const style = getAnswer(2) as PlayerArchetype;
	score[style] += W.style;

	const phys = getAnswer(3);
	if (phys === 'arm-issues') {
		score.control += W.physical;
		score.defense += W.physical;
	} else if (phys === 'minor-issues') score.control += W.physical;

	const shots = getAnswer(5);
	if (shots === 'drives-volleys') score.power += W.shots;
	if (shots === 'dinks-drops') score.control += W.shots;
	if (shots === 'spin-slice') score.spin += W.shots;
	if (shots === 'blocks-resets') score.defense += W.shots;

	const pos = getAnswer(4);
	if (pos === 'baseline') score.power += W.position;
	if (pos === 'kitchen') score.control += W.position;
	if (pos === 'everywhere') score['all-court'] += W.position;

	const pr = getAnswer(6);
	if (pr === 'more-power') score.power += W.priority;
	if (pr === 'more-control') score.control += W.priority;
	if (pr === 'more-spin') score.spin += W.priority;
	if (pr === 'more-forgiveness') score.defense += W.priority;

	const bg = getAnswer(9);
	if (bg === 'extensive-racquet') {
		score.power += W.background;
		score['all-court'] += W.background;
	}
	if (bg === 'first-racquet') score.control += W.background;
	if (bg === 'table-tennis') {
		score.spin += 2;
		score.control += 1;
	}

	// Determine archetype
	const sorted = (Object.entries(score) as [PlayerArchetype, number][]).sort(
		(a, b) => b[1] - a[1]
	);
	const [archetypeKey] = sorted[0];

	// --- Weight Resolution ---
	const physical = getAnswer(3);
	const weightAns = getAnswer(7) as WeightPreference;
	let resolvedWeight: WeightPreference = 'mid';
	if (weightAns !== 'auto') resolvedWeight = weightAns;
	else if (physical === 'arm-issues') resolvedWeight = 'light';
	else if (archetypeKey === 'power') resolvedWeight = 'mid-heavy';
	else if (archetypeKey === 'control') resolvedWeight = 'mid-light';

	// Always use the rendering-safe bucket for UI/spec display
	const displayWeight = mapToRenderWeight(resolvedWeight);

	const baseSpecs = { ...archetypes[archetypeKey].specs };
	baseSpecs.weight =
		displayWeight === 'light'
			? '≈7.3–7.8 oz'
			: displayWeight === 'heavy'
			? '≈8.2–8.6 oz'
			: '≈7.8–8.2 oz';

	const priority = getAnswer(6);
	if (priority === 'more-power') baseSpecs.core = '11–14mm';
	if (priority === 'more-control' || priority === 'more-forgiveness')
		baseSpecs.core = '16–20mm';

	return {
		archetypeKey,
		resolvedWeight,
		displayWeight,
		result: {
			...archetypes[archetypeKey],
			specs: baseSpecs,
		},
	};
}
