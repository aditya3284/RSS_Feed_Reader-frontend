import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, NotFound404 } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound404 />,
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
