// src/app/layout.tsx (or update your existing one)

import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://paddlx.com';

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		default: 'PaddlX - Find Pickleball Courts & Connect with Players',
		template: '%s | PaddlX',
	},
	description:
		'Discover pickleball courts, connect with players, book sessions, and join tournaments. The ultimate pickleball community platform.',
	keywords:
		'pickleball, paddle, courts, sports, community, tournaments, booking',
	authors: [{ name: 'PaddlX Team' }],
	creator: 'PaddlX',
	publisher: 'PaddlX',

	alternates: {
		canonical: BASE_URL,
	},

	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: BASE_URL,
		siteName: 'PaddlX',
		title: 'PaddlX - Find Pickleball Courts & Connect with Players',
		description:
			'Discover pickleball courts, connect with players, book sessions, and join tournaments.',
		images: [
			{
				url: `${BASE_URL}/og-default.jpg`,
				width: 1200,
				height: 630,
				alt: 'PaddlX',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		site: '@paddlx',
		creator: '@paddlx',
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			'index': true,
			'follow': true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	verification: {
		google: 'your-google-verification-code',
	},

	appleWebApp: {
		capable: true,
		title: 'PaddlX',
		statusBarStyle: 'black-translucent',
	},

	formatDetection: {
		telephone: true,
		email: true,
		address: true,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				{/* Preconnect to external domains */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
