'use client';

import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

interface MapPreviewProps {
	latitude: number;
	longitude: number;
	cityName: string;
}

export default function MapPreview({
	latitude,
	longitude,
	cityName,
}: MapPreviewProps) {
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
				className="w-full rounded-b-2xl bg-gray-100"
				style={{ minHeight: '400px' }}
			/>
		);
	}

	const tennisBallIcon = L.divIcon({
		className: 'custom-tennis-marker',
		html: `
      <div style="position: relative; width: 50px; height: 50px;">
        <!-- Shadow -->
        <div style="
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 35px;
          height: 10px;
          background: rgba(0,0,0,0.25);
          border-radius: 50%;
          filter: blur(3px);
        "></div>
        
        <!-- Tennis Ball -->
        <div style="
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: radial-gradient(circle at 35% 35%, #e0ff2a, #c4d916);
          border-radius: 50%;
          border: 2.5px solid white;
          box-shadow: 
            0 4px 12px rgba(196,217,22,0.4),
            inset -1px -1px 4px rgba(0,0,0,0.1),
            inset 1px 1px 4px rgba(255,255,255,0.5);
          animation: gentleBounce 2.5s ease-in-out infinite;
        ">
          <!-- Tennis Ball Curves -->
          <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" viewBox="0 0 40 40">
            <path d="M 7,4 Q 20,13 20,20 Q 20,27 7,36" 
              stroke="white" 
              stroke-width="2" 
              fill="none" 
              opacity="0.85"/>
            <path d="M 33,4 Q 20,13 20,20 Q 20,27 33,36" 
              stroke="white" 
              stroke-width="2" 
              fill="none" 
              opacity="0.85"/>
          </svg>
        </div>
      </div>
      
      <style>
        @keyframes gentleBounce {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-5px); }
        }
      </style>
    `,
		iconSize: [50, 50],
		iconAnchor: [25, 50],
	});

	return (
		<div className="relative w-full rounded-b-2xl overflow-hidden shadow-lg">
			<MapContainer
				center={[latitude, longitude]}
				zoom={14}
				scrollWheelZoom={false}
				style={{ height: '400px', width: '100%' }}
				className="rounded-b-2xl"
				zoomControl={true}
			>
				{/* Standard OpenStreetMap for best readability */}
				<TileLayer
					attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				{/* Subtle radius circle */}
				<Circle
					center={[latitude, longitude]}
					radius={600}
					pathOptions={{
						color: '#84cc16',
						fillColor: '#84cc16',
						fillOpacity: 0.08,
						weight: 2,
						opacity: 0.35,
					}}
				/>

				<Marker position={[latitude, longitude]} icon={tennisBallIcon}>
					<Popup>
						<div
							style={{
								textAlign: 'center',
								fontFamily: 'system-ui',
								padding: '6px 4px',
							}}
						>
							<div
								style={{
									fontSize: '16px',
									fontWeight: '600',
									color: '#0f172a',
									marginBottom: '4px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '6px',
								}}
							>
								<span>🎾</span>
								<span>{cityName}</span>
							</div>
							<div
								style={{
									fontSize: '12px',
									color: '#64748b',
									fontFamily: 'monospace',
									background: '#f1f5f9',
									padding: '4px 8px',
									borderRadius: '6px',
									display: 'inline-block',
								}}
							>
								{latitude.toFixed(4)}°N, {Math.abs(longitude).toFixed(4)}°
								{longitude >= 0 ? 'E' : 'W'}
							</div>
						</div>
					</Popup>
				</Marker>
			</MapContainer>

			<style jsx global>{`
				.leaflet-popup-content-wrapper {
					border-radius: 10px;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
					border: 1px solid #e2e8f0;
				}
				.leaflet-popup-tip {
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
				}
				.custom-tennis-marker {
					background: transparent;
					border: none;
				}
			`}</style>
		</div>
	);
}
