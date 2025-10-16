// /src/app/guides/[category]/_components/GuideLayout.tsx

import React from 'react';
import Link from 'next/link';

interface GuideLayoutProps {
	children: React.ReactNode;
	guide: {
		category: string;
		categorySlug: string;
		title: string;
	};
}

export function GuideLayout({ children, guide }: GuideLayoutProps) {
	return (
		<div className="bg-sand/30 min-h-screen">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
				{/* Breadcrumb Navigation */}
				<nav className="flex items-center space-x-2 text-sm mb-8">
					<Link
						href="/"
						className="text-slate-600 hover:text-ocean transition-colors duration-200 font-medium"
					>
						Home
					</Link>
					<span className="text-slate-400">/</span>
					<Link
						href="/#guides-heading" // Links back to the guides section on the homepage
						className="text-slate-600 hover:text-ocean transition-colors duration-200 font-medium"
					>
						Guides
					</Link>
					<span className="text-slate-400">/</span>
					<span className="text-charcoal font-semibold truncate max-w-xs">
						{guide.title}
					</span>
				</nav>

				<main>
					<article className="bg-white rounded-2xl shadow-lg border border-sand overflow-hidden">
						{children}
					</article>
				</main>
			</div>
		</div>
	);
}
