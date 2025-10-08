// src/app/city/[location]/_components/CourtCard.tsx

import {
	MapPin,
	Phone,
	Globe,
	Star,
	CheckCircle,
	Home,
	Building,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Court {
	id: string;
	name: string;
	description?: string;
	address: string;
	imageUrl?: string;
	isIndoor: boolean;
	isOutdoor: boolean;
	contactPhone?: string;
	website?: string;
	isVerified: boolean;
	followerCount: number;
	reviewCount: number;
	rating?: number;
}

export default function CourtCard({ court }: { court: Court }) {
	return (
		<Link href={`/court/${court.id}`}>
			<div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
				{/* Image */}
				<div className="relative h-48 bg-gradient-to-br from-primary-ultra-soft to-primary-super-soft">
					{court.imageUrl ? (
						<Image
							src={court.imageUrl}
							alt={court.name}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					) : (
						<div className="absolute inset-0 flex items-center justify-center">
							<MapPin className="w-16 h-16 text-primary opacity-30" />
						</div>
					)}

					{/* Verified Badge */}
					{court.isVerified && (
						<div className="absolute top-3 right-3 bg-green text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
							<CheckCircle className="w-3 h-3" />
							Verified
						</div>
					)}

					{/* Court Type Badge */}
					<div className="absolute top-3 left-3 flex gap-2">
						{court.isIndoor && (
							<div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
								<Building className="w-3 h-3 text-primary" />
								Indoor
							</div>
						)}
						{court.isOutdoor && (
							<div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
								<Home className="w-3 h-3 text-primary" />
								Outdoor
							</div>
						)}
					</div>
				</div>

				{/* Content */}
				<div className="p-5">
					{/* Name */}
					<h3 className="text-xl font-bold text-dark-slate mb-2 line-clamp-1 hover:text-primary transition-colors">
						{court.name}
					</h3>

					{/* Rating & Reviews */}
					{court.rating && (
						<div className="flex items-center gap-2 mb-3">
							<div className="flex items-center gap-1">
								<Star className="w-4 h-4 fill-yellow text-yellow" />
								<span className="font-semibold text-dark-slate">
									{court.rating.toFixed(1)}
								</span>
							</div>
							<span className="text-sm text-slate-gray">
								({court.reviewCount} {court.reviewCount === 1 ? 'review' : 'reviews'})
							</span>
						</div>
					)}

					{/* Description */}
					{court.description && (
						<p className="text-sm text-slate-gray mb-3 line-clamp-2">
							{court.description}
						</p>
					)}

					{/* Address */}
					<div className="flex items-start gap-2 mb-3">
						<MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
						<p className="text-sm text-slate-gray line-clamp-2">{court.address}</p>
					</div>

					{/* Contact Info */}
					<div className="flex items-center gap-4 pt-3 border-t border-slate-100">
						{court.contactPhone && (
							<div className="flex items-center gap-1 text-xs text-slate-gray">
								<Phone className="w-3 h-3 text-primary" />
								<span className="truncate">Available</span>
							</div>
						)}
						{court.website && (
							<div className="flex items-center gap-1 text-xs text-slate-gray">
								<Globe className="w-3 h-3 text-primary" />
								<span>Website</span>
							</div>
						)}
						{court.followerCount > 0 && (
							<div className="ml-auto text-xs text-slate-gray">
								{court.followerCount}{' '}
								{court.followerCount === 1 ? 'follower' : 'followers'}
							</div>
						)}
					</div>
				</div>
			</div>
		</Link>
	);
}
