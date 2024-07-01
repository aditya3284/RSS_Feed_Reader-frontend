import { heroPeep_1 } from "../../assests";
import MaxWidthContainer from "../../components/MaxWidthContainer";

const Account = () => {
	return (
		<MaxWidthContainer>
			<div className='mx-auto my-10 grid max-w-2xl gap-12 text-s-7 dark:text-s-2'>
				<section aria-label='profile information'>
					<div className='size-40 rounded-full bg-s-3 dark:bg-black'>
						<img
							src={heroPeep_1}
							alt=''
							className='aspect-square object-cover'
							loading='lazy'
						/>
					</div>
					<div className=''>
						<h1 className='line-clamp-1 max-w-lg text-3xl font-bold dark:text-s-1'>
							{"fullName"}
						</h1>
						<p className='my-1 text-lg font-bold'>
							@{"username"}
						</p>
						<p className='text-sm'>{"email"}</p>
					</div>
				</section>
			</div>
		</MaxWidthContainer>
	);
};

export default Account;
