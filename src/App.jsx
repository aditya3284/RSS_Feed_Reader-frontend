import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	Blog,
	Dashboard,
	Home,
	Integrations,
	LogIn,
	NotFound404,
	Pricing,
	Roadmap,
	SignUp,
} from "./pages";

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
		element: <Dashboard />,
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
