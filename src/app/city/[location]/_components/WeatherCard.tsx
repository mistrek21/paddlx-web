// src/app/city/[location]/_components/WeatherCard.tsx
'use client';

import { useEffect, useState } from 'react';
import {
	Cloud,
	CloudRain,
	Sun,
	CloudSnow,
	Wind,
	Droplets,
	Eye,
	Gauge,
	Loader2,
	Clock,
} from 'lucide-react';

interface WeatherData {
	current: {
		temperature: number;
		weatherCode: number;
		windSpeed: number;
		humidity: number;
		pressure: number;
		visibility: number;
	};
	hourly: {
		time: string[];
		temperature: number[];
		weatherCode: number[];
		precipitation: number[];
	};
}

interface WeatherCardProps {
	latitude: number;
	longitude: number;
	cityName: string;
}

const weatherCodeToDescription: {
	[key: number]: { desc: string; icon: string };
} = {
	0: { desc: 'Clear sky', icon: '☀️' },
	1: { desc: 'Mainly clear', icon: '🌤️' },
	2: { desc: 'Partly cloudy', icon: '⛅' },
	3: { desc: 'Overcast', icon: '☁️' },
	45: { desc: 'Foggy', icon: '🌫️' },
	48: { desc: 'Foggy', icon: '🌫️' },
	51: { desc: 'Light drizzle', icon: '🌦️' },
	53: { desc: 'Drizzle', icon: '🌦️' },
	55: { desc: 'Heavy drizzle', icon: '🌧️' },
	61: { desc: 'Light rain', icon: '🌧️' },
	63: { desc: 'Rain', icon: '🌧️' },
	65: { desc: 'Heavy rain', icon: '⛈️' },
	71: { desc: 'Light snow', icon: '🌨️' },
	73: { desc: 'Snow', icon: '❄️' },
	75: { desc: 'Heavy snow', icon: '❄️' },
	77: { desc: 'Snow grains', icon: '🌨️' },
	80: { desc: 'Light showers', icon: '🌦️' },
	81: { desc: 'Showers', icon: '🌧️' },
	82: { desc: 'Heavy showers', icon: '⛈️' },
	85: { desc: 'Light snow showers', icon: '🌨️' },
	86: { desc: 'Snow showers', icon: '❄️' },
	95: { desc: 'Thunderstorm', icon: '⛈️' },
	96: { desc: 'Thunderstorm with hail', icon: '⛈️' },
	99: { desc: 'Thunderstorm with hail', icon: '⛈️' },
};

const getWeatherInfo = (code: number) => {
	return weatherCodeToDescription[code] || { desc: 'Unknown', icon: '❓' };
};

const WeatherIcon = ({
	code,
	className = 'w-6 h-6',
}: {
	code: number;
	className?: string;
}) => {
	if (code === 0 || code === 1) {
		return <Sun className={`${className} text-yellow-500`} />;
	} else if (code >= 61 && code <= 82) {
		return <CloudRain className={`${className} text-blue-500`} />;
	} else if (code >= 71 && code <= 86) {
		return <CloudSnow className={`${className} text-blue-300`} />;
	} else {
		return <Cloud className={`${className} text-gray-400`} />;
	}
};

