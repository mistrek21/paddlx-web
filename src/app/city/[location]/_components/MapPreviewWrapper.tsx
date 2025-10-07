// src/app/city/[location]/_components/MapPreviewWrapper.tsx

'use client';

import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';

// Dynamically import your MapPreview (Leaflet) with ssr:false
const MapPreview = dynamic(() => import('./MapPreview'), {
	ssr: false,
	loading: () => (
		<div className="w-full h-full bg-gradient-to-br from-primary-ultra-soft to-slate-100 rounded-xl animate-pulse flex items-center justify-center">
			<MapPin className="w-12 h-12 text-primary/30" />
		</div>
	),
});

export default function MapPreviewWrapper(props: {
	latitude: number;
	longitude: number;
	cityName: string;
}) {
	return <MapPreview {...props} />;
}
