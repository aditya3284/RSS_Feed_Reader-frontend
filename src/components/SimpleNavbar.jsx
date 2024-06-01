import PropTypes from "prop-types";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../constants";
import Logo from "./Logo";
import MaxWidthContainer from "./MaxWidthContainer";
import Button from "./ui/Button";

const SimpleNavbar = ({ navList }) => {
	const [openNavigation, setOpenNavigation] = useState(false);

	const handleMenuBtnClick = () => {
		if (openNavigation) {
			setOpenNavigation(false);
		} else {
			setOpenNavigation(true);
		}
	};

	const toggleNavigation = () => {
		if (!openNavigation) return;
		setOpenNavigation(false);
	};

	return (
		<header className='sticky inset-x-0 top-0 z-10 w-full border-b border-s-6  bg-s-8/90 py-0.5 text-white backdrop-blur-2xl md:hidden'>
			<MaxWidthContainer>
				<div className=' my-5 flex h-full items-center justify-between font-sora'>
					<Logo />
					<nav
						aria-label='primary'
						className={` md:flex ${openNavigation ? "fixed inset-x-0 inset-y-full z-10 h-svh w-svw bg-s-5/80 backdrop-blur-lg" : "hidden"}`}
					>
						<ol
							className={`flex items-center gap-4 lg:gap-10 ${openNavigation ? "h-full w-full flex-col justify-center" : ""}`}
						>
							{navList.map(({ id, link, label }) => (
								<li
									key={id}
									className={`font-sourceCodePro font-semibold uppercase transition-colors hover:text-cyan-600`}
								>
									<NavLink
										onClick={toggleNavigation}
										to={link}
										rel='noopener noreferrer'
									>
										{label}
									</NavLink>
								</li>
							))}
							<hr className='w-12 border border-p-6' />
							{navigation.map((item) => (
								<li
									key={item.id}
									className={`font-sourceCodePro font-semibold uppercase transition-colors hover:text-cyan-600 ${item.onlyMobile ? "hidden" : ""}`}
								>
									<NavLink
										onClick={toggleNavigation}
										to={item.url}
										rel='noopener noreferrer'
									>
										{item.title}
									</NavLink>
								</li>
							))}
						</ol>
					</nav>
					<div className='flex gap-3'>
						<div className='flex items-center justify-center gap-3 border-r-[1px] border-s-7/20 pr-3 md:border-r-0'></div>
						<Button
							onClickFn={handleMenuBtnClick}
							className='text-s- px-1.5 py-1 hover:ring-2 hover:ring-p-6 md:hidden'
						>
							{openNavigation ? "Close" : "Menu"}
						</Button>
					</div>
				</div>
			</MaxWidthContainer>
		</header>
	);
};

SimpleNavbar.propTypes = {
	navList: PropTypes.array,
};

export default SimpleNavbar;
