import { useState } from "react";
import { navigation } from "../constants";
import MaxWidthContainer from "./MaxWidthContainer";

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
		<header className='fixed inset-x-0 top-0 z-10 h-14 w-full border-b border-s-6 bg-s-8/90 text-white backdrop-blur-lg transition-all'>
			<MaxWidthContainer>
				<div className='font-so flex h-full items-center justify-between'>
					<a href='/' className='z-20 font-sora font-bold'>
						feed<span className='bg-cyan-600'>reader</span>
					</a>
					<nav
						className={`md:flex ${openNavigation ? "fixed inset-x-0 inset-y-full z-10 h-svh w-svw bg-s-5/50 backdrop-blur-sm" : "hidden"}`}
					>
						<ol
							className={`flex items-center gap-6 ${openNavigation ? "h-full w-full flex-col justify-center" : ""}`}
						>
							{navigation.map((item) => (
								<li
									key={item.id}
									className={`font-sourceCodePro font-semibold uppercase transition-colors hover:text-cyan-600 ${item.onlyMobile ? "md:hidden" : ""}`}
								>
									<a
										onClick={toggleNavigation}
										href={item.url}
										target='_parent'
										rel='noopener noreferrer'
									>
										{item.title}
									</a>
								</li>
							))}
						</ol>
					</nav>
					<div className='flex items-center justify-center gap-2'>
						<a
							href='#signup'
							target='_parent'
							rel='noopener noreferrer'
							className='hidden font-sourceCodePro uppercase text-p-5 transition-colors hover:text-p-1 md:block md:font-semibold'
						>
							New Account
						</a>
						<button
							type='button'
							href='#login'
							className='hidden rounded-md bg-cyan-400 px-2.5 py-1 font-semibold transition-all hover:bg-cyan-500 hover:ring-2 hover:ring-cyan-300 md:block'
						>
							Sign in
						</button>
					</div>
					<button
						onClick={handleMenuBtnClick}
						type='button'
						className='rounded-md bg-cyan-400 px-2.5 py-1 font-semibold hover:bg-cyan-500 hover:ring-2 hover:ring-cyan-300 md:hidden'
					>
						{openNavigation ? "Close" : "Menu"}
					</button>
				</div>
			</MaxWidthContainer>
		</header>
	);
};

export default Navbar;
