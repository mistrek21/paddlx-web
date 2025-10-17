// lib/validation/auth.ts

import { z } from 'zod';

export const registerSchema = z
	.object({
		username: z
			.string()
			.min(3, 'Username must be at least 3 characters')
			.max(20, 'Username must be less than 20 characters')
			.regex(
				/^[a-z0-9_]+$/,
				'Only lowercase letters, numbers, and underscores allowed'
			)
			.transform((val) => val.toLowerCase()),
		email: z
			.string()
			.min(1, 'Email is required')
			.email('Please enter a valid email')
			.transform((val) => val.toLowerCase()),
		password: z
			.string()
			.min(6, 'Password must be at least 6 characters')
			.max(100, 'Password must be less than 100 characters'),
		confirmPassword: z.string().min(6, 'Password confirmation is required'),
		wantsNewsletter: z.boolean(), // Remove .default(false)
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	});

export type RegisterFormData = z.infer<typeof registerSchema>;

// lib/validation/auth.ts (add to existing file)

export const loginSchema = z.object({
	email: z
		.string()
		.min(1, 'Email is required')
		.email('Please enter a valid email'),
	password: z
		.string()
		.min(1, 'Password is required')
		.min(6, 'Password must be at least 6 characters'),
	rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
