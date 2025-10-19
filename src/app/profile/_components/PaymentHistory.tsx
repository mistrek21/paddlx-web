// src/app/profile/_components/PaymentHistory.tsx

import {
	CreditCard,
	DollarSign,
	Calendar,
	CheckCircle,
	XCircle,
	Loader2,
	AlertCircle,
} from 'lucide-react';
import { Payment } from './_types';

interface PaymentHistoryProps {
	payments: Payment[];
	error: string | null;
	onRetry: () => void;
}

export function PaymentHistory({
	payments,
	error,
	onRetry,
}: PaymentHistoryProps) {
	return (
		<div className="bg-white rounded-3xl shadow-xl p-8">
			<div className="flex items-center gap-3 mb-6">
				<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
					<CreditCard className="w-6 h-6 text-white" />
				</div>
				<h2 className="text-2xl font-black text-gray-900">Payment History</h2>
			</div>

			{error ? (
				<div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-3">
					<AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
					<div>
						<p className="font-bold text-red-900">Unable to Load Payment History</p>
						<p className="text-sm text-red-700 mt-1">{error}</p>
						<button
							onClick={onRetry}
							className="mt-3 text-sm text-red-600 hover:text-red-700 font-bold underline"
						>
							Try Again
						</button>
					</div>
				</div>
			) : payments.length === 0 ? (
				<div className="text-center py-12">
					<CreditCard className="w-16 h-16 text-gray-300 mx-auto mb-4" />
					<p className="text-gray-500 text-lg">No payment history yet</p>
					<p className="text-gray-400 text-sm mt-2">
						Your transactions will appear here
					</p>
				</div>
			) : (
				<div className="space-y-4">
					{payments.map((payment) => (
						<div
							key={payment.id}
							className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border-2 border-gray-200 hover:border-teal-300 transition-all"
						>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
									<DollarSign className="w-6 h-6 text-white" />
								</div>
								<div>
									<p className="font-bold text-gray-900">
										${payment.amount.toFixed(2)} {payment.currency}
									</p>
									<div className="flex items-center gap-2 mt-1">
										<Calendar className="w-4 h-4 text-gray-400" />
										<p className="text-sm text-gray-600">
											{new Date(payment.createdAt).toLocaleDateString('en-US', {
												year: 'numeric',
												month: 'long',
												day: 'numeric',
											})}
										</p>
									</div>
									<p className="text-xs text-gray-500 mt-1">
										{payment.booking
											? `Booking: ${payment.booking.court.name}`
											: 'Subscription Payment'}
									</p>
								</div>
							</div>
							<div className="flex flex-col items-end gap-2">
								{payment.paymentStatus === 'PAID' ||
								payment.paymentStatus === 'COMPLETED' ? (
									<span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">
										<CheckCircle className="w-4 h-4" />
										Completed
									</span>
								) : payment.paymentStatus === 'FAILED' ? (
									<span className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold text-sm">
										<XCircle className="w-4 h-4" />
										Failed
									</span>
								) : (
									<span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold text-sm">
										<Loader2 className="w-4 h-4" />
										{payment.paymentStatus}
									</span>
								)}
								{payment.receiptUrl && (
									<a
										href={payment.receiptUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs text-teal-600 hover:text-teal-700 font-medium"
									>
										View Receipt →
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
