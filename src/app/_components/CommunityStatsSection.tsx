'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const stats = [
	{
		number: 521500,
		label: 'members',
		description:
			'Join a community of pickleball players and find new friends to play with.',
	},
	{
		number: 3270000,
		label: 'games',
		description: 'Browse games and open play sessions anywhere you go.',
	},
	{
		number: 22400,
		label: 'locations',
		description: 'Find every place to play pickleball in your local area.',
	},
	{
		number: 9100,
		label: 'cities',
		description: 'Now available worldwide. Find courts & games anywhere!',
	},
];

function formatNumber(num: number): string {
	return num.toLocaleString();
}

function AnimatedStat({
	stat,
	index,
}: {
	stat: (typeof stats)[0];
	index: number;
}) {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsVisible(true);
			},
			{ threshold: 0.3 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!isVisible) return;
		const duration = 2000;
		const steps = 60;
		const increment = stat.number / steps;
		let current = 0;
		const timer = setInterval(() => {
			current += increment;
			if (current >= stat.number) {
				setCount(stat.number);
				clearInterval(timer);
			} else {
				setCount(Math.floor(current));
			}
		}, duration / steps);
		return () => clearInterval(timer);
	}, [isVisible, stat.number]);

	return (
		<div
			ref={ref}
			className={`text-center px-8 py-6 transition-opacity duration-700 ${
				isVisible ? 'opacity-100' : 'opacity-0'
			} ${
				index < stats.length - 1
					? 'lg:border-r-2 lg:border-dotted lg:border-divider'
					: ''
			}`}
			style={{ transitionDelay: `${index * 150}ms` }}
		>
			<div className="text-5xl lg:text-6xl font-black text-teal mb-2">
				{formatNumber(count)}
			</div>

			<div className="text-xl lg:text-2xl font-semibold text-teal mb-4 capitalize">
				{stat.label}
			</div>

			<p className="text-slate-gray leading-relaxed text-sm lg:text-base max-w-xs mx-auto">
				{stat.description}
			</p>
		</div>
	);
}

export function CommunityStatsSection() {
	return (
		<section className="bg-white py-20 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
					<h2 className="text-3xl lg:text-5xl font-black text-dark-slate text-center lg:text-left max-w-2xl leading-tight">
						Join the fastest growing pickleball community
					</h2>

					<Button
						size="lg"
						className="bg-coral hover:bg-coral/90 text-white px-8 py-6 text-base rounded-full shadow-md hover:shadow-lg transition-all duration-200 font-semibold whitespace-nowrap"
					>
						Join for free
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
					{stats.map((stat, index) => (
						<AnimatedStat key={index} stat={stat} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
