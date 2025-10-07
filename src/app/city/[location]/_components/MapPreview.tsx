'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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
	const mapRef = useRef<L.Map | null>(null);
	const mapContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mapContainerRef.current || mapRef.current) return;

		const map = L.map(mapContainerRef.current, {
			center: [latitude, longitude],
			zoom: 13,
			zoomControl: true,
			scrollWheelZoom: false,
		});

		mapRef.current = map;

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '© OpenStreetMap contributors',
			maxZoom: 19,
		}).addTo(map);

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

		L.marker([latitude, longitude], { icon: customIcon })
			.addTo(map)
			.bindPopup(
				`
                <div style="text-align: center; font-family: system-ui; padding: 4px;">
                    <strong style="font-size: 16px; color: #0f172a;">${cityName}</strong><br/>
                    <span style="font-size: 12px; color: #64748b;">
                        ${latitude.toFixed(4)}°N, ${longitude.toFixed(4)}°E
                    </span>
                </div>
            `
			)
			.openPopup();

		L.circle([latitude, longitude], {
			color: '#14b8a6',
			fillColor: '#14b8a6',
			fillOpacity: 0.1,
			radius: 1000,
		}).addTo(map);

		return () => {
			map.remove();
			mapRef.current = null;
		};
	}, [latitude, longitude, cityName]);

	return (
		<div
			ref={mapContainerRef}
			className="w-full h-full rounded-b-2xl"
			style={{ minHeight: '320px', overflow: 'hidden' }}
		/>
	);
}
