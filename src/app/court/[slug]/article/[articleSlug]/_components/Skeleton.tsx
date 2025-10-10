// src/app/court/[slug]/article/[articleSlug]/_components/Skeleton.tsx

import { cn } from '@/lib/utils';

interface SkeletonProps {
	className?: string;
	circle?: boolean;
	count?: number;
}

export function Skeleton({ className, circle, count = 1 }: SkeletonProps) {
	const skeletons = Array(count).fill(0);

	return (
		<>
			{skeletons.map((_, i) => (
				<div
					key={i}
					className={cn(
						'animate-pulse bg-gray-200',
						circle ? 'rounded-full' : 'rounded',
						className
					)}
					aria-hidden="true"
				/>
			))}
		</>
	);
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
	return (
		<div className="space-y-3 animate-pulse">
			{[...Array(lines)].map((_, i) => (
				<div
					key={i}
					className={cn(
						'h-4 bg-gray-200 rounded',
						i === lines - 1 ? 'w-3/4' : 'w-full'
					)}
				/>
			))}
		</div>
	);
}

export function SkeletonCard() {
	return (
		<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 animate-pulse">
			<div className="space-y-4">
				<Skeleton className="h-8 w-2/3" />
				<SkeletonText lines={4} />
			</div>
		</div>
	);
}
