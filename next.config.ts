import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		domains: ['images.unsplash.com'], // add this line
	},
	remotePatterns: [
		{
			protocol: 'https',
			hostname: '**.unsplash.com',
		},
		{
			protocol: 'https',
			hostname: 'paddle-api.vercel.app',
		},
		// Add other image domains you use
	],
	turbopack: {
		root: '/Users/mata/Desktop/proyectos/ahorroVip/paddlx-web',
	},
};

export default nextConfig;
