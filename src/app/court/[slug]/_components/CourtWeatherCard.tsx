// src/app/court/[slug]/_components/CourtWeatherCard.tsx

'use client';

import { useEffect, useState } from 'react';
import {
	Cloud,
	CloudRain,
	Sun,
	CloudSnow,
	Wind,
	Droplets,
	Loader2,
	CloudDrizzle,
	CloudFog,
	Zap,
} from 'lucide-react';

interface WeatherData {
	current: {
		temperature: number;
		weatherCode: number;
		windSpeed: number;
		humidity: number;
		feelsLike: number;
	};
	daily: {
		time: string[];
		temperatureMax: number[];
		temperatureMin: number[];
		weatherCode: number[];
		precipitationProbability: number[];
		windSpeedMax: number[];
	};
}

interface CourtWeatherCardProps {
	latitude: number;
	longitude: number;
	courtName: string;
}

const weatherCodeToInfo: {
	[key: number]: { desc: string; icon: string; color: string };
} = {
	0: { desc: 'Clear', icon: '☀️', color: 'from-yellow-400 to-orange-400' },
	1: { desc: 'Mainly Clear', icon: '🌤️', color: 'from-yellow-300 to-blue-300' },
	2: { desc: 'Partly Cloudy', icon: '⛅', color: 'from-gray-300 to-blue-300' },
	3: { desc: 'Overcast', icon: '☁️', color: 'from-gray-400 to-gray-500' },
	45: { desc: 'Foggy', icon: '🌫️', color: 'from-gray-300 to-gray-400' },
	48: { desc: 'Foggy', icon: '🌫️', color: 'from-gray-300 to-gray-400' },
	51: { desc: 'Light Drizzle', icon: '🌦️', color: 'from-blue-300 to-blue-400' },
	53: { desc: 'Drizzle', icon: '🌦️', color: 'from-blue-400 to-blue-500' },
	55: { desc: 'Heavy Drizzle', icon: '🌧️', color: 'from-blue-500 to-blue-600' },
	61: { desc: 'Light Rain', icon: '🌧️', color: 'from-blue-400 to-blue-500' },
	63: { desc: 'Rain', icon: '🌧️', color: 'from-blue-500 to-blue-600' },
	65: { desc: 'Heavy Rain', icon: '⛈️', color: 'from-blue-600 to-indigo-600' },
	71: { desc: 'Light Snow', icon: '🌨️', color: 'from-blue-200 to-cyan-200' },
	73: { desc: 'Snow', icon: '❄️', color: 'from-blue-300 to-cyan-300' },
	75: { desc: 'Heavy Snow', icon: '❄️', color: 'from-blue-400 to-cyan-400' },
	80: { desc: 'Light Showers', icon: '🌦️', color: 'from-blue-400 to-blue-500' },
	81: { desc: 'Showers', icon: '🌧️', color: 'from-blue-500 to-blue-600' },
	82: {
		desc: 'Heavy Showers',
		icon: '⛈️',
		color: 'from-blue-600 to-indigo-600',
	},
	95: {
		desc: 'Thunderstorm',
		icon: '⛈️',
		color: 'from-purple-600 to-indigo-700',
	},
};

const getWeatherInfo = (code: number) => {
	return (
		weatherCodeToInfo[code] || {
			desc: 'Unknown',
			icon: '❓',
			color: 'from-gray-300 to-gray-400',
		}
	);
};

const WeatherIcon = ({
	code,
	className = 'w-6 h-6',
}: {
	code: number;
	className?: string;
}) => {
	if (code === 0 || code === 1)
		return <Sun className={`${className} text-yellow-500`} />;
	if (code >= 61 && code <= 82)
		return <CloudRain className={`${className} text-blue-500`} />;
	if (code >= 71 && code <= 86)
		return <CloudSnow className={`${className} text-blue-300`} />;
	if (code >= 51 && code <= 55)
		return <CloudDrizzle className={`${className} text-blue-400`} />;
	if (code === 45 || code === 48)
		return <CloudFog className={`${className} text-gray-400`} />;
	if (code >= 95) return <Zap className={`${className} text-purple-500`} />;
	return <Cloud className={`${className} text-gray-400`} />;
};

