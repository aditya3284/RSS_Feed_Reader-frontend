import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import {
	Blog,
	Dashboard,
	DashboardHome,
	History,
	Home,
	Integrations,
	LogIn,
	NotFound404,
	Pricing,
	Profile,
	Roadmap,
	SignUp,
} from "./pages";
import { loader as HistoryDashboardLoader } from "./pages/dashboard/History";

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
			{
				path: "/dashboard/home",
				element: <DashboardHome />,
			},
			{
				path: "/dashboard/history",
				element: <History />,
				loader: HistoryDashboardLoader,
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
