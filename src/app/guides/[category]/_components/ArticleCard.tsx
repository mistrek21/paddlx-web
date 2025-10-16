// src/app/guides/[category]/_components/ArticleCard.tsx

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Guide } from '../other/docs-data';

interface ArticleCardProps {
	article: Guide;
}

export function ArticleCard({ article }: ArticleCardProps) {
	const href = `/guides/${article.categorySlug}/${article.titleSlug}`;

	return (
		<article>
			<Link
				href={href}
				className="group space-y-4 block p-2 rounded-2xl hover:bg-sand/30 transition-colors duration-300"
			>
				<div className="relative aspect-[4/3] rounded-xl overflow-hidden">
					<Image
						src={article.image || '/placeholder.svg'}
						alt={article.title}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-500"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent group-hover:from-charcoal/70 transition-all duration-300" />
					<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
						<div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md">
							<ArrowRight className="w-5 h-5 text-charcoal" aria-hidden="true" />
						</div>
					</div>
				</div>
				<div className="space-y-2 px-1">
					<div className="flex items-center gap-3">
						<span className="inline-block text-xs font-bold text-ocean uppercase tracking-wider">
							{article.category}
						</span>
						<span className="text-xs text-slate-400" aria-hidden="true">
							•
						</span>
						<time className="text-xs text-slate-500">{article.readTime}</time>
					</div>
					<h3 className="text-lg font-bold text-charcoal group-hover:text-ocean transition-colors leading-snug text-balance">
						{article.title}
					</h3>
					{article.excerpt && (
						<p className="text-sm text-slate-600 line-clamp-2">{article.excerpt}</p>
					)}
				</div>
			</Link>
		</article>
	);
}
