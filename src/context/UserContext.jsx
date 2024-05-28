import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

const UserContext = createContext(undefined);

const UserReducer = (state, action) => {
	switch (action.type) {
		case "login":
			return { user: action.payload, authed: true };
		case "modify":
			return { user: action.payload, authed: true };
		case "logout":
			localStorage.removeItem("user");
			return { user: null, authed: false };
		default:
			return state;
	}
};

const UserContextProvider = ({ children }) => {
	const loggedInUser = JSON.parse(localStorage.getItem("user"));
	
	const [state, dispatch] = useReducer(UserReducer, {
		user: loggedInUser,
		authed: !!loggedInUser,
	});

	console.log(state);
	return (
		<UserContext.Provider value={{ ...state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};

UserContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { UserContext, UserContextProvider };
