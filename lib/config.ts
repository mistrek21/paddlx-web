// src/lib/config.ts

export const config = {
	API_BASE_URL: process.env.IP_CONFIG || 'https://paddle-api.vercel.app',
	// Add other config values here as needed
} as const;
