// src/app/pickleball-gear/[slug]/_others/types.ts

export interface GearProduct {
	name: string;
	image: string;
	price: string;
	rating: number;
	pros: string[];
	cons: string[];
	description: string;
}

export interface GearSection {
	id: string;
	heading: string;
	content: string;
	products?: GearProduct[];
	tips?: string[];
	image?: string;
}

export interface GearContent {
	title: string;
	description: string;
	keywords: string[];
	featuredImage: string;
	publishedDate: string;
	updatedDate: string;
	author: string;
	sections: GearSection[];
	faqs: { question: string; answer: string }[];
}

export interface GearCategory {
	id: string;
	title: string;
	slug: string;
	content: GearContent;
}
