// src/app/_components/FederationSection.tsx

import Image from 'next/image';

export function FederationSection() {
	return (
		<section className="bg-cool-gray py-12 px-4">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
				<div className="flex-1">
					<p className="text-lg md:text-xl text-dark-slate font-semibold leading-relaxed">
						The official court and game finder of USA Pickleball and the Global
						Pickleball Federation!
					</p>
				</div>
				<div className="flex items-center gap-8">
					<div className="w-32 h-20 relative">
						<Image
							src="/usa-pickleball-logo.jpg"
							alt="USA Pickleball"
							fill
							className="object-contain"
						/>
					</div>
					<div className="w-32 h-20 relative">
						<Image
							src="/global-pickleball-federation-logo.jpg"
							alt="Global Pickleball Federation"
							fill
							className="object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
