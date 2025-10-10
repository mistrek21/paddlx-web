import { Suspense } from 'react';
import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import CourtHero from './_components/CourtHero';
import CourtContent from './_components/CourtContent';
import CourtSessions from './_components/CourtSessions';
import CourtGroups from './_components/CourtGroups';
import CourtArticles from './_components/CourtArticles';
import CourtReviews from './_components/CourtReviews';
import CourtDetailLoading from './_components/CourtDetailLoading';
import CourtMapWrapper from './_components/CourtMapWrapper';
import CourtWeatherCard from './_components/CourtWeatherCard';

// -------- New Interfaces --------

export interface CityDetail {
	id: string;
	name: string;
	country: string;
	countryCode?: string | null;
	state?: string | null;
	slug: string;
	description?: string | null;
	imageUrl?: string | null;
	thumbnailUrl?: string | null;
	latitude: number;
	longitude: number;
	population?: number | null;
	timezone?: string | null;

	// CALCULATED STATS
	totalClubs: number;
	totalCourts: number;
	totalActiveSessions: number;
	totalActiveTournaments: number;
	totalPlayers: number;
	totalGroups: number;
	totalCoaches: number;
	activityScore: number;
	isPopularDestination: boolean;
	isTrendingCity: boolean;
	upcomingSessionsCount: number;
	totalGamesPlayed: number;

	// Pricing & Climate
	averageSessionPrice?: number | null;
	averageCourtRental?: number | null;
	currencyUsed: string;
	averageTemp?: number | null;
	climateType?: string | null;
	bestPlayMonths: string[];

	// AI Content
	nearbyAttractions: string[];
	playingConditions?: string | null;
	communityVibe?: string | null;
	bestTimeToVisit?: string | null;

	// SEO
	metaTitle?: string | null;
	metaDescription?: string | null;
	keywords?: string[];

	features: CityFeature[];
}

export interface CityFeature {
	id: string;
	featureType: string;
	title: string;
	description?: string | null;
	icon?: string | null;
	priority: number;
}

interface Author {
	id: string;
	name: string | null;
	profilePicture: string | null;
}

interface Comment {
	id: string;
	text: string;
	createdAt: Date | string;
	updatedAt: Date | string;
	isEdited: boolean;
	editedAt: Date | string | null;
	isModerated: boolean;
	moderationMessage: string | null;
	author: Author;
}

interface Article {
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
}

interface Review {
	id: string;
	rating: number;
	comment: string | null;
	title: string | null;
	images: string[];
	isVerified: boolean;
	createdAt: Date | string;
	updatedAt: Date | string;
	helpfulVotes: number;
	user: Author;
	session?: {
		id: string;
		title: string | null;
		date: Date | string;
	};
}

interface SessionParticipant {
	id: string;
	userId: string;
	user: Author;
}
interface Session {
	id: string;
	title: string;
	description?: string;
	location: string;
	date: string;
	startTime: string;
	endTime: string;
	formatCategory: string;
	status: string;
	formatType?: string;
	numPlayers: number;
	suggestedLevel?: string;
	duprRequired: boolean;
	isPrivate: boolean;
	amountPerPlayer: number;
	sessionPrice: number;
	sessionCurrency: string;
	paymentPolicy: string;
	isWeekly: boolean;
	creator: Author;
	participantsCount: number;
	participants: SessionParticipant[];
}
interface GroupMember {
	id: string;
	userId: string;
	user: Author;
}
export interface Group {
	id: string;
	name: string;
	description?: string;
	typeOfGame: string;
	visibility: string;
	skillLevel?: string;
	duprLvl: number[];
	inviteOthers: boolean;
	contactMe: boolean;
	imageUrl?: string;
	createdAt: string;
	owner: Author;
	membersCount: number;
	members: GroupMember[];
}

interface CourtDetailPageProps {
	params: Promise<{ slug: string }>;
}

export interface CourtDetail {
	id: string;
	slug?: string;
	name: string;
	city: string;
	country: string;
	cityDetails?: CityDetail | null; // ADD THIS
	address: string;
	phone?: string;
	hours?: string;
	rating?: number;
	totalReviews?: number;
	description?: string;
	amenities?: string[];
	pricePerHour?: number;
	images?: string[];
	latitude?: number;
	longitude?: number;
	articles: Article[];
	reviews: Review[];
	sessions?: Session[];
	groups?: Group[];
}

