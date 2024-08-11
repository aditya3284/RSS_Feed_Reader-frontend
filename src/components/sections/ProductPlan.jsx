import PropTypes from "prop-types";
import { CalendarIcon } from "../../assests";

const ProductPlan = ({ list }) => {
	return (
		<div className='mx-auto max-w-4xl px-2 py-12 md:py-20'>
			<div className='flex flex-col items-center'>
				<h1 className='mb-4 text-3xl font-bold md:text-4xl'>Product Roadmap</h1>
				<p className='mx-2 mb-16 max-w-md text-center text-lg text-[#6e6e77] md:text-xl'>
					Get a glimpse of our upcoming features and improvements for the
					platform.
				</p>
			</div>
			<div className='relative'>
				<div className='absolute inset-0 left-1/2 w-[2px] -translate-x-1/2 transform bg-[#6e6e77]' />
				<div className='space-y-14'>
					{list.map((item) => (
						<div
							key={item.id}
							className='group flex items-start justify-between odd:flex-row even:flex-row-reverse'
						>
							<div className='w-1/2 group-odd:pr-4 group-odd:text-right group-even:pl-4'>
								<div className='mb-4 flex items-center gap-4 group-odd:flex-row-reverse group-even:flex-row'>
									<div className='flex h-6 w-6 items-center justify-center rounded-full bg-[#18181b] text-[#fafafa] dark:bg-[#fafafa] dark:text-[#18181b]'>
										<CalendarIcon className='h-4 w-4' />
									</div>
									<h3 className='text-lg font-semibold md:text-xl'>
										{item.title}
									</h3>
								</div>
								<p className='my-0.5'>{item.date}</p>
								<p className='text-[#6e6e77]'>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

ProductPlan.propTypes = {
	list: PropTypes.array,
};

export default ProductPlan;
