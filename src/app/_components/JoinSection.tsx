// src/app/_components/JoinSection.tsx

import { MapPin, Users, Megaphone, Smartphone } from 'lucide-react';
import Link from 'next/link';

export function JoinSection() {
	const features = [
		{
			icon: MapPin,
			title: 'Discover games',
			subtitle: 'in your area',
		},
		{
			icon: Users,
			title: 'Connect with',
			subtitle: 'local groups',
		},
		{
			icon: Megaphone,
			title: 'Recruit nearby',
			subtitle: 'players',
		},
		{
			icon: Smartphone,
			title: '#1 Pickleball',
			subtitle: 'mobile app',
		},
	];

	return (
		<section className="py-16 px-4 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
					<div className="flex-1">
						<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-4">
							Join over 521,500 paddlx
						</h2>
						<p className="text-slate-gray leading-relaxed max-w-2xl">
							Become a part of the fastest growing community of pickleball players in
							the world. Discover local games and recruit nearby players. It's
							completely free to join!
						</p>
					</div>
					<div className="flex flex-col items-start lg:items-end gap-2">
						<Link
							href="/join"
							className="bg-coral hover:bg-coral/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
						>
							Join paddlx Now
						</Link>
						<span className="text-sm text-slate-gray font-medium">
							It's completely free!
						</span>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center p-6 border border-border rounded-lg hover:border-divider transition-colors"
						>
							<div className="w-12 h-12 mb-4 text-primary">
								<feature.icon className="w-full h-full" strokeWidth={1.5} />
							</div>
							<h3 className="font-bold text-dark-slate text-lg">{feature.title}</h3>
							<p className="text-dark-slate text-lg">{feature.subtitle}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
