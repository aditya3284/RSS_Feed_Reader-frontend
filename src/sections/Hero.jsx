import MaxWidthContainer from "../components/MaxWidthContainer";
import Button from "../components/ui/Button";
import { socials } from "../constants";

const Hero = () => {
	return (
		<section
			id='hero'
			aria-labelledby='hero-heading'
			className='bg-s-8 backdrop-blur-md'
		>
			<MaxWidthContainer>
				<div className='flex h-svh flex-col place-content-center'>
					<div className='text-center'>
						<h1 id='hero-heading' className='h1 mb-6 px-6 text-s-1 lg:px-20'>
							Explore the Possibilities of the Web with <span>feedReader</span>
						</h1>
						<p className='body mx-auto mb-6 max-w-3xl font-sora text-s-2 lg:mb-8'>
							Unleash the power of the RSS within feedReader. Upgrade your
							productivity & knowledge with feedReader, the best RSS Feed
							Reader.
						</p>
						<Button href='#roadmap'>Get started</Button>
					</div>
				</div>
				<div className='pt-10 text-center'>
					<p className='tagline pb-10 text-s-1/50'>Build with love using </p>
					<div className='flex w-full flex-wrap justify-around gap-5 pb-20 md:gap-0'>
						{socials.map((item) => (
							<div
								className='rounded-xl bg-s-7 p-8 hover:bg-s-6 hover:shadow-md'
								key={item.id}
							>
								<img
									src={item.iconUrl}
									width={30}
									alt={item.title}
									className=''
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
