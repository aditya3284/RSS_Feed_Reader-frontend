import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
const ProtectedRoute = ({ children }) => {
	const { authed } = useUserContext();
	const location = useLocation();

	return authed ? (
		children
	) : (
		<Navigate to='/login' replace={true} state={{ path: location.pathname }} />
	);
};

ProtectedRoute.propTypes = {
	children: PropTypes.node,
};

export default ProtectedRoute;
