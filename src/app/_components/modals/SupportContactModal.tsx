// src/app/_components/modals/SupportContactModal.tsx

'use client';

import { useState, useEffect } from 'react';
import { X, Send, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import { useSupportModalAdvanced } from '@/src/hooks/useSupportModal';

export function SupportContactModal() {
	const { isOpen, close, data } = useSupportModalAdvanced();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		category: 'general',
		message: '',
		priority: 'medium',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
		null
	);

	// Sync formData with data from atom when it changes
	useEffect(() => {
		if (data) {
			setFormData((prev) => ({
				...prev,
				name: data.name || prev.name,
				email: data.email || prev.email,
				message: data.message || prev.message,
			}));
		}
	}, [data]);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...formData,
					timestamp: new Date().toISOString(),
					userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
				}),
			});

			if (response.ok) {
				setSubmitStatus('success');
				setFormData({
					name: '',
					email: '',
					subject: '',
					category: 'general',
					message: '',
					priority: 'medium',
				});
				setTimeout(() => {
					close();
					setSubmitStatus(null);
				}, 2000);
			} else {
				setSubmitStatus('error');
			}
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	if (!isOpen) return null;

	return (
		<>
			{/* Overlay */}
			<div
				className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99998] transition-opacity duration-200"
				onClick={close}
			/>

			{/* Modal */}
			<div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
				<div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
					{/* Header */}
					<div className="sticky top-0 bg-gradient-to-r from-[#2A9DB0] to-[#178F98] px-6 py-6 sm:px-8 sm:py-8 flex items-center justify-between rounded-t-2xl">
						<div>
							<h2 className="text-2xl font-bold text-white">Contact Support</h2>
							<p className="text-blue-100 text-sm mt-1">
								We'll get back to you shortly
							</p>
						</div>
						<button
							onClick={close}
							className="text-white hover:bg-white/20 transition-colors p-2 rounded-full"
							aria-label="Close modal"
						>
							<X className="w-6 h-6" />
						</button>
					</div>

					{/* Form */}
					<div className="p-6 sm:p-8 space-y-5">
						{/* Name */}
						<div>
							<label className="block text-sm font-semibold text-gray-900 mb-2">
								Full Name
							</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="John Doe"
								required
								className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2A9DB0] focus:ring-2 focus:ring-[#E6F7F9] outline-none transition-all bg-white placeholder-gray-400 text-gray-900"
							/>
						</div>

						{/* Email */}
						<div>
							<label className="block text-sm font-semibold text-gray-900 mb-2">
								Email Address
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="john@example.com"
								required
								className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2A9DB0] focus:ring-2 focus:ring-[#E6F7F9] outline-none transition-all bg-white placeholder-gray-400 text-gray-900"
							/>
						</div>

						{/* Subject */}
						<div>
							<label className="block text-sm font-semibold text-gray-900 mb-2">
								Subject
							</label>
							<input
								type="text"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								placeholder="How can we help?"
								required
								className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2A9DB0] focus:ring-2 focus:ring-[#E6F7F9] outline-none transition-all bg-white placeholder-gray-400 text-gray-900"
							/>
						</div>

						{/* Category and Priority */}
						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-semibold text-gray-900 mb-2">
									Category
								</label>
								<select
									name="category"
									value={formData.category}
									onChange={handleChange}
									className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2A9DB0] focus:ring-2 focus:ring-[#E6F7F9] outline-none transition-all bg-white text-gray-900 font-medium"
								>
									<option value="general">General</option>
									<option value="billing">Billing</option>
									<option value="technical">Technical</option>
									<option value="feature-request">Feature Request</option>
									<option value="bug">Bug Report</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-semibold text-gray-900 mb-2">
									Priority
								</label>
								<select
									name="priority"
									value={formData.priority}
									onChange={handleChange}
									className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2A9DB0] focus:ring-2 focus:ring-[#E6F7F9] outline-none transition-all bg-white text-gray-900 font-medium"
								>
									<option value="low">Low</option>
									<option value="medium">Medium</option>
									<option value="high">High</option>
									<option value="urgent">Urgent</option>
								</select>
							</div>
						</div>

						{/* Message */}
						<div>
							<label className="block text-sm font-semibold text-gray-900 mb-2">
								Message
							</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Please provide as much detail as possible..."
								required
								rows={5}
								className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2A9DB0] focus:ring-2 focus:ring-[#E6F7F9] outline-none transition-all bg-white placeholder-gray-400 text-gray-900 resize-none"
							/>
						</div>

						{/* Status Messages */}
						{submitStatus === 'success' && (
							<div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
								<CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
								<p className="text-green-800 font-medium">
									Message sent successfully! We'll be in touch soon.
								</p>
							</div>
						)}
						{submitStatus === 'error' && (
							<div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
								<AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
								<p className="text-red-800 font-medium">
									Failed to send message. Please try again.
								</p>
							</div>
						)}

						{/* Buttons */}
						<div className="flex gap-3 pt-2">
							<button
								type="button"
								onClick={close}
								className="flex-1 px-6 py-3 rounded-lg border border-gray-200 text-gray-900 font-semibold hover:bg-gray-50 transition-colors duration-200"
							>
								Cancel
							</button>
							<button
								onClick={handleSubmit}
								disabled={isSubmitting}
								className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[#2A9DB0] to-[#178F98] text-white font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-70 flex items-center justify-center gap-2"
							>
								{isSubmitting ? (
									<>
										<Loader className="w-5 h-5 animate-spin" />
										Sending...
									</>
								) : (
									<>
										<Send className="w-5 h-5" />
										Send Message
									</>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
