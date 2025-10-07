import { MapPin, Navigation, Star } from 'lucide-react';
import Link from 'next/link';
import { Court } from '../page';

function CourtCard({ court }: { court: Court }) {
	return (
		<Link
			href={`/court/${court.id}`}
			className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
		>
			<div className="relative h-48 bg-gradient-to-br from-primary-light to-primary-dark">
				<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
				<div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
					<div className="flex items-center gap-1">
						<Navigation className="w-4 h-4 text-primary" />
						<span className="text-sm font-bold text-dark-slate">
							{court.distance}mi
						</span>
					</div>
				</div>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-bold text-dark-slate mb-2 group-hover:text-primary transition-colors">
					{court.name}
				</h3>
				<div className="flex items-start gap-2 text-slate-gray mb-4">
					<MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
					<span className="text-sm">{court.address || court.location}</span>
				</div>
				{court.rating && (
					<div className="flex items-center gap-1 mb-4">
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								className={`w-4 h-4 ${
									i < Math.floor(court.rating!) ? 'text-yellow' : 'text-light-gray'
								}`}
								fill="currentColor"
							/>
						))}
						<span className="text-sm text-slate-gray ml-1">
							({court.rating.toFixed(1)})
						</span>
					</div>
				)}
				<div className="text-primary font-semibold text-sm group-hover:underline">
					View Details →
				</div>
			</div>
		</Link>
	);
}

export default CourtCard;
