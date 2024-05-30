import { useState } from "react";
import useUserContext from "./useUserContext";

const useLogIn = () => {
	const [isloading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { dispatch } = useUserContext();

	const logIn = async (email, password) => {
		setError(null);
		setIsLoading(true);

		try {
			const response = await fetch("/api/v1/user/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (response.ok) {
				localStorage.setItem("user", JSON.stringify(data.data));
				dispatch({ type: "login", payload: data.data });
			} else {
				setError(data.message);
			}

			return response.ok;
		} catch (error) {
			setError("Something went wrong! Try Again Later");
		} finally {
			setIsLoading(false);
		}
	};

	return { logIn, error, isloading };
};

export default useLogIn;
