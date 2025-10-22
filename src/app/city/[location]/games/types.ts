export type PaddleSession = {
	id: string;
	title: string;
	description?: string;
	location: string;
	date: string; // ISO string from API
	startTime: string; // ISO string
	endTime: string; // ISO string
	formatCategory: string;
	status: string;
	formatType?: string;
	numPlayers: number;
	suggestedLevel: string;
	duprRequired: boolean;
	isPrivate: boolean;
	creatorId: string;

	// Relationships
	Paddle_Club?: {
		id: string;
		name: string;
		images: string[];
		address?: string;
		// Add more if needed
	};
	group?: {
		id: string;
		name: string;
		// Add more if needed
	};
	participants?: any[]; // You can define PaddleSessionParticipant type if needed
	sessionCourts?: any[]; // Define Paddle_SessionCourt if needed

	club_images?: string[]; // Usually Paddle_Club.images
	group_image?: string;
	user_avatar?: string;
	city?: CityInfo;
};

export type CityGamesApiResponse = {
	city: CityInfo;
	games: PaddleSession[];
	count: number;
};

export interface GameCardProps {
	image: string;
	title: string;
	date: string;
	location: string;
	formatCategory: string;
	suggestedLevel: string;
	isPrivate: boolean;
	duprRequired: boolean;
	numPlayers: number;
	Paddle_Club?: {
		name: string;
		address?: string;
	};
}

export type CityInfo = {
	name: string;
	country?: string;
	imageUrl?: string;
	coverImageUrl?: string;
	description?: string;
	communityVibe?: string;
	bestTimeToVisit?: string;
	playingConditions?: string;
	population?: number;
	averageTemp?: number;
};
