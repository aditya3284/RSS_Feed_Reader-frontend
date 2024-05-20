import { socials } from "../../constants";
import MaxWidthContainer from "../MaxWidthContainer";
import Button from "../ui/Button";

const Hero = () => {
	return (
		<section
			id='hero'
			aria-labelledby='hero-heading'
			className='my-5 backdrop-blur-md'
		>
			<MaxWidthContainer>
				<div className='flex h-svh flex-col place-content-center'>
					<div className='text-center'>
						<h1 id='hero-heading' className='h1 mb-6 px-6 lg:px-20'>
							Explore the Possibilities of the Web with <span>feedReader</span>
						</h1>
						<p className='body mx-auto mb-6 max-w-3xl font-sora lg:mb-8'>
							Unleash the power of the RSS within feedReader. Upgrade your
							productivity & knowledge with feedReader, the best RSS Feed
							Reader.
						</p>
						<Button 
							className='bg-p-3 px-4 py-2.5 uppercase tracking-wide text-s-1 hover:text-s-10 dark:bg-s-1 dark:text-s-8 dark:hover:text-p-1'
							href='/login'
						>
							Get started
						</Button>
					</div>
				</div>
				<div className='pt-10 text-center'>
					<p className='tagline pb-10 text-s-6/50 dark:text-s-1/50'>
						Build with love using{" "}
					</p>
					<div className='flex w-full flex-wrap justify-around gap-5 pb-20 md:gap-0'>
						{socials.map((item) => (
							<div
								className='rounded-xl bg-s-2 p-8 hover:bg-s-3 hover:shadow-md dark:bg-s-7 dark:hover:bg-s-6'
								key={item.id}
							>
								<img
									src={item.iconUrl}
									width={30}
									alt={item.title}
									className=''
									loading='lazy'
								/>
							</div>
						))}
					</div>
				</div>
			</MaxWidthContainer>
		</section>
	);
};

export default Hero;
