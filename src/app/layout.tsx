// src/app/layout.tsx

import type React from 'react';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { Footer } from './_components/Footer';
import { ClientLayoutWrapper } from './_components/ClientLayoutWrapper';
import { Providers } from './providers';
import { SupportContactModal } from './_components/modals/SupportContactModal';

export const metadata: Metadata = {
	title: 'v0 App',
	description: 'Created with v0',
	generator: 'v0.app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Suspense fallback={null}>
					<Providers>
						<ClientLayoutWrapper>{children}</ClientLayoutWrapper>

						<SupportContactModal />
					</Providers>
				</Suspense>
				<Footer />
			</body>
		</html>
	);
}
