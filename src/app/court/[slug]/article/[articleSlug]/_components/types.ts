// src/app/court/[slug]/article/[articleId]/_components/types.ts

export interface Article {
	id: string;
	title: string;
	slug: string;
	content: string;
	imageUrl: string | null;
	publishedAt: Date | string;
	updatedAt: Date | string;
	author: Author;
	commentsCount: number;
	comments: Comment[];
	club: Club;
}

export interface Comment {
	id: string;
	text: string;
	createdAt: string;
	updatedAt: string;
	isEdited: boolean;
	editedAt: string | null;
	isModerated: boolean;
	moderationMessage: string | null;
	moderatedAt: string | null;
	articleId: string;
	authorId: string;
	author: {
		id: string;
		username: string;
		avatarUrl: string | null;
	};
}

export interface Author {
	id: string;
	username: string;
	name?: string | null;
	avatarUrl?: string | null;
	profilePicture?: string | null;
}

export interface City {
	id: string;
	name: string;
	country: string;
}

export interface SocialMedia {
	facebook?: string;
	instagram?: string;
	twitter?: string;
	[key: string]: string | undefined;
}

export interface Club {
	id: string;
	name: string;
	slug: string;
	description?: string | null;
	address?: string | null;
	latitude?: number | null;
	longitude?: number | null;
	state?: string | null;
	country?: string | null;
	contactPhone?: string | null;
	contactEmail?: string | null;
	website?: string | null;
	isIndoor: boolean;
	isOutdoor: boolean;
	images: string[];
	followerCount: number;
	totalReviewsCount: number;
	totalReviewsPoints: number;
	isVerified: boolean;
	socialMedia?: SocialMedia | null;
	city?: City | null;
	averageRating?: string | null;
}
