import { Lock, Users, Star, BadgeCheck, Trophy, MapPin } from 'lucide-react';
import { GameCardProps } from '../types';
import { useMobileAppModal } from '@/src/hooks/useMobileAppModal';

export function GameCard({
	image,
	title,
	date,
	location,
	formatCategory,
	suggestedLevel,
	isPrivate,
	duprRequired,
	numPlayers,
	Paddle_Club,
}: GameCardProps) {
	const { openModal, ModalComponent } = useMobileAppModal();

	return (
		<>
			<div
				onClick={() => openModal(`join or view ${title}`)}
				className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full md:max-w-sm lg:max-w-md cursor-pointer"
			>
				{/* Image */}
				<div className="relative">
					<img src={image} alt={title} className="w-full h-56 object-cover" />
					{isPrivate && (
						<div className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full">
							<Lock className="w-4 h-4" />
						</div>
					)}
				</div>

				{/* Body */}
				<div className="p-6 space-y-4">
					<div className="text-sm text-gray-500 tracking-wide uppercase">{date}</div>
					<h3 className="text-2xl font-bold text-gray-900 leading-tight">{title}</h3>

					{/* Session Info */}
					<div className="flex items-center flex-wrap gap-x-3 gap-y-2 text-[15px] text-gray-700">
						<Users className="w-4 h-4 text-teal-500" />
						<span>{numPlayers} players</span>
						<span className="text-gray-300">•</span>
						<span className="font-medium text-gray-800">
							{formatCategory.replace(/_/g, ' ')}
						</span>
						<span className="text-gray-300">•</span>
						<span className="font-medium">Level {suggestedLevel}</span>
					</div>

					{/* Club Location */}
					<div className="flex items-start gap-2 text-gray-700 text-base pt-2 leading-tight">
						<MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
						<div className="font-medium">
							{Paddle_Club?.name || location}
							{Paddle_Club?.address && (
								<div className="text-sm text-gray-500 font-normal">
									{Paddle_Club.address}
								</div>
							)}
						</div>
					</div>

					{/* Status Tags */}
					<div className="flex flex-wrap gap-2 pt-3">
						{duprRequired && (
							<span className="flex items-center gap-1 bg-amber-100 text-amber-600 px-3 py-1.5 text-xs rounded-full font-semibold">
								<BadgeCheck className="w-3 h-3" /> DUPR Required
							</span>
						)}
						{!isPrivate && (
							<span className="flex items-center gap-1 bg-green-100 text-green-600 px-3 py-1.5 text-xs rounded-full font-semibold">
								<Star className="w-3 h-3" /> Public Game
							</span>
						)}
						{formatCategory === 'TOURNAMENT' && (
							<span className="flex items-center gap-1 bg-blue-100 text-blue-600 px-3 py-1.5 text-xs rounded-full font-semibold">
								<Trophy className="w-3 h-3" /> Tournament
							</span>
						)}
					</div>
				</div>
			</div>

			{/* Render the modal instance */}
			<ModalComponent />
		</>
	);
}