export default function WeatherCard({
	latitude,
	longitude,
	cityName,
}: WeatherCardProps) {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await fetch(
					`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,surface_pressure,visibility&hourly=temperature_2m,weather_code,precipitation_probability&timezone=auto&forecast_days=1`
				);

				if (!response.ok) throw new Error('Weather fetch failed');

				const data = await response.json();

				setWeather({
					current: {
						temperature: Math.round(data.current.temperature_2m),
						weatherCode: data.current.weather_code,
						windSpeed: Math.round(data.current.wind_speed_10m),
						humidity: data.current.relative_humidity_2m,
						pressure: Math.round(data.current.surface_pressure),
						visibility: Math.round(data.current.visibility / 1000), // Convert to km
					},
					hourly: {
						time: data.hourly.time,
						temperature: data.hourly.temperature_2m,
						weatherCode: data.hourly.weather_code,
						precipitation: data.hourly.precipitation_probability,
					},
				});
				setLoading(false);
			} catch (err) {
				console.error('Weather fetch error:', err);
				setError(true);
				setLoading(false);
			}
		};

		fetchWeather();
	}, [latitude, longitude]);

	if (loading) {
		return (
			<div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg border border-blue-100 p-8">
				<div className="flex items-center justify-center">
					<Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
					<span className="ml-3 text-slate-gray">Loading weather...</span>
				</div>
			</div>
		);
	}

	if (error || !weather) {
		return null; // Don't show anything if weather fetch fails
	}

	const currentHour = new Date().getHours();
	const next6Hours = weather.hourly.time
		.map((time, idx) => ({
			time: new Date(time),
			temp: Math.round(weather.hourly.temperature[idx]),
			code: weather.hourly.weatherCode[idx],
			precipitation: weather.hourly.precipitation[idx],
		}))
		.filter((h) => h.time.getHours() >= currentHour)
		.slice(0, 6);

	const currentWeather = getWeatherInfo(weather.current.weatherCode);

	return (
		<div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 rounded-2xl shadow-xl border border-blue-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
			{/* Header */}
			<div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-5 text-white">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl">
							<WeatherIcon
								code={weather.current.weatherCode}
								className="w-6 h-6 text-white"
							/>
						</div>
						<div>
							<h4 className="font-bold text-lg">Current Weather</h4>
							<p className="text-sm text-blue-100">{cityName}</p>
						</div>
					</div>
					<div className="text-right">
						<div className="text-4xl font-bold">{weather.current.temperature}°C</div>
						<p className="text-sm text-blue-100">{currentWeather.desc}</p>
					</div>
				</div>
			</div>

			{/* Current Conditions */}
			<div className="p-5 bg-white/50 backdrop-blur-sm border-b border-blue-100">
				<div className="grid grid-cols-2 gap-3">
					<div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm">
						<Wind className="w-4 h-4 text-blue-600 flex-shrink-0" />
						<div>
							<p className="text-xs text-slate-gray">Wind</p>
							<p className="text-sm font-semibold text-dark-slate">
								{weather.current.windSpeed} km/h
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm">
						<Droplets className="w-4 h-4 text-blue-600 flex-shrink-0" />
						<div>
							<p className="text-xs text-slate-gray">Humidity</p>
							<p className="text-sm font-semibold text-dark-slate">
								{weather.current.humidity}%
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm">
						<Gauge className="w-4 h-4 text-blue-600 flex-shrink-0" />
						<div>
							<p className="text-xs text-slate-gray">Pressure</p>
							<p className="text-sm font-semibold text-dark-slate">
								{weather.current.pressure} hPa
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm">
						<Eye className="w-4 h-4 text-blue-600 flex-shrink-0" />
						<div>
							<p className="text-xs text-slate-gray">Visibility</p>
							<p className="text-sm font-semibold text-dark-slate">
								{weather.current.visibility} km
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Hourly Forecast */}
			<div className="p-5">
				<h5 className="font-bold text-dark-slate mb-4 flex items-center gap-2">
					<Clock className="w-4 h-4 text-blue-600" />
					Next 6 Hours
				</h5>
				<div className="grid grid-cols-6 gap-2">
					{next6Hours.map((hour, idx) => {
						const hourWeather = getWeatherInfo(hour.code);
						return (
							<div
								key={idx}
								className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
							>
								<p className="text-xs font-medium text-slate-gray mb-1">
									{hour.time.getHours()}:00
								</p>
								<div className="text-2xl my-1">{hourWeather.icon}</div>
								<p className="text-sm font-bold text-dark-slate mb-1">{hour.temp}°</p>
								{hour.precipitation > 0 && (
									<div className="flex items-center gap-1">
										<Droplets className="w-3 h-3 text-blue-500" />
										<p className="text-xs text-blue-600">{hour.precipitation}%</p>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>

			{/* Weather Insight */}
			<div className="px-5 pb-5">
				<div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-3 border border-blue-200">
					<p className="text-sm text-slate-gray text-center">
						{weather.current.temperature > 25
							? '🌡️ Perfect weather for pickleball! Stay hydrated.'
							: weather.current.temperature < 10
							? "🧥 Bundle up! It's a bit chilly for outdoor play."
							: weather.hourly.precipitation.some((p) => p > 50)
							? '🌧️ Rain expected today. Check indoor courts!'
							: '✨ Great conditions for playing pickleball!'}
					</p>
				</div>
			</div>
		</div>
	);
}