export default function CourtWeatherCard({
	latitude,
	longitude,
	courtName,
}: CourtWeatherCardProps) {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await fetch(
					`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max,wind_speed_10m_max&timezone=auto&forecast_days=7`
				);

				if (!response.ok) throw new Error('Weather fetch failed');

				const data = await response.json();

				setWeather({
					current: {
						temperature: Math.round(data.current.temperature_2m),
						weatherCode: data.current.weather_code,
						windSpeed: Math.round(data.current.wind_speed_10m),
						humidity: data.current.relative_humidity_2m,
						feelsLike: Math.round(data.current.apparent_temperature),
					},
					daily: {
						time: data.daily.time,
						temperatureMax: data.daily.temperature_2m_max,
						temperatureMin: data.daily.temperature_2m_min,
						weatherCode: data.daily.weather_code,
						precipitationProbability: data.daily.precipitation_probability_max,
						windSpeedMax: data.daily.wind_speed_10m_max,
					},
				});
				setLoading(false);
			} catch (err) {
				console.error('Weather fetch error:', err);
				setLoading(false);
			}
		};

		fetchWeather();
	}, [latitude, longitude]);

	if (loading) {
		return (
			<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-8 mb-4 md:mb-6">
				<div className="flex items-center justify-center">
					<Loader2 className="w-8 h-8 text-primary animate-spin" />
					<span className="ml-3 text-medium-gray">Loading weather...</span>
				</div>
			</div>
		);
	}

	if (!weather) return null;

	const currentWeather = getWeatherInfo(weather.current.weatherCode);
	const getDayName = (dateString: string, index: number) => {
		if (index === 0) return 'Today';
		if (index === 1) return 'Tomorrow';
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { weekday: 'short' });
	};

	// Playing condition logic
	const getPlayingCondition = () => {
		const temp = weather.current.temperature;
		const rainChance = weather.daily.precipitationProbability[0];
		const wind = weather.current.windSpeed;

		if (rainChance > 70)
			return {
				text: 'Not Recommended',
				color: 'text-red-600',
				bg: 'bg-red-50',
				icon: '🌧️',
			};
		if (rainChance > 40)
			return {
				text: 'Check Weather',
				color: 'text-yellow-600',
				bg: 'bg-yellow-50',
				icon: '⚠️',
			};
		if (temp < 5 || temp > 35)
			return {
				text: 'Extreme Temps',
				color: 'text-orange-600',
				bg: 'bg-orange-50',
				icon: '🌡️',
			};
		if (wind > 30)
			return {
				text: 'Very Windy',
				color: 'text-orange-600',
				bg: 'bg-orange-50',
				icon: '💨',
			};
		if (temp < 15)
			return {
				text: 'Cold but Playable',
				color: 'text-blue-600',
				bg: 'bg-blue-50',
				icon: '🧥',
			};
		return {
			text: 'Perfect Conditions',
			color: 'text-green-600',
			bg: 'bg-green-50',
			icon: '✨',
		};
	};

	const condition = getPlayingCondition();

	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-4 md:mb-6">
			{/* Header with Current Weather */}
			<div
				className={`bg-gradient-to-br ${currentWeather.color} p-4 md:p-6 text-white relative overflow-hidden`}
			>
				{/* Decorative Background */}
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
					<div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
				</div>

				<div className="relative z-10">
					<div className="flex flex-col md:flex-row items-start justify-between mb-2 md:mb-4">
						<div>
							<div className="flex items-center gap-2 mb-1 md:mb-2">
								<WeatherIcon
									code={weather.current.weatherCode}
									className="w-6 h-6 md:w-8 md:h-8 text-white"
								/>
								<h3 className="text-lg md:text-2xl font-bold">Weather Forecast</h3>
							</div>
							<p className="text-white/90 text-xs md:text-sm">{courtName}</p>
						</div>
						<div className="text-right">
							<div className="text-3xl md:text-5xl font-bold mb-1">
								{weather.current.temperature}°
							</div>
							<p className="text-xs md:text-sm text-white/90">
								Feels like {weather.current.feelsLike}°
							</p>
						</div>
					</div>

					<div className="flex flex-col md:flex-row items-center justify-between gap-2">
						<div className="flex items-center gap-2 md:gap-4">
							<div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-lg">
								<Wind className="w-4 h-4" />
								<span className="text-xs md:text-sm font-medium">
									{weather.current.windSpeed} km/h
								</span>
							</div>
							<div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-lg">
								<Droplets className="w-4 h-4" />
								<span className="text-xs md:text-sm font-medium">
									{weather.current.humidity}%
								</span>
							</div>
						</div>
						<div
							className={`${condition.bg} ${condition.color} px-3 md:px-4 py-1 md:py-2 rounded-lg font-semibold text-xs md:text-sm flex items-center gap-1 md:gap-2`}
						>
							<span>{condition.icon}</span>
							<span>{condition.text}</span>
						</div>
					</div>
				</div>
			</div>

			{/* 7-Day Forecast */}
			<div className="p-4 md:p-6">
				<h4 className="text-base md:text-lg font-bold text-dark-slate mb-2 md:mb-4">
					7-Day Forecast
				</h4>
				{/* Mobile: horizontal scroll with only 3 cards, Desktop: grid with 7 cards */}
				<div className="flex gap-2 overflow-x-auto md:grid md:grid-cols-7 md:gap-2">
					{weather.daily.time.map((day, index) => (
						<div
							key={day}
							className={`relative rounded-xl p-2 md:p-3 transition-all duration-300
                                ${index >= 3 ? 'hidden md:block' : ''}
                                ${
																																	index === 0
																																		? 'bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary shadow-md'
																																		: 'bg-gray-50 border border-gray-200 hover:shadow-lg'
																																}
                            text-xs md:text-sm min-w-[100px] md:min-w-0`}
						>
							{/* Day Label */}
							<div
								className={`text-center mb-1 md:mb-2 ${
									index === 0
										? 'text-primary font-bold'
										: 'text-medium-gray font-semibold'
								}`}
							>
								<p className="">{getDayName(day, index)}</p>
								<p className="opacity-75 text-xs">
									{new Date(day).toLocaleDateString('en-US', {
										month: 'short',
										day: 'numeric',
									})}
								</p>
							</div>

							{/* Weather Icon */}
							<div className="flex justify-center my-1 md:my-3">
								<div className="text-xl md:text-4xl">
									{getWeatherInfo(weather.daily.weatherCode[index]).icon}
								</div>
							</div>

							{/* Temperature */}
							<div className="text-center mb-1 md:mb-2">
								<p className="font-bold text-base md:text-lg text-dark-slate">
									{Math.round(weather.daily.temperatureMax[index])}°
								</p>
								<p className="text-xs md:text-sm text-medium-gray">
									{Math.round(weather.daily.temperatureMin[index])}°
								</p>
							</div>

							{/* Rain Chance */}
							{weather.daily.precipitationProbability[index] > 0 && (
								<div className="flex items-center justify-center gap-1 bg-blue-50 rounded-lg px-1 md:px-2 py-1">
									<Droplets className="w-3 h-3 text-blue-500" />
									<span className="text-xs font-semibold text-blue-600">
										{weather.daily.precipitationProbability[index]}%
									</span>
								</div>
							)}

							{/* Today Badge */}
							{index === 0 && (
								<div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
									Now
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Playing Tips */}
			<div className="px-4 md:px-6 pb-4 md:pb-6">
				<div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-3 md:p-4 border border-primary/20">
					<div className="flex items-start gap-2 md:gap-3">
						<div className="text-xl md:text-2xl">{condition.icon}</div>
						<div className="flex-1">
							<h5 className="font-bold text-dark-slate mb-1">Playing Conditions</h5>
							<p className="text-xs md:text-sm text-light-slate leading-relaxed">
								{weather.current.temperature > 30
									? '🌡️ Very hot! Bring plenty of water and take breaks. Consider early morning or evening sessions.'
									: weather.current.temperature < 10
									? '🧥 Cold weather! Dress in layers and warm up properly before playing.'
									: weather.daily.precipitationProbability[0] > 70
									? '🌧️ High chance of rain today. Check indoor courts or reschedule for better weather.'
									: weather.daily.precipitationProbability[0] > 40
									? '☁️ Some rain possible. Keep an eye on the forecast and have a backup plan.'
									: weather.current.windSpeed > 25
									? '💨 Windy conditions may affect ball control. Adjust your game accordingly.'
									: '✨ Great weather for pickleball! Perfect conditions to enjoy your game.'}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
