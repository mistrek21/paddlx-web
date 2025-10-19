// src/app/guides/pickleball-gear/find-the-right-paddle-quiz/page.tsx

import { Metadata } from 'next';

import Link from 'next/link';
import { PaddleQuiz } from './_components/PaddleQuiz';

// SEO Metadata for the quiz page
export const metadata: Metadata = {
	title: 'Paddle Finder Quiz | Find the Perfect Pickleball Paddle | paddlX',
	description:
		'Take our interactive quiz to discover the best pickleball paddle for your unique playing style. Get personalized recommendations for power, control, or all-court paddles.',
};

export default function PaddleQuizPage() {
	return (
		<div className="bg-gradient-to-br from-sand/20 via-white to-ocean/10 min-h-screen">
			<div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 text-center">
				{/* Breadcrumb */}
				<nav className="text-sm mb-4 text-slate-500">
					<Link href="/" className="hover:text-ocean">
						Home
					</Link>
					<span className="mx-2">/</span>
					<Link href="/#guides-heading" className="hover:text-ocean">
						Guides
					</Link>
					<span className="mx-2">/</span>
					<span className="text-charcoal">Paddle Finder Quiz</span>
				</nav>

				<h1 className="text-4xl md:text-5xl font-bold text-charcoal text-balance">
					Find the Perfect Paddle for Your Game
				</h1>
				<p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto text-balance">
					Answer a few simple questions about your playing style, and we'll recommend
					the ideal type of paddle to elevate your game.
				</p>

				<div className="mt-12">
					<PaddleQuiz />
				</div>
			</div>
		</div>
	);
}
