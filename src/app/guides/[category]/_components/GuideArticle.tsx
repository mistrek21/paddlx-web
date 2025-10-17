'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Guide, ContentMark } from '../other/docs-data';
import { CheckCircle2 } from 'lucide-react'; // Install lucide-react or use any icon library you prefer

// Generate anchor IDs for headings
function generateHeadingId(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9 ]/g, '')
		.replace(/ /g, '-')
		.substring(0, 40);
}

// Render styled text with bold/italic marks
const StyledText = ({
	text,
	marks,
}: {
	text: string;
	marks?: ContentMark[];
}) => {
	if (!marks || marks.length === 0) return <>{text}</>;
	let elements: React.ReactNode[] = [];
	let lastIndex = 0;
	const sorted = [...marks].sort((a, b) => a.offset - b.offset);
	sorted.forEach(({ offset, length, type }, i) => {
		if (offset > lastIndex) elements.push(text.substring(lastIndex, offset));
		const marked = text.substring(offset, offset + length);
		if (type === 'bold') elements.push(<strong key={i}>{marked}</strong>);
		else if (type === 'italic') elements.push(<em key={i}>{marked}</em>);
		lastIndex = offset + length;
	});
	if (lastIndex < text.length) elements.push(text.substring(lastIndex));
	return <>{elements}</>;
};

// Custom Phase Badge component
function PhaseBadge({ phase }: { phase: string }) {
	return (
		<span className="inline-block mr-3 px-3 py-0.5 bg-teal-50 text-teal-700 text-xs font-bold rounded-full uppercase tracking-wide shadow-sm mb-2">
			{phase}
		</span>
	);
}

// Modern, premium list for 'items' arrays
function ProList({ items }: { items: string[] }) {
	return (
		<ul className="my-8 space-y-5">
			{items.map((item, i) => (
				<li key={i} className="flex items-start gap-3 text-lg leading-relaxed">
					<CheckCircle2
						className="mt-1 w-5 h-5 text-teal-500 shrink-0"
						aria-hidden
					/>
					<span
						dangerouslySetInnerHTML={{
							__html: item.replace(
								/\*\*(.*?)\*\*/g,
								'<strong class="font-bold text-gray-900 dark:text-white">$1</strong>'
							),
						}}
					/>
				</li>
			))}
		</ul>
	);
}

