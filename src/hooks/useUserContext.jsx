import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useUserContext = () => {
	const user = useContext(UserContext);

	if (user === undefined) {
		throw Error("useUserContext must be used inside a UserContextProvider");
	}
	return user;
};

export default useUserContext;
