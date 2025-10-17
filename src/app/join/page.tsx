// src/app/join/page.tsx
'use client';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function JoinPage() {
	const [loading, setLoading] = useState(false);
	const [authError, setAuthError] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();
	const supabase = createClient();

	// Email/password registration
	async function handleEmailRegister(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		setAuthError('');
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`,
			},
		});
		if (error) {
			setAuthError(error.message);
		} else {
			router.push('/check-email'); // Redirect to email verification page
		}
		setLoading(false);
	}

	// Google OAuth
	async function handleGoogle() {
		setLoading(true);
		setAuthError('');
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${location.origin}/auth/callback`,
			},
		});
		if (error) setAuthError(error.message);
		setLoading(false);
	}

	// Apple OAuth
	async function handleApple() {
		setLoading(true);
		setAuthError('');
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'apple',
			options: {
				redirectTo: `${location.origin}/auth/callback`,
			},
		});
		if (error) setAuthError(error.message);
		setLoading(false);
	}

	return (
		<main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-50 via-slate-100 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4">
			<div className="mx-auto w-full max-w-md rounded-2xl bg-white dark:bg-gray-950 shadow-xl p-8 md:p-10">
				<div className="flex justify-center mb-6">
					<Image src="/paddlX-logo.png" width={48} height={48} alt="paddlX" />
				</div>
				<h1 className="text-3xl font-extrabold text-center mb-4 text-teal-600 dark:text-teal-400">
					Sign up for paddlX
				</h1>
				<p className="text-center text-gray-500 dark:text-gray-300 mb-8">
					Join the leading paddle & pickleball platform. Create your account below.
				</p>

				<div className="space-y-3">
					<button
						onClick={handleGoogle}
						disabled={loading}
						className="w-full flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-800 rounded-lg py-2.5 font-semibold text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 hover:border-teal-500 focus:ring-2 focus:ring-teal-400 transition disabled:opacity-50"
					>
						<FcGoogle className="text-xl" />
						Sign up with Google
					</button>

					<button
						onClick={handleApple}
						disabled={loading}
						className="w-full flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-800 rounded-lg py-2.5 font-semibold text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 hover:border-teal-500 focus:ring-2 focus:ring-teal-400 transition disabled:opacity-50"
					>
						<FaApple className="text-xl" />
						Sign up with Apple
					</button>
				</div>

				<div className="flex items-center my-6">
					<hr className="flex-grow border-gray-300 dark:border-gray-800" />
					<span className="mx-4 text-gray-400 text-sm">or</span>
					<hr className="flex-grow border-gray-300 dark:border-gray-800" />
				</div>

				<form className="space-y-5" onSubmit={handleEmailRegister}>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
						>
							Email Address
						</label>
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 py-2.5 px-3 shadow-sm text-gray-900 dark:text-white outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-400"
							required
							autoComplete="email"
							disabled={loading}
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 py-2.5 px-3 shadow-sm text-gray-900 dark:text-white outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-400"
							required
							minLength={6}
							autoComplete="new-password"
							disabled={loading}
						/>
					</div>
					<button
						type="submit"
						disabled={loading}
						className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg py-2.5 font-bold shadow transition focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 disabled:opacity-50"
					>
						{loading ? 'Creating account...' : 'Sign up with Email'}
					</button>
				</form>

				{authError && (
					<div className="mt-4 p-3 text-center text-sm bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
						{authError}
					</div>
				)}

				<p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
					Already have an account?{' '}
					<a
						href="/login"
						className="text-teal-600 underline font-medium hover:text-teal-500"
					>
						Log in
					</a>
				</p>
			</div>
		</main>
	);
}
