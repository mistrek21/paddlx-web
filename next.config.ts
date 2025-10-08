import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		domains: [
			'images.unsplash.com',
			'xthalpppenobrkpnscrf.supabase.co',
			'fastly.picsum.photos',
		], // add this line
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
		{
			protocol: 'https',
			hostname: 'fastly.picsum.photos',
			port: '',
			pathname: '/**',
		},
		{
			protocol: 'https',
			hostname: 'xthalpppenobrkpnscrf.supabase.co',
			port: '',
			pathname: '/storage/v1/object/public/**',
		},
	],
	turbopack: {
		root: '/Users/mata/Desktop/proyectos/ahorroVip/paddlx-web',
	},
};

export default nextConfig;
