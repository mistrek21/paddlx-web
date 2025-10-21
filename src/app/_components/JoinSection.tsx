// src/app/_components/JoinSection.tsx

'use client'; // Required for hooks

import { MapPin, Users, Megaphone, Smartphone, ArrowRight } from 'lucide-react';
import { useMobileAppModal } from '@/src/hooks/useMobileAppModal'; // 1. Import the hook

const features = [
	{ icon: MapPin, title: 'Discover games', subtitle: 'in your area' },
	{ icon: Users, title: 'Connect with', subtitle: 'local groups' },
	{ icon: Megaphone, title: 'Recruit nearby', subtitle: 'players' },
	{ icon: Smartphone, title: '#1 Pickleball', subtitle: 'mobile app' },
];

// Utility for enhanced icon wrapper styles
function IconCircle({
	children,
	highlight = false,
}: {
	children: React.ReactNode;
	highlight?: boolean;
}) {
	return (
		<div
			className={`w-16 h-16 mb-5 flex items-center justify-center rounded-full shadow-md
        bg-gradient-to-br ${
									highlight
										? 'from-yellow-300 via-teal-400 to-coral-400 ring-4 ring-yellow-200'
										: 'from-teal-400 via-teal-300 to-coral-400 ring-2 ring-coral-300'
								}
        transition duration-200
      `}
		>
			{children}
		</div>
	);
}

export function JoinSection() {
	const { openModal, ModalComponent } = useMobileAppModal(); // 2. Instantiate the hook

	return (
		<>
			<ModalComponent /> {/* 4. Render the modal component */}
			<section className="relative py-20 px-4 bg-gradient-to-b bg-white overflow-hidden">
				{/* Decorative SVG Blobs for Brand Accent (Performance Safe) */}
				<div className="absolute -left-32 -top-32 w-80 h-80 bg-teal-100 rounded-full opacity-20 pointer-events-none blur-[60px]"></div>
				<div className="absolute right-0 bottom-0 w-40 h-40 bg-coral-100 rounded-full opacity-20 pointer-events-none blur-[40px]"></div>
				<div className="relative z-10 max-w-7xl mx-auto">
					{/* Header and CTA Section */}
					<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-14">
						<div className="flex-1">
							<h2 className="text-4xl/tight lg:text-5xl font-extrabold text-dark-slate mb-4">
								Join{' '}
								<span className="bg-gradient-to-r from-teal-400 to-coral-500 text-transparent bg-clip-text">
									521,500+
								</span>{' '}
								Pickleball Players on paddlX!
							</h2>
							<p className="text-lg text-slate-gray leading-relaxed max-w-2xl">
								Become part of our global community. Discover local games, connect with
								players, and elevate your paddle experience.{' '}
								<span className="font-medium text-teal-600">Free forever!</span>
							</p>
						</div>
						<div className="flex flex-col items-start lg:items-end gap-2 mt-6 lg:mt-0">
							{/* 3. Replace Link with button and add onClick handler */}
							<button
								onClick={() => openModal('join for free')}
								className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 transition-colors text-white font-bold px-8 py-3 rounded-lg text-lg shadow-lg shadow-teal-200/20 cursor-pointer"
							>
								Join paddlX Now
								<ArrowRight size={20} />
							</button>
							<span className="text-sm text-slate-500 mt-1">
								⭐ Top-rated • 100% Free
							</span>
						</div>
					</div>
					{/* Feature Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
						{features.map((feature, idx) => (
							<div
								key={idx}
								className="flex flex-col items-center text-center p-7 bg-white border border-slate-200 rounded-xl shadow-md hover:shadow-lg hover:border-teal-400 transition duration-200 cursor-pointer"
							>
								<IconCircle highlight={feature.title === '#1 Pickleball'}>
									<feature.icon className="w-9 h-9 text-white" strokeWidth={2} />
								</IconCircle>
								<h3 className="font-semibold text-dark-slate text-lg">
									{feature.title}
								</h3>
								<p className="text-slate-600 text-base mt-1">{feature.subtitle}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
