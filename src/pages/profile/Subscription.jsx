import MaxWidthContainer from "../../components/MaxWidthContainer";
import Button from "../../components/ui/Button";
import { pricing } from "../../constants";

const Subscription = () => {
	return (
		<MaxWidthContainer>
			<div className='mx-auto my-12 grid max-w-2xl gap-5'>
				<h1 className='text-balance text-4xl font-semibold -tracking-wide dark:text-s-1 text-s-7 mb-10'>
					Upgrade and
					<br/>
					get unrestricted access
				</h1>
				<article className='rounded-3xl  bg-s-5/75 p-8 text-s-1 dark:bg-s-8'>
					<header className='text-lg font-bold'>
						<h2 className='mb-5 flex items-center justify-between text-[36px] font-extrabold text-s-1'>
							FREE
							<span className='rounded-2xl bg-s-5  px-2 text-sm font-medium text-s-2'>
								Current
							</span>
						</h2>
						<p className='text-s-2 text-xl'>
							<span className='text-s-5 line-through text-[16px]'>$6.99</span> 0.00/month
						</p>
					</header>
					<ul className='my-5 ml-4'>
						{pricing[0].features.map((item) => (
							<li className='list-disc' key={item.length}>
								{item}
							</li>
						))}
					</ul>
					<Button className='mb-5 w-full rounded-3xl bg-s-3/60 px-2.5 py-2 text-center uppercase text-s-'>
						on free plan
					</Button>
				</article>
				<div className='grid sm:grid-cols-2 gap-5'>
					<article className='rounded-3xl  bg-s-4/50 p-8 text-s-1 dark:bg-s-8'>
						<header className='coming-soon text-lg font-bold text-s-3'>
							<h2 className='mb-5 text-[36px] font-extrabold text-s-1'>
								Coming soon
							</h2>
							<p className='text-s-2 text-xl'>
								<span className='text-s-5 line-through'>$XX</span> X.xx/month
							</p>
						</header>
						<ul className='my-5 ml-4'>
							{pricing[1].features.map((item) => (
								<li className='coming-soon list-disc' key={item.length}>
									{item}
								</li>
							))}
						</ul>
						<Button className='mt-10  w-full cursor-not-allowed rounded-3xl bg-s-1 px-2.5 py-2 text-center uppercase text-s-8'>
							coming soon
						</Button>
					</article>
					<article className='rounded-3xl  bg-s-5/65 p-8 text-s-1 dark:bg-s-8'>
						<header className='coming-soon text-lg font-bold text-s-3 blur-sm'>
							<h2 className='mb-5 text-[36px] font-extrabold text-s-1'>
								Coming soon
							</h2>
							<p className='text-s-2 text-xl'>
								<span className='text-s-5 line-through'>$XX</span> X.xx/month
							</p>
						</header>
						<ul className='my-5 ml-4'>
							{pricing[2].features.map((item) => (
								<li className='coming-soon list-disc' key={item.length}>
									{item}
								</li>
							))}
						</ul>
						<Button className='mt-10  w-full cursor-not-allowed rounded-3xl bg-s-1 px-2.5 py-2 text-center uppercase text-s-8'>
							Coming soon
						</Button>
					</article>
				</div>
				<article className='rounded-3xl p-8 text-s-7 dark:text-s-1'>
					<header className='text-lg'>
						<h2 className='my-6 flex items-center justify-between text-[36px] font-extrabold'>
							Enterprise
						</h2>
						<p className='text-s-6 dark:text-s-2'>
							Built for larger organizations who want to scale with confidence.
							We offer advanced security, priority support, legal review, and
							more.
						</p>
					</header>
					<Button className='my-7 rounded-3xl border border-s-6 px-6 py-2 text-center uppercase text-s-8 dark:border-s-3 dark:text-s-1'>
						Contact Sales
					</Button>
				</article>
			</div>
		</MaxWidthContainer>
	);
};

export default Subscription;
