import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { heroPeep_1 } from "../assests";
import useUserContext from "../hooks/useUserContext";

const ProfileIcon = ({ showTitle, position, classes }) => {
	const { user } = useUserContext();
	const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

	function handleClick(event) {
		const menu = document.getElementById("profileIcon");
		!event.composedPath().includes(menu) && setDropdownMenuOpen(false);
	}

	useEffect(() => {
		document.body.addEventListener("click", handleClick);
		return () => {
			document.body.removeEventListener("click", handleClick);
		};
	}, [dropdownMenuOpen]);

	return (
		<button
			id='profileIcon'
			className='relative leading-[0px] text-s-8 dark:text-s-1'
			onClick={() => {
				setDropdownMenuOpen(!dropdownMenuOpen);
			}}
		>
			<div className={`flex items-center gap-5 ${classes || ""}`}>
				<img
					src={user?.profilePicture?.URL ?? heroPeep_1}
					alt=''
					width={35}
					className='aspect-square rounded-full bg-p-5 object-cover'
					loading='lazy'
				/>
				{showTitle && <p className='w-15 font-bold dark:text-s-3'>Account</p>}
			</div>
			<div
				className={`${dropdownMenuOpen ? "grid grid-rows-2" : "pointer-events-none hidden"} absolute ${position} rounded-lg bg-s-3 leading-normal dark:bg-s-6`}
			>
				<div className='px-3 py-2'>
					<Link to='/profile/account'>Profile</Link>
				</div>
				<div className='px-3 py-2'>
					<Link to={"/logout"}>Logout</Link>
				</div>
			</div>
		</button>
	);
};

ProfileIcon.propTypes = {
	showTitle: PropTypes.bool,
	position: PropTypes.string,
	classes: PropTypes.string,
};

export default ProfileIcon;
