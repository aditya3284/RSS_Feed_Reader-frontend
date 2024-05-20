import { thirdPartyIntegrations } from "../../constants";
import MaxWidthContainer from "../MaxWidthContainer";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/Card";
import Heading from "../ui/Heading";

const Integrations = () => {
	return (
		<section aria-label='Integrations' className='my-36'>
			<MaxWidthContainer>
				<div className='flex flex-col justify-between gap-16 px-10 lg:flex-row'>
					<div className=''>
						<Heading
							title={thirdPartyIntegrations.title}
							body={thirdPartyIntegrations.descriptionText}
							className='text-pretty pr-20 font-sora'
						/>
						<ul className='-mt-10 list-disc font-sora text-s-4 md:ml-12 lg:-mt-16 lg:ml-0 lg:px-4'>
							{thirdPartyIntegrations.content.map((item) => (
								<li key={item.id}>{item.title}</li>
							))}
						</ul>
					</div>
					<div className='flex flex-col justify-between gap-10 md:flex-row lg:flex-col lg:gap-5 '>
						{thirdPartyIntegrations.applications.map((item) => (
							<Card
								key={item.id}
								className='relative mx-auto flex w-4/5 items-center justify-between bg-s-2 text-s-8 lg:mx-20 lg:min-w-80 even:lg:-translate-x-28 dark:bg-s-7 dark:text-s-1'
							>
								<CardHeader className='pl-5 pr-0 sm:pl-6 lg:p-6'>
									<CardTitle className='h3 pl-2 text-[16px] font-semibold '>
										{item.title}
									</CardTitle>
									<CardDescription className='absolute -left-5 -top-5 w-fit rounded-xl bg-p-1 px-1.5 py-0.5 text-s-6 before:font-bold before:text-s-5 before:content-["\26AC"] md:-right-5 lg:static'>
										{" " + item.availabilityStatus}
									</CardDescription>
								</CardHeader>
								<CardContent className='pt-5 lg:pt-4'>
									<img
										src={item.icon}
										width={item.width}
										height={item.height}
										alt={item.title + "logo"}
										className=''
										loading='lazy'
									/>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</MaxWidthContainer>
		</section>
	);
};

export default Integrations;
