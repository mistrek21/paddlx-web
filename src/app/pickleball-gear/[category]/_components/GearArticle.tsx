// src/app/pickleball-gear/[category]/_components/GearArticle.tsx
import React from 'react';
import Image from 'next/image';

import { Star, Check, X } from 'lucide-react';
import { GearContent, GearProduct } from '../_others/types';

interface GearArticleProps {
	data: GearContent;
}

export function GearArticle({ data }: GearArticleProps) {
	return (
		<article className="bg-white rounded-lg shadow-sm">
			{/* Article Header */}
			<header className="px-8 pt-8 pb-6 border-b">
				<h1 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>
				<p className="text-xl text-gray-600 leading-relaxed mb-6">
					{data.description}
				</p>
				<div className="flex items-center space-x-6 text-sm text-gray-500">
					<div>
						<span className="font-medium">By:</span> {data.author}
					</div>
					<div>
						<span className="font-medium">Updated:</span>{' '}
						{new Date(data.updatedDate).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</div>
				</div>
			</header>

			{/* Featured Image */}
			{data.featuredImage && (
				<div className="relative w-full h-96 bg-gray-100">
					<Image
						src={data.featuredImage}
						alt={data.title}
						fill
						className="object-cover"
						priority
					/>
				</div>
			)}

			{/* Table of Contents */}
			<nav className="px-8 py-6 bg-gray-50 border-b">
				<h2 className="text-lg font-semibold text-gray-900 mb-3">In This Guide</h2>
				<ul className="space-y-2">
					{data.sections.map((section) => (
						<li key={section.id}>
							<a
								href={`#${section.id}`}
								className="text-blue-600 hover:text-blue-800 hover:underline"
							>
								{section.heading}
							</a>
						</li>
					))}
				</ul>
			</nav>

			{/* Article Content */}
			<div className="px-8 py-8">
				{data.sections.map((section, idx) => (
					<section
						key={section.id}
						id={section.id}
						className={idx > 0 ? 'mt-12' : ''}
					>
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							{section.heading}
						</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-6">
							{section.content}
						</p>

						{/* Section Image */}
						{section.image && (
							<div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
								<Image
									src={section.image}
									alt={section.heading}
									fill
									className="object-cover"
								/>
							</div>
						)}

						{/* Product Cards */}
						{section.products && section.products.length > 0 && (
							<div className="space-y-8 my-8">
								{section.products.map((product, pIdx) => (
									<ProductCard key={pIdx} product={product} />
								))}
							</div>
						)}

						{/* Tips List */}
						{section.tips && section.tips.length > 0 && (
							<div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
								<ul className="space-y-3">
									{section.tips.map((tip, tIdx) => (
										<li key={tIdx} className="flex items-start space-x-3">
											<Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
											<span className="text-gray-800">{tip}</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</section>
				))}

				{/* FAQs Section */}
				{data.faqs && data.faqs.length > 0 && (
					<section id="faqs" className="mt-16 pt-8 border-t">
						<h2 className="text-3xl font-bold text-gray-900 mb-8">
							Frequently Asked Questions
						</h2>
						<div className="space-y-6">
							{data.faqs.map((faq, idx) => (
								<div key={idx} className="bg-gray-50 rounded-lg p-6">
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{faq.question}
									</h3>
									<p className="text-gray-700 leading-relaxed">{faq.answer}</p>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Final CTA */}
				<div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
					<h3 className="text-2xl font-bold mb-3">Found Your Perfect Paddle?</h3>
					<p className="text-blue-100 mb-6">
						Track your progress and compete with the best on paddlX
					</p>
					<a
						href="/signup"
						className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
					>
						Start Playing Today
					</a>
				</div>
			</div>
		</article>
	);
}

// Product Card Component
interface ProductCardProps {
	product: GearProduct;
}

function ProductCard({ product }: ProductCardProps) {
	return (
		<div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
			<div className="md:flex">
				{/* Product Image */}
				<div className="md:w-2/5 relative h-64 md:h-auto bg-gray-100">
					<Image
						src={product.image}
						alt={product.name}
						fill
						className="object-cover"
					/>
				</div>

				{/* Product Details */}
				<div className="md:w-3/5 p-6">
					<div className="flex items-start justify-between mb-3">
						<h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
						<span className="text-2xl font-bold text-blue-600 ml-4">
							{product.price}
						</span>
					</div>

					{/* Rating */}
					<div className="flex items-center space-x-2 mb-4">
						<div className="flex">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className={`w-5 h-5 ${
										i < Math.floor(product.rating)
											? 'text-yellow-400 fill-current'
											: 'text-gray-300'
									}`}
								/>
							))}
						</div>
						<span className="text-gray-600 font-medium">{product.rating} / 5.0</span>
					</div>

					<p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>

					{/* Pros and Cons */}
					<div className="grid md:grid-cols-2 gap-4 mb-4">
						<div>
							<h4 className="font-semibold text-green-700 mb-2 flex items-center">
								<Check className="w-4 h-4 mr-1" /> Pros
							</h4>
							<ul className="space-y-1">
								{product.pros.map((pro, idx) => (
									<li key={idx} className="text-sm text-gray-600 flex items-start">
										<span className="text-green-600 mr-2">•</span>
										{pro}
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="font-semibold text-red-700 mb-2 flex items-center">
								<X className="w-4 h-4 mr-1" /> Cons
							</h4>
							<ul className="space-y-1">
								{product.cons.map((con, idx) => (
									<li key={idx} className="text-sm text-gray-600 flex items-start">
										<span className="text-red-600 mr-2">•</span>
										{con}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* CTA Button */}
					<button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
						Check Current Price
					</button>
				</div>
			</div>
		</div>
	);
}
