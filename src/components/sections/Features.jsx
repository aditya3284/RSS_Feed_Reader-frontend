import { features } from "../../constants";
import MaxWidthContainer from "../MaxWidthContainer";
import { Card, CardDescription, CardFooter, CardHeader } from "../ui/Card";
import Heading from "../ui/Heading";

const Features = () => {
	return (
		<section aria-label='Features' className='my-10'>
			<MaxWidthContainer>
				<Heading
					className='mt-5 md:max-w-md lg:max-w-2xl'
					title='Live Smarter. Not Harder with feedReader'
				/>
				<div className='flex flex-wrap justify-center gap-10 '>
					{features.map((item) => (
						<Card key={item.id} className='md:max-w-[21.5rem]'>
							<CardHeader className='font-sora text-2xl font-normal text-s-1'>
								{item.title}
							</CardHeader>
							<CardDescription className='p-6 pt-0 font-sora font-light text-s-3'>
								{item.text}
							</CardDescription>
							<CardFooter className='flex justify-between font-sourceCodePro text-sm font-semibold uppercase text-s-1'>
								<img src={item.iconUrl} alt='' />
								<p>Explore More &gt;</p>
							</CardFooter>
						</Card>
					))}
				</div>
			</MaxWidthContainer>
		</section>
	);
};

export default Features;
