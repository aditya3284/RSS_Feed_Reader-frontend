import {
	Clock,
	Express,
	FilledHeart,
	History,
	Home,
	Library,
	MongoDB,
	Mongoose,
	NodeJs,
	React,
	ReactRouter,
	TailwindCSS,
	benefit_Icon1,
	benefit_Icon2,
	benefit_Icon3,
	benefit_Icon4,
	discordBlack,
	discordColor,
	facebook,
	heroPeep_1,
	heroPeep_2,
	instagram,
	notionColor,
	telegram,
	twitter,
	youtubeColor,
} from "../assests";

const navigation = [
	{
		id: "0",
		title: "Dashboard",
		url: "/dashboard/home",
	},
	{
		id: "1",
		title: "Pricing",
		url: "/pricing",
	},
	{
		id: "2",
		title: "Roadmap",
		url: "/roadmap",
	},
	{
		id: "3",
		title: "New account",
		url: "/signup",
		onlyMobile: true,
	},
	{
		id: "4",
		title: "Log in",
		url: "/login",
		onlyMobile: true,
	},
];

const socials = [
	{
		id: "0",
		title: "Discord",
		iconUrl: discordBlack,
		url: "#",
	},
	{
		id: "1",
		title: "Twitter",
		iconUrl: twitter,
		url: "#",
	},
	{
		id: "2",
		title: "Instagram",
		iconUrl: instagram,
		url: "#",
	},
	{
		id: "3",
		title: "Telegram",
		iconUrl: telegram,
		url: "#",
	},
	{
		id: "4",
		title: "Facebook",
		iconUrl: facebook,
		url: "#",
	},
];

const thirdPartyIntegrations = {
	title: "FeedReader with seamless integrations",
	descriptionText:
		"With easy integration and top-notch quality, perfect solution for individuals looking to work smarter.",
	content: [
		{
			id: "0",
			title: "Seamless Integration",
			text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
		},
		{
			id: "1",
			title: "Smart Automation",
		},
		{
			id: "2",
			title: "Top-notch Quality",
		},
	],
	applications: [
		{
			id: 0,
			title: "Notion",
			icon: notionColor,
			availabilityStatus: "Coming Soon",
			width: 40,
			height: 36,
		},
		{
			id: 1,
			title: "Discord",
			icon: discordColor,
			availabilityStatus: "Coming Soon",
			width: 40,
			height: 48,
		},
		{
			id: 2,
			title: "YouTube",
			icon: youtubeColor,
			availabilityStatus: "Coming Soon",
			width: 45,
			height: 35,
		},
	],
};

const frequentlyAskedQuestions = [
	{
		id: 0,
		title: "How do I unsubscribe from a feed?",
		content:
			"To unsubscribe from a feed, go to your library section in your dashboard, find the feed you want to remove, and select the option to delete. This will stop updates from that feed and remove it from your list.",
	},
	{
		id: 1,
		title: "How do I set up my feed reader?",
		content:
			"To set up your feed reader, simply sign up for an account, add the URLs of the feeds you want to follow, and the reader will automatically fetch and display new content from those sources. Feed readers provide a simple interface for adding and managing feeds.",
	},
	{
		id: 2,
		title: "Is my data secure with your feed reader?",
		content:
			"Yes, we prioritize your privacy and data security. We use methods to protect your data and ensure that your feed subscriptions and reading habits remain confidential. We do not share your information with third parties.",
	},
	{
		id: 3,
		title: "Can I access my feed reader on mobile devices?",
		content:
			"Yes, our feed reader is compatible with mobile devices. You can access and manage your feeds through ourr responsive website, ensuring you can stay updated on the go.",
	},
	{
		id: 4,
		title: "What should I do if I encounter issues with feeds not updating?",
		content:
			"If you experience problems with feeds not updating, try refreshing the feed or checking the feed URL for any errors. You can also clear your cache or contact our support team for assistance if the issue persists.",
	},
	{
		id: 5,
		title: "Are there any limits to the number of feeds I can subscribe to?",
		content:
			"Our free plan allows you to subscribe to a generous number of feeds. If you need to follow more feeds or require additional features, we will soon offer plans with expanded capabilities and additional support.",
	},
];

const milestones = [
	{
		id: 0,
		date: "Q3 2024",
		title: "Initial Release",
		description:
			"Launch the basic version of the feed reader with essential features.",
	},
	{
		id: 1,
		date: "Q4 2024",
		title: "Enhanced Filtering",
		description:
			"Introduce advanced filtering options to improve content categorization.",
	},
	{
		id: 2,
		date: "Q1 2025",
		title: "Tagging for Feeds",
		description: "A tagging system to help you better manage your feeds.",
	},
	{
		id: 3,
		date: "Q2 2025",
		title: "Group feeds",
		description:
			"Easily group related articles and topics for a more streamlined reading experience.",
	},
	{
		id: 4,
		date: "Q3 2025",
		title: "Sync Across Devices",
		description:
			"Never lose your place again. Sync your posts across all your devices for seamless reading.",
	},
	{
		id: 5,
		date: "Q4 2025",
		title: "Social Sharing",
		description:
			"Make it easier than ever to share your favorite posts with friends, family, and colleagues.",
	},
];

