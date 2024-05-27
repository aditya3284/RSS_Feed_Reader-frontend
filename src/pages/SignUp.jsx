import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/ui/Button";
import useSignUp from "../hooks/useSignUp";

const SignInForm = () => {
	const userEmail = useRef(null);
	const userPassword = useRef(null);
	const userUsername = useRef(null);
	const { signUp, isloading, error } = useSignUp();
	const navigate = useNavigate();

	async function handleFormSubmit(e) {
		e.preventDefault();

		const sigedIn = await signUp(
			userUsername.current.value,
			userEmail.current.value,
			userPassword.current.value
		);

		if (sigedIn) navigate("/login");
	}

	return (
		<div className='grid min-h-dvh place-content-center bg-[#1d1f20] text-s-1'>
			<form
				onSubmit={handleFormSubmit}
				className='padding-hr grid place-content-center gap-1 py-5'
			>
				<Logo className='m-auto my-10 scale-150' />
				<header className='mb-10 text-center'>
					<h1 className='text-[36px] font-extrabold'>Create a new account</h1>
				</header>
				<div className='flex flex-col gap-3'>
					<label htmlFor='username-input' className='font-semibold'>
						Username
					</label>
					<input
						id='username-input'
						type='text'
						name='username'
						placeholder='username'
						required
						autoComplete='username'
						ref={userUsername}
						className='peer rounded-md bg-[#181a1b] px-3 py-2'
					/>
					<p className='invisible text-pink-700 peer-[:user-invalid]:visible'>
						Entered Username must be valid
					</p>
				</div>
				<div className='flex flex-col gap-3'>
					<label htmlFor='email-input' className='font-semibold'>
						Email
					</label>
					<input
						id='email-input'
						type='email'
						name='email'
						placeholder='email'
						required
						pattern='^\w+([\.+\-]?\w+)+@\w+([\.\-]?\w+)+\.(\w{2,6})$'
						autoComplete='email'
						ref={userEmail}
						className='peer rounded-md bg-[#181a1b] px-3 py-2'
					/>
					<p className='invisible text-pink-700 peer-[:user-invalid]:visible'>
						Entered Email must be valid
					</p>
				</div>
				<div className='flex flex-col gap-3'>
					<label htmlFor='password-input' className='font-semibold'>
						Password
					</label>
					<input
						id='password-input'
						type='password'
						name='password'
						placeholder='password'
						required
						autoComplete='current-password'
						ref={userPassword}
						minLength={8}
						maxLength={32}
						className='peer rounded-md bg-[#181a1b] px-3 py-2'
					/>
					<p className='invisible text-pink-700 peer-[:user-invalid]:visible'>
						Password must be 8-32 characters long
					</p>
				</div>
				<Button
					disabled={isloading}
					type='submit'
					className='button mt-3 bg-p-5 py-2.5'
				>
					{isloading ? "loading..." : "Submit"}
				</Button>
				{error && (
					<div className='rounded-xl  border border-red-500 py-3 text-center text-red-400'>
						{String(error)}
					</div>
				)}
			</form>
			<div className='mb-16 text-center'>
				Already have an account?{" "}
				<Link to='/login' className='font-bold text-p-5 hover:underline'>
					Log in.
				</Link>
			</div>
		</div>
	);
};

const SignIn = () => {
	return <SignInForm />;
};

export default SignIn;
