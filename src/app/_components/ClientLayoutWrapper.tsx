// /src/app/_components/ClientLayoutWrapper.tsx

'use client';

import { useState, useEffect } from 'react';
import { TopBanner } from './TopBanner';
import { Navigation } from './Navigation';

export function ClientLayoutWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const [bannerVisible, setBannerVisible] = useState(true);
	const [scrolled, setScrolled] = useState(false);
	// Define your heights for compact mode
	const bannerHeight = scrolled ? 36 : 48;
	const navHeight = scrolled ? 48 : 64;

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 30);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			{bannerVisible && (
				<TopBanner
					onClose={() => setBannerVisible(false)}
					fixed
					compact={scrolled}
				/>
			)}
			<Navigation offset={bannerVisible ? bannerHeight : 0} compact={scrolled} />
			<div style={{ paddingTop: (bannerVisible ? bannerHeight : 0) + navHeight }}>
				{children}
			</div>
		</>
	);
}
