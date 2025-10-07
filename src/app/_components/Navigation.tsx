'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function Navigation() {
	const navItems = [
		{ label: 'Play', hasDropdown: true },
		{ label: 'Organize', hasDropdown: true },
		{ label: 'Earn', hasDropdown: true },
		{ label: 'Learn', hasDropdown: true },
		{ label: 'Gear', hasDropdown: true },
	];

	return (
		<nav className="bg-dark text-white px-6 py-4">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<div className="flex items-center gap-8">
					<div className="flex items-center gap-2">
						<div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
							<span className="text-dark font-bold text-sm">PH</span>
						</div>
						<span className="text-xl font-bold">paddlx</span>
					</div>

					<ul className="hidden md:flex items-center gap-6">
						{navItems.map((item) => (
							<li key={item.label}>
								<button className="flex items-center gap-1 text-sm font-medium hover:text-white/80 transition-colors">
									{item.label}
									{item.hasDropdown && <ChevronDown className="w-4 h-4" />}
								</button>
							</li>
						))}
					</ul>
				</div>

				<div className="flex items-center gap-4">
					<button className="text-sm font-medium hover:text-white/80 transition-colors">
						Log in
					</button>
					<Button className="bg-accent hover:bg-accent-dark text-white font-medium px-6 rounded-full">
						Join for free
					</Button>
				</div>
			</div>
		</nav>
	);
}
