// src/app/profile/_components/AccountStats.tsx

export function AccountStats({
	gamesPlayedCount,
	groupsCount,
}: {
	gamesPlayedCount: number;
	groupsCount: number;
}) {
	return (
		<div className="bg-white rounded-3xl shadow-xl p-6">
			<h3 className="font-black text-xl text-gray-900 mb-4">Account Stats</h3>
			<div className="space-y-4">
				<div className="flex justify-between items-center">
					<span className="text-gray-600">Total Games</span>
					<span className="font-bold text-2xl text-teal-600">
						{gamesPlayedCount}
					</span>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-gray-600">Total Groups</span>
					<span className="font-bold text-2xl text-teal-600">{groupsCount}</span>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-gray-600">Win Rate</span>
					<span className="font-bold text-2xl text-teal-600">-</span>
				</div>
			</div>
		</div>
	);
}
