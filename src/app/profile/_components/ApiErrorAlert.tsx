// src/app/profile/_components/ApiErrorAlert.tsx

import { AlertCircle } from 'lucide-react';

interface ApiErrorAlertProps {
	message: string;
}

export function ApiErrorAlert({ message }: ApiErrorAlertProps) {
	return (
		<div className="mb-6 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 flex items-start gap-3">
			<AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 shrink-0" />
			<div>
				<p className="font-bold text-yellow-900">Limited Profile Data</p>
				<p className="text-sm text-yellow-700">
					{message}. Showing basic information from your account.
				</p>
			</div>
		</div>
	);
}
