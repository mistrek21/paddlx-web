// /src/app/guides/[category]/_components/GuideArticle.tsx

import React from 'react';
import Image from 'next/image';
import { Guide } from '../other/docs-data';

interface GuideArticleProps {
	guide: Guide;
}

export function GuideArticle({ guide }: GuideArticleProps) {
	return (
		<>
			{/* Featured Image */}
			<div className="relative w-full aspect-[16/9] bg-gray-100">
				<Image
					src={guide.image}
					alt={guide.title}
					fill
					className="object-cover"
					priority
				/>
			</div>

			<div className="p-6 sm:p-8 lg:p-12">
				{/* Article Header */}
				<header className="pb-6 border-b border-sand">
					<span className="text-ocean font-bold text-sm uppercase tracking-wide">
						{guide.category}
					</span>
					<h1 className="text-4xl font-bold text-charcoal mt-2 mb-4 text-balance">
						{guide.title}
					</h1>
					<div className="flex items-center space-x-6 text-sm text-slate-500">
						<div>
							<strong>By:</strong> {guide.author}
						</div>
						<div>
							<strong>Published:</strong>{' '}
							{new Date(guide.publishedDate).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</div>
						<div>
							<strong>Read time:</strong> {guide.readTime}
						</div>
					</div>
				</header>

				{/* Article Content */}
				<div className="prose lg:prose-lg max-w-none mt-8 text-charcoal/90">
					{guide.content.map((item, index) => {
						switch (item.type) {
							case 'heading':
								return <h2 key={index}>{item.text}</h2>;
							case 'paragraph':
								return <p key={index}>{item.text}</p>;
							case 'image':
								return (
									<div
										key={index}
										className="relative aspect-[16/9] my-8 rounded-lg overflow-hidden"
									>
										<Image
											src={item.src!}
											alt={item.alt!}
											fill
											className="object-cover"
										/>
									</div>
								);
							default:
								return null;
						}
					})}
				</div>
			</div>
		</>
	);
}
