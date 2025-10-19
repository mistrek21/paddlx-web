// types.ts

// Answer values
export type AnswerValue =
	| 'beginner'
	| 'intermediate'
	| 'advanced'
	| 'elite'
	| 'no-issues'
	| 'minor-issues'
	| 'moderate-issues'
	| 'arm-issues'
	| 'extensive-racquet'
	| 'some-racquet'
	| 'first-racquet'
	| 'table-tennis'
	| 'power'
	| 'control'
	| 'spin'
	| 'all-court'
	| 'defense'
	| 'drives-volleys'
	| 'dinks-drops'
	| 'spin-slice'
	| 'blocks-resets'
	| 'volleys-speedups'
	| 'more-power'
	| 'more-control'
	| 'more-spin'
	| 'more-forgiveness'
	| 'more-speed'
	| 'light'
	| 'mid-light'
	| 'mid'
	| 'mid-heavy'
	| 'heavy'
	| 'auto'
	| '4.0'
	| '4.25'
	| '4.5'
	| 'unsure'
	| 'baseline'
	| 'kitchen'
	| 'mid-court'
	| 'everywhere'
	| 'budget'
	| 'mid'
	| 'premium'
	| 'unlimited';

// Enums for structured values

export type PlayerArchetype =
	| 'power'
	| 'control'
	| 'spin'
	| 'all-court'
	| 'defense';

export type WeightPreference =
	| 'light'
	| 'mid-light'
	| 'mid'
	| 'mid-heavy'
	| 'heavy'
	| 'auto';

export type RenderWeight = 'light' | 'mid' | 'heavy';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'elite';

export enum PaddleShape {
	Standard = 'standard',
	Elongated = 'elongated',
	Widebody = 'widebody',
	Hybrid = 'hybrid',
}

export type ResultSpec = {
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
	topPicks: any[];
	avoid?: string[];
	nextSteps?: string[];
};

export type ComputeResultOutput = {
	archetypeKey: PlayerArchetype;
	resolvedWeight: 'light' | 'mid' | 'heavy';
	result: ResultSpec;
};

// Paddle type
export type Paddle = {
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
	skill_level: SkillLevel[];
	description: string;
	key_features: string[];
	best_for: string[];
	pros: string[];
	cons: string[];
};

export type PaddleDatabase = Record<string, Paddle[]>;

export interface PaddleSpec {
	weight: string;
	core_thickness: string;
	surface: string;
	shape: string;
}

// Quiz option and question types
export interface QuizOption {
	text: string;
	value: AnswerValue;
	hint?: string;
	helper?: string;
	archetypeScores?: Partial<Record<PlayerArchetype, number>>;
	shapePreference?: PaddleShape[];
	coreThickness?: string;
	surface?: string;
	weightPreference?: WeightPreference[];
}

export interface QuizQuestion {
	id: number;
	section: string;
	question: string;
	helper?: string;
	options: QuizOption[];
}
