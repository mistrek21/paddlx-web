'use client';

import type React from 'react';
import { useState } from 'react';
import { FileText } from 'lucide-react';

export function NewsletterSection() {
	const [email, setEmail] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Newsletter signup:', email);
	};

	return (
		<section className="py-12 px-4 bg-light-blue3">
			<div className="max-w-4xl mx-auto">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					{/* Left side - Newsletter info */}
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
							<FileText className="w-6 h-6 text-teal" />
						</div>
						<div>
							<h3 className="text-lg font-bold text-dark-slate">
								Epic points, pro tips & more - delivered weekly to your inbox
							</h3>
						</div>
					</div>

					{/* Right side - Email form */}
					<form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Your email address"
							className="flex-1 md:w-64 px-4 py-2.5 rounded-md border border-divider focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
							required
						/>
						<button
							type="submit"
							className="bg-teal text-white px-6 py-2.5 rounded-md font-semibold hover:bg-teal/90 transition-colors whitespace-nowrap"
						>
							Sign me up
						</button>
					</form>
				</div>

				{/* Privacy text */}
				<p className="text-xs text-slate-gray text-center mt-4">
					By signing up for this newsletter, you agree to our{' '}
					<Link href="#" className="text-teal hover:underline">
						privacy policy
					</Link>{' '}
					and{' '}
					<Link href="#" className="text-teal hover:underline">
						terms of use
					</Link>
				</p>
			</div>
		</section>
	);
}

function Link({
	href,
	children,
	className,
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<a href={href} className={className}>
			{children}
		</a>
	);
}
