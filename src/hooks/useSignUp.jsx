import { useState } from "react";

const useSignUp = () => {
	const [isloading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const signUp = async (formData) => {
		setError(null);
		setIsLoading(true);
		try {
			const response = await fetch(
				`${import.meta.env.VITE_BACKEND}/api/v1/user/signup`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formData),
				}
			);

			if (!response.ok) {
				const data = await response.json();
				setError(data.message);
			}

			return response.ok;
		} catch (error) {
			setError("Something went wrong! Try Again Later");
		} finally {
			setIsLoading(false);
		}
	};

	return { signUp, error, isloading };
};

export default useSignUp;
