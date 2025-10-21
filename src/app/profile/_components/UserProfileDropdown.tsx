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
	X,
} from 'lucide-react';
import Image from 'next/image';

interface UserProfileDropdownProps {
	user: User;
	compact?: boolean;
	mobile?: boolean;
}

export function UserProfileDropdown({
	user,
	compact = false,
	mobile = false,
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

	// Close dropdown when clicking outside (desktop only)
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}

		// Only add listener for desktop
		if (window.innerWidth >= 1024) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (mobile && isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, mobile]);

	const handleLogout = async () => {
		await supabase.auth.signOut();
		setIsOpen(false);
		router.push('/');
		router.refresh();
	};

	const handleNavigation = (path: string) => {
		router.push(path);
		setIsOpen(false);
	};

	const displayName =
		userData?.username || userData?.name || user.email?.split('@')[0] || 'User';
	const avatarUrl = userData?.avatarUrl;

	// Mobile view (full-screen modal)
	if (mobile) {
		return (
			<>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center gap-3 w-full  rounded-xl"
				>
					{avatarUrl ? (
						<Image
							src={avatarUrl}
							alt={displayName}
							width={24}
							height={24}
							className="rounded-full"
						/>
					) : (
						<div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
							{displayName[0].toUpperCase()}
						</div>
					)}
					{/* <div className="flex-1 text-left">
						<p className="font-bold text-gray-900">{displayName}</p>
						<p className="text-sm text-gray-500">{user.email}</p>
					</div>
					<ChevronDown
						className={`w-5 h-5 text-gray-400 transition-transform ${
							isOpen ? 'rotate-180' : ''
						}`}
					/> */}
				</button>

				{/* Mobile Full-Screen Menu */}
				{isOpen && (
					<>
						{/* Overlay */}
						<div
							className="fixed inset-0 bg-black bg-opacity-50 z-[10000]"
							onClick={() => setIsOpen(false)}
						/>

						{/* Slide-up Menu */}
						<div className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl shadow-2xl z-[10001] animate-slide-up max-h-[80vh] overflow-y-auto">
							{/* Handle bar */}
							<div className="flex justify-center pt-3 pb-2">
								<div className="w-12 h-1.5 bg-gray-300 rounded-full" />
							</div>

							{/* Header */}
							<div className="px-6 py-4 border-b border-gray-200">
								<div className="flex items-center justify-between">
									<h3 className="text-lg font-bold text-gray-900">Account</h3>
									<button
										onClick={() => setIsOpen(false)}
										className="p-2 rounded-full hover:bg-gray-100 transition-colors"
									>
										<X className="w-5 h-5 text-gray-600" />
									</button>
								</div>
							</div>

							{/* User Info Card */}
							<div className="px-6 py-6">
								<div className="flex items-center gap-4 p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border-2 border-teal-200">
									{avatarUrl ? (
										<Image
											src={avatarUrl}
											alt={displayName}
											width={56}
											height={56}
											className="rounded-full"
										/>
									) : (
										<div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold text-xl">
											{displayName[0].toUpperCase()}
										</div>
									)}
									<div className="flex-1 min-w-0">
										<p className="font-bold text-lg text-gray-900 truncate">
											{displayName}
										</p>
										<p className="text-sm text-gray-600 truncate">{user.email}</p>
									</div>
								</div>
							</div>

							{/* Menu Items */}
							<div className="px-6 pb-6 space-y-2">
								<button
									onClick={() => handleNavigation('/profile')}
									className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-teal-50 transition-colors text-left border-2 border-transparent hover:border-teal-200"
								>
									<div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
										<UserIcon className="w-6 h-6 text-teal-600" />
									</div>
									<div>
										<p className="font-bold text-gray-900">View Profile</p>
										<p className="text-xs text-gray-500">See your public profile</p>
									</div>
								</button>

								<button
									onClick={() => handleNavigation('/profile/dashboard')}
									className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-teal-50 transition-colors text-left border-2 border-transparent hover:border-teal-200"
								>
									<div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
										<TrendingUp className="w-6 h-6 text-teal-600" />
									</div>
									<div>
										<p className="font-bold text-gray-900">Dashboard</p>
										<p className="text-xs text-gray-500">View your stats</p>
									</div>
								</button>

								<button
									onClick={() => handleNavigation('/profile/my-games')}
									className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-teal-50 transition-colors text-left border-2 border-transparent hover:border-teal-200"
								>
									<div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
										<Calendar className="w-6 h-6 text-teal-600" />
									</div>
									<div>
										<p className="font-bold text-gray-900">My Games</p>
										<p className="text-xs text-gray-500">Upcoming and past games</p>
									</div>
								</button>

								<button
									onClick={() => handleNavigation('/profile/my-groups')}
									className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-teal-50 transition-colors text-left border-2 border-transparent hover:border-teal-200"
								>
									<div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
										<Users className="w-6 h-6 text-teal-600" />
									</div>
									<div>
										<p className="font-bold text-gray-900">My Groups</p>
										<p className="text-xs text-gray-500">Manage your groups</p>
									</div>
								</button>

								<button
									onClick={() => handleNavigation('/profile/settings')}
									className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors text-left border-2 border-transparent hover:border-gray-200"
								>
									<div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
										<Settings className="w-6 h-6 text-gray-600" />
									</div>
									<div>
										<p className="font-bold text-gray-900">Settings</p>
										<p className="text-xs text-gray-500">Account preferences</p>
									</div>
								</button>

								{/* Logout Button */}
								<button
									onClick={handleLogout}
									className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-red-50 transition-colors text-left border-2 border-transparent hover:border-red-200 mt-4"
								>
									<div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
										<LogOut className="w-6 h-6 text-red-600" />
									</div>
									<div>
										<p className="font-bold text-red-600">Log out</p>
										<p className="text-xs text-red-400">Sign out of your account</p>
									</div>
								</button>
							</div>
						</div>
					</>
				)}
			</>
		);
	}

	// Desktop view (dropdown)
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
							onClick={() => handleNavigation('/profile')}
							className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-teal-50 transition-colors text-left"
						>
							<UserIcon className="w-5 h-5 text-gray-600" />
							<span className="font-semibold text-sm text-gray-900">View Profile</span>
						</button>

						<button
							onClick={() => handleNavigation('/profile/dashboard')}
							className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-teal-50 transition-colors text-left"
						>
							<TrendingUp className="w-5 h-5 text-gray-600" />
							<span className="font-semibold text-sm text-gray-900">Dashboard</span>
						</button>

						<button
							onClick={() => handleNavigation('/profile/my-games')}
							className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-teal-50 transition-colors text-left"
						>
							<Calendar className="w-5 h-5 text-gray-600" />
							<span className="font-semibold text-sm text-gray-900">My Games</span>
						</button>

						<button
							onClick={() => handleNavigation('/profile/my-groups')}
							className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-teal-50 transition-colors text-left"
						>
							<Users className="w-5 h-5 text-gray-600" />
							<span className="font-semibold text-sm text-gray-900">My Groups</span>
						</button>

						<button
							onClick={() => handleNavigation('/profile/settings')}
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
