// types/docs.ts

export interface DocSection {
	id: string;
	title: string;
	slug: string;
	isExpandable: boolean;
	items?: DocItem[];
}

export interface DocItem {
	id: string;
	title: string;
	slug: string;
	content: DocContent;
}

export interface DocContent {
	title: string;
	description: string;
	sections: ContentSection[];
	relatedArticles?: string[];
}

export interface ContentSection {
	heading: string;
	content: string;
	image?: string;
	steps?: string[];
	tips?: string[];
}
