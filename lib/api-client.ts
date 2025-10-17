// frontend/lib/api-client.ts
const API_BASE_URL =
	process.env.NEXT_PUBLIC_BACKEND_API_URL || 'https://paddle-api.vercel.app';
const API_SECRET = process.env.NEXT_PUBLIC_API_SECRET!;

export async function apiClient(endpoint: string, options: RequestInit = {}) {
	const response = await fetch(`${API_BASE_URL}${endpoint}`, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			// 'x-api-secret': API_SECRET,
			// ...options.headers,
		},
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.error || 'API request failed');
	}

	return response.json();
}
