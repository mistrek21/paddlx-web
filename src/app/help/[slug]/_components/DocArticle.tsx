// src/app/[slug]/_components/DocArticle.tsx

'use client';

import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { DocContent } from '../_other/types';
import { useSupportModalAdvanced } from '@/src/hooks/useSupportModal';

interface DocArticleProps {
	content: DocContent;
	readTime?: number;
}

export function DocArticle({ content, readTime = 5 }: DocArticleProps) {
	const { open, setData } = useSupportModalAdvanced();

	return (
		<article className="max-w-4xl mx-auto">
			{/* Article Header */}
			<div className="mb-8">
				<div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
					<div className="flex items-center gap-2">
						<BookOpen className="w-4 h-4" style={{ color: '#2A9DB0' }} />
						<span>Guide</span>
					</div>
					<div className="flex items-center gap-2">
						<Clock className="w-4 h-4" style={{ color: '#2A9DB0' }} />
						<span>{readTime} min read</span>
					</div>
				</div>

				<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
					{content.title}
				</h1>

				<p className="text-xl text-gray-600 leading-relaxed">
					{content.description}
				</p>
			</div>

			{/* Article Content */}
			<div className="prose prose-lg max-w-none">
				{content.sections.map((section, index) => (
					<section key={index} className="mb-12">
						<h2
							className="text-2xl md:text-3xl font-bold mb-4"
							style={{ color: '#2A9DB0' }}
						>
							{section.heading}
						</h2>

						<p className="text-gray-700 leading-relaxed mb-6">{section.content}</p>

						{section.image && (
							<div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 shadow-lg">
								<Image
									src={section.image}
									alt={section.heading}
									fill
									className="object-cover"
								/>
							</div>
						)}

						{section.steps && (
							<div
								className="bg-white border-2 rounded-2xl p-6 mb-6"
								style={{ borderColor: '#B8DCE8' }}
							>
								<h3 className="text-lg font-bold text-gray-900 mb-4">Step-by-step:</h3>
								<ol className="space-y-3">
									{section.steps.map((step, stepIndex) => (
										<li key={stepIndex} className="flex gap-3">
											<span
												className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
												style={{ backgroundColor: '#2A9DB0' }}
											>
												{stepIndex + 1}
											</span>
											<span className="text-gray-700 pt-0.5">{step}</span>
										</li>
									))}
								</ol>
							</div>
						)}

						{section.tips && (
							<div
								className="rounded-2xl p-6 mb-6"
								style={{ backgroundColor: '#E6F7F9' }}
							>
								<h3 className="text-lg font-bold mb-4" style={{ color: '#2A9DB0' }}>
									💡 Tips & Best Practices:
								</h3>
								<ul className="space-y-2">
									{section.tips.map((tip, tipIndex) => (
										<li key={tipIndex} className="flex gap-3">
											<span className="text-2xl leading-none" style={{ color: '#2A9DB0' }}>
												•
											</span>
											<span className="text-gray-700">{tip}</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</section>
				))}
			</div>

			{/* Related Articles */}
			{content.relatedArticles && content.relatedArticles.length > 0 && (
				<div className="mt-16 pt-8 border-t-2" style={{ borderColor: '#B8DCE8' }}>
					<h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
					<div className="grid md:grid-cols-3 gap-4">
						{content.relatedArticles.map((slug, index) => (
							<Link
								key={index}
								href={`/help/${slug}`}
								className="group p-5 bg-white border-2 rounded-xl hover:shadow-lg transition-all"
								style={{ borderColor: '#E6F7F9' }}
								onMouseEnter={(e) => {
									e.currentTarget.style.borderColor = '#2A9DB0';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.borderColor = '#E6F7F9';
								}}
							>
								<div className="flex items-center justify-between">
									<span className="text-gray-900 font-medium group-hover:text-[#2A9DB0] transition-colors">
										{slug
											.split('-')
											.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
											.join(' ')}
									</span>
									<ArrowRight
										className="w-5 h-5 group-hover:translate-x-1 transition-transform"
										style={{ color: '#2A9DB0' }}
									/>
								</div>
							</Link>
						))}
					</div>
				</div>
			)}

			{/* Help CTA */}
			<div
				className="mt-16 rounded-2xl p-8 text-center"
				style={{
					background: 'linear-gradient(to right, #2A9DB0, #4DB5C7, #7BC9D6)',
				}}
			>
				<h3 className="text-2xl font-bold text-white mb-3">Still need help?</h3>
				<p className="text-white/90 mb-6">
					Our support team is here to assist you with any questions.
				</p>
				<button
					onClick={() => {
						open();

						setData({
							name: '',
							email: '',
							message: 'I need help with paddlX',
						});
					}}
					className="inline-block bg-white text-[#2A9DB0] font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
				>
					Contact Support
				</button>
			</div>
		</article>
	);
}
