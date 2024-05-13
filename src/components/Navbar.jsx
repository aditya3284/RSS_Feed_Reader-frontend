import { navigation } from "../constants";
import MaxWidthContainer from "./MaxWidthContainer";

const Navbar = () => {
	return (
		<header className='border-s-6 bg-s-8/90 fixed inset-x-0 top-0 z-10 h-14 w-full border-b text-white backdrop-blur-lg transition-all'>
			<MaxWidthContainer>
				<div className='font-so flex h-full items-center justify-between'>
					<a href='/' className='font-sora z-40 font-bold'>
						feed<span className='bg-cyan-600'>reader</span>
					</a>
					<nav className='hidden md:flex'>
						<ol className='flex items-center gap-6'>
							{navigation.map((item) => (
								<li
									key={item.id}
									className={`font-sourceCodePro uppercase transition-colors hover:text-cyan-600 md:font-semibold ${item.onlyMobile ? "md:hidden" : ""}`}
								>
									<a href={item.url} target='_blank' rel='noopener noreferrer'>
										{item.title}
									</a>
								</li>
							))}
						</ol>
					</nav>
					<div className='flex items-center justify-center gap-2'>
						<a
							href='#signup'
							target='_blank'
							rel='noopener noreferrer'
							className='font-sourceCodePro text-p-5 hover:text-p-1 hidden uppercase transition-colors md:block md:font-semibold'
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
						type='button'
						className='rounded-md bg-cyan-400 px-2.5 py-1 font-semibold hover:bg-cyan-500 hover:ring-2 hover:ring-cyan-300 md:hidden'
					>
						Menu
					</button>
				</div>
			</MaxWidthContainer>
		</header>
	);
};

export default Navbar;
