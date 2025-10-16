'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
	Users,
	Calendar,
	Search,
	Trophy,
	UserPlus,
	CalendarClock,
	Briefcase,
	CreditCard,
	TrendingUp,
	BookOpen,
	PlayCircle,
	Monitor,
	FileText,
	HelpCircle,
	ShoppingBag,
	Award,
	Target,
	Grid3x3,
	ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { useMobileAppModal } from '@/src/hooks/useMobileAppModal'; // 1. Import the hook

const Navigation = ({ offset = 0, compact = false }) => {
	const { openModal, ModalComponent } = useMobileAppModal(); // 2. Instantiate the hook

	const playItems = [
		{
			icon: Calendar,
			title: 'Organize Games',
			description:
				'Pull together a game in minutes with our free scheduling tool.',
			href: '/organize',
			gradient: 'from-blue-500 to-cyan-500',
		},
		{
			icon: Search,
			title: 'Find Players',
			description: 'Find a 4th for your game without the endless text threads.',
			href: '/find-players',
			gradient: 'from-purple-500 to-pink-500',
		},
		{
			icon: Trophy,
			title: 'Run a Round Robin',
			description: 'Generate matchups, collect scores and view live standings!',
			href: '/round-robin',
			badge: 'New!',
			gradient: 'from-amber-500 to-orange-500',
		},
	];

	const organizeItems = [
		{
			icon: Trophy,
			title: 'Run a round robin',
			description: 'Generate matchups, collect scores and view live standings.',
			href: '/round-robin',
			badge: 'New!',
			gradient: 'from-emerald-500 to-teal-500',
			featured: true,
		},
		{
			icon: UserPlus,
			title: 'Create a Group',
			description:
				"Automatically invite your group to play and always know who's in.",
			href: '/create-group',
			gradient: 'from-cyan-500 to-blue-500',
		},
		{
			icon: CalendarClock,
			title: 'Schedule games',
			description:
				'Invite players, track sign ups, manage waitlists and create group texts.',
			href: '/schedule',
			gradient: 'from-violet-500 to-purple-500',
		},
	];

	const earnItems = [
		{
			icon: Briefcase,
			title: 'Build a business',
			description:
				'Bring fun programming to your area and make money on the court.',
			href: '/business',
			gradient: 'from-green-500 to-emerald-500',
		},
		{
			icon: CreditCard,
			title: 'Collect payments',
			description: 'Simplify payments for your pickleball games and events.',
			href: '/payments',
			gradient: 'from-blue-500 to-indigo-500',
		},
		{
			icon: TrendingUp,
			title: 'Scale your coaching',
			description: 'Multiply your coaching earnings with weekly programming.',
			href: '/coaching',
			gradient: 'from-orange-500 to-red-500',
		},
	];

	const learnItems = {
		main: [
			{
				icon: BookOpen,
				title: 'Book a Lesson',
				description: 'Browse coaches in your area for a private or group lesson.',
				href: '/lessons',
				gradient: 'from-blue-500 to-cyan-500',
			},
			{
				icon: PlayCircle,
				title: 'How to Play',
				description: 'Get out on the court with the basic rules and positioning.',
				href: '/how-to-play',
				gradient: 'from-green-500 to-emerald-500',
			},
			{
				icon: Monitor,
				title: 'Virtual Clinic',
				description:
					'Learn how to play with a series of short videos taught by pros.',
				href: '/virtual-clinic',
				gradient: 'from-purple-500 to-pink-500',
			},
		],
		guides: [
			{
				icon: FileText,
				title: 'How to run a fixed-partner league on Pickleheads',
				href: '/guides/fixed-partner',
				tag: 'Guides',
			},
			{
				icon: FileText,
				title: 'How to run a league on Pickleheads',
				href: '/guides/league',
				tag: 'Guides',
			},
		],
	};

	const gearItems = {
		featured: [
			{
				icon: HelpCircle,
				title: 'Take the Paddle Quiz',
				description: 'Our paddle expert Brandon will find your perfect match.',
				href: '/paddle-quiz',
				gradient: 'from-yellow-500 to-orange-500',
				highlight: true,
			},
			{
				icon: Award,
				title: 'Top Paddles',
				description: 'Our picks for the top pickleball paddles in every category.',
				href: '/top-paddles',
				gradient: 'from-blue-500 to-indigo-500',
			},
			{
				icon: Target,
				title: 'Top Nets',
				description: 'Our picks for the top pickleball nets in every category.',
				href: '/top-nets',
				gradient: 'from-green-500 to-teal-500',
			},
		],
		guides: [
			{
				title: 'Best pickleball sets in 2025 - top 6 compared',
				href: '/guides/sets',
				tag: 'Pickleball Gear',
			},
			{
				title: 'Best pickleball shoes in 2025 - top 7 compared',
				href: '/guides/shoes',
				tag: 'Pickleball Gear',
			},
		],
	};

	const renderStandardMenu = (items: any[]) => (
		<div className="w-full bg-white shadow-xl">
			<div className="max-w-7xl mx-auto px-6 py-10">
				<div className="grid grid-cols-3 gap-8">
					{items.map((item, index) => (
						<a key={index} href={item.href} className="group relative">
							<div
								className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 p-8 hover:border-cyan-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full ${
									item.featured ? 'ring-2 ring-cyan-400 ring-offset-4' : ''
								}`}
							>
								{item.badge && (
									<span className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg z-10 animate-pulse">
										{item.badge}
									</span>
								)}

								<div className="relative z-10">
									<div
										className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${item.gradient} shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
									>
										<item.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
									</div>

									<h3 className="font-black text-2xl text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors leading-tight">
										{item.title}
									</h3>

									<p className="text-gray-600 leading-relaxed text-base">
										{item.description}
									</p>
								</div>

								<div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
									<div
										className={`w-full h-full rounded-tl-full bg-gradient-to-br ${item.gradient}`}
									/>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);

	const renderLearnMenu = () => (
		<div className="w-full bg-white shadow-xl">
			<div className="max-w-7xl mx-auto px-6 py-10">
				<div className="grid grid-cols-3 gap-8 mb-10">
					{learnItems.main.map((item, index) => (
						<a key={index} href={item.href} className="group relative">
							<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 p-8 hover:border-purple-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
								<div
									className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${item.gradient} shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
								>
									<item.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
								</div>

								<h3 className="font-black text-2xl text-gray-900 mb-4 group-hover:text-purple-600 transition-colors leading-tight">
									{item.title}
								</h3>

								<p className="text-gray-600 text-base leading-relaxed">
									{item.description}
								</p>

								<div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
									<div
										className={`w-full h-full rounded-tl-full bg-gradient-to-br ${item.gradient}`}
									/>
								</div>
							</div>
						</a>
					))}
				</div>

				<div className="border-t-2 border-gray-200 pt-8">
					<div className="flex items-center gap-2 mb-6 justify-between">
						<div className="flex items-center gap-2">
							<div className="h-8 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
							<h4 className="text-sm font-black text-gray-700 uppercase tracking-wider">
								Keep Learning
							</h4>
						</div>
						<Link href="/guides" className="flex items-center gap-2">
							<p className="text-sm font-black text-gray-700 uppercase tracking-wider">
								See All Guides
							</p>
							<ArrowRight className="w-4 h-4 text-gray-600" />
						</Link>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-6">
					{learnItems.guides.map((guide, index) => (
						<a
							key={index}
							href={guide.href}
							className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-purple-50 hover:to-pink-50 transition-all duration-300 border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg"
						>
							<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-all shadow-md">
								<guide.icon className="w-6 h-6 text-gray-600 group-hover:text-purple-700" />
							</div>
							<div className="flex-1 min-w-0">
								<span className="inline-block text-xs font-black text-purple-600 uppercase tracking-wider mb-2">
									{guide.tag}
								</span>
								<p className="text-sm font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
									{guide.title}
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);

	const renderGearMenu = () => (
		<div className="w-full bg-white border-b border-gray-100 shadow-xl">
			<div className="max-w-7xl mx-auto px-6 py-10">
				<div className="grid grid-cols-3 gap-8 mb-10">
					{gearItems.featured.map((item, index) => (
						<a key={index} href={item.href} className="group relative">
							<div
								className={`relative overflow-hidden rounded-3xl border-2 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full ${
									item.highlight
										? 'bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 border-orange-300 hover:border-orange-500'
										: 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-orange-400'
								}`}
							>
								<div
									className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${item.gradient} shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
								>
									<item.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
								</div>

								<h3 className="font-black text-2xl text-gray-900 mb-4 group-hover:text-orange-600 transition-colors leading-tight">
									{item.title}
								</h3>

								<p className="text-gray-600 text-base leading-relaxed">
									{item.description}
								</p>

								<div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
									<div
										className={`w-full h-full rounded-tl-full bg-gradient-to-br ${item.gradient}`}
									/>
								</div>
							</div>
						</a>
					))}
				</div>

				<div className="border-t-2 border-gray-200 pt-8">
					<div className="flex items-center justify-between mb-6">
						<div className="flex items-center gap-2">
							<div className="h-8 w-1 bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
							<h4 className="text-sm font-black text-gray-700 uppercase tracking-wider">
								More Gear Guides
							</h4>
						</div>
						<a
							href="/guides"
							className="group flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 uppercase tracking-wide transition-colors"
						>
							View All
							<span className="group-hover:translate-x-1 transition-transform">→</span>
						</a>
					</div>
					<div className="grid grid-cols-2 gap-6">
						{gearItems.guides.map((guide, index) => (
							<a
								key={index}
								href={guide.href}
								className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-orange-50 hover:to-red-50 transition-all duration-300 border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg"
							>
								<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:from-orange-200 group-hover:to-red-200 transition-all shadow-md">
									<ShoppingBag className="w-6 h-6 text-gray-600 group-hover:text-orange-700" />
								</div>
								<div className="flex-1 min-w-0">
									<span className="inline-block text-xs font-black text-orange-600 uppercase tracking-wider mb-2">
										{guide.tag}
									</span>
									<p className="text-sm font-bold text-gray-900 group-hover:text-orange-700 transition-colors leading-snug">
										{guide.title}
									</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<>
			{/* 4. Render the modal component */}
			<ModalComponent />
			<nav
				style={{
					top: offset,
					position: 'fixed',
					width: '100%',
					left: 0,
				}}
				className={`transition-all duration-300 z-[9998] ${
					compact
						? 'bg-white border-b shadow-sm py-2'
						: 'bg-primary-ultra-soft py-4 shadow-xl'
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
					<div className="flex items-center gap-12">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-12">
							<div className="flex items-center gap-2">
								<Image
									src="/paddlx-logo-no-text.png"
									alt="paddlX Logo"
									width={44}
									height={44}
									className="h-11 w-11 object-contain rounded-full shadow-lg"
								/>
								<span
									className="
                font-bold
                text-[1.35rem] sm:text-[1.65rem]
                tracking-tighter
                select-none
                relative
                leading-none
                font-spacegrotesk
            "
									style={{
										fontFamily: "'Space Grotesk', 'Inter', 'Segoe UI', Arial, sans-serif",
									}}
								>
									paddl
									<span
										className="
                    text-teal-500 ml-0.5 font-extrabold
                    text-[1.5rem] sm:text-[1.75rem]
                    drop-shadow-[0_1px_2px_rgba(0,188,212,0.15)]
                    inline-block -rotate-2 scale-105
                    align-middle
                "
									>
										X
									</span>
								</span>
							</div>
						</Link>

						{/* Navigation Menu */}
						<NavigationMenu className="hidden lg:block" viewport={false}>
							<NavigationMenuList className="gap-2">
								<NavigationMenuItem>
									<NavigationMenuTrigger
										className={`text-sm font-bold px-4 ${
											compact
												? 'text-gray-900 hover:text-cyan-600'
												: 'text-gray-900 hover:text-cyan-400'
										}`}
									>
										Play
									</NavigationMenuTrigger>
									<NavigationMenuContent
										className="
                                        !absolute
                                        !left-0
                                        !w-[110vw] 
                                        !p-0
                                        !-ml-[25vw] 
                                    "
									>
										{renderStandardMenu(playItems)}
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuTrigger
										className={`text-sm font-bold px-4 ${
											compact
												? 'text-gray-900 hover:text-cyan-600'
												: 'text-gray-900 hover:text-cyan-400'
										}`}
									>
										Organize
									</NavigationMenuTrigger>
									<NavigationMenuContent
										className="
                                        !absolute
                                        !left-0
                                        !w-[110vw]
                                        !p-0
                                        !-ml-[30vw]
                                    "
									>
										{renderStandardMenu(organizeItems)}
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuTrigger
										className={`text-sm font-bold px-4 ${
											compact
												? 'text-gray-900 hover:text-cyan-600'
												: 'text-gray-900 hover:text-cyan-400'
										}`}
									>
										Earn
									</NavigationMenuTrigger>
									<NavigationMenuContent
										className=" !absolute
                                        !left-0
                                        !w-[110vw] 
                                        !p-0 !-ml-[38vw] "
									>
										{renderStandardMenu(earnItems)}
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuTrigger
										className={`text-sm font-bold px-4 ${
											compact
												? 'text-gray-900 hover:text-cyan-600'
												: 'text-gray-900 hover:text-cyan-400'
										}`}
									>
										Learn
									</NavigationMenuTrigger>
									<NavigationMenuContent
										className=" !absolute
                                        !left-0
                                        !w-[110vw] 
                                        !p-0 !-ml-[43vw]"
									>
										{renderLearnMenu()}
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuTrigger
										className={`text-sm font-bold px-4 ${
											compact
												? 'text-gray-900 hover:text-cyan-600'
												: 'text-gray-900 hover:text-cyan-400'
										}`}
									>
										Gear
									</NavigationMenuTrigger>
									<NavigationMenuContent
										className=" !absolute
                                        !left-0
                                        !w-[110vw] 
                                        !p-0 !-ml-[50vw]"
									>
										{renderGearMenu()}
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					{/* Auth Buttons */}
					<div className="flex items-center gap-4">
						{/* 3. Add onClick handler */}
						<button
							onClick={() => openModal('log in')}
							className={`text-sm font-bold transition-colors cursor-pointer ${
								compact
									? 'text-gray-900 hover:text-cyan-600'
									: 'text-gray-900 hover:text-cyan-400'
							}`}
						>
							Log in
						</button>
						{/* 3. Add onClick handler */}
						<Button
							onClick={() => openModal('join for free')}
							className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
						>
							Join for free
						</Button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
