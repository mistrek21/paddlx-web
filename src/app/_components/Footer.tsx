// src/app/_components/Footer.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
	return (
		<footer className="bg-primary text-white">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				{/* Top Section - Logo and App Downloads */}
				<div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
					<div className="flex items-center gap-2">
						<Image
							src="/paddlx-logo-no-text.png"
							alt="paddlX Logo"
							width={40}
							height={40}
							className="h-10 w-10 rounded-full object-contain bg-white shadow-md"
						/>
						<span
							className="
      font-bold
      text-[1.2rem] sm:text-[1.45rem]
      text-dark-slate
      select-none
      font-spacegrotesk
      leading-none
      px-2 py-1
      rounded-xl
      bg-white bg-opacity-90
      shadow-sm
      flex items-center
    "
							style={{
								fontFamily: "'Space Grotesk', 'Inter', 'Segoe UI', Arial, sans-serif",
							}}
						>
							paddl
							<span
								className="
        text-teal-600 ml-0.5 font-extrabold
        text-[1.35rem] sm:text-[1.65rem]
        inline-block -rotate-2 scale-110
        align-middle
      "
							>
								X
							</span>
							<span className="text-xs font-semibold align-super ml-0.5 tracking-normal text-dark-slate">
								®
							</span>
						</span>
					</div>

					<div className="flex items-center gap-4">
						<span className="text-lg font-semibold">Download the mobile app:</span>
						<Link
							href="#"
							className="inline-block transition-opacity hover:opacity-80"
						>
							<Image
								src="/app-store-download-button.png"
								alt="Download on the App Store"
								width={120}
								height={40}
								className="h-10 w-auto rounded-full"
							/>
						</Link>
						<Link
							href="#"
							className="inline-block transition-opacity hover:opacity-80"
						>
							<Image
								src="/google-play-download-button.jpg"
								alt="Get it on Google Play"
								width={135}
								height={40}
								className="h-10 w-auto"
							/>
						</Link>
					</div>
				</div>

				{/* Links Section */}
				<div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
					{/* paddlx Column */}
					<div className="relative md:pr-8">
						<h3 className="mb-4 text-lg font-bold">paddlX</h3>
						<ul className="space-y-3">
							<li>
								<Link href="#" className="hover:underline">
									Add a Court
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									We're Hiring!
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Get Help
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									About Us
								</Link>
							</li>
						</ul>
						<div className="absolute right-0 top-0 hidden h-full w-px border-r-2 border-dotted border-white/40 md:block" />
					</div>

					{/* Learn Column */}
					<div className="relative md:pr-8">
						<h3 className="mb-4 text-lg font-bold">Learn</h3>
						<ul className="space-y-3">
							<li>
								<Link href="#" className="hover:underline">
									How to Play
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Video Clinic
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Rating Quiz
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									All Blog Posts
								</Link>
							</li>
						</ul>
						<div className="absolute right-0 top-0 hidden h-full w-px border-r-2 border-dotted border-white/40 md:block" />
					</div>

					{/* Reviews Column */}
					<div className="relative md:pr-8">
						<h3 className="mb-4 text-lg font-bold">Reviews</h3>
						<ul className="space-y-3">
							<li>
								<Link href="#" className="hover:underline">
									Paddle Quiz
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Pickleball Paddles
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Pickleball Nets
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Pickleball Balls
								</Link>
							</li>
						</ul>
						<div className="absolute right-0 top-0 hidden h-full w-px border-r-2 border-dotted border-white/40 md:block" />
					</div>

					{/* Organize Column */}
					<div>
						<h3 className="mb-4 text-lg font-bold">Organize</h3>
						<ul className="space-y-3">
							<li>
								<Link href="#" className="hover:underline">
									Schedule Play
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Manage Groups
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Find Players
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Run a Round Robin
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Social Media Icons */}
				<div className="mb-8 flex justify-center gap-4">
					<Link
						href="#"
						className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-slate transition-opacity hover:opacity-80"
						aria-label="Facebook"
					>
						<Facebook className="h-5 w-5" />
					</Link>
					<Link
						href="#"
						className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-slate transition-opacity hover:opacity-80"
						aria-label="Instagram"
					>
						<Instagram className="h-5 w-5" />
					</Link>
					<Link
						href="#"
						className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-slate transition-opacity hover:opacity-80"
						aria-label="TikTok"
					>
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-5 w-5"
							aria-hidden="true"
						>
							<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
						</svg>
					</Link>
					<Link
						href="#"
						className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-slate transition-opacity hover:opacity-80"
						aria-label="X (Twitter)"
					>
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-5 w-5"
							aria-hidden="true"
						>
							<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
						</svg>
					</Link>
					<Link
						href="#"
						className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-slate transition-opacity hover:opacity-80"
						aria-label="YouTube"
					>
						<Youtube className="h-5 w-5" />
					</Link>
				</div>

				{/* Legal Links */}
				<div className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
					<Link href="#" className="flex items-center gap-1 hover:underline">
						<svg
							className="h-4 w-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<circle cx="12" cy="12" r="10" strokeWidth="2" />
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							/>
						</svg>
						Accessibility
					</Link>
					<Link href="#" className="hover:underline">
						Terms of Use
					</Link>
					<Link href="#" className="hover:underline">
						Privacy Policy
					</Link>
					<Link href="#" className="hover:underline">
						Cookie Policy
					</Link>
					<Link href="#" className="hover:underline">
						Payment Terms
					</Link>
					<Link href="#" className="hover:underline">
						Refund Policy
					</Link>
					<Link href="#" className="hover:underline">
						Community Guidelines
					</Link>
				</div>

				<div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
					<Link href="#" className="hover:underline">
						Consent Preferences
					</Link>
					<Link href="#" className="hover:underline">
						Do Not Sell or Share My Personal information
					</Link>
				</div>

				{/* Copyright */}
				<div className="text-center text-sm">
					<p>paddlx® © 2025 Dink Technologies, Inc.</p>
				</div>
			</div>
		</footer>
	);
}
