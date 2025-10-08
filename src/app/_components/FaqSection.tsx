// src/app/_components/FaqSection.tsx

'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
	{
		question: 'Do I need to bring my own chalk or net?',
		answer:
			"Most established pickleball courts have permanent nets and lines already marked. However, if you're playing at a multi-use court or setting up your own game, you may need to bring portable nets and chalk or tape to mark the lines.",
	},
	{
		question: 'How can I find pickleball courts with lights?',
		answer:
			"You can filter courts by amenities on paddlx. Simply use the search feature and select 'Lights' under the amenities filter to find courts that offer evening play.",
	},
	{
		question: 'Which courts are indoor and which courts are outdoor?',
		answer:
			"Each court listing on paddlx indicates whether it's indoor or outdoor. You can also filter your search results by court type to find exactly what you're looking for.",
	},
	{
		question: 'Is it possible to see only free public pickleball courts?',
		answer:
			'Yes! Use the filters on our court finder to show only free public courts. This helps you find no-cost options in your area.',
	},
	{
		question: 'Can I reserve a court through paddlx?',
		answer:
			'Court reservation availability varies by location. Some facilities allow reservations through paddlx, while others operate on a first-come, first-served basis. Check the specific court listing for details.',
	},
	{
		question: 'How can I update information for my local court?',
		answer:
			"If you notice outdated information, you can submit updates through the court's listing page. Click 'Suggest an edit' and provide the updated details. Our team will review and update the information.",
	},
	{
		question: 'What equipment do I need to play pickleball',
		answer:
			"To play pickleball, you'll need a paddle, a pickleball (similar to a wiffle ball), and appropriate court shoes. Most courts provide nets, but it's always good to check ahead. Comfortable athletic clothing is recommended.",
	},
];

export function FaqSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="bg-light-blue1 py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-dark-slate mb-3">
						Frequently Asked Questions
					</h2>
				</div>

				<div className="space-y-3">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className={`bg-white rounded-xl transition-all duration-300 ${
								openIndex === index ? 'shadow-lg' : 'shadow-sm hover:shadow-md'
							}`}
						>
							<button
								onClick={() => toggleFaq(index)}
								className="w-full flex items-center justify-between p-6 text-left group"
							>
								<span className="text-lg font-semibold text-dark-slate pr-4 group-hover:text-teal transition-colors">
									{faq.question}
								</span>
								<div
									className={`flex-shrink-0 w-8 h-8 rounded-full bg-teal flex items-center justify-center transition-transform duration-300 ${
										openIndex === index ? 'rotate-45' : ''
									}`}
								>
									<Plus className="w-5 h-5 text-white" />
								</div>
							</button>

							<div
								className={`grid transition-all duration-300 ease-in-out ${
									openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
								}`}
							>
								<div className="overflow-hidden">
									<div className="px-6 pb-6">
										<div className="h-px bg-divider mb-4" />
										<p className="text-slate-gray leading-relaxed">{faq.answer}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
