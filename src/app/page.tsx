import { FederationSection } from './_components/FederationSection';
import { GamesSection } from './_components/GamesSection';
import { HeroSection } from './_components/HeroSection';
import { JoinSection } from './_components/JoinSection';
import { Navigation } from './_components/Navigation';
import { RoundRobinSection } from './_components/RoundRobinSection';
import { TopBanner } from './_components/TopBanner';
import { GuidesReviewsSection } from './_components/GuidesReviewsSection';
import { NewsletterSection } from './_components/NewsletterSection';
import { LearnToPlaySection } from './_components/LearnToPlaySection';
import { LocationsBrowserSection } from './_components/LocationsBrowserSection';
import { FeaturedCourtsSection } from './_components/FeaturedCourtsSection';
import { FaqSection } from './_components/FaqSection';
import { CommunityStatsSection } from './_components/CommunityStatsSection';

export default function Home() {
	return (
		<div className="min-h-screen">
			<TopBanner />
			<Navigation />
			<HeroSection />
			<FederationSection />
			<GamesSection />
			<JoinSection />
			<RoundRobinSection />
			<GuidesReviewsSection />
			<NewsletterSection />
			<LearnToPlaySection />
			<LocationsBrowserSection />
			<FeaturedCourtsSection />
			<FaqSection />
			<CommunityStatsSection />
		</div>
	);
}
