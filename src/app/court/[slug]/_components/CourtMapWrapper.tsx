// src/app/city/[location]/_components/MapPreviewWrapper.tsx

'use client';

import dynamic from 'next/dynamic';

const CourtMapPreview = dynamic(() => import('./CourtMapPreview'), {
	ssr: false,
	loading: () => (
		<div
			className="w-full h-full rounded-b-2xl flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50"
			style={{ minHeight: '320px' }}
		>
			<div className="flex flex-col items-center gap-3">
				<div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
				<p className="text-sm text-gray-600 font-medium">Loading map...</p>
			</div>
		</div>
	),
});

export default function CourtMapWrapper(props: {
	latitude: number;
	longitude: number;
	courtName: string;
	address: string;
	city: string;
	country: string;
}) {
	return <CourtMapPreview {...props} />;
}
