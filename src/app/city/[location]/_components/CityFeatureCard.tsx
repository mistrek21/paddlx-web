// src/app/city/[location]/_components/CityFeatureCard.tsx

import { CityFeature } from '../page';

function CityFeatureCard({ feature }: { feature: CityFeature }) {
	return (
		<div className="bg-white rounded-lg p-6 shadow-sm border">
			<h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
			{feature.description && (
				<p className="text-gray-600 text-sm">{feature.description}</p>
			)}
		</div>
	);
}

export default CityFeatureCard;
