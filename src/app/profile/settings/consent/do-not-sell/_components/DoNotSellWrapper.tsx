'use client';

import { ShieldOff, User, Mail, Check, Loader2, Info } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

import axios from 'axios';

export type DoNotSellPayload = {
	name: string;
	email: string;
	relation: string;
	message?: string;
};

const API_BASE_URL = process.env.IP_CONFIG || 'https://paddle-api.vercel.app';

export async function submitDoNotSellRequest(payload: DoNotSellPayload) {
	const response = await axios.post(
		`${API_BASE_URL}/api/web/do-not-sell`,
		payload
	);
	return response.data;
}

export default function DoNotSellWrapper() {
	const [submitted, setSubmitted] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		relation: 'user',
		message: '',
	});
	const [error, setError] = useState('');

	// Dummy submit handler (replace with real submission logic)
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitting(true);
		setError('');
		// Input validation
		if (!formData.name || !formData.email) {
			setError('Please provide your name and email address.');
			setSubmitting(false);
			return;
		}
		// Simulate async
		submitDoNotSellRequest(formData);
		setSubmitting(false);
		setSubmitted(true);
	};

	return (
		<div className="bg-white text-slate-800 min-h-screen">
			<section className="bg-slate-50 py-16 px-2 text-center">
				<ShieldOff className="w-14 h-14 mx-auto text-slate-700 mb-4" />
				<h1 className="text-4xl font-extrabold mb-2">
					Do Not Sell or Share My Personal Information
				</h1>
				<p className="max-w-xl mx-auto text-lg text-slate-600">
					Use this form to submit your opt-out request. We will process your request
					in accordance with applicable privacy regulations such as CCPA, CPRA, and
					similar laws.
				</p>
			</section>

			<section className="container mx-auto max-w-xl px-4 py-12">
				{submitted ? (
					<div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-lg text-center">
						<Check className="w-10 h-10 mx-auto text-green-700 mb-4" />
						<h2 className="text-2xl font-bold mb-2 text-green-900">
							Request Submitted
						</h2>
						<p className="text-slate-700 mb-2">
							Thank you! We have received your opt-out request. Our privacy team will
							confirm by email within 15 business days.
						</p>
					</div>
				) : (
					<form
						onSubmit={handleSubmit}
						className="bg-white border border-slate-200 p-8 rounded-xl shadow-md space-y-8"
						aria-label="Do Not Sell My Personal Information Form"
						autoComplete="off"
					>
						<h2 className="text-xl font-bold mb-2">Opt Out Request Form</h2>
						{error && (
							<div className="bg-red-50 text-red-800 border-l-4 border-red-500 p-3 rounded mb-4">
								{error}
							</div>
						)}

						<div>
							<label
								htmlFor="name"
								className="font-semibold text-slate-800 flex items-center"
							>
								<User className="inline-block w-4 h-4 mr-1" />
								Your Full Name
							</label>
							<input
								className="mt-1 border-slate-200 bg-slate-50 rounded w-full p-2 focus:border-teal-500 outline-none"
								id="name"
								name="name"
								type="text"
								value={formData.name}
								required
								disabled={submitting}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								placeholder="Enter your full name"
								autoComplete="name"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="font-semibold text-slate-800 flex items-center"
							>
								<Mail className="inline-block w-4 h-4 mr-1" />
								Email Address
							</label>
							<input
								className="mt-1 border-slate-200 bg-slate-50 rounded w-full p-2 focus:border-teal-500 outline-none"
								id="email"
								name="email"
								type="email"
								value={formData.email}
								required
								disabled={submitting}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								placeholder="Enter your email"
								autoComplete="email"
							/>
						</div>

						<div>
							<label htmlFor="relation" className="font-semibold text-slate-800">
								Relationship to paddlX
							</label>
							<select
								className="mt-1 border-slate-200 bg-slate-50 rounded w-full p-2"
								id="relation"
								name="relation"
								value={formData.relation}
								disabled={submitting}
								onChange={(e) => setFormData({ ...formData, relation: e.target.value })}
							>
								<option value="user">User / Account Holder</option>
								<option value="parent">Parent/Guardian of User</option>
								<option value="representative">Authorized Representative</option>
								<option value="other">Other</option>
							</select>
						</div>

						<div>
							<label htmlFor="message" className="font-semibold text-slate-800">
								Optional Message
							</label>
							<textarea
								className="mt-1 border-slate-200 bg-slate-50 rounded w-full p-2"
								id="message"
								name="message"
								rows={3}
								value={formData.message}
								disabled={submitting}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								placeholder="Provide any additional details (optional)"
							/>
						</div>

						<Button
							type="submit"
							size="lg"
							className="bg-slate-700 hover:bg-slate-800 text-white w-full justify-center"
							disabled={submitting}
						>
							{submitting ? (
								<>
									<Loader2 className="animate-spin w-5 h-5 mr-2" />
									Submitting...
								</>
							) : (
								'Submit Opt-Out Request'
							)}
						</Button>
					</form>
				)}

				<div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg mt-10 flex items-start">
					<Info className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" />
					<div>
						<div className="font-semibold text-slate-800">What happens next?</div>
						<ul className="list-disc pl-6 text-slate-700 text-sm mt-2 space-y-1">
							<li>Your request will be reviewed by our privacy team.</li>
							<li>We may contact you for verification before processing.</li>
							<li>
								After confirmation, data used for cross-context advertising or selling
								will be opted out.
							</li>
							<li>You will receive an email update within 15 business days.</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
