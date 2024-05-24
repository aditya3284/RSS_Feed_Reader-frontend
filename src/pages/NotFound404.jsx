import MaxWidthContainer from "../components/MaxWidthContainer";
import Button from "../components/ui/Button";

const NotFound404 = () => {
	return (
		<MaxWidthContainer>
			<div className='grid h-dvh place-content-center  px-4 text-center text-slate-200'>
				<h1 className='text-2xl font-extrabold tracking-tight sm:text-8xl'>
					404
				</h1>
				<h2 className='mt-2 text-xl sm:mt-0 sm:text-2xl'>
					This page couldn&apos;t be found
				</h2>
			<Button href='/' className='w-fit m-auto px-3 py-1.5 mt-5 text-s-8'>
				Home
			</Button>
			</div>
		</MaxWidthContainer>
	);
};

export default NotFound404;
