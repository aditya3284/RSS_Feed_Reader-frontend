import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLogOut from "../hooks/useLogOut";

const LogOut = () => {
	const { logOut } = useLogOut();
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/");
		logOut();
	}, []);
};

export default LogOut;
