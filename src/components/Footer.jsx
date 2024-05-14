import { socials } from "../constants";
import MaxWidthConatiner from "./MaxWidthContainer";

const Footer = () => {
	return (
		<footer className='bg-s-8 py-10'>
			<MaxWidthConatiner>
				<div className='flex flex-col justify-between gap-4 text-center sm:flex-row'>
					<div className=''>
						<p className='font-sora text-s-4'>
							&copy; {new Date().getFullYear()}. All Rights Reserved.
						</p>
					</div>
					<div className='flex justify-around gap-4 px-10 sm:px-0'>
						{socials.map((item) => (
							<a
								key={item.id}
								href={item.url}
								target='_blank'
								className='grid h-10 w-10 place-items-center rounded-full bg-s-7 p-3 transition-colors hover:bg-s-6'
							>
								<img
									src={item.iconUrl}
									width={16}
									height={16}
									alt={`${item.title} logo`}
									className=''
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