const technologyUsed = [
	{ id: 0, icon: MongoDB, title: "MongoDB" },
	{ id: 1, icon: Express, title: "Express.js" },
	{ id: 2, icon: React, title: "React" },
	{ id: 3, icon: NodeJs, title: "NodeJS" },
	{ id: 4, icon: TailwindCSS, title: "Tailwind CSS" },
	{ id: 5, icon: Mongoose, title: "Mongoose ODM" },
	{ id: 6, icon: ReactRouter, title: "React Router" },
];

const pricing = [
	{
		id: "0",
		title: "Basic",
		price: "0",
		features: [
			"An feed reader that can understand your needs",
			"Personalized feed based on your preferences",
			"Ability to explore the app and its features without any cost",
		],
	},
	{
		id: "1",
		title: "Premium",
		price: "6.99",
		features: [
			"An advanced feed reader that can fulfil complex needs",
			"An analytics dashboard to track your choosen feeds",
			"Priority support to solve issues quickly",
		],
	},
	{
		id: "2",
		title: "Enterprise",
		price: 9.99,
		features: [
			"An feed reader that can understand your needs",
			"Personalized feed boards based on your preferences",
			"Ability to explore the app and all its features without any hustle",
		],
	},
];

const features = [
	{
		id: "0",
		title: "Add topics",
		text: "Lets users quickly find their information without having to search through multiple platforms.",
		iconUrl: benefit_Icon2,
		imageUrl: "",
	},
	{
		id: "1",
		title: "Fresh everyday",
		text: "The app provides updated content on every topic of your choice, without any middle-man.",
		iconUrl: benefit_Icon1,
		imageUrl: "",
	},
	{
		id: "2",
		title: "Connect everywhere",
		text: "Connect with the from anywhere, on any device, making it more accessible and convenient.",
		iconUrl: benefit_Icon3,
		imageUrl: "",
	},
	{
		id: "3",
		title: "Fast responding",
		text: "Lets users quickly find their information without having to search through multiple platforms.",
		iconUrl: benefit_Icon1,
		imageUrl: "",
	},
	{
		id: "4",
		title: "Improve everyday",
		text: "The app provides updated content on every topic of your choice, without any middle-man.",
		iconUrl: benefit_Icon4,
		imageUrl: "",
	},
	{
		id: "5",
		title: "Reduce Hastle",
		text: "Connect with the from anywhere, on any device, making it more accessible and convenient.",
		iconUrl: benefit_Icon2,
		imageUrl: "",
	},
];

const sideNavItems = [
	{
		id: "home",
		icon: Home,
		size: {
			width: 25,
			height: 25,
		},
		label: "Home",
		link: "/dashboard/home",
	},
	{
		id: "history",
		icon: History,
		size: {
			width: 25,
			height: 25,
		},
		label: "History",
		link: "/dashboard/history",
	},
	{
		id: "recent",
		icon: Clock,
		size: {
			width: 25,
			height: 25,
		},
		label: "Recent",
		link: "/dashboard/recent",
	},
	{
		id: "liked",
		icon: FilledHeart,
		size: {
			width: 25,
			height: 25,
		},
		label: "Liked",
		link: "/dashboard/liked",
	},
	{
		id: "library",
		icon: Library,
		size: {
			width: 25,
			height: 25,
		},
		label: "Library",
		link: "/dashboard/library",
	},
];

const dummyFeedItemData = [
	{
		id: 0,
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		thumbnail: heroPeep_1,
	},
	{
		id: 1,
		title: "Perspiciatis neque repellendus nihil officia ipsum non quo",
		thumbnail: heroPeep_2,
	},
	{
		id: 2,
		title: "Quis dolores magnam earum in",
		thumbnail: heroPeep_1,
	},
	{
		id: 3,
		title: "Dolor totam dignissimos et vel facilis exercitationem",
		thumbnail: heroPeep_2,
	},
	{
		id: 4,
		title: "Necessitatibus, est aliquid iure qui velit quas!",
		thumbnail: heroPeep_1,
	},
	{
		id: 5,
		title: "Voluptatem possimus deleniti et praesentium!",
		thumbnail: heroPeep_2,
	},
	{
		id: 6,
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		thumbnail: heroPeep_1,
	},
	{
		id: 7,
		title: "Quis dolores magnam earum in",
		thumbnail: heroPeep_2,
	},
	{
		id: 8,
		title: "Dolor totam dignissimos et vel facilis exercitationem",
		thumbnail: heroPeep_1,
	},
];

const profileSideNav = [
	{ id: 0, label: "Account", link: "/profile/account", onlyMobile: false },
	{
		id: 1,
		label: "Subscription",
		link: "/profile/subscription",
		onlyMobile: false,
	},
	{
		id: 2,
		label: "Notification",
		link: "/profile/notification",
		onlyMobile: false,
	},
	{ id: 3, label: "Logout", link: "/logout", onlyMobile: true },
];

const profileNotificationList = [
	{
		id: "marketing",
		label:
			"marketing Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque?",
	},
	{
		id: "others",
		label:
			"Other Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nostrum, laborum!",
	},
	{
		id: "oki-dokie",
		label:
			"okie-dokie Lorem ipsum dolor sit amet consectetur adipisicing. elit Repudiandae.",
	},
	{
		id: "walking",
		label:
			"walking Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium.",
	},
	{
		id: "momo",
		label:
			"momo Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit.",
	},
];

export {
	dummyFeedItemData,
	features,
	frequentlyAskedQuestions,
	milestones,
	navigation,
	pricing,
	profileNotificationList,
	profileSideNav,
	sideNavItems,
	socials,
	technologyUsed,
	thirdPartyIntegrations,
};
