// src/app/profile/_components/_types/index.ts

// Shared type definitions

export interface Payment {
	id: string;
	amount: number;
	currency: string;
	paymentStatus: string;
	paymentMethod: string;
	transactionId: string | null;
	receiptUrl: string | null;
	createdAt: string;
	paymentGateway: string;
	booking?: {
		id: string;
		court: {
			name: string;
		};
	} | null;
}

export interface UserData {
	id: string;
	username: string;
	email: string;
	name?: string;
	surname?: string;
	avatarUrl?: string;
	isPremium: boolean;
	subscriptionPlan: 'BASIC' | 'PREMIUM' | 'PRO';
	subscriptionEndDate?: string;
	createdAt: string;
}
