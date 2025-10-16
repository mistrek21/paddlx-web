// src/app/_data/video-data.ts

export interface Video {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
	duration: string;
	youtubeId: string;
	category: 'Beginner' | 'Strategy' | 'Drills';
}

export const videoData: Video[] = [
	{
		id: 'beginner-clinic',
		title: 'How To Play Pickleball: Free Virtual Clinic for Beginners',
		description:
			'Our complete 12-minute guide covering all the essential rules, scoring, and basic techniques you need to play your first game.',
		thumbnail: '/pickleball-clinic-instructor-teaching-beginners.jpg',
		duration: '12:45',
		youtubeId: 'L_h_S12K_sQ', // Example YouTube ID
		category: 'Beginner',
	},
	{
		id: 'third-shot-drop',
		title: 'Master the Third Shot Drop: A 5-Minute Tutorial',
		description:
			'The third shot drop is the most important shot in pickleball. This quick tutorial breaks down the technique to help you get to the net.',
		thumbnail: '/pickleball-player-hitting-drop-shot.jpg', // You would add this image to your /public folder
		duration: '5:32',
		youtubeId: 'yhpL0m7vjBw', // Example YouTube ID
		category: 'Strategy',
	},
	{
		id: 'dinking-drills',
		title: 'Top 3 Dinking Drills You Can Do with a Partner',
		description:
			'Improve your soft game and kitchen line strategy with these three effective dinking drills that build control and consistency.',
		thumbnail: '/pickleball-players-dinking-at-net.jpg', // You would add this image to your /public folder
		duration: '8:15',
		youtubeId: 'f2c7p_xY34M', // Example YouTube ID
		category: 'Drills',
	},
];
