// import { type NextRequest } from 'next/server';
// import { updateSession } from './lib/supabase/middleware';

// export async function middleware(request: NextRequest) {
// 	return await updateSession(request);
// }

// export const config = {
// 	matcher: [
// 		/*
// 		 * Match all request paths except:
// 		 * - _next/static (static files)
// 		 * - _next/image (image optimization files)
// 		 * - favicon.ico (favicon file)
// 		 * - public folder
// 		 */
// 		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
// 	],
// };

// backend-api/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const origin = request.headers.get('origin');
	const allowedOrigins = ['https://paddlx.com', 'http://localhost:3000'];

	if (origin && !allowedOrigins.includes(origin)) {
		return NextResponse.json({ error: 'CORS not allowed' }, { status: 403 });
	}

	return NextResponse.next();
}

export const config = {
	matcher: '/api/:path*',
};
