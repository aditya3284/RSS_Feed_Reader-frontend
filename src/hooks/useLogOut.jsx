import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "./useUserContext";

const useLogOut = () => {
	const [isloading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { dispatch } = useUserContext();
	const navigate = useNavigate();

	const logOut = async () => {
		setError(null);
		setIsLoading(true);
		await fetch("/api/v1/user/logout", {
			method: "POST",
		})
			.then((data) => data.json())
			.then(dispatch({ type: "logout" }))
			.catch((error) => setError(error))
			.finally(setIsLoading(false));
		navigate("/");
	};

	return { logOut, error, isloading };
};

export default useLogOut;
