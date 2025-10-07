import { Grid3x3, Users, Trophy, Send, Play, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function RoundRobinSection() {
	const features = [
		{
			icon: Grid3x3,
			text: 'Choose from 10 fun formats',
		},
		{
			icon: Users,
			text: 'Any number of courts or players',
		},
		{
			icon: Trophy,
			text: 'Add scores and view live standings',
		},
		{
			icon: Send,
			text: 'Send scores to DUPR with instant validation',
		},
	];

	return (
		<section className="py-16 px-4 bg-pale-blue">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12">
					<div className="flex-1">
						<h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-6">
							Mix it up with our NEW round robin tool!
						</h2>
						<p className="text-slate-gray leading-relaxed mb-6 max-w-2xl">
							Add a fun twist to your weekly games with our{' '}
							<span className="font-semibold">free round robin tool</span>. It's the
							most flexible way to organize play!
						</p>
						<ul className="space-y-4">
							{features.map((feature, index) => (
								<li key={index} className="flex items-start gap-3">
									<div className="w-6 h-6 text-primary flex-shrink-0 mt-0.5">
										<feature.icon className="w-full h-full" strokeWidth={1.5} />
									</div>
									<span className="text-slate-gray font-medium">{feature.text}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="flex-shrink-0">
						<Link
							href="/round-robin"
							className="bg-coral hover:bg-coral/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
						>
							Learn more
						</Link>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					<div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
						<div className="aspect-video bg-light-blue-2 rounded-lg mb-4 overflow-hidden relative">
							<Image
								src="/pickleball-court-simulator-interface-with-players-.jpg"
								alt="Round robin tool preview"
								fill
								className="object-cover"
							/>
						</div>
						<h3 className="text-xl font-bold text-primary mb-2">Preview the tool</h3>
						<p className="text-slate-gray text-sm mb-3">
							Use the simulator to understand how each round robin format works.
						</p>
						<Link
							href="/preview"
							className="text-primary hover:text-primary-dark font-semibold text-sm inline-flex items-center gap-1"
						>
							Try it now
							<ExternalLink className="w-4 h-4" />
						</Link>
					</div>

					<div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
						<div className="aspect-video bg-light-blue-2 rounded-lg mb-4 overflow-hidden relative">
							<Image
								src="/mobile-app-showing-pickleball-round-robin-matchups.jpg"
								alt="Create a round robin"
								fill
								className="object-cover"
							/>
						</div>
						<h3 className="text-xl font-bold text-primary mb-2">
							Create a round robin
						</h3>
						<p className="text-slate-gray text-sm mb-3">
							Generate matchups, collect scores and view live standings!
						</p>
						<Link
							href="/create"
							className="text-primary hover:text-primary-dark font-semibold text-sm inline-flex items-center gap-1"
						>
							Learn more
							<ExternalLink className="w-4 h-4" />
						</Link>
					</div>
				</div>

				<div className="bg-white rounded-lg p-6 shadow-sm border-2 border-primary-soft">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className="flex items-center gap-4">
							<div className="w-16 h-16 bg-light-gray rounded-lg flex-shrink-0 overflow-hidden relative">
								<Image
									src="/person-explaining-pickleball-round-robin.jpg"
									alt="Video thumbnail"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 flex items-center justify-center">
									<Play className="w-8 h-8 text-white drop-shadow-lg" />
								</div>
							</div>
							<div>
								<h3 className="font-bold text-primary mb-1">
									See it in action - watch the video series!
								</h3>
								<p className="text-slate-gray text-sm">
									Get a in-depth look at all{' '}
									<span className="font-semibold">10 formats</span> and what running a
									round robin looks like on paddlx!
								</p>
							</div>
						</div>
						<Link
							href="/videos"
							className="bg-white hover:bg-light-gray text-primary font-semibold px-6 py-2.5 rounded-full border-2 border-primary transition-colors whitespace-nowrap"
						>
							Watch now
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
