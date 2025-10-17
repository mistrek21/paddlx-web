// src/app/join/page.tsx
'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormData } from '@/lib/validation/auth';
import { createClient } from '@/lib/supabase/client';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { CheckCircle, XCircle, Loader2, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const IP_CONFIG =
	process.env.NEXT_PUBLIC_IP_CONFIG || 'https://paddle-api.vercel.app';

export default function JoinPage() {
	const [loading, setLoading] = useState(false);
	const [authError, setAuthError] = useState('');
	const router = useRouter();
	const supabase = createClient();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
		watch,
	} = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
		mode: 'onChange', // Validate on change
	});

	// Watch fields for real-time validation display
	const username = watch('username');
	const email = watch('email');
	const password = watch('password');
	const confirmPassword = watch('confirmPassword');

	// Check username availability
	async function checkUsernameAvailability(username: string): Promise<boolean> {
		if (!username || username.length < 3) return true;

		try {
			const response = await fetch(`${IP_CONFIG}/api/paddle/users/check`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username }),
			});
			const data = await response.json();
			return data.usernameAvailable;
		} catch (error) {
			console.error('Error checking username:', error);
			return true;
		}
	}

	// Check email availability
	async function checkEmailAvailability(email: string): Promise<boolean> {
		if (!email || !email.includes('@')) return true;

		try {
			const response = await fetch(`${IP_CONFIG}/api/paddle/users/check`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			});
			const data = await response.json();
			return data.emailAvailable;
		} catch (error) {
			console.error('Error checking email:', error);
			return true;
		}
	}

	// Form submission handler
	const onSubmit = async (data: RegisterFormData) => {
		setLoading(true);
		setAuthError('');

		try {
			// Additional async validation before submission
			const usernameAvailable = await checkUsernameAvailability(data.username);
			if (!usernameAvailable) {
				setError('username', { message: 'Username is already taken' });
				setLoading(false);
				return;
			}

			const emailAvailable = await checkEmailAvailability(data.email);
			if (!emailAvailable) {
				setError('email', { message: 'Email is already registered' });
				setLoading(false);
				return;
			}

			// 1. Create user in Supabase
			const { data: authData, error } = await supabase.auth.signUp({
				email: data.email,
				password: data.password,
				options: {
					emailRedirectTo: `${location.origin}/auth/callback`,
					data: {
						username: data.username,
						wantsNewsletter: data.wantsNewsletter,
					},
				},
			});

			if (error) {
				setAuthError(error.message);
				setLoading(false);
				return;
			}

			// 2. Sync to your Prisma database
			if (authData.user) {
				const response = await fetch(`${IP_CONFIG}/api/paddle/users/create`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						id: authData.user.id,
						email: authData.user.email,
						username: data.username,
						wantsNewsletter: data.wantsNewsletter,
					}),
				});

				const result = await response.json();

				if (!response.ok) {
					console.error('Failed to sync user to database:', result.error);
					setAuthError(result.error || 'Failed to create user profile');
					setLoading(false);
					return;
				}
			}

			router.push('/profile');
		} catch (err: any) {
			setAuthError(err.message || 'An error occurred during registration');
		} finally {
			setLoading(false);
		}
	};

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
		<main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-50 via-slate-100 to-blue-50 px-4 py-8">
			<div className="mx-auto w-full max-w-md rounded-2xl bg-white shadow-xl p-8 md:p-10">
				<div className="flex justify-center mb-6">
					<Image src="/paddlX-logo.png" width={48} height={48} alt="paddlX" />
				</div>
				<h1 className="text-3xl font-extrabold text-center mb-4 text-teal-600">
					Sign up for paddlX
				</h1>
				<p className="text-center text-gray-500 mb-8">
					Join the leading paddle & pickleball platform. Create your account below.
				</p>

				<div className="space-y-3">
					<button
						onClick={handleGoogle}
						disabled={loading}
						className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 font-semibold text-gray-700 bg-white hover:border-teal-500 focus:ring-2 focus:ring-teal-400 transition disabled:opacity-50 cursor-pointer"
					>
						<FcGoogle className="text-xl" />
						Sign up with Google
					</button>

					<button
						onClick={handleApple}
						disabled={loading}
						className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 font-semibold text-gray-700 bg-white hover:border-teal-500 focus:ring-2 focus:ring-teal-400 transition disabled:opacity-50 cursor-pointer"
					>
						<FaApple className="text-xl" />
						Sign up with Apple
					</button>
				</div>

				<div className="flex items-center my-6">
					<hr className="flex-grow border-gray-300" />
					<span className="mx-4 text-gray-400 text-sm">or</span>
					<hr className="flex-grow border-gray-300" />
				</div>

				<form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
					{/* Username Field */}
					<div>
						<label
							htmlFor="username"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Username <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<input
								id="username"
								type="text"
								{...register('username')}
								className={`w-full rounded-lg border ${
									errors.username
										? 'border-red-500 focus:ring-red-400'
										: username && !errors.username
										? 'border-green-500 focus:ring-green-400'
										: 'border-gray-300'
								} bg-gray-50 py-2.5 px-3 pr-10 shadow-sm text-gray-900 outline-none focus:border-teal-500 focus:ring-2`}
								placeholder="johndoe123"
								disabled={loading || isSubmitting}
							/>
							<div className="absolute right-3 top-1/2 -translate-y-1/2">
								{username && !errors.username && (
									<CheckCircle className="w-5 h-5 text-green-500" />
								)}
								{errors.username && <XCircle className="w-5 h-5 text-red-500" />}
							</div>
						</div>
						{errors.username && (
							<p className="text-xs mt-1 text-red-500 flex items-center gap-1">
								<AlertCircle className="w-3 h-3" />
								{errors.username.message}
							</p>
						)}
						{!errors.username && username && (
							<p className="text-xs mt-1 text-gray-500">
								Only lowercase letters, numbers, and underscores
							</p>
						)}
					</div>

					{/* Email Field */}
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Email Address <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<input
								id="email"
								type="email"
								{...register('email')}
								className={`w-full rounded-lg border ${
									errors.email
										? 'border-red-500 focus:ring-red-400'
										: email && !errors.email
										? 'border-green-500 focus:ring-green-400'
										: 'border-gray-300'
								} bg-gray-50 py-2.5 px-3 pr-10 shadow-sm text-gray-900 outline-none focus:border-teal-500 focus:ring-2`}
								autoComplete="email"
								disabled={loading || isSubmitting}
							/>
							<div className="absolute right-3 top-1/2 -translate-y-1/2">
								{email && !errors.email && (
									<CheckCircle className="w-5 h-5 text-green-500" />
								)}
								{errors.email && <XCircle className="w-5 h-5 text-red-500" />}
							</div>
						</div>
						{errors.email && (
							<p className="text-xs mt-1 text-red-500 flex items-center gap-1">
								<AlertCircle className="w-3 h-3" />
								{errors.email.message}
							</p>
						)}
					</div>

					{/* Password Field */}
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Password <span className="text-red-500">*</span>
						</label>
						<input
							id="password"
							type="password"
							{...register('password')}
							className={`w-full rounded-lg border ${
								errors.password
									? 'border-red-500 focus:ring-red-400'
									: 'border-gray-300'
							} bg-gray-50 py-2.5 px-3 shadow-sm text-gray-900 outline-none focus:border-teal-500 focus:ring-2`}
							autoComplete="new-password"
							disabled={loading || isSubmitting}
						/>
						{errors.password && (
							<p className="text-xs mt-1 text-red-500 flex items-center gap-1">
								<AlertCircle className="w-3 h-3" />
								{errors.password.message}
							</p>
						)}
						{!errors.password && (
							<p className="text-xs text-gray-500 mt-1">At least 6 characters</p>
						)}
					</div>

					{/* Confirm Password Field */}
					<div>
						<label
							htmlFor="confirmPassword"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Confirm Password <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<input
								id="confirmPassword"
								type="password"
								{...register('confirmPassword')}
								className={`w-full rounded-lg border ${
									errors.confirmPassword
										? 'border-red-500 focus:ring-red-400'
										: confirmPassword && password === confirmPassword
										? 'border-green-500 focus:ring-green-400'
										: 'border-gray-300'
								} bg-gray-50 py-2.5 px-3 pr-10 shadow-sm text-gray-900 outline-none focus:border-teal-500 focus:ring-2`}
								autoComplete="new-password"
								disabled={loading || isSubmitting}
							/>
							<div className="absolute right-3 top-1/2 -translate-y-1/2">
								{confirmPassword &&
									password === confirmPassword &&
									!errors.confirmPassword && (
										<CheckCircle className="w-5 h-5 text-green-500" />
									)}
								{errors.confirmPassword && <XCircle className="w-5 h-5 text-red-500" />}
							</div>
						</div>
						{errors.confirmPassword && (
							<p className="text-xs mt-1 text-red-500 flex items-center gap-1">
								<AlertCircle className="w-3 h-3" />
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					{/* Newsletter Checkbox */}
					<div className="flex items-start">
						<input
							id="newsletter"
							type="checkbox"
							{...register('wantsNewsletter')}
							className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer"
							disabled={loading || isSubmitting}
						/>
						<label
							htmlFor="newsletter"
							className="ml-2 block text-sm text-gray-700 cursor-pointer"
						>
							I want to receive newsletters and updates from paddlX
						</label>
					</div>

					<button
						type="submit"
						disabled={loading || isSubmitting}
						className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg py-2.5 font-bold shadow transition focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
					>
						{loading || isSubmitting ? (
							<>
								<Loader2 className="w-5 h-5 animate-spin" />
								Creating account...
							</>
						) : (
							'Sign up with Email'
						)}
					</button>
				</form>

				{authError && (
					<div className="mt-4 p-3 text-center text-sm bg-red-50 text-red-600 rounded-lg flex items-center justify-center gap-2">
						<AlertCircle className="w-4 h-4" />
						{authError}
					</div>
				)}

				<p className="mt-10 text-center text-sm text-gray-500">
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
