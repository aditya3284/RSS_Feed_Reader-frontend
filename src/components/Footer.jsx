import { socials } from "../constants";
import MaxWidthConatiner from "./MaxWidthContainer";

const Footer = () => {
	return (
		<footer className='py-10'>
			<MaxWidthConatiner>
				<div className='flex flex-col justify-between gap-4 text-center sm:flex-row'>
					<div className=''>
						<p className='font-sora text-s-4'>
							&copy; {new Date().getFullYear()}. All Rights Reserved.
						</p>
					</div>
					<div className='flex justify-around sm:gap-4 md:px-10'>
						{socials.map((item) => (
							<a
								key={item.id}
								href={item.url}
								target='_blank'
								className='grid h-12 w-12 place-items-center rounded-full bg-s-2 p-3 transition-colors hover:bg-s-3 sm:h-10 sm:w-10 dark:bg-s-7 dark:hover:bg-s-6'
							>
								<img
									src={item.iconUrl}
									width={22}
									height={22}
									alt={`${item.title} logo`}
									className=''
									loading='lazy'
								/>
							</a>
						))}
					</div>
				</div>
			</MaxWidthConatiner>
		</footer>
	);
};

export default Footer;
