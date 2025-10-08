// src/app/city/[location]/_components/InfoCard.tsx

import React from 'react';

interface InfoCardProps {
	icon: React.ElementType;
	label: string;
	value: string | number;
	color?: 'gray' | 'orange' | 'blue';
}

const colorMap = {
	gray: 'bg-slate-100 text-slate-600',
	orange: 'bg-orange-50 text-orange-700',
	blue: 'bg-blue-50 text-blue-700',
};

function InfoCard({ icon: Icon, label, value, color = 'gray' }: InfoCardProps) {
	return (
		<div className="flex items-center gap-4 rounded-xl bg-white shadow border border-slate-100 px-4 py-4 min-h-[64px] transition-all duration-200 hover:shadow-lg group">
			{/* Icon bubble */}
			<span className={`rounded-xl p-2 shadow ${colorMap[color]}`}>
				<Icon className="w-6 h-6" />
			</span>
			<div className="flex flex-col">
				<span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
					{label}
				</span>
				<span className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">
					{value}
				</span>
			</div>
		</div>
	);
}

export default InfoCard;
