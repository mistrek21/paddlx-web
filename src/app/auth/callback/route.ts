// app/auth/callback/route.ts
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams, origin } = new URL(request.url);
	const code = searchParams.get('code');
	const next = searchParams.get('next') ?? '/';

	if (code) {
		const supabase = await createClient();
		const { data, error } = await supabase.auth.exchangeCodeForSession(code);

		if (!error && data.user) {
			try {
				// Check if user exists in your database
				const checkUser = await fetch(`${origin}/api/paddle/users/${data.user.id}`);

				// If user doesn't exist, redirect to onboarding
				if (checkUser.status === 404) {
					return NextResponse.redirect(
						`${origin}/onboarding?email=${encodeURIComponent(
							data.user.email || ''
						)}&id=${data.user.id}`
					);
				}

				// User exists, redirect to dashboard
				return NextResponse.redirect(`${origin}${next}`);
			} catch (err) {
				console.error('Error checking user:', err);
				return NextResponse.redirect(`${origin}/auth/auth-code-error`);
			}
		}
	}

	return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
