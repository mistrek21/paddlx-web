// src/app/forgot-password/page.tsx
'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
	const supabase = createClient();

	async function handleResetPassword(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		setError('');
		setSuccess(false);

		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${location.origin}/reset-password`,
		});

		if (error) {
			setError(error.message);
		} else {
			setSuccess(true);
		}
		setLoading(false);
	}

	return (
		<main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-50 via-slate-100 to-blue-50 px-4">
			<div className="mx-auto w-full max-w-md rounded-2xl bg-white shadow-xl p-8 md:p-10">
				<div className="flex justify-center mb-6">
					<Image src="/paddlX-logo.png" width={48} height={48} alt="paddlX" />
				</div>
				<h1 className="text-3xl font-extrabold text-center mb-4 text-teal-600">
					Reset your password
				</h1>
				<p className="text-center text-gray-500 mb-8">
					Enter your email address, and we'll send you a reset link.
				</p>

				{success ? (
					<div className="p-4 bg-green-50 text-green-600 rounded-lg flex items-start gap-3">
						<CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
						<div>
							<p className="font-semibold">Check your email</p>
							<p className="text-sm mt-1">
								We've sent a password reset link to{' '}
								<span className="font-bold">{email}</span>.
							</p>
						</div>
					</div>
				) : (
					<form onSubmit={handleResetPassword} className="space-y-5">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 mb-2"
							>
								Email Address
							</label>
							<input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 px-3 shadow-sm text-gray-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-400"
								placeholder="you@example.com"
								required
								disabled={loading}
							/>
						</div>

						<button
							type="submit"
							disabled={loading}
							className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg py-2.5 font-bold shadow transition focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
						>
							{loading ? (
								<>
									<Loader2 className="w-5 h-5 animate-spin" />
									Sending reset link...
								</>
							) : (
								'Send reset link'
							)}
						</button>
					</form>
				)}

				{error && (
					<div className="mt-4 p-3 text-sm bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
						<AlertCircle className="w-4 h-4" />
						{error}
					</div>
				)}

				<p className="mt-8 text-center text-sm text-gray-500">
					Remember your password?{' '}
					<Link
						href="/login"
						className="text-teal-600 underline font-medium hover:text-teal-500"
					>
						Log in
					</Link>
				</p>
			</div>
		</main>
	);
}
