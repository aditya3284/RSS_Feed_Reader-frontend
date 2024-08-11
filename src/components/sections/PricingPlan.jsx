import PropTypes from "prop-types";
import { CheckIcon } from "../../assests";
import Button from "../ui/Button";
import { Card, CardFooter, CardHeader } from "../ui/Card";

const PricingPlan = ({ list }) => {
	return (
		<section aria-label='pricing' className='min-h-svh w-full pt-14'>
			<h1 className='mb-16 text-center text-4xl font-semibold -tracking-wide text-s-7 dark:text-s-1'>
				Upgrade and enjoy unrestricted access
			</h1>
			<div className='mx-auto px-4 lg:px-12'>
				<div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8'>
					{list.map(({ id, title, price, features }) => (
						<Card
							key={id}
							className={`flex flex-col justify-between rounded-lg border border-gray-300 bg-white px-3 py-6  shadow-lg lg:px-6 dark:border-s-5  dark:bg-s-7 dark:shadow-s-6 ${price == 0 ? "relative border-2 border-p-1" : "select-none"}`}
						>
							{price == 0 && (
								<div className='absolute left-1/2 top-0 inline-block -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-p-5 to-p-1 px-3 py-1 text-sm font-bold text-white'>
									Active
								</div>
							)}
							<CardHeader
								className={`flex gap-5 text-s-8 dark:text-s-2 ${price != 0 ? "blur-[7px]" : ""}`}
							>
								<h2 className='text-center text-2xl font-bold'>{title}</h2>
								<div className=' text-center text-s-4 dark:text-zinc-400'>
									<span className='text-4xl font-bold'>${price}</span>/ month
								</div>
								<ul className='space-y-4'>
									{features.map((feature, index) => (
										<li key={index} className='flex items-center'>
											<CheckIcon className='mr-2 rounded-full bg-p-5 p-1 text-xs text-white' />
											{feature}
										</li>
									))}
								</ul>
							</CardHeader>
							<CardFooter className='mt-6 rounded-lg'>
								<Button
									className={`w-full cursor-not-allowed py-2 ${price != 0 ? "bg-s-2 text-s-6 dark:bg-s-5 dark:text-s-1" : "bg-s-3 text-s-5 dark:bg-s-6 dark:text-p-5"}`}
								>
									{price != 0 ? "Coming Soon" : "Selected"}
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

PricingPlan.propTypes = {
	list: PropTypes.array,
};

export default PricingPlan;
