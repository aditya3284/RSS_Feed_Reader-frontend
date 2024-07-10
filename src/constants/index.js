import {
	Clock,
	FilledHeart,
	History,
	Home,
	Library,
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
		title: "Blog",
		url: "/blog",
	},
	{
		id: "3",
		title: "Roadmap",
		url: "/roadmap",
	},
	{
		id: "4",
		title: "New account",
		url: "/signup",
		onlyMobile: true,
	},
	{
		id: "5",
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

const pricing = [
	{
		id: "0",
		title: "Basic",
		description: "AI chatbot, personalized recommendations",
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
		description: "Advanced AI chatbot, priority support, analytics dashboard",
		price: "9.99",
		features: [
			"An advanced feed reader that can fulfil complex needs",
			"An analytics dashboard to track your choosen feeds",
			"Priority support to solve issues quickly",
		],
	},
	{
		id: "2",
		title: "Enterprise",
		description: "Custom AI chatbot, advanced analytics, dedicated account",
		price: null,
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
	{ id: 0, label: "Account", link: "/profile/account" },
	{ id: 1, label: "Subscription", link: "/profile/subscription" },
	{ id: 2, label: "Notification", link: "/profile/notification" },
];

export {
	dummyFeedItemData,
	features,
	navigation,
	pricing,
	profileSideNav,
	sideNavItems,
	socials,
	thirdPartyIntegrations,
};
