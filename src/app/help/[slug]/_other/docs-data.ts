// types/docs.ts

import { DocSection } from './types';

export const docSections: DocSection[] = [
	{
		id: 'introduction',
		title: 'Introduction',
		slug: 'introduction',
		isExpandable: false,
		items: [
			{
				id: 'why-paddlx',
				title: 'Why paddlX?',
				slug: 'why-paddlx',
				content: {
					title: 'Why paddlX?',
					description:
						'Discover how paddlX revolutionizes pickleball organization and helps you build a thriving community.',
					sections: [
						{
							heading: 'The All-in-One Pickleball Platform',
							content:
								'paddlX is the leading platform designed specifically for pickleball organizers, players, and communities. We simplify everything from session scheduling to payment collection, so you can focus on what matters most - playing pickleball.',
							image: '/paddlx-dashboard-overview.jpg',
						},
						{
							heading: 'Built for Organizers',
							content:
								"Whether you're managing a weekly drop-in session, running a competitive league, or organizing tournaments, paddlX provides all the tools you need in one place.",
							steps: [
								'Create and manage sessions in seconds',
								'Accept payments seamlessly with Stripe integration',
								'Communicate with players through built-in chat',
								'Track attendance and manage player lists effortlessly',
								'Integrate with DUPR for official ratings',
							],
						},
						{
							heading: 'Join 521,500+ Players',
							content:
								'paddlX is trusted by organizers and players worldwide. Our platform has facilitated millions of games and continues to grow the pickleball community every day.',
							tips: [
								'Free forever for basic features',
								'No hidden fees or commitments',
								'Mobile-first design for on-the-go management',
								'Dedicated support team ready to help',
							],
						},
					],
					relatedArticles: [
						'creating-a-session',
						'inviting-players-to-a-group',
						'setting-up-stripe',
					],
				},
			},
		],
	},

	{
		id: 'sessions',
		title: 'Sessions',
		slug: 'sessions',
		isExpandable: true,
		items: [
			{
				id: 'creating-a-session',
				title: 'Creating a session',
				slug: 'creating-a-session',
				content: {
					title: 'Creating a Session',
					description:
						'Step-by-step guide to creating your first pickleball session on paddlX.',
					sections: [
						{
							heading: 'Getting Started',
							content:
								'Creating a session on paddlX is quick and easy. You can set up a one-time game or recurring weekly sessions in just a few clicks.',
							image: '/create-session-interface.jpg',
						},
						{
							heading: 'Session Creation Steps',
							content: 'Follow these steps to create your first session.',
							steps: [
								'Click "Create Session" from your dashboard',
								'Enter session date and time',
								'Add location (court address)',
								'Set player limit and skill level requirements',
								'Configure payment settings (optional)',
								'Choose public or private visibility',
								'Click "Create" - you\'re done!',
							],
						},
						{
							heading: 'Session Details',
							content:
								'Provide clear information to help players decide if they want to join.',
							tips: [
								'Add session description with format details (e.g., "round robin")',
								'Specify skill level (beginner, intermediate, advanced)',
								'Include parking information',
								'Note equipment needs (balls, paddles provided?)',
								'Add any COVID-19 or safety protocols',
							],
						},
						{
							heading: 'After Creation',
							content:
								'Once created, your session appears on your dashboard. Invite players, manage the player list, and communicate through session chat as the date approaches.',
						},
					],
					relatedArticles: [
						'inviting-players-in-your-group',
						'public-vs-private',
						'weekly-sessions',
					],
				},
			},
			{
				id: 'add-a-co-host',
				title: 'Add a Co-host',
				slug: 'add-a-co-host',
				content: {
					title: 'Add a Co-host',
					description:
						'Share session management responsibilities by adding co-hosts.',
					sections: [
						{
							heading: 'Delegate Session Management',
							content:
								'Co-hosts help you manage sessions with the same permissions you have, making it easier to run large or complex events.',
							image: '/co-host-management.jpg',
						},
						{
							heading: 'Adding a Co-host',
							content: 'Give trusted members the ability to help run your sessions.',
							steps: [
								'Open your session details',
								'Click "Session Settings"',
								'Select "Add Co-host"',
								'Search for the player by name or email',
								'Confirm - they receive a notification',
							],
						},
						{
							heading: 'Co-host Permissions',
							content: 'Co-hosts can perform most session management tasks.',
							tips: [
								'Add and remove players',
								'Edit session details and time',
								'Send messages in session chat',
								'Process refunds',
								'View payment information',
								'Cannot delete the session or remove the primary host',
							],
						},
						{
							heading: 'Best Use Cases',
							content:
								"Co-hosts are perfect for tournaments with multiple organizers, large weekly events, or when you need backup coverage if you can't make it to a session.",
						},
					],
					relatedArticles: [
						'creating-a-session',
						'removing-players',
						'advanced-group-features',
					],
				},
			},
			{
				id: 'custom-titles',
				title: 'Custom Titles',
				slug: 'custom-titles',
				content: {
					title: 'Custom Titles',
					description: 'Personalize your sessions with custom titles and branding.',
					sections: [
						{
							heading: 'Make Sessions Stand Out',
							content:
								'Custom titles help your sessions stand out and clearly communicate what type of play to expect.',
							image: '/custom-session-titles.jpg',
						},
						{
							heading: 'Creating Custom Titles',
							content: 'Add personality and clarity to your session names.',
							steps: [
								'Go to session creation or edit mode',
								'Enter custom title in the "Session Name" field',
								'Use descriptive, engaging language',
								'Include format if relevant (e.g., "Tuesday Night Round Robin")',
								'Save your session',
							],
						},
						{
							heading: 'Title Ideas',
							content:
								'Get creative with your session names to attract the right players.',
							tips: [
								'"Sunrise Smashers - Intermediate Play"',
								'"Friday Night Lights Pickleball"',
								'"Ladies League - Advanced Competition"',
								'"Beginner Bootcamp Sessions"',
								'"Mixed Doubles Mixer"',
							],
						},
						{
							heading: 'Title Best Practices',
							content:
								'Keep titles clear and under 50 characters. Include skill level, format, or special features. Avoid all caps or excessive punctuation.',
						},
					],
					relatedArticles: ['creating-a-session', 'public-vs-private'],
				},
			},
			{
				id: 'create-a-player-list',
				title: 'Create a player list',
				slug: 'create-a-player-list',
				content: {
					title: 'Create a Player List',
					description:
						'Pre-populate sessions with specific players or create invitation-only events.',
					sections: [
						{
							heading: 'Curated Player Lists',
							content:
								'Start your session with a pre-selected list of players, perfect for skill-matched or invitation-only games.',
							image: '/player-list-creation.jpg',
						},
						{
							heading: 'Creating Your List',
							content: 'Add players individually or from your groups.',
							steps: [
								'Create or edit a session',
								'Click "Add Players"',
								'Select from your groups or search all players',
								'Choose players to add to the list',
								'Set their status (confirmed, invited, waitlist)',
								'Save - players receive notifications',
							],
						},
						{
							heading: 'Player List Features',
							content: 'Manage your roster with flexible tools.',
							tips: [
								'Drag and drop to reorder players',
								'Mark players as confirmed or pending',
								'Add notes to individual players',
								'Export list to CSV for record-keeping',
								'See payment status at a glance',
							],
						},
						{
							heading: 'Use Cases',
							content:
								'Player lists work great for competitive matches, skill-specific clinics, tournament brackets, or private events where you control attendance.',
						},
					],
					relatedArticles: [
						'inviting-players-in-your-group',
						'removing-players',
						'bulk-importing-players',
					],
				},
			},
			{
				id: 'inviting-players-in-your-group',
				title: 'Inviting players in your group',
				slug: 'inviting-players-in-your-group',
				content: {
					title: 'Inviting Players in Your Group',
					description:
						'Quickly invite all or specific members of your group to join a session.',
					sections: [
						{
							heading: 'Group-Wide Invitations',
							content:
								'Leverage your group membership to fill sessions quickly with players you know.',
							image: '/group-player-invites.jpg',
						},
						{
							heading: 'Inviting Your Group',
							content: 'Send session invites to your entire group or select members.',
							steps: [
								'Open your session',
								'Click "Invite Players"',
								'Select "From My Groups"',
								'Choose which group(s) to invite',
								'Select all members or pick individuals',
								"Send invites - they'll receive push notifications",
							],
						},
						{
							heading: 'Invitation Settings',
							content: 'Customize how group members receive invitations.',
							tips: [
								'Set priority registration for certain members',
								'Auto-approve trusted group members',
								'Require approval for newer members',
								'Send reminder notifications',
								'Include personal message with invitation',
							],
						},
					],
					relatedArticles: [
						'creating-a-session',
						'the-purpose-of-groups',
						'link-invites',
					],
				},
			},
			{
				id: 'link-invites',
				title: 'Link Invites',
				slug: 'link-invites',
				content: {
					title: 'Link Invites',
					description: 'Share a session link that anyone can use to join your game.',
					sections: [
						{
							heading: 'One-Click Joining',
							content:
								'Generate a shareable link that takes players directly to your session registration page.',
							image: '/session-link-sharing.jpg',
						},
						{
							heading: 'Creating a Link Invite',
							content: 'Share your session far and wide with a simple link.',
							steps: [
								'Open your session',
								'Click "Share Session"',
								'Click "Copy Link" or select share method',
								'Share via text, email, social media, or messaging apps',
								'Players click link to view and join session',
							],
						},
						{
							heading: 'Link Settings',
							content: 'Control how link invites work for your session.',
							tips: [
								'Public links - anyone can join',
								'Approval required - you review each request',
								'Set expiration date for links',
								'Track how many people used your link',
								'Disable link anytime to stop new joins',
							],
						},
					],
					relatedArticles: [
						'qr-code-invites',
						'public-vs-private',
						'requests-to-join',
					],
				},
			},
			{
				id: 'qr-code-invites',
				title: 'QR code Invites',
				slug: 'qr-code-invites',
				content: {
					title: 'QR Code Invites',
					description: 'Use QR codes for easy in-person session registration.',
					sections: [
						{
							heading: 'Scan and Join',
							content:
								'QR codes make it incredibly easy for players to join your session on-site at the courts.',
							image: '/qr-code-session-invite.jpg',
						},
						{
							heading: 'Generating QR Codes',
							content: 'Create a scannable QR code for your session.',
							steps: [
								'Open your session',
								'Click "Share Session"',
								'Select "QR Code"',
								'Download QR code image',
								'Print or display on your phone/tablet',
								'Players scan to join instantly',
							],
						},
						{
							heading: 'Best Uses',
							content: 'QR codes shine in face-to-face scenarios.',
							tips: [
								'Post at court entrance for walk-ups',
								'Display on tablet at check-in table',
								'Include in printed flyers and posters',
								'Show on phone for quick sign-ups',
								'Perfect for tournaments and events',
							],
						},
					],
					relatedArticles: [
						'link-invites',
						'inviting-players-in-your-group',
						'creating-a-session',
					],
				},
			},
			{
				id: 'inviting-players',
				title: 'Inviting players',
				slug: 'inviting-players',
				content: {
					title: 'Inviting Players',
					description:
						'Master all the ways to invite players to your sessions for maximum attendance.',
					sections: [
						{
							heading: 'Multiple Invitation Methods',
							content:
								'paddlX offers various ways to invite players, from direct invites to public listings. Choose the method that works best for your session type.',
							image: '/player-invitation-methods.jpg',
						},
						{
							heading: 'Direct Invitations',
							content: 'Send personal invites to specific players.',
							steps: [
								'Open your session',
								'Click "Invite Players"',
								'Search for players by name or email',
								'Select players from results',
								'Add optional personal message',
								'Send invites - they receive push notifications',
							],
						},
						{
							heading: 'All Invitation Methods',
							content: 'Choose the right method for your needs.',
							tips: [
								'Group invites - invite your entire group at once',
								'Link sharing - share session URL anywhere',
								'QR codes - perfect for in-person registration',
								'Public listing - appear in public session search',
								'Import from previous session attendees',
							],
						},
						{
							heading: 'Invitation Best Practices',
							content:
								'Send invitations 3-7 days before your session. Include clear details about skill level, format, and what to bring. Follow up with reminders as the date approaches.',
						},
					],
					relatedArticles: [
						'inviting-players-in-your-group',
						'link-invites',
						'qr-code-invites',
					],
				},
			},
			{
				id: 'public-vs-private',
				title: 'Public vs private',
				slug: 'public-vs-private',
				content: {
					title: 'Public vs Private',
					description:
						'Understand the difference between public and private sessions and when to use each.',
					sections: [
						{
							heading: 'Session Visibility',
							content:
								'Choose whether your session is discoverable by all paddlX users or restricted to invited players only.',
							image: '/public-private-session-settings.jpg',
						},
						{
							heading: 'Public Sessions',
							content:
								'Public sessions appear in paddlX search results and on location-based maps.',
							steps: [
								'Visible to all paddlX users',
								'Appear in "Find a Game" search',
								'Show on court location pages',
								'Anyone can request to join',
								'Great for growing your community',
								'You can still require approval',
							],
						},
						{
							heading: 'Private Sessions',
							content:
								"Private sessions are invitation-only and don't appear in public searches.",
							tips: [
								'Only visible to invited players',
								'Not searchable or discoverable',
								'Perfect for skill-matched play',
								'Ideal for competitive practice',
								'Great for friend groups',
								'Still shareable via link if needed',
							],
						},
						{
							heading: 'Choosing the Right Setting',
							content:
								'Use public for open play and community building. Use private for competitive training, friend groups, or when you want complete control over attendance.',
						},
					],
					relatedArticles: [
						'creating-a-session',
						'requests-to-join',
						'inviting-players',
					],
				},
			},
			{
				id: 'weekly-sessions',
				title: 'Weekly sessions',
				slug: 'weekly-sessions',
				content: {
					title: 'Weekly Sessions',
					description:
						'Set up recurring weekly sessions to save time and build consistent attendance.',
					sections: [
						{
							heading: 'Automate Your Schedule',
							content:
								"Weekly sessions automatically create new session instances, so you don't have to manually create the same session every week.",
							image: '/weekly-recurring-sessions.jpg',
						},
						{
							heading: 'Creating Weekly Sessions',
							content:
								'Set up your recurring schedule once and let paddlX handle the rest.',
							steps: [
								'Create a new session as normal',
								'Toggle "Repeat Weekly" to ON',
								'Choose which days of the week to repeat',
								'Set end date or "Repeat indefinitely"',
								'All settings apply to all instances',
								'Future sessions auto-create 4 weeks in advance',
							],
						},
						{
							heading: 'Managing Recurring Sessions',
							content: 'Make changes to your weekly session schedule.',
							tips: [
								'Edit single instance - changes only that date',
								'Edit all future - updates all upcoming sessions',
								'Cancel single instance - keeps rest of schedule',
								'Pause series temporarily without deleting',
								'Resume series after breaks or vacations',
							],
						},
						{
							heading: 'Player Experience',
							content:
								'Players love weekly sessions because they can join once and automatically be on the list for all future sessions. Enable "Auto-join returning players" to make this work.',
						},
					],
					relatedArticles: [
						'creating-a-session',
						'customizing-alerts',
						'player-limits-and-waitlisting',
					],
				},
			},
			{
				id: 'player-limits-and-waitlisting',
				title: 'Player limits & waitlisting',
				slug: 'player-limits-and-waitlisting',
				content: {
					title: 'Player Limits & Waitlisting',
					description:
						'Manage session capacity and automatically fill openings with waitlisted players.',
					sections: [
						{
							heading: 'Control Session Size',
							content:
								'Set player limits based on your available courts and ensure fair access with automatic waitlisting.',
							image: '/waitlist-management-interface.jpg',
						},
						{
							heading: 'Setting Player Limits',
							content: 'Configure capacity for your sessions.',
							steps: [
								'When creating/editing session, set "Player Limit"',
								'Enter maximum number of players',
								'Choose what happens when full: close or waitlist',
								'Enable "Auto-promote from waitlist"',
								'Set waitlist notification preferences',
							],
						},
						{
							heading: 'How Waitlists Work',
							content: 'Waitlists automatically manage overflow players.',
							tips: [
								'Players join waitlist when session is full',
								'When spot opens, first waitlist person is notified',
								'They have 2 hours to claim the spot',
								'If declined, next person is notified',
								'Track waitlist position in real-time',
								'Export waitlist for manual management',
							],
						},
						{
							heading: 'Capacity Best Practices',
							content:
								'Calculate your limit based on courts and format. For round robin, use multiples of 4. Consider adding 1-2 extra spots to account for last-minute cancellations.',
						},
					],
					relatedArticles: [
						'creating-a-session',
						'requests-to-join',
						'removing-players',
					],
				},
			},
			{
				id: 'requests-to-join',
				title: 'Requests to join',
				slug: 'requests-to-join',
				content: {
					title: 'Requests to Join',
					description: 'Manage and approve player requests to join your sessions.',
					sections: [
						{
							heading: 'Approval Control',
							content:
								'Review player requests before they join to ensure skill matching and session quality.',
							image: '/join-request-approval.jpg',
						},
						{
							heading: 'Managing Requests',
							content: 'Stay in control of who joins your sessions.',
							steps: [
								'Enable "Require approval" in session settings',
								'Receive notification when someone requests to join',
								'View player profile, skill level, and DUPR rating',
								'Check session history and reviews',
								'Approve or deny with optional message',
								'Player receives notification of decision',
							],
						},
						{
							heading: 'Approval Criteria',
							content: 'Consider these factors when reviewing requests.',
							tips: [
								'Does skill level match session requirements?',
								'Do they have good reviews from other organizers?',
								'Have they attended your sessions before?',
								'Is their profile complete with photo?',
								'Do they meet any special session requirements?',
							],
						},
						{
							heading: 'Auto-Approval',
							content:
								'For trusted groups or open play, enable auto-approval so players can join instantly without waiting for manual review.',
						},
					],
					relatedArticles: [
						'public-vs-private',
						'player-limits-and-waitlisting',
						'creating-a-session',
					],
				},
			},
			{
				id: 'reserve-a-slot',
				title: 'Reserve a slot',
				slug: 'reserve-a-slot',
				content: {
					title: 'Reserve a Slot',
					description:
						'Hold spots for VIP players or guarantee your own participation.',
					sections: [
						{
							heading: 'Guaranteed Spots',
							content:
								'Reserve slots ensure certain players always have a spot, even when sessions fill up quickly.',
							image: '/reserved-slot-interface.jpg',
						},
						{
							heading: 'Creating Reserved Slots',
							content: "Set aside spots that don't fill through normal registration.",
							steps: [
								'Open session settings',
								'Click "Reserve Slots"',
								'Enter number of slots to reserve',
								'Assign to specific players (optional)',
								"These slots won't appear in available count",
								'Manually add players to reserved slots',
							],
						},
						{
							heading: 'Use Cases',
							content: 'Reserved slots work great for various scenarios.',
							tips: [
								'Guarantee spots for instructors or hosts',
								'Reserve for sponsors or VIP members',
								'Hold spots for players who always attend',
								'Keep slots for skill balance (e.g., advanced players)',
								'Ensure tournament bracket participants have spots',
							],
						},
						{
							heading: 'Reserved vs Regular Slots',
							content:
								'If you have 16 total spots and reserve 4, only 12 appear as available to regular players. You maintain complete control over the 4 reserved slots.',
						},
					],
					relatedArticles: [
						'player-limits-and-waitlisting',
						'create-a-player-list',
						'advanced-group-features',
					],
				},
			},
			{
				id: 'bulk-importing-players',
				title: 'Bulk Importing Players',
				slug: 'bulk-importing-players',
				content: {
					title: 'Bulk Importing Players',
					description:
						'Import large player lists from spreadsheets or previous sessions.',
					sections: [
						{
							heading: 'Add Multiple Players at Once',
							content:
								'Save time by importing entire player lists instead of adding them one by one.',
							image: '/bulk-import-interface.jpg',
						},
						{
							heading: 'Import from CSV',
							content: 'Upload a spreadsheet of player information.',
							steps: [
								'Prepare CSV file with columns: Name, Email, Phone (optional)',
								'Go to session player list',
								'Click "Import Players"',
								'Upload your CSV file',
								'Map columns to paddlX fields',
								'Review preview and click "Import"',
								'Players are added and receive invitations',
							],
						},
						{
							heading: 'Import from Previous Session',
							content: 'Quickly recreate the same player list from a past session.',
							tips: [
								'Open new session',
								'Click "Import from Session"',
								'Select previous session',
								'Choose "Import all" or select specific players',
								'Players are instantly added to new session',
								'Perfect for recurring events with consistent attendance',
							],
						},
						{
							heading: 'Import Best Practices',
							content:
								'Ensure emails are correct to avoid failed invitations. Clean your data before importing. Test with small batch first if working with hundreds of players.',
						},
					],
					relatedArticles: [
						'create-a-player-list',
						'exporting-player-lists',
						'inviting-players',
					],
				},
			},
			{
				id: 'removing-players',
				title: 'Removing players',
				slug: 'removing-players',
				content: {
					title: 'Removing Players',
					description:
						'Remove players from your session and handle refunds if needed.',
					sections: [
						{
							heading: 'Player Management',
							content:
								'Sometimes you need to remove players due to cancellations, behavior issues, or roster changes.',
							image: '/remove-player-interface.jpg',
						},
						{
							heading: 'How to Remove a Player',
							content: 'Remove players from your session roster.',
							steps: [
								'Go to session player list',
								'Find the player you want to remove',
								'Click the three-dot menu next to their name',
								'Select "Remove Player"',
								'Choose reason (optional)',
								'If they paid, decide whether to refund',
								'Confirm - player receives notification',
							],
						},
						{
							heading: 'Refund Handling',
							content: 'When removing paid players, consider your refund policy.',
							tips: [
								'Full refund if player cancels early',
								'Partial refund if within 24 hours',
								'No refund for no-shows (communicate this upfront)',
								'Always refund if YOU cancel the session',
								'Process refunds immediately to maintain trust',
							],
						},
						{
							heading: 'Waitlist Promotion',
							content:
								'When you remove a player, the next person on the waitlist is automatically notified if auto-promotion is enabled.',
						},
					],
					relatedArticles: [
						'refunds',
						'player-limits-and-waitlisting',
						'add-a-guest',
					],
				},
			},
			{
				id: 'add-a-guest',
				title: 'Add a guest',
				slug: 'add-a-guest',
				content: {
					title: 'Add a Guest',
					description:
						"Allow players to bring guests who don't have paddlX accounts.",
					sections: [
						{
							heading: 'Non-User Attendance',
							content:
								"Guests are players who attend your session but don't have paddlX accounts yet.",
							image: '/add-guest-player.jpg',
						},
						{
							heading: 'Adding a Guest',
							content: 'Let registered players bring friends or family.',
							steps: [
								'Go to session player list',
								'Click "Add Guest"',
								'Enter guest name and optional email',
								'Link guest to the registered player bringing them',
								'Set guest payment status if applicable',
								'Guest appears in player count',
								"They won't receive paddlX notifications",
							],
						},
						{
							heading: 'Guest Policies',
							content: 'Set clear guest rules for your sessions.',
							tips: [
								'Allow 1 guest per registered player',
								'Charge same or discounted rate for guests',
								'Require guest names 24 hours in advance',
								'First-time guest is free, then must register',
								'Count guests toward player limit',
							],
						},
						{
							heading: 'Converting Guests',
							content:
								'Encourage guests to create paddlX accounts to fully participate. Offer incentive like "Join paddlX and get your next session free."',
						},
					],
					relatedArticles: [
						'create-a-player-list',
						'collecting-payments',
						'removing-players',
					],
				},
			},
			{
				id: 'exporting-player-lists',
				title: 'Exporting player lists',
				slug: 'exporting-player-lists',
				content: {
					title: 'Exporting Player Lists',
					description:
						'Download player lists for record-keeping, analysis, or external use.',
					sections: [
						{
							heading: 'Data Export',
							content: 'Export your player lists to CSV or PDF for various purposes.',
							image: '/export-player-list.jpg',
						},
						{
							heading: 'How to Export',
							content: 'Download player information in multiple formats.',
							steps: [
								'Open session player list',
								'Click "Export" button',
								'Choose format: CSV (spreadsheet) or PDF (printable)',
								'Select which information to include',
								'Click "Download"',
								'File downloads to your device',
							],
						},
						{
							heading: 'Export Data Fields',
							content: 'Customize which player information to include.',
							tips: [
								'Name and contact information',
								'DUPR rating and skill level',
								'Payment status and amount',
								'Check-in time and attendance',
								'Player notes and preferences',
								'Group membership details',
							],
						},
						{
							heading: 'Use Cases',
							content:
								'Exports are useful for court sign-in sheets, liability waivers, email marketing lists, attendance tracking, and financial record-keeping.',
						},
					],
					relatedArticles: [
						'bulk-importing-players',
						'create-a-player-list',
						'creating-a-dupr-session',
					],
				},
			},
			{
				id: 'creating-a-dupr-session',
				title: 'Creating a DUPR session',
				slug: 'creating-a-dupr-session',
				content: {
					title: 'Creating a DUPR Session',
					description:
						'Connect your session to DUPR to submit official match results and update ratings.',
					sections: [
						{
							heading: 'Official Rating Integration',
							content:
								'DUPR (Dynamic Universal Pickleball Rating) is the global rating system. paddlX integrates directly so your match results count toward official ratings.',
							image: '/dupr-session-integration.jpg',
						},
						{
							heading: 'Setting Up DUPR Sessions',
							content: 'Enable DUPR tracking for your competitive sessions.',
							steps: [
								'Create or edit a session',
								'Toggle "DUPR Session" to ON',
								'Connect your DUPR organizer account (one-time setup)',
								'Session is marked as DUPR-eligible',
								'Record match scores during session',
								'Submit results to DUPR with one click',
								"Players' ratings update within 24-48 hours",
							],
						},
						{
							heading: 'DUPR Requirements',
							content: 'Not all sessions qualify for DUPR submission.',
							tips: [
								'Must be competitive format (not social/recreational)',
								'Complete match scores required (11-0, 11-5, etc.)',
								'Minimum 3 games per player pair recommended',
								'All players need DUPR accounts',
								'Results submitted within 7 days of session',
								'Organizer must have DUPR club account',
							],
						},
						{
							heading: 'Benefits',
							content:
								'DUPR integration attracts competitive players, adds legitimacy to your events, and helps players track improvement over time.',
						},
					],
					relatedArticles: [
						'creating-a-session',
						'exporting-player-lists',
						'public-vs-private',
					],
				},
			},
			{
				id: 'customizing-alerts',
				title: 'Customizing alerts',
				slug: 'customizing-alerts',
				content: {
					title: 'Customizing Alerts',
					description:
						'Configure when and how players receive notifications about your sessions.',
					sections: [
						{
							heading: 'Smart Notifications',
							content:
								'Keep players informed without overwhelming them with too many alerts.',
							image: '/notification-settings.jpg',
						},
						{
							heading: 'Alert Types',
							content: 'Configure different notification types for your sessions.',
							steps: [
								'Go to session settings > Notifications',
								'Enable/disable specific alert types',
								'Set timing for each notification',
								'Choose delivery method (push, email, SMS)',
								'Preview notifications before sending',
								'Save settings',
							],
						},
						{
							heading: 'Notification Options',
							content: 'Choose which alerts to send to players.',
							tips: [
								'Session created - immediate notification',
								'Session reminder - 24 hours before',
								'Last chance reminder - 2 hours before',
								'Session updated - immediate if details change',
								'Session canceled - immediate',
								'Payment reminder - 48 hours before deadline',
								'Waitlist promotion - immediate when spot opens',
							],
						},
						{
							heading: 'Best Practices',
							content:
								'Send 1-2 reminders maximum to avoid notification fatigue. Always notify immediately for cancellations or major changes. Let players customize their own preferences in settings.',
						},
					],
					relatedArticles: [
						'creating-a-session',
						'weekly-sessions',
						'requests-and-reminders',
					],
				},
			},
			{
				id: 'session-chat',
				title: 'Session chat',
				slug: 'session-chat',
				content: {
					title: 'Session Chat',
					description:
						'Communicate with all session attendees through dedicated chat.',
					sections: [
						{
							heading: 'Real-Time Communication',
							content:
								'Session chat keeps everyone connected before, during, and after your sessions.',
							image: '/session-chat-interface.jpg',
						},
						{
							heading: 'Using Session Chat',
							content: 'Chat is automatically created for each session.',
							steps: [
								'Open your session',
								'Click the "Chat" tab',
								'Type messages to all attendees',
								'Players receive notifications',
								'View message history anytime',
								'Chat remains active after session ends',
							],
						},
						{
							heading: 'Chat Features',
							content: 'Make the most of session chat.',
							tips: [
								'Pin important messages (court changes, parking info)',
								'Share photos during/after the session',
								'React to messages with emojis',
								'Mention specific players with @name',
								'Share documents like waiver forms',
								'Mute chat if it gets too active',
							],
						},
						{
							heading: 'Common Uses',
							content:
								'Use session chat for last-minute updates, weather changes, running late notices, sharing action photos, coordinating post-game meals, and building community.',
						},
					],
					relatedArticles: [
						'muting-a-chat',
						'group-chat',
						'sending-a-direct-message',
					],
				},
			},
			{
				id: 'muting-a-chat',
				title: 'Muting a chat',
				slug: 'muting-a-chat',
				content: {
					title: 'Muting a Chat',
					description:
						'Temporarily disable notifications from busy chats without leaving.',
					sections: [
						{
							heading: 'Control Your Notifications',
							content:
								'Mute chats when you need a break from notifications but still want to stay in the conversation.',
							image: '/mute-chat-settings.jpg',
						},
						{
							heading: 'How to Mute',
							content: 'Stop notifications while remaining in the chat.',
							steps: [
								'Open the session or group chat',
								'Click the three-dot menu',
								'Select "Mute notifications"',
								'Choose duration: 1 hour, 8 hours, 24 hours, or until unmuted',
								"Confirm - you'll stop receiving alerts",
								'Chat remains accessible, just no notifications',
							],
						},
						{
							heading: 'Mute vs Leave',
							content: 'Understand the difference between muting and leaving.',
							tips: [
								'Muting stops notifications but you stay in chat',
								'You can still read messages and respond',
								'Perfect for busy work days',
								'Leaving removes you completely from chat',
								'Organizers may not allow you to rejoin if you leave',
								'Muting is reversible anytime',
							],
						},
					],
					relatedArticles: ['session-chat', 'group-chat', 'customizing-alerts'],
				},
			},
			{
				id: 'sending-a-direct-message',
				title: 'Sending a direct message',
				slug: 'sending-a-direct-message',
				content: {
					title: 'Sending a Direct Message',
					description:
						'Send private messages to individual players outside of group chats.',
					sections: [
						{
							heading: 'Private Communication',
							content:
								'Direct messages let you have one-on-one conversations with players without cluttering group chats.',
							image: '/direct-message-interface.jpg',
						},
						{
							heading: 'Sending DMs',
							content: 'Message players privately about session-specific topics.',
							steps: [
								'Find the player in your session list or group',
								'Click their name to open profile',
								'Click "Send Message"',
								'Type your message',
								'Hit send - they receive a notification',
								'Conversation appears in your Messages tab',
							],
						},
						{
							heading: 'When to Use DMs',
							content: 'Direct messages are perfect for specific situations.',
							tips: [
								'Discussing payment or refund issues privately',
								'Addressing skill level concerns',
								'Coordinating carpools or meetups',
								'Following up on specific player questions',
								'Thanking regular attendees personally',
								'Resolving conflicts privately',
							],
						},
						{
							heading: 'DM Etiquette',
							content:
								'Keep direct messages professional and session-related. Players can report inappropriate messages. Respect response times - not everyone checks messages immediately.',
						},
					],
					relatedArticles: ['session-chat', 'group-chat', 'muting-a-chat'],
				},
			},
		],
	},
	{
		id: 'round-robin-tool',
		title: 'Round robin tool',
		slug: 'round-robin-tool',
		isExpandable: true,
		items: [
			{
				id: 'round-robin-overview',
				title: 'Round robin overview',
				slug: 'round-robin-overview',
				content: {
					title: 'Round Robin Overview',
					description:
						'Understand the basics of running a round robin tournament with paddlX.',
					sections: [
						{
							heading: 'What is a Round Robin?',
							content:
								"A round robin is a tournament format where each contestant meets all other contestants in turn. It's a great way to ensure everyone gets to play multiple games against a variety of opponents.",
							image: '/round-robin-diagram.jpg',
						},
						{
							heading: 'Why Use the paddlX Round Robin Tool?',
							content:
								'Our tool automates the complex parts of running a round robin, from generating schedules to tracking scores.',
							steps: [
								'Automatically creates balanced court assignments.',
								'Supports individuals, pairs, and teams.',
								'Live score tracking visible to all players.',
								'Seamlessly integrates with DUPR for score submission.',
								'Saves you hours of manual work.',
							],
						},
					],
					relatedArticles: [
						'setting-up-round-robin',
						'running-a-round-robin',
						'submitting-scores-to-dupr',
					],
				},
			},
			{
				id: 'setting-up-round-robin',
				title: 'Setting up your round robin',
				slug: 'setting-up-round-robin',
				content: {
					title: 'Setting Up Your Round Robin',
					description:
						'A step-by-step guide to configuring your round robin session.',
					sections: [
						{
							heading: 'Configuration Steps',
							content:
								'From the session creation page, select the "Round Robin" format to get started.',
							steps: [
								'Select "Round Robin" as the session format.',
								'Define the number of courts available.',
								'Set the number of rounds to be played.',
								'Choose the player format: singles, doubles, or team.',
								'Configure scoring rules (e.g., games to 11, win by 2).',
								'Enable DUPR integration if applicable.',
							],
							image: '/round-robin-setup-interface.jpg',
						},
					],
					relatedArticles: [
						'round-robin-overview',
						'running-a-round-robin',
						'team-sign-ups',
					],
				},
			},
			{
				id: 'running-a-round-robin',
				title: 'Running a round robin',
				slug: 'running-a-round-robin',
				content: {
					title: 'Running a Round Robin',
					description:
						'Manage the event on the day of play, from check-in to final scores.',
					sections: [
						{
							heading: 'Event Day Management',
							content:
								'The paddlX tool provides a live dashboard to manage the entire event.',
							steps: [
								'Check players in as they arrive.',
								'Generate the first round of matches with one click.',
								'Players are notified of their court and opponents.',
								'Enter scores as games finish.',
								"The tool automatically generates the next round's matchups.",
								'View the live leaderboard throughout the event.',
							],
							image: '/round-robin-live-dashboard.jpg',
						},
					],
					relatedArticles: [
						'setting-up-round-robin',
						'submitting-scores-to-dupr',
						'round-robin-overview',
					],
				},
			},
			{
				id: 'team-sign-ups',
				title: 'Team sign-ups',
				slug: 'team-sign-ups',
				content: {
					title: 'Team Sign-ups',
					description:
						'Learn how to manage team and partner registrations for your round robin.',
					sections: [
						{
							heading: 'Partner and Team Registration',
							content:
								'Allow players to sign up as pre-formed doubles pairs or teams.',
							steps: [
								'In session settings, enable "Allow Team Sign-ups".',
								'Players can invite a partner or team members when they register.',
								'The system keeps teams together for all matches.',
								'Ideal for doubles leagues and competitive tournaments.',
							],
						},
					],
					relatedArticles: ['setting-up-round-robin', 'running-a-round-robin'],
				},
			},
			{
				id: 'submitting-scores-to-dupr',
				title: 'Submitting scores to DUPR',
				slug: 'submitting-scores-to-dupr',
				content: {
					title: 'Submitting Scores to DUPR',
					description:
						'Seamlessly submit all match scores from your round robin to DUPR.',
					sections: [
						{
							heading: 'One-Click DUPR Submission',
							content: 'If you enabled DUPR integration, submitting scores is simple.',
							steps: [
								'After the final round, navigate to the "Results" tab.',
								'Review all entered scores for accuracy.',
								'Click the "Submit to DUPR" button.',
								'paddlX formats and sends all match data automatically.',
								"Players' ratings are updated within 24-48 hours.",
							],
							image: '/dupr-submission-button.jpg',
						},
					],
					relatedArticles: [
						'creating-a-dupr-session',
						'round-robin-overview',
						'running-a-round-robin',
					],
				},
			},
		],
	},
	{
		id: 'groups',
		title: 'Groups',
		slug: 'groups',
		isExpandable: true,
		items: [
			{
				id: 'purpose-of-groups',
				title: 'The purpose of groups',
				slug: 'the-purpose-of-groups',
				content: {
					title: 'The Purpose of Groups',
					description:
						'Understand how groups help you build and manage your pickleball community.',
					sections: [
						{
							heading: 'What Are Groups?',
							content:
								'Groups are the foundation of your pickleball community on paddlX. They allow you to organize players, communicate effectively, and manage recurring sessions all in one place.',
							image: '/groups-overview-dashboard.jpg',
						},
						{
							heading: 'Why Create a Group?',
							content:
								'Groups provide a central hub for your pickleball community, making it easy to stay connected and organized.',
							steps: [
								'Build a roster of regular players',
								'Send announcements to everyone at once',
								'Create sessions exclusively for group members',
								'Foster community through group chat',
								'Track attendance and player engagement',
							],
						},
						{
							heading: 'Types of Groups',
							content:
								'paddlX groups are flexible and work for any type of pickleball community.',
							tips: [
								'Drop-in play groups for casual weekly games',
								'Club or league groups for competitive play',
								'Private groups for friends and family',
								'Tournament organizing committees',
								'Corporate or community center programs',
							],
						},
					],
					relatedArticles: [
						'inviting-players-to-a-group',
						'creating-a-session',
						'group-chat',
					],
				},
			},
			{
				id: 'inviting-players-to-a-group',
				title: 'Inviting players to a group',
				slug: 'inviting-players-to-a-group',
				content: {
					title: 'Inviting Players to a Group',
					description:
						'Learn the different ways to invite players to join your paddlX group.',
					sections: [
						{
							heading: 'Multiple Invitation Methods',
							content:
								'paddlX offers several ways to grow your group, from direct invites to shareable links.',
							image: '/group-invitation-methods.jpg',
						},
						{
							heading: 'Direct Player Invites',
							content:
								'Search for existing paddlX users and send them direct invitations.',
							steps: [
								'Go to your group page',
								'Click "Invite Players"',
								'Search by name, email, or username',
								'Select players from search results',
								'Click "Send Invites" - they\'ll receive notifications',
							],
						},
						{
							heading: 'Share Group Link',
							content:
								'Generate a unique link that anyone can use to request to join your group.',
							steps: [
								'Navigate to Group Settings',
								'Click "Generate Invite Link"',
								'Copy and share the link via text, email, or social media',
								'Players click the link and request to join',
								'You approve or deny requests',
							],
						},
						{
							heading: 'QR Code Invites',
							content: 'Perfect for in-person recruitment at courts or events.',
							tips: [
								'Generate QR code in Group Settings',
								'Download and print for display at your court',
								'Players scan with their phone camera',
								'Instant access to your group page',
								'They can request to join immediately',
							],
						},
					],
					relatedArticles: [
						'the-purpose-of-groups',
						'requests-to-join',
						'link-invites',
					],
				},
			},
			{
				id: 'group-chat',
				title: 'Group chat',
				slug: 'group-chat',
				content: {
					title: 'Group Chat',
					description:
						'Communicate with all your group members in one centralized chat.',
					sections: [
						{
							heading: 'Stay Connected',
							content:
								'Group chat keeps everyone in the loop about sessions, schedule changes, and general announcements.',
							image: '/group-chat-interface.jpg',
						},
						{
							heading: 'Using Group Chat',
							content:
								'Access group chat directly from your group page to communicate with all members.',
							steps: [
								'Open your group page',
								'Click the "Chat" tab',
								'Type your message and hit send',
								'All group members receive notifications',
								'View message history anytime',
							],
						},
						{
							heading: 'Chat Features',
							content:
								'Group chat includes helpful features for organizers and members.',
							tips: [
								'Pin important announcements to the top',
								'React to messages with emojis',
								'Mention specific players with @username',
								'Share photos from your sessions',
								'Mute notifications if needed',
							],
						},
						{
							heading: 'Best Practices',
							content:
								'Use group chat for session announcements, court updates, and building community. Keep conversation friendly and on-topic to maintain engagement.',
						},
					],
					relatedArticles: [
						'session-chat',
						'muting-a-chat',
						'the-purpose-of-groups',
					],
				},
			},
			{
				id: 'advanced-group-features',
				title: 'Advanced group features',
				slug: 'advanced-group-features',
				content: {
					title: 'Advanced Group Features',
					description:
						'Unlock powerful group management tools for experienced organizers.',
					sections: [
						{
							heading: 'Power User Tools',
							content:
								'Take your group management to the next level with these advanced features.',
							image: '/advanced-group-settings.jpg',
						},
						{
							heading: 'Custom Roles & Permissions',
							content:
								'Delegate responsibilities by creating custom roles within your group.',
							steps: [
								'Go to Group Settings > Roles',
								'Create custom roles (e.g., "Court Captain", "Treasurer")',
								'Assign permissions (create sessions, manage members, etc.)',
								'Assign roles to specific members',
								'Track role activities in audit log',
							],
						},
						{
							heading: 'Automated Session Templates',
							content: 'Create templates for recurring sessions to save time.',
							tips: [
								'Set default session times, locations, and player limits',
								'Pre-configure payment amounts and rules',
								'Auto-apply templates when creating new sessions',
								'Edit templates anytime to update future sessions',
								'Perfect for consistent weekly drop-in play',
							],
						},
						{
							heading: 'Member Tiers',
							content:
								'Create membership tiers (free, premium, VIP) with different benefits like priority registration, discounted fees, or exclusive sessions.',
						},
						{
							heading: 'Analytics Dashboard',
							content:
								'Track group growth, session attendance rates, revenue, and member engagement over time with detailed analytics.',
						},
					],
					relatedArticles: [
						'the-purpose-of-groups',
						'weekly-sessions',
						'collecting-payments',
					],
				},
			},
			{
				id: 'requests-and-reminders',
				title: 'Requests & reminders',
				slug: 'requests-and-reminders',
				content: {
					title: 'Requests & Reminders',
					description:
						'Manage join requests and set up automatic reminders for your group.',
					sections: [
						{
							heading: 'Managing Join Requests',
							content:
								"When players request to join your group, you'll receive notifications to approve or deny them.",
							image: '/join-requests-management.jpg',
						},
						{
							heading: 'Handling Requests',
							content:
								'Review and respond to join requests quickly to grow your group.',
							steps: [
								'Receive notification of new join request',
								'View player profile and skill level',
								'Check if they meet any group requirements',
								'Approve to add them to the group',
								'Or deny with optional message explaining why',
							],
						},
						{
							heading: 'Automatic Reminders',
							content:
								'Set up automated reminders to keep players engaged and attendance high.',
							tips: [
								'Session reminders 24 hours before',
								'Last-minute reminders 2 hours before',
								'Payment deadline reminders',
								'Weekly digest of upcoming sessions',
								'Customize reminder timing and frequency',
							],
						},
						{
							heading: 'Reminder Best Practices',
							content:
								"Don't over-remind - find the right balance. Most groups find success with one reminder 24 hours before and another 2-4 hours before sessions.",
						},
					],
					relatedArticles: [
						'inviting-players-to-a-group',
						'customizing-alerts',
						'the-purpose-of-groups',
					],
				},
			},
			{
				id: 'deleting-a-group',
				title: 'Deleting a group',
				slug: 'deleting-a-group',
				content: {
					title: 'Deleting a Group',
					description:
						'Learn how to permanently delete a group and what happens to group data.',
					sections: [
						{
							heading: 'Before You Delete',
							content:
								'Deleting a group is permanent and cannot be undone. Make sure this is what you want to do.',
							image: '/delete-group-warning.jpg',
						},
						{
							heading: 'What Gets Deleted',
							content:
								'When you delete a group, the following data is permanently removed:',
							steps: [
								'All group member associations',
								'Group chat history',
								'Group settings and preferences',
								'Upcoming sessions (players will be notified)',
								'Group invitation links and QR codes',
							],
						},
						{
							heading: 'What Gets Kept',
							content: 'Some data is preserved for record-keeping and player history.',
							tips: [
								'Past session history remains in player profiles',
								'Payment records are retained per legal requirements',
								'Individual player accounts remain active',
								'Historical statistics and analytics',
								'DUPR rating submissions are not affected',
							],
						},
						{
							heading: 'How to Delete',
							content:
								"Only group admins can delete groups. Go to Group Settings > Advanced > Delete Group. You'll need to type the group name to confirm deletion. All members will receive a notification.",
						},
					],
					relatedArticles: ['the-purpose-of-groups', 'removing-players'],
				},
			},
		],
	},
	{
		id: 'payments',
		title: 'Payments',
		slug: 'payments',
		isExpandable: true,
		items: [
			{
				id: 'collecting-payments',
				title: 'Collecting payments',
				slug: 'collecting-payments',
				content: {
					title: 'Collecting Payments',
					description:
						'Learn how to collect payments from players for your sessions using paddlX integrated payment system.',
					sections: [
						{
							heading: 'Getting Started with Payments',
							content:
								"paddlX makes it easy to collect session fees from players. Once you've set up your Stripe account, you can start accepting payments immediately.",
							image: '/payment-collection-interface.jpg',
						},
						{
							heading: 'How to Enable Payments for a Session',
							content:
								'When creating or editing a session, you can set the session price and payment requirements.',
							steps: [
								'Navigate to your session details',
								'Toggle "Require payment" to ON',
								'Enter the session price (e.g., $10.00)',
								'Choose payment deadline (before session or pay-as-you-go)',
								'Save your changes',
							],
						},
						{
							heading: 'Payment Processing',
							content:
								"When players join a paid session, they'll be prompted to complete payment through Stripe. Funds are automatically transferred to your connected Stripe account within 2-7 business days.",
							tips: [
								'Set clear payment deadlines to avoid no-shows',
								'Consider offering early-bird pricing for advance payments',
								'Enable automatic reminders for unpaid registrations',
								'Stripe handles all payment processing securely',
							],
						},
						{
							heading: 'Managing Paid Sessions',
							content:
								"Track payment status for all players in your session dashboard. You'll see who has paid, who hasn't, and total revenue at a glance.",
						},
					],
					relatedArticles: ['setting-up-stripe', 'refunds', 'paying-for-a-session'],
				},
			},
			{
				id: 'paying-for-a-session',
				title: 'Paying for a session',
				slug: 'paying-for-a-session',
				content: {
					title: 'Paying for a Session',
					description:
						'A guide for players on how to pay for sessions they want to join.',
					sections: [
						{
							heading: 'How Players Pay',
							content:
								"When you join a paid session, you'll be prompted to complete payment before your spot is confirmed.",
							image: '/player-payment-flow.jpg',
						},
						{
							heading: 'Payment Steps',
							content: 'The payment process is quick and secure through Stripe.',
							steps: [
								'Join the session by clicking "Join Session"',
								'Review the session price and details',
								'Enter your payment information (saved for future sessions)',
								'Complete payment to confirm your spot',
								'Receive confirmation email with receipt',
							],
						},
						{
							heading: 'Payment Methods',
							content:
								'paddlX accepts all major credit and debit cards through Stripe, including Visa, Mastercard, American Express, and Discover.',
							tips: [
								'Your payment information is securely stored by Stripe',
								'Future payments are one-click easy',
								"You'll receive email receipts for all transactions",
								'Contact the organizer for payment issues or questions',
							],
						},
					],
					relatedArticles: ['collecting-payments', 'refunds', 'requests-to-join'],
				},
			},
			{
				id: 'setting-up-stripe',
				title: 'Setting up Stripe',
				slug: 'setting-up-stripe',
				content: {
					title: 'Setting up Stripe',
					description:
						'Connect your Stripe account to start collecting payments on paddlX.',
					sections: [
						{
							heading: 'Why Stripe?',
							content:
								"Stripe is the world's most trusted payment processor, handling billions in transactions securely. paddlX uses Stripe to ensure your payments are safe and reliable.",
							image: '/stripe-integration-setup.jpg',
						},
						{
							heading: 'Connecting Your Stripe Account',
							content:
								'Setting up Stripe takes just a few minutes and requires some basic business information.',
							steps: [
								'Go to Settings > Payments in paddlX',
								'Click "Connect with Stripe"',
								'Create a Stripe account or sign in to existing',
								"Complete Stripe's onboarding (business info, bank details)",
								"Return to paddlX - you're ready to accept payments!",
							],
						},
						{
							heading: "What You'll Need",
							content: 'To complete Stripe setup, have the following ready:',
							tips: [
								'Your Social Security Number (SSN) or EIN',
								'Bank account information for deposits',
								'Business address and phone number',
								'Government-issued ID for verification',
							],
						},
						{
							heading: 'Stripe Fees',
							content:
								'Stripe charges 2.9% + $0.30 per successful transaction. These fees are automatically deducted before funds reach your account. paddlX does not charge additional payment processing fees.',
						},
					],
					relatedArticles: ['collecting-payments', 'refunds'],
				},
			},
			{
				id: 'refunds',
				title: 'Refunds',
				slug: 'refunds',
				content: {
					title: 'Refunds',
					description:
						'Learn how to process refunds for canceled sessions or player withdrawals.',
					sections: [
						{
							heading: 'Issuing Refunds',
							content:
								'As an organizer, you have full control over refunds. You can issue full or partial refunds directly through paddlX.',
							image: '/refund-processing-interface.jpg',
						},
						{
							heading: 'How to Process a Refund',
							content: 'Refunds can be issued from your session player list.',
							steps: [
								'Navigate to your session details',
								'Find the player in your player list',
								'Click the three-dot menu next to their name',
								'Select "Issue Refund"',
								'Choose full or partial refund amount',
								'Confirm refund - funds return in 5-10 business days',
							],
						},
						{
							heading: 'Refund Policies',
							content:
								'Consider setting clear refund policies for your sessions to manage expectations.',
							tips: [
								'Communicate your refund policy in session descriptions',
								'Common policy: Full refund if canceled 24+ hours before',
								'Consider no refunds for no-shows',
								'Be flexible for emergencies to build goodwill',
								'Stripe fees are not refunded by Stripe',
							],
						},
						{
							heading: 'Automatic Refunds',
							content:
								'If you cancel a session, paddlX can automatically refund all paid players. Simply check "Refund all players" when canceling the session.',
						},
					],
					relatedArticles: [
						'collecting-payments',
						'setting-up-stripe',
						'removing-players',
					],
				},
			},
		],
	},
];
