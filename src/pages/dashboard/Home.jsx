import { heroPeep_1 } from "../../assests";
import Button from "../../components/ui/Button";

const Home = () => {
	document.querySelector("title").text = "Dashboard";

	return (
		<div className='grid h-full gap-2 lg:grid-cols-[70%,30%]'>
			<div className=' mt-5 rounded-xl p-5'>
				<h1 className='h3 text-3xl font-extrabold'>Dashboard</h1>
				<div className='my-5 flex flex-col items-center overflow-y-hidden rounded-2xl bg-p-3 p-5 text-center md:relative md:overflow-visible md:pb-24 md:text-left lg:pb-28'>
					<p className='break-words text-center text-3xl font-extrabold leading-9 md:pr-40 lg:mt-4 lg:pr-[136px]'>
						Achieving more by doing less and making it look effortless
					</p>
					<img
						src={heroPeep_1}
						className='-mb-16 md:absolute md:-bottom-10 md:-right-4 md:mb-0'
						loading='lazy'
					/>
				</div>
				<section aria-label='Recent Posts'>
					<header className='mb-5 flex items-center justify-between'>
						<h2 className='h3 font-extrabold'>Recent</h2>
						<Button
							href='/dashboard/recent'
							className='h-6 hover:text-s-4 dark:text-s-1 dark:hover:text-s-3'
						>
							View All
						</Button>
					</header>
					Posts
				</section>
			</div>
			<div className='rounded-xl'>
				<div className='m-4 h-72 rounded-3xl  bg-black p-8 text-s-1'>
					<h2 className='mb-10 text-xl font-bold'>Total Balance</h2>
					<div className='text-lg font-bold text-s-3'>
						<div className='mb-3 text-[36px] font-extrabold text-s-1'>
							42,069.<span className='text-[28px]'>37</span>
							<span className='ml-1 text-[20px]'>&nbsp;of</span>
						</div>
						10,00,000.00
					</div>
					<Button className='mt-10 w-full bg-s-1 px-2.5 py-2 text-center uppercase text-s-8'>
						Add you Credits
					</Button>
				</div>
				<div className='m-5 rounded-2xl bg-p-5 px-7 py-5'>
					<h2 className='mb-10 text-2xl font-bold text-s-8 dark:text-s-1'>
						Creators
					</h2>
					creators list
				</div>
			</div>
		</div>
	);
};

export default Home;
