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
				style={{ minHeight: '320px' }}
			/>
		);
	}

	const customIcon = L.divIcon({
		className: 'custom-marker',
		html: `
      <div style="
        background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
        width: 40px;
        height: 40px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(20,184,166,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          transform: rotate(45deg);
          color: white;
          font-size: 20px;
          font-weight: bold;
        ">📍</div>
      </div>
    `,
		iconSize: [40, 40],
		iconAnchor: [20, 40],
	});

	return (
		<MapContainer
			center={[latitude, longitude]}
			zoom={13}
			scrollWheelZoom={false}
			style={{ height: '320px', width: '100%' }}
			className="rounded-b-2xl"
		>
			<TileLayer
				attribution="© OpenStreetMap contributors"
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[latitude, longitude]} icon={customIcon}>
				<Popup>
					<div
						style={{ textAlign: 'center', fontFamily: 'system-ui', padding: '4px' }}
					>
						<strong style={{ fontSize: '16px', color: '#0f172a' }}>{cityName}</strong>
						<br />
						<span style={{ fontSize: '12px', color: '#64748b' }}>
							{latitude.toFixed(4)}°N, {longitude.toFixed(4)}°E
						</span>
					</div>
				</Popup>
			</Marker>
			<Circle
				center={[latitude, longitude]}
				radius={1000}
				pathOptions={{
					color: '#14b8a6',
					fillColor: '#14b8a6',
					fillOpacity: 0.1,
				}}
			/>
		</MapContainer>
	);
}
