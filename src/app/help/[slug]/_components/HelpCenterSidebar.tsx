'use client';

import { useState, useRef, useEffect } from 'react';
import {
	BookOpen,
	ChevronDown,
	ChevronRight,
	Menu,
	X,
	Zap,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docSections } from '../_other/docs-data';
import { useSupportModalAdvanced } from '@/src/hooks/useSupportModal';

export function HelpCenterSidebar({
	sections = docSections,
	currentSlug = 'payment-methods',
}) {
	const { open, setData } = useSupportModalAdvanced();

	const [expandedSections, setExpandedSections] = useState([
		'payments',
		'groups',
		'sessions',
		'round-robin',
	]);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const sidebarRef = useRef(null);
	const pathname = usePathname?.() || '/help/payment-methods';

	useEffect(() => {
		if (sidebarRef.current) {
			const savedScroll = sessionStorage.getItem('sidebar-scroll');
			// @ts-ignore
			if (savedScroll) sidebarRef.current.scrollTop = +savedScroll;
		}
	}, [pathname]);

	const saveScroll = () => {
		if (sidebarRef.current)
			// @ts-ignore
			sessionStorage.setItem('sidebar-scroll', sidebarRef.current.scrollTop + '');
		setMobileMenuOpen(false);
	};

	const toggleSection = (id: string) =>
		setExpandedSections((prev) =>
			prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
		);

	return (
		<>
			{/* Mobile Hamburger */}
			<button
				aria-label="Open sidebar"
				onClick={() => setMobileMenuOpen(true)}
				className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center transition-all duration-200"
			>
				<Menu className="w-6 h-6 text-[#2A9DB0]" />
			</button>

			{/* Sidebar */}
			<div
				ref={sidebarRef}
				className={`bg-gradient-to-b from-white via-white to-[#FAFBFB] lg:bg-white border-r border-[#E5EAEC] h-screen w-72 fixed lg:sticky top-0 left-0 overflow-y-auto z-40 flex flex-col transition-transform duration-200 ${
					mobileMenuOpen ? 'translate-x-0 block' : '-translate-x-full hidden'
				} lg:translate-x-0 lg:block [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
				style={{ willChange: 'transform' }}
				role="navigation"
				aria-label="Help Center Sidebar"
			>
				{/* Mobile Close */}
				<div className="flex lg:hidden justify-end pt-4 pr-4 pb-2">
					<button
						aria-label="Close sidebar"
						onClick={() => setMobileMenuOpen(false)}
						className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
					>
						<X className="w-5 h-5 text-gray-600" />
					</button>
				</div>

				{/* Logo & Header */}
				<div className="px-6 pt-8 pb-6 flex flex-col gap-1 border-b border-[#E5EAEC]/50">
					<div className="flex items-center gap-2 mb-1">
						<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2A9DB0] to-[#178F98] flex items-center justify-center">
							<BookOpen className="w-5 h-5 text-white" />
						</div>
						<h2 className="text-xl font-bold bg-gradient-to-r from-[#2A9DB0] to-[#178F98] bg-clip-text text-transparent">
							Help Center
						</h2>
					</div>
					<p className="text-sm text-gray-500">
						Everything about{' '}
						<span className="font-semibold text-[#2A9DB0]">paddlX</span>
					</p>
				</div>

				{/* Navigation Sections */}
				<nav className="px-3 pt-4 flex-1 space-y-1">
					{sections.map((section) => (
						<div key={section.id} className="group">
							{!section.isExpandable && section.items ? (
								<Link
									href={`/help/${section.items[0].slug}`}
									scroll={false}
									className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
										currentSlug === section.items[0].slug
											? 'bg-gradient-to-r from-[#E6F7F9] to-[#F0FAFB] text-[#178F98] shadow-sm border border-[#D1EEF2]'
											: 'text-gray-700 hover:bg-[#F9FBFC]'
									}`}
									onClick={saveScroll}
								>
									<Zap className="w-4 h-4 flex-shrink-0" />
									{section.title}
									{currentSlug === section.items[0].slug && (
										<span className="ml-auto px-2 py-0.5 text-xs bg-[#2A9DB0] text-white rounded-full font-bold">
											Active
										</span>
									)}
								</Link>
							) : (
								<>
									<button
										type="button"
										aria-expanded={expandedSections.includes(section.id)}
										aria-controls={`section-${section.id}`}
										onClick={() => toggleSection(section.id)}
										className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-transparent text-[#2A9DB0] font-semibold focus:outline-none hover:bg-[#F9FBFC] transition-colors duration-150"
									>
										<span className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-[#2A9DB0]" />
											{section.title}
										</span>
										<div className="transition-transform duration-300">
											{expandedSections.includes(section.id) ? (
												<ChevronDown className="w-4 h-4 text-[#2A9DB0]" />
											) : (
												<ChevronRight className="w-4 h-4 text-[#2A9DB0]" />
											)}
										</div>
									</button>
									<div
										id={`section-${section.id}`}
										className={`transition-all duration-300 ${
											expandedSections.includes(section.id)
												? 'max-h-[400px] opacity-100'
												: 'max-h-0 opacity-0'
										} overflow-hidden`}
									>
										<div className="pl-6 pr-3 py-2 space-y-1">
											{section.items?.map((item, idx) => (
												<Link
													key={item.id}
													href={`/help/${item.slug}`}
													scroll={false}
													className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 ${
														currentSlug === item.slug
															? 'bg-[#E6F7F9] text-[#178F98] font-semibold shadow-sm'
															: 'text-gray-600 hover:text-gray-900 hover:bg-[#F9FBFC]'
													}`}
													onClick={saveScroll}
												>
													<span className="w-1 h-1 rounded-full bg-current opacity-50 flex-shrink-0" />
													{item.title}
												</Link>
											))}
										</div>
									</div>
								</>
							)}
						</div>
					))}
				</nav>

				{/* Footer */}
				<div className="px-4 py-4 border-t border-[#E5EAEC]/50 mt-auto">
					<p className="text-xs text-gray-500 text-center">Need more help?</p>
					<button
						onClick={() => {
							open();

							setData({
								name: '',
								email: '',
								message: 'I need help with paddlX',
							});
						}}
						className="w-full mt-2 px-4 py-2.5 rounded-lg bg-[#2A9DB0] hover:bg-[#178F98] text-white text-sm font-semibold transition-colors duration-200 cursor-pointer"
					>
						Contact Support
					</button>
				</div>
			</div>

			{/* Mobile Overlay */}
			{mobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-200"
					onClick={() => setMobileMenuOpen(false)}
				/>
			)}
		</>
	);
}
