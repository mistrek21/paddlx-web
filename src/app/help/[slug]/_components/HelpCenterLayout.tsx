// src/app/[slug]/_components/HelpCenterLayout.tsx

'use client';

import { ReactNode } from 'react';
import { HelpCenterSidebar } from './HelpCenterSidebar';
import { docSections } from '../_other/docs-data';

interface HelpCenterLayoutProps {
	children: ReactNode;
	currentSlug: string;
}

export function HelpCenterLayout({
	children,
	currentSlug,
}: HelpCenterLayoutProps) {
	return (
		<div
			className="min-h-screen"
			style={{
				background: 'linear-gradient(to bottom right, #E6F7F9, #ffffff, #E6F7F9)',
			}}
		>
			<div className="flex flex-col lg:flex-row">
				<HelpCenterSidebar sections={docSections} currentSlug={currentSlug} />

				<main className="flex-1 p-4 sm:p-6 lg:p-12 pt-20 lg:pt-12">{children}</main>
			</div>
		</div>
	);
}
