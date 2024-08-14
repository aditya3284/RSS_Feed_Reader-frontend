import { Link, Navigate, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/ui/Button";
import PasswordInput from "../components/ui/PasswordInput";
import useSignUp from "../hooks/useSignUp";
import useUserContext from "../hooks/useUserContext";

const SignInForm = () => {
	const { signUp, isloading, error } = useSignUp();
	const navigate = useNavigate();

	async function handleFormSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		const sigedIn = await signUp(data);

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
					<PasswordInput
						inputId='password-input'
						inputName='password'
						inputAutocomplete='current-password'
						inputPlaceholder='password'
						inputRequired={true}
						passwordMinLength={8}
						passwordMaxLength={32}
						classes='peer rounded-md bg-[#181a1b] px-3 py-2 w-full'
						errorText='Password must be 8-32 characters long'
					/>
				</div>
				<Button
					disabled={isloading}
					type='submit'
					className='button mt-5 bg-p-5 py-2.5'
				>
					{isloading ? "loading..." : "Submit"}
				</Button>
				{error && (
					<div className='mt-10 rounded-xl border border-red-500 py-3 text-center text-red-400'>
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
	const { authed } = useUserContext();

	return authed ? (
		<Navigate to={"/"} />
	) : (
		<>
			<main>
				<SignInForm />
			</main>
		</>
	);
};

export default SignIn;
