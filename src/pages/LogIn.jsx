import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/ui/Button";
import useLogIn from "../hooks/useLogIn";

const LogInForm = () => {
	const userEmail = useRef(null);
	const userPassword = useRef(null);
	const { logIn, isloading, error } = useLogIn();
	const navigate = useNavigate();

	async function handleFormSubmit(e) {
		e.preventDefault();
		const loggedIn = await logIn(
			userEmail.current.value,
			userPassword.current.value
		);

		if (loggedIn) navigate("/");
	}

	return (
		<div className='grid min-h-dvh place-items-center bg-[#1d1f20] text-s-1'>
			<form
				onSubmit={handleFormSubmit}
				className='padding-hr grid place-content-center gap-1 py-5'
			>
				<Logo className='m-auto my-10 scale-150' />
				<header className='mb-10 text-center'>
					<h1 className=' mb-2 text-[36px] font-extrabold'>
						Login into your account
					</h1>
					<p>
						Or create a{" "}
						<Link to='/signup' className='font-bold text-p-5 hover:underline'>
							New Account
						</Link>{" "}
					</p>
				</header>
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
						Entered Email is not valid
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
					className='button mb-10 mt-2 bg-p-5 py-2.5'
				>
					{isloading ? "Loading..." : "Submit"}
				</Button>
				{error && (
					<div className='rounded-xl border border-red-500 py-3 text-center text-red-400'>
						{String(error)}
					</div>
				)}
			</form>
		</div>
	);
};

const LogIn = () => {
	return <LogInForm />;
};

export default LogIn;
