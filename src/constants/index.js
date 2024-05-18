import {
	benefit_Icon1,
	benefit_Icon2,
	benefit_Icon3,
	benefit_Icon4,
	discordBlack,
	facebook,
	instagram,
	telegram,
	twitter,
} from "../assests";

const navigation = [
	{
		id: "0",
		title: "Features",
		url: "#features",
	},
	{
		id: "1",
		title: "Pricing",
		url: "#pricing",
	},
	{
		id: "2",
		title: "How to use",
		url: "#how-to-use",
	},
	{
		id: "3",
		title: "Roadmap",
		url: "#roadmap",
	},
	{
		id: "4",
		title: "New account",
		url: "#signup",
		onlyMobile: true,
	},
	{
		id: "5",
		title: "Sign in",
		url: "#login",
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

export { features, navigation, socials };
