// src/app/profile/_components/UserProfileDropdown.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import {
	User as UserIcon,
	Settings,
	LogOut,
	ChevronDown,
	TrendingUp,
	Calendar,
	Users,
} from 'lucide-react';
import Image from 'next/image';

interface UserProfileDropdownProps {
	user: User;
	compact?: boolean;
}

export function UserProfileDropdown({
	user,
	compact = false,
}: UserProfileDropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [userData, setUserData] = useState<any>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const supabase = createClient();
	const router = useRouter();

	// Fetch user profile data
	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await fetch(`/api/paddle/users/${user.id}`);
				if (response.ok) {
					const data = await response.json();
					setUserData(data.user);
				}
			} catch (error) {
				console.error('Error fetching user data:', error);
			}
		};

		fetchUserData();
	}, [user.id]);

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleLogout = async () => {
		await supabase.auth.signOut();
		router.push('/');
		router.refresh();
	};

	const displayName =
		userData?.username || userData?.name || user.email?.split('@')[0] || 'User';
	const avatarUrl = userData?.avatarUrl;

	return (
		<div className="relative" ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`flex items-center gap-2 rounded-full transition-all ${
					compact
						? 'bg-white hover:bg-gray-100 border-2 border-gray-200 hover:border-teal-400'
						: 'bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 border-2 border-teal-200 hover:border-teal-400'
				} px-3 py-2 shadow-md hover:shadow-lg`}
			>
				{avatarUrl ? (
					<Image
						src={avatarUrl}
						alt={displayName}
						width={32}
						height={32}
						className="rounded-full"
					/>
				) : (
					<div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
						{displayName[0].toUpperCase()}
					</div>
				)}
				<span className="font-bold text-sm text-gray-900 max-w-[100px] truncate hidden sm:block">
					{displayName}
				</span>
				<ChevronDown
					className={`w-4 h-4 text-gray-600 transition-transform ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</button>

			{isOpen && (
				<div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 py-2 z-50">
					{/* User Info */}
					<div className="px-4 py-3 border-b border-gray-200">
						<div className="flex items-center gap-3">
							{avatarUrl ? (
								<Image
									src={avatarUrl}
									alt={displayName}
									width={40}
									height={40}
									className="rounded-full"
								/>
							) : (
								<div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold">
									{displayName[0].toUpperCase()}
								</div>
							)}
							<div className="flex-1 min-w-0">
								<p className="font-bold text-gray-900 truncate">{displayName}</p>
								<p className="text-xs text-gray-500 truncate">{user.email}</p>
							</div>
						</div>
					</div>

					{/* Menu Items */}
					<div className="py-2">
						<button
							onClick={() => {
								router.push(`/profile`);
								setIsOpen(false);
							}}
							className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-teal-50 transition-colors text-left"
						>
							<UserIcon className="w-5 h-5 text-gray-600" />
							<span className="font-semibold text-sm text-gray-900">View Profile</span>
						</button>

						<button
							onClick={() => {
								router.push('/profile/dashboard');
								setIsOpen(false);
							}}
							className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-teal-50 transition-colors text-left"
						>
							<TrendingUp className="w-5 h-5 text-gray-600" />
							<span className="font-semibold text-sm text-gray-900">Dashboard</span>
						</button>

						<button
							onClick={() => {
								router.push('/profile/my-games');
								setIsOpen(false);
							}}
							className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-teal-50 transition-colors text-left"
						>
							<Calendar className="w-5 h-5 text-gray-600" />
							<span className="font-semibold text-sm text-gray-900">My Games</span>
						</button>

						<button
							onClick={() => {
								router.push('/profile/my-groups');
								setIsOpen(false);
							}}
							className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-teal-50 transition-colors text-left"
						>
							<Users className="w-5 h-5 text-gray-600" />
							<span className="font-semibold text-sm text-gray-900">My Groups</span>
						</button>

						<button
							onClick={() => {
								router.push('/profile/settings');
								setIsOpen(false);
							}}
							className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-teal-50 transition-colors text-left"
						>
							<Settings className="w-5 h-5 text-gray-600" />
							<span className="font-semibold text-sm text-gray-900">Settings</span>
						</button>
					</div>

					{/* Logout */}
					<div className="border-t border-gray-200 pt-2">
						<button
							onClick={handleLogout}
							className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition-colors text-left"
						>
							<LogOut className="w-5 h-5 text-red-600" />
							<span className="font-semibold text-sm text-red-600">Log out</span>
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
