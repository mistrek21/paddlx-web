'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { X, Send, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import { useSupportModalAdvanced } from '@/src/hooks/useSupportModal';
import colorSchemes from '../palettes/colorSchemes';

type ColorSchemeKey = keyof typeof colorSchemes;
type SupportContactModalProps = {
	colorScheme?: ColorSchemeKey;
};

const initialFormState = {
	name: '',
	email: '',
	subject: '',
	category: 'general',
	message: '',
	priority: 'medium',
};

export function SupportContactModal({
	colorScheme = 'teal',
}: SupportContactModalProps) {
	const { isOpen, close, data } = useSupportModalAdvanced();

	// Determine the color scheme - prioritize data, fallback to props
	const chosenScheme: ColorSchemeKey = useMemo(() => {
		return (data?.colorScheme as ColorSchemeKey) || colorScheme;
	}, [data?.colorScheme, colorScheme]);

	// Get palette based on chosen scheme
	const palette = useMemo(
		() => colorSchemes[chosenScheme] || colorSchemes.teal,
		[chosenScheme]
	);

	// Form state
	const [formData, setFormData] = useState(initialFormState);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
		null
	);

	// Reset form when modal closes
	useEffect(() => {
		if (!isOpen) {
			setFormData(initialFormState);
			setSubmitStatus(null);
			setIsSubmitting(false);
		}
	}, [isOpen]);

	// Update form data when modal opens with data
	useEffect(() => {
		if (isOpen && data) {
			setFormData((prev) => ({
				...prev,
				name: data.name || '',
				email: data.email || '',
				message: data.message || '',
			}));
		}
	}, [isOpen, data]);

	const handleChange = useCallback(
		(
			e: React.ChangeEvent<
				HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
			>
		) => {
			const { name, value } = e.target;
			setFormData((prev) => ({ ...prev, [name]: value }));
		},
		[]
	);

	const handleSubmit = useCallback(
		async (e: React.FormEvent) => {
			e.preventDefault();
			setIsSubmitting(true);
			setSubmitStatus(null);

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
					setTimeout(() => {
						close();
					}, 2000);
				} else {
					setSubmitStatus('error');
				}
			} catch (error) {
				console.error('Error submitting form:', error);
				setSubmitStatus('error');
			} finally {
				setIsSubmitting(false);
			}
		},
		[formData, close]
	);

	// Don't render if not open
	if (!isOpen) return null;

	return (
		<>
			{/* Overlay */}
			<div
				className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998] transition-opacity duration-200"
				onClick={close}
				aria-hidden="true"
			/>

			{/* Modal */}
			<div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
				<div
					className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300"
					onClick={(e) => e.stopPropagation()}
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-title"
				>
					{/* Header */}
					<div
						className={`sticky top-0 px-6 py-6 sm:px-8 sm:py-8 flex items-center justify-between rounded-t-2xl z-10 ${palette.background}`}
					>
						<div>
							<h2 id="modal-title" className="text-2xl font-bold text-white">
								Contact Support
							</h2>
							<p className="text-white/90 text-sm mt-1">
								We'll get back to you shortly
							</p>
						</div>
						<button
							onClick={close}
							className="text-white hover:bg-white/20 transition-colors p-2 rounded-lg"
							aria-label="Close modal"
							type="button"
						>
							<X className="w-6 h-6 cursor-pointer" />
						</button>
					</div>

					{/* Form */}
					<div className="p-6 sm:p-8 space-y-5">
						{/* Name */}
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-semibold text-gray-900 mb-2"
							>
								Full Name
							</label>
							<input
								id="name"
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="John Doe"
								required
								className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 outline-none transition-all bg-white placeholder-gray-400 text-gray-900 ${palette.inputFocus}`}
							/>
						</div>

						{/* Email */}
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-semibold text-gray-900 mb-2"
							>
								Email Address
							</label>
							<input
								id="email"
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="john@example.com"
								required
								className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 outline-none transition-all bg-white placeholder-gray-400 text-gray-900 ${palette.inputFocus}`}
							/>
						</div>

						{/* Subject */}
						<div>
							<label
								htmlFor="subject"
								className="block text-sm font-semibold text-gray-900 mb-2"
							>
								Subject
							</label>
							<input
								id="subject"
								type="text"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								placeholder="How can we help?"
								required
								className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 outline-none transition-all bg-white placeholder-gray-400 text-gray-900 ${palette.inputFocus}`}
							/>
						</div>

						{/* Category and Priority */}
						<div className="grid grid-cols-2 gap-4">
							<div>
								<label
									htmlFor="category"
									className="block text-sm font-semibold text-gray-900 mb-2"
								>
									Category
								</label>
								<select
									id="category"
									name="category"
									value={formData.category}
									onChange={handleChange}
									className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 outline-none transition-all bg-white text-gray-900 font-medium ${palette.inputFocus}`}
								>
									<option value="general">General</option>
									<option value="billing">Billing</option>
									<option value="technical">Technical</option>
									<option value="feature-request">Feature Request</option>
									<option value="bug">Bug Report</option>
								</select>
							</div>
							<div>
								<label
									htmlFor="priority"
									className="block text-sm font-semibold text-gray-900 mb-2"
								>
									Priority
								</label>
								<select
									id="priority"
									name="priority"
									value={formData.priority}
									onChange={handleChange}
									className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 outline-none transition-all bg-white text-gray-900 font-medium ${palette.inputFocus}`}
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
							<label
								htmlFor="message"
								className="block text-sm font-semibold text-gray-900 mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Please provide as much detail as possible..."
								required
								rows={5}
								className={`w-full px-4 py-3 rounded-lg border-2 border-gray-200 outline-none transition-all bg-white placeholder-gray-400 text-gray-900 resize-none ${palette.inputFocus}`}
							/>
						</div>

						{/* Status Messages */}
						{submitStatus === 'success' && (
							<div className="flex items-center gap-3 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-lg">
								<CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
								<p className="text-emerald-800 font-medium">
									Message sent successfully! We'll be in touch soon.
								</p>
							</div>
						)}
						{submitStatus === 'error' && (
							<div className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
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
								className="flex-1 px-6 py-3.5 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
							>
								Cancel
							</button>
							<button
								type="button"
								onClick={handleSubmit}
								disabled={isSubmitting}
								className={`flex-1 px-6 py-3.5 rounded-lg font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg ${palette.ctaButton} ${palette.ctaButtonHover}`}
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
