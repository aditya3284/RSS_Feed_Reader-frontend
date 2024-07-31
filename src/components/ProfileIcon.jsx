import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { heroPeep_1 } from "../assests";
import useLogOut from "../hooks/useLogOut";
import useUserContext from "../hooks/useUserContext";

const ProfileIcon = ({ showTitle, position, classes }) => {
	const { logOut } = useLogOut();
	const { user } = useUserContext();
	const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

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
					<p onClick={logOut}>Logout</p>
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
