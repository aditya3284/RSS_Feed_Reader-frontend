import { useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../constants";
import Logo from "./Logo";
import MaxWidthContainer from "./MaxWidthContainer";
import Button from "./ui/Button";

const Navbar = () => {
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
		<header className='sticky inset-x-0 top-0 z-10 w-full border-b  border-s-6 bg-s-8/90 py-0.5 text-white backdrop-blur-2xl'>
			<MaxWidthContainer>
				<div className=' my-5 flex h-full items-center justify-between font-sora'>
					<Logo />
					<nav
						aria-label='primary'
						className={` md:flex ${openNavigation ? "fixed inset-x-0 inset-y-full z-10 h-svh w-svw bg-s-5/50 backdrop-blur-sm" : "hidden"}`}
					>
						<ol
							className={`flex items-center gap-4 lg:gap-10 ${openNavigation ? "h-full w-full flex-col justify-center" : ""}`}
						>
							{navigation.map((item) => (
								<li
									key={item.id}
									className={`font-sourceCodePro font-semibold uppercase transition-colors hover:text-cyan-600 ${item.onlyMobile ? "md:hidden" : ""}`}
								>
									<Link
										onClick={toggleNavigation}
										to={item.url}
										rel='noopener noreferrer'
									>
										{item.title}
									</Link>
								</li>
							))}
						</ol>
					</nav>
					<div className='flex gap-3'>
						<div className='flex items-center justify-center gap-3 '>
							<Link
								to='/signup'
								rel='noopener noreferrer'
								className='font-sourceCodePro uppercase text-p-5 transition-colors hover:text-p-1 md:font-semibold'
							>
								New Account
							</Link>
							<Button
								href='/login'
								className='bg-p-5 px-2 py-1 uppercase tracking-tight text-s-7 hover:text-s-1 hover:ring-2 hover:ring-p-6 dark:bg-s-1 dark:hover:text-p-1'
							>
								Sign in
							</Button>
						</div>
						<Button
							onClickFn={handleMenuBtnClick}
							className='px-1.5 py-1 text-s-1 hover:ring-2 hover:ring-p-6 md:hidden'
						>
							{openNavigation ? "Close" : "Menu"}
						</Button>
					</div>
				</div>
			</MaxWidthContainer>
		</header>
	);
};

export default Navbar;
