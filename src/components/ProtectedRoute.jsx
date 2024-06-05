import PropTypes from "prop-types";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
	const authed = useLoaderData();
	const location = useLocation();

	return authed ? (
		children
	) : (
		<Navigate to='/login' replace={true} state={{ path: location.pathname }} />
	);
};

export const loader = () => {
	return Boolean(localStorage.getItem("user"));
};

ProtectedRoute.propTypes = {
	children: PropTypes.node,
};

export default ProtectedRoute;
