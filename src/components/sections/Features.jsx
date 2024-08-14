import { Link } from "react-router-dom";
import { features } from "../../constants";
import MaxWidthContainer from "../MaxWidthContainer";
import { Card, CardDescription, CardFooter, CardHeader } from "../ui/Card";
import Heading from "../ui/Heading";

const Features = () => {
	return (
		<section aria-label='Features' className='my-10'>
			<MaxWidthContainer>
				<Heading
					className='mt-5 text-center md:max-w-md lg:max-w-2xl'
					title='Live Smarter. Not Harder with feedReader'
				/>
				<div className='flex flex-wrap justify-center gap-10 '>
					{features.map((item) => (
						<Card
							key={item.id}
							className='bg-s-2 md:max-w-[21.5rem] dark:bg-s-7'
						>
							<CardHeader className='font-sora text-2xl font-normal'>
								{item.title}
							</CardHeader>
							<CardDescription className='p-6 pt-0 font-sora font-light'>
								{item.text}
							</CardDescription>
							<CardFooter className='flex justify-between font-sourceCodePro text-sm font-semibold uppercase'>
								<img src={item.iconUrl} alt='' loading='lazy' />
								<Link to={"/dashboard/home"}>Explore More &gt;</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</MaxWidthContainer>
		</section>
	);
};

export default Features;