export function GuideArticle({ guide }: { guide: Guide }) {
	const headings = guide.content.filter((item) => item.type === 'heading');
	const [activeHeading, setActiveHeading] = useState('');
	useEffect(() => {
		const ids = headings.map((h) => generateHeadingId(h.text!));
		const handler = () => {
			let curId = '';
			ids.forEach((id) => {
				const el = document.getElementById(id);
				if (el && window.scrollY + 140 >= el.offsetTop) {
					curId = id;
				}
			});
			setActiveHeading(curId);
		};
		window.addEventListener('scroll', handler);
		return () => window.removeEventListener('scroll', handler);
	}, [guide.content]);

	return (
		<article className="min-h-screen w-full bg-white dark:bg-gray-950 pb-24">
			{/* Feature image */}
			<div className="w-full max-w-3xl mx-auto mt-10 mb-6 rounded-lg overflow-hidden shadow-sm">
				<Image
					src={guide.image}
					alt={guide.title}
					width={960}
					height={540}
					className="object-cover w-full h-auto"
					sizes="100vw"
					priority
				/>
			</div>

			{/* Meta block */}
			<div className="max-w-2xl mx-auto text-center mb-10">
				<span className="inline-block mb-2 px-3 py-0.5 text-xs font-semibold text-teal-700 bg-teal-50 rounded-full">
					{guide.category}
				</span>
				<h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
					{guide.title}
				</h1>
				<div className="flex justify-center items-center gap-2 text-sm text-gray-500 dark:text-gray-300 mb-2">
					{guide.author.avatar && (
						<Image
							src={guide.author.avatar}
							alt={guide.author.name}
							width={32}
							height={32}
							className="rounded-full border"
						/>
					)}
					<span>{guide.author.name}</span>
					<span>·</span>
					<span>
						{new Date(guide.publishedDate).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'short',
							day: 'numeric',
						})}
					</span>
					<span>·</span>
					<span>{guide.readTime} min read</span>
				</div>
			</div>

			{/* Page content + TOC layout */}
			<div className="flex flex-col-reverse lg:flex-row max-w-3xl mx-auto gap-12">
				{/* Main body */}
				<section className="w-full min-w-0 prose prose-lg max-w-none dark:prose-invert prose-teal prose-headings:font-extrabold prose-headings:text-2xl prose-headings:tracking-tight prose-h2:my-7 prose-h2:scroll-mt-28 prose-p:leading-relaxed prose-p:text-lg prose-blockquote:text-slate-700 prose-blockquote:bg-slate-100 prose-blockquote:border-l-2 prose-blockquote:border-teal-500 prose-blockquote:pl-6 prose-img:rounded-md prose-img:shadow-md prose-figcaption:text-slate-500 prose-figcaption:text-sm pt-1">
					{guide.content.map((item, index) => {
						switch (item.type) {
							case 'heading':
								const id = generateHeadingId(item.text!);
								const phaseMatch = item.text?.match(/Phase\s\d+:/);

								return (
									<div key={index} className="mt-16 mb-4">
										{phaseMatch && <PhaseBadge phase={phaseMatch[0]} />}
										<h2
											id={id}
											className="group scroll-mt-28 relative text-2xl font-black text-gray-900 dark:text-white inline"
										>
											<a
												href={`#${id}`}
												className="absolute -left-6 opacity-0 group-hover:opacity-100 transition text-teal-400"
												aria-label="Anchor link"
											>
												#
											</a>
											{phaseMatch
												? item.text?.replace(/Phase\s\d+:/, '').trim()
												: item.text}
										</h2>
									</div>
								);
							case 'paragraph':
								return (
									<p key={index}>
										<StyledText text={item.text!} marks={item.marks} />
									</p>
								);
							case 'image':
								return (
									<figure key={index} className="my-8">
										<Image
											src={item.src!}
											alt={item.alt!}
											width={896}
											height={504}
											className="object-cover rounded-md shadow"
											sizes="100vw"
										/>
										{item.caption && (
											<figcaption className="text-center text-sm text-slate-500 mt-1">
												{item.caption}
											</figcaption>
										)}
									</figure>
								);
							case 'list':
								// Use ProList for enhanced rendering with checkmark icons
								return <ProList key={index} items={item.items!} />;
							case 'blockquote':
								return (
									<blockquote key={index} className="mt-8 mb-8">
										{item.text}
									</blockquote>
								);
							case 'video':
								return (
									<figure key={index} className="my-8">
										<div className="aspect-[16/9] w-full rounded-md shadow overflow-hidden">
											<iframe
												src={item.src!}
												title={item.caption || 'Embedded Video'}
												className="w-full h-full min-h-[200px] rounded"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											></iframe>
										</div>
										{item.caption && (
											<figcaption className="text-center text-sm text-slate-500 mt-1">
												{item.caption}
											</figcaption>
										)}
									</figure>
								);
							default:
								return null;
						}
					})}
				</section>

				{/* TOC for desktop */}
				{headings.length > 1 && (
					<nav className="hidden lg:flex flex-col min-w-[210px] pt-1">
						<span className="font-semibold text-teal-700 mb-2 text-sm tracking-wider">
							On this page
						</span>
						<ol className="list-decimal list-inside space-y-2 text-[16px]">
							{headings.map((h, idx) => {
								const cleanText = h.text?.replace(/Phase\s\d+:\s*/, '') || h.text;
								return (
									<li key={idx}>
										<a
											href={`#${generateHeadingId(h.text!)}`}
											className={`transition-colors block font-medium text-teal-800 hover:underline ${
												activeHeading === generateHeadingId(h.text!)
													? 'text-teal-600 font-bold underline'
													: ''
											}`}
										>
											{cleanText}
										</a>
									</li>
								);
							})}
						</ol>
					</nav>
				)}
			</div>
		</article>
	);
}
