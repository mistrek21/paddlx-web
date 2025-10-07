// src/app/_components/Navigation.tsx

'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
	offset?: number;
	compact?: boolean;
}

export function Navigation({ offset = 0, compact }: NavigationProps) {
	const navItems = [
		{ label: 'Play', hasDropdown: true },
		{ label: 'Organize', hasDropdown: true },
		{ label: 'Earn', hasDropdown: true },
		{ label: 'Learn', hasDropdown: true },
		{ label: 'Gear', hasDropdown: true },
	];

	return (
		<nav
			style={{
				top: offset,
				position: 'fixed',
				width: '100%',
				left: 0,
				zIndex: 40,
			}}
			className={`
        transition-all duration-300
        ${
									compact
										? 'bg-white border-b shadow-sm py-2'
										: 'bg-gradient-to-r bg-primary-super-soft border-b-4 border-accent shadow-md py-4'
								}
      `}
		>
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<div className="flex items-center gap-8">
					<div className="flex items-center gap-2">
						<div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow">
							<span className="text-dark font-bold text-sm">PH</span>
						</div>
						<span
							className={`font-bold tracking-wide text-dark-slate transition-all ${
								compact ? 'text-lg' : 'text-xl'
							}`}
						>
							paddlx
						</span>
					</div>
					<ul className="hidden md:flex items-center gap-6">
						{navItems.map((item) => (
							<li key={item.label}>
								<button className="flex items-center gap-1 text-sm font-semibold text-dark-slate hover:text-accent transition-colors">
									{item.label}
									{item.hasDropdown && <ChevronDown className="w-4 h-4" />}
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-center gap-4">
					<button className="text-sm font-semibold text-dark-slate hover:text-accent transition-colors">
						Log in
					</button>
					<Button className="bg-accent hover:bg-accent-dark text-white font-bold px-6 rounded-full shadow accent-cta">
						Join for free
					</Button>
				</div>
			</div>
		</nav>
	);
}