// -------- Helpers --------

async function getCourtDetails(slugOrId: string): Promise<CourtDetail | null> {
	try {
		const url = `${process.env.IP_CONFIG}/api/web/courts/${slugOrId}`;
		const response = await fetch(url, { cache: 'no-store' });
		if (!response.ok) {
			const errorText = await response.text();
			console.error('❌ API Error:', errorText);
			return null;
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('❌ Error fetching court:', error);
		return null;
	}
}

export function formatDate(date: Date | string): string {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}
export function formatRelativeTime(date: Date | string): string {
	const now = new Date();
	const target = new Date(date);
	const diff = now.getTime() - target.getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	if (days === 0) return 'Today';
	if (days === 1) return 'Yesterday';
	if (days < 7) return `${days} days ago`;
	if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
	if (days < 365) return `${Math.floor(days / 30)} months ago`;
	return `${Math.floor(days / 365)} years ago`;
}

// -------- Metadata (unchanged) --------

export async function generateMetadata(
	props: CourtDetailPageProps
): Promise<Metadata> {
	const params = await props.params;
	const court = await getCourtDetails(params.slug);

	if (!court) {
		return {
			title: 'Court Not Found',
			description: 'The pickleball court you are looking for does not exist.',
		};
	}
	const title = `${court.name} - Pickleball Court in ${court.city}`;
	const description =
		court.description ||
		`Find pickleball courts and sessions at ${court.name} in ${court.city}, ${court.country}. Book courts, join games, and connect with players.`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url: `/court/${court.slug || params.slug}`,
			type: 'website',
			siteName: 'PaddlX',
			images:
				court.images && court.images.length > 0
					? [
							{
								url: court.images[0],
								width: 1200,
								height: 630,
								alt: court.name,
							},
					  ]
					: [],
			locale: 'en_US',
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: court.images && court.images.length > 0 ? [court.images[0]] : [],
		},
		alternates: {
			canonical: `/court/${court.slug || params.slug}`,
		},
		other: {
			'og:locality': court.city,
			'og:country-name': court.country,
			'og:street-address': court.address,
		},
	};
}

// -------- Main Detail Content --------

async function CourtDetailContent({ params }: CourtDetailPageProps) {
	const { slug } = await params;
	const court = await getCourtDetails(slug);

	if (!court) return notFound();
	if (court.slug && court.slug !== slug) redirect(`/court/${court.slug}`);

	const hasSessions = court.sessions && court.sessions.length > 0;
	const hasGroups = court.groups && court.groups.length > 0;
	const hasArticles = court.articles && court.articles.length > 0;
	const hasReviews = court.reviews && court.reviews.length > 0;

	return (
		<div className="min-h-screen bg-light-blue-3">
			{/* Hero Image */}
			<CourtHero court={court} />

			{/* Content */}
			<div className="container mx-auto px-4 py-12">
				{/* Main Info Card - Full Width */}
				<CourtContent court={court} />

				{/* Map */}
				<CourtMapWrapper
					latitude={court.latitude || 0}
					longitude={court.longitude || 0}
					courtName={court.name}
					address={court.address}
					city={court.city}
					country={court.country}
				/>

				{/* Weather */}
				<CourtWeatherCard
					latitude={court.latitude || 0}
					longitude={court.longitude || 0}
					courtName={court.name}
				/>

				{/* Two Column Layout for larger screens */}
				<div className="grid lg:grid-cols-2 gap-6">
					{/* Left Column */}
					<div className="space-y-6">
						{/* Sessions */}
						{hasSessions && <CourtSessions court={court} />}

						{/* Articles / News */}
						{hasArticles && <CourtArticles court={court} />}
					</div>

					{/* Right Column */}
					<div className="space-y-6">
						{/* Groups */}
						{hasGroups && <CourtGroups court={court} />}

						{/* Reviews */}
						{hasReviews && <CourtReviews court={court} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default function CourtDetailPage(props: CourtDetailPageProps) {
	return (
		<Suspense fallback={<CourtDetailLoading />}>
			<CourtDetailContent {...props} />
		</Suspense>
	);
}
