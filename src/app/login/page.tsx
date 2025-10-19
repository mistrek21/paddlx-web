// src/app/login/page.tsx
'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '@/lib/validation/auth';
import { createClient } from '@/lib/supabase/client';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { AlertCircle, Loader2, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

const IP_CONFIG =
	process.env.NEXT_PUBLIC_IP_CONFIG || 'https://paddle-api.vercel.app';

export default function LoginPage() {
	const [loading, setLoading] = useState(false);
	const [authError, setAuthError] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();
	const supabase = createClient();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
			rememberMe: false,
		},
	});

	// Email/password login
	const onSubmit = async (data: LoginFormData) => {
		setLoading(true);
		setAuthError('');

		try {
			const { data: authData, error } = await supabase.auth.signInWithPassword({
				email: data.email,
				password: data.password,
			});

			if (error) {
				setAuthError(error.message);
				setLoading(false);
				return;
			}

			if (authData.user) {
				// Check if user exists in your database
				const response = await fetch(
					`${IP_CONFIG}/api/paddle/users/${authData.user.id}`
				);

				if (response.status === 404) {
					// User doesn't exist in your database, redirect to onboarding
					router.push(
						'login'
						// `/onboarding?email=${authData.user.email}&id=${authData.user.id}`
					);
				} else {
					// Successful login, redirect to dashboard
					router.push('/profile');
				}
			}
		} catch (err: any) {
			setAuthError(err.message || 'An error occurred during login');
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
					<Image
						src="/paddlx-logo-no-text.png"
						width={200}
						height={200}
						alt="paddlX"
						className="rounded-full"
					/>
				</div>
				<h1 className="text-3xl font-extrabold text-center mb-4 text-teal-600">
					Welcome back
				</h1>
				<p className="text-center text-gray-500 mb-8">
					Log in to your paddlX account
				</p>

				<div className="space-y-3">
					<button
						onClick={handleGoogle}
						disabled={loading}
						className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 font-semibold text-gray-700 bg-white hover:border-teal-500 focus:ring-2 focus:ring-teal-400 transition disabled:opacity-50 cursor-pointer"
					>
						<FcGoogle className="text-xl" />
						Continue with Google
					</button>

					<button
						onClick={handleApple}
						disabled={loading}
						className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 font-semibold text-gray-700 bg-white hover:border-teal-500 focus:ring-2 focus:ring-teal-400 transition disabled:opacity-50 cursor-pointer"
					>
						<FaApple className="text-xl" />
						Continue with Apple
					</button>
				</div>

				<div className="flex items-center my-6">
					<hr className="flex-grow border-gray-300" />
					<span className="mx-4 text-gray-400 text-sm">or</span>
					<hr className="flex-grow border-gray-300" />
				</div>

				<form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
					{/* Email Field */}
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
							{...register('email')}
							className={`w-full rounded-lg border ${
								errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300'
							} bg-gray-50 py-2.5 px-3 shadow-sm text-gray-900 outline-none focus:border-teal-500 focus:ring-2`}
							placeholder="you@example.com"
							autoComplete="email"
							disabled={loading || isSubmitting}
						/>
						{errors.email && (
							<p className="text-xs mt-1 text-red-500 flex items-center gap-1">
								<AlertCircle className="w-3 h-3" />
								{errors.email.message}
							</p>
						)}
					</div>

					{/* Password Field */}
					<div>
						<div className="flex items-center justify-between mb-2">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<Link
								href="/forgot-password"
								className="text-xs text-teal-600 hover:text-teal-500 font-medium"
							>
								Forgot password?
							</Link>
						</div>
						<div className="relative">
							<input
								id="password"
								type={showPassword ? 'text' : 'password'}
								{...register('password')}
								className={`w-full rounded-lg border ${
									errors.password
										? 'border-red-500 focus:ring-red-400'
										: 'border-gray-300'
								} bg-gray-50 py-2.5 px-3 pr-10 shadow-sm text-gray-900 outline-none focus:border-teal-500 focus:ring-2`}
								autoComplete="current-password"
								disabled={loading || isSubmitting}
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
							>
								{showPassword ? (
									<EyeOff className="w-5 h-5" />
								) : (
									<Eye className="w-5 h-5" />
								)}
							</button>
						</div>
						{errors.password && (
							<p className="text-xs mt-1 text-red-500 flex items-center gap-1">
								<AlertCircle className="w-3 h-3" />
								{errors.password.message}
							</p>
						)}
					</div>

					{/* Remember Me Checkbox */}
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="rememberMe"
								type="checkbox"
								{...register('rememberMe')}
								className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer"
								disabled={loading || isSubmitting}
							/>
							<label
								htmlFor="rememberMe"
								className="ml-2 block text-sm text-gray-700 cursor-pointer"
							>
								Remember me
							</label>
						</div>
					</div>

					<button
						type="submit"
						disabled={loading || isSubmitting}
						className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg py-2.5 font-bold shadow transition focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
					>
						{loading || isSubmitting ? (
							<>
								<Loader2 className="w-5 h-5 animate-spin" />
								Logging in...
							</>
						) : (
							'Log in'
						)}
					</button>
				</form>

				{authError && (
					<div className="mt-4 p-3 text-center text-sm bg-red-50 text-red-600 rounded-lg flex items-center justify-center gap-2">
						<AlertCircle className="w-4 h-4" />
						{authError}
					</div>
				)}

				<p className="mt-8 text-center text-sm text-gray-500">
					Don't have an account?{' '}
					<Link
						href="/join"
						className="text-teal-600 underline font-medium hover:text-teal-500"
					>
						Sign up
					</Link>
				</p>
			</div>
		</main>
	);
}
