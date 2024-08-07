import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import {
	Account,
	Blog,
	Dashboard,
	DashboardHome,
	Feed,
	FeedItem,
	History,
	Home,
	Integrations,
	Library,
	Liked,
	LogIn,
	NotFound404,
	Notification,
	Pricing,
	Profile,
	Recent,
	Roadmap,
	SignUp,
	Subscription,
} from "./pages";
import { loader as feedLoader } from "./pages/Feed";
import { loader as feedItemLoader } from "./pages/FeedItem";
import { loader as HistoryDashboardLoader } from "./pages/dashboard/History";
import DashboardIndex from "./pages/dashboard/Index";
import { loader as RecentDashboardLoader } from "./pages/dashboard/Recent";
import { loader as AccountDashboardLoader } from "./pages/profile/Account";
import ProfileIndex from "./pages/profile/Index";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound404 />,
	},
	{
		path: "/login",
		element: <LogIn />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/dashboard",
		element: (
			<ProtectedRoute>
				<Dashboard />
			</ProtectedRoute>
		),
		children: [
			{ index: true, element: <DashboardIndex /> },
			{
				path: "/dashboard/home",
				element: <DashboardHome />,
			},
			{
				path: "/dashboard/history",
				element: <History />,
				loader: HistoryDashboardLoader,
			},
			{
				path: "/dashboard/recent",
				element: <Recent />,
				loader: RecentDashboardLoader,
			},
			{
				path: "/dashboard/liked",
				element: <Liked />,
			},
			{
				path: "/dashboard/library",
				element: <Library />,
			},
		],
	},
	{
		path: "/profile",
		element: (
			<ProtectedRoute>
				<Profile />
			</ProtectedRoute>
		),
		children: [
			{ index: true, element: <ProfileIndex /> },
			{
				path: "/profile/account",
				element: <Account />,
				loader: AccountDashboardLoader,
			},
			{
				path: "/profile/subscription",
				element: <Subscription />,
			},
			{
				path: "/profile/notification",
				element: <Notification />,
			},
		],
	},
	{
		path: "/feed-items/:feedItemID",
		element: <FeedItem />,
		loader: feedItemLoader,
	},
	{
		path: "/feeds/:feedID",
		element: <Feed />,
		loader: feedLoader,
	},
	{
		path: "/integrations",
		element: <Integrations />,
	},
	{
		path: "/pricing",
		element: <Pricing />,
	},
	{
		path: "/roadmap",
		element: <Roadmap />,
	},
	{
		path: "/blog",
		element: <Blog />,
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
