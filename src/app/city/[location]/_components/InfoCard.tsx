function InfoCard({
	icon: Icon,
	label,
	value,
	color = 'gray',
}: {
	icon: any;
	label: string;
	value: string | number | undefined;
	color?: string;
}) {
	// Map color prop to custom color palette classes
	const colorClasses: Record<string, string> = {
		gray: 'bg-cool-gray text-gray-text', // Your light gray background and gray text
		teal: 'bg-primary-ultra-soft text-primary', // Primary palette for teal
		blue: 'bg-primary-super-soft text-blue', // Use blue from your palette
		green: 'bg-success-light text-green', // Use custom green
		orange: 'bg-accent-light text-accent', // Use accent/orange
	};

	return (
		<div className="bg-white rounded-lg p-4 shadow-sm border border-border">
			<div className="flex items-center gap-3">
				<div
					className={`w-8 h-8 rounded-lg flex items-center justify-center ${
						colorClasses[color] ?? colorClasses.gray
					}`}
				>
					<Icon className="w-4 h-4" />
				</div>
				<div>
					<p className="text-sm text-gray-text">{label}</p>
					<p className="font-semibold text-dark-slate">{value ?? '–'}</p>
				</div>
			</div>
		</div>
	);
}

export default InfoCard;
