function InfoRow({
	label,
	value,
}: {
	label: string;
	value: string | number | undefined;
}) {
	return (
		<div className="grid grid-cols-2 text-gray-text mb-2">
			<div className="font-medium text-dark-slate">{label}:</div>
			<div className="text-dark-slate">{value ?? '–'}</div>
		</div>
	);
}

export default InfoRow;
