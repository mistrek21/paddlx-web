// frontend/lib/api-client.ts (for browser to backend API)

const API_BASE_URL = process.env.IP_CONFIG || 'https://paddle-api.vercel.app';

export async function apiClient(endpoint: string, options: RequestInit = {}) {
	let response;
	try {
		response = await fetch(`${API_BASE_URL}${endpoint}`, {
			...options,
			headers: {
				'Content-Type': 'application/json',
				...options.headers,
			},
		});
	} catch (err) {
		// Network error, likely CORS or DNS
		throw new Error('Cannot reach backend API.');
	}

	let data;
	try {
		data = await response.json();
	} catch {
		data = {};
	}

	if (!response.ok) {
		throw new Error(
			data.error || `API request failed with status ${response.status}`
		);
	}

	return data;
}
