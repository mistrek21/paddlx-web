// /src/app/court/[slug]/_components/CourtMapPreview.tsx

'use client';

import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface CourtMapPreviewProps {
	latitude: number;
	longitude: number;
	courtName: string;
	address: string;
	city: string;
	country: string;
}

export default function CourtMapPreview({
	latitude,
	longitude,
	courtName,
	address,
	city,
	country,
}: CourtMapPreviewProps) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		// Fix Leaflet icon issue
		delete (L.Icon.Default.prototype as any)._getIconUrl;
		L.Icon.Default.mergeOptions({
			iconRetinaUrl:
				'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
			iconUrl:
				'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
			shadowUrl:
				'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
		});
	}, []);

	if (!isMounted) {
		return (
			<div
				className="w-full rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center"
				style={{ minHeight: '400px' }}
			>
				<div className="flex flex-col items-center gap-3">
					<div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
					<p className="text-sm text-medium-gray font-medium">Loading map...</p>
				</div>
			</div>
		);
	}

	// Custom Pickleball Paddle Icon
	const pickleballIcon = L.divIcon({
		className: 'custom-pickleball-marker',
		html: `
      <div style="position: relative; width: 60px; height: 60px;">
        <!-- Shadow -->
        <div style="
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 12px;
          background: rgba(0,0,0,0.25);
          border-radius: 50%;
          filter: blur(4px);
        "></div>
        
        <!-- Paddle -->
        <div style="
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          border: 3px solid white;
          box-shadow: 
            0 6px 16px rgba(59,130,246,0.4),
            inset -2px -2px 6px rgba(0,0,0,0.15),
            inset 2px 2px 6px rgba(255,255,255,0.4);
          animation: gentleBounce 2.5s ease-in-out infinite;
        ">
          <!-- Paddle Handle -->
          <div style="
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            width: 10px;
            height: 18px;
            background: linear-gradient(to bottom, #1e40af, #1e3a8a);
            border-radius: 0 0 3px 3px;
            border: 2px solid white;
            border-top: none;
          "></div>
          
          <!-- Paddle Holes Pattern -->
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            <div style="width: 4px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 50%; position: absolute; top: -6px; left: -6px;"></div>
            <div style="width: 4px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 50%; position: absolute; top: -6px; left: 2px;"></div>
            <div style="width: 4px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 50%; position: absolute; top: 2px; left: -6px;"></div>
            <div style="width: 4px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 50%; position: absolute; top: 2px; left: 2px;"></div>
          </div>
        </div>
      </div>
      
      <style>
        @keyframes gentleBounce {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-6px); }
        }
      </style>
    `,
		iconSize: [60, 60],
		iconAnchor: [30, 60],
	});

	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
			{/* Map Header */}
			<div className="p-4 border-b border-gray-100 bg-gradient-to-r from-primary/5 to-transparent">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="p-2 bg-primary/10 rounded-lg">
							<MapPin className="w-5 h-5 text-primary" />
						</div>
						<div>
							<h3 className="text-lg font-bold text-dark-slate">Location</h3>
							<p className="text-sm text-medium-gray">Find us on the map</p>
						</div>
					</div>
					<a
						href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg"
					>
						<Navigation className="w-4 h-4" />
						Get Directions
					</a>
				</div>
			</div>

			{/* Map Container */}
			<div className="relative w-full">
				<MapContainer
					center={[latitude, longitude]}
					zoom={15}
					scrollWheelZoom={false}
					style={{ height: '450px', width: '100%' }}
					zoomControl={true}
				>
					<TileLayer
						attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>

					{/* Coverage Circle */}
					<Circle
						center={[latitude, longitude]}
						radius={500}
						pathOptions={{
							color: '#3b82f6',
							fillColor: '#3b82f6',
							fillOpacity: 0.1,
							weight: 2,
							opacity: 0.4,
						}}
					/>

					<Marker position={[latitude, longitude]} icon={pickleballIcon}>
						<Popup>
							<div
								style={{ textAlign: 'center', fontFamily: 'system-ui', padding: '8px' }}
							>
								<div
									style={{
										fontSize: '16px',
										fontWeight: '700',
										color: '#0f172a',
										marginBottom: '8px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										gap: '6px',
									}}
								>
									<span>🏸</span>
									<span>{courtName}</span>
								</div>
								<div
									style={{
										fontSize: '13px',
										color: '#475569',
										marginBottom: '6px',
										lineHeight: '1.4',
									}}
								>
									{address}
								</div>
								<div
									style={{
										fontSize: '12px',
										color: '#64748b',
										marginBottom: '8px',
									}}
								>
									{city}, {country}
								</div>
								<div
									style={{
										fontSize: '11px',
										color: '#94a3b8',
										fontFamily: 'monospace',
										background: '#f1f5f9',
										padding: '4px 8px',
										borderRadius: '6px',
										display: 'inline-block',
									}}
								>
									{latitude.toFixed(6)}°, {longitude.toFixed(6)}°
								</div>
							</div>
						</Popup>
					</Marker>
				</MapContainer>
			</div>

			<style jsx global>{`
				.leaflet-popup-content-wrapper {
					border-radius: 12px;
					box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
					border: 1px solid #e2e8f0;
					padding: 4px;
				}
				.leaflet-popup-tip {
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
				}
				.custom-pickleball-marker {
					background: transparent;
					border: none;
				}
				.leaflet-container {
					font-family: inherit;
				}
			`}</style>
		</div>
	);
}
