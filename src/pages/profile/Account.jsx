import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { heroPeep_1 } from "../../assests";
import EditableDetails from "../../components/EditableDetails";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import Button from "../../components/ui/Button";

const Account = () => {
	const { data } = useLoaderData();
	const [userProfileDetails, setUserProfileDetails] = useState(data);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(userProfileDetails));
	}, [userProfileDetails]);

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		const response = await fetch("/api/v1/user/profile", {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (response.ok) {
			const res = await response.json();
			setUserProfileDetails({ ...userProfileDetails, ...res?.data.user });
			event.target[0].value = "";
		}
	};
	
	const handleProfilePictureDeletion = async () => {
		const response = await fetch("/api/v1/user/profile/picture", {
			method: "DELETE",
		});
		if (response.ok) {
			const res = await response.json();
			setUserProfileDetails({
				...userProfileDetails,
				profilePicture: res?.data,
			});
		}
	};

	const handleProfilePictureChange = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("profilePictureToUpdate", event.target.files[0]);

		const response = await fetch("/api/v1/user/profile/picture", {
			method: "PATCH",
			body: formData,
		});

		if (response.ok) {
			const res = await response.json();
			setUserProfileDetails({
				...userProfileDetails,
				...res?.data,
			});
			event.target.value = "";
		}
	};

	return (
		<MaxWidthContainer>
			<div className='mx-auto my-10 grid max-w-2xl gap-12 text-s-7 dark:text-s-2'>
				<section aria-label='profile information'>
					<div className='relative size-40 overflow-hidden rounded-full bg-s-3 dark:bg-black'>
						<img
							src={userProfileDetails?.profilePicture?.URL ?? heroPeep_1}
							alt=''
							className='aspect-square object-cover'
							loading='lazy'
						/>
						<div className='absolute inset-0 rounded-full'>
							<div className='grid size-full place-items-center overflow-clip rounded-full bg-s-2/60 opacity-0 backdrop-blur-sm transition-opacity hover:opacity-100 dark:bg-black/60'>
								{userProfileDetails?.profilePicture?.URL ? (
									<>
										<form
											encType='multipart/form-data'
											className='grid size-full select-none place-content-center font-bold'
										>
											<label
												htmlFor='changeAvatarInput'
												className='cursor-pointer'
											>
												Change
											</label>
											<input
												type='file'
												accept='image/png,image/jpeg,image/jpg,image/webp'
												id='changeAvatarInput'
												name='profilePictureToUpdate'
												hidden
												onChange={handleProfilePictureChange}
											/>
										</form>

										<button
											className='size-full select-none font-bold'
											onClick={handleProfilePictureDeletion}
										>
											<span>Delete</span>
										</button>
									</>
								) : (
									<form
										encType='multipart/form-data'
										className='grid size-full select-none place-content-center font-bold'
									>
										<label
											htmlFor='avatarInput'
											className='cursor-pointer px-9 py-14'
										>
											Add Avatar
										</label>
										<input
											type='file'
											accept='image/png,image/jpeg,image/jpg,image/webp'
											id='avatarInput'
											name='profilePictureToUpdate'
											hidden
											onChange={handleProfilePictureChange}
										/>
									</form>
								)}
							</div>
						</div>
					</div>
					<div className=''>
						<h1 className='line-clamp-1 max-w-lg text-3xl font-bold dark:text-s-1'>
							{userProfileDetails.fullName}
						</h1>
						<p className='my-1 text-lg font-bold'>
							@{userProfileDetails.username}
						</p>
						<p className='text-sm'>{userProfileDetails.email}</p>
					</div>
				</section>
				<section
					aria-labelledby='personal-detail-heading'
					className='grid gap-4'
				>
					<h2 id='personal-detail-heading' className='text-2xl font-bold'>
						Personal details
					</h2>
					<div className='grid grid-flow-row divide-y'>
						<EditableDetails
							label='Name'
							description={userProfileDetails.fullName}
						>
							<form
								className='grid grid-cols-[40%,60%]'
								onSubmit={handleFormSubmit}
							>
								<label htmlFor='name' className='text-lg font-medium'>
									Name
								</label>
								<input
									type='text'
									name='fullName'
									id='name'
									autoComplete='name'
									className='peer h-fit rounded-lg bg-s-2 px-3 py-2 text-s-7 dark:bg-s-3'
								/>
								<button
									type='submit'
									className='bg-s-3 px-3 py-2 text-s-6 peer-[:user-invalid]:cursor-not-allowed dark:bg-s-1 dark:text-s-8'
								>
									Save
								</button>
								<span className='hidden text-red-600 peer-[:user-invalid]:block'>
									Enter valid Name
								</span>
							</form>
						</EditableDetails>
						<EditableDetails
							label='Email address'
							description={userProfileDetails.email}
						>
							<form
								className='grid grid-cols-[40%,60%]'
								onSubmit={handleFormSubmit}
							>
								<label htmlFor='email' className='text-lg font-medium'>
									Email address
								</label>
								<input
									type='email'
									name='email'
									id='email'
									autoComplete='email'
									className='peer h-fit rounded-lg bg-s-2 px-3 py-2 text-s-7 dark:bg-s-3'
								/>
								<Button className='bg-s-3 px-3 py-2 text-s-6 peer-[:user-invalid]:cursor-not-allowed dark:bg-s-1 dark:text-s-8'>
									Save
								</Button>
								<span className='hidden text-red-600 peer-[:user-invalid]:block'>
									Enter valid Email address
								</span>
							</form>
						</EditableDetails>
						<EditableDetails label='Password' description='••••••••••••'>
							<form
								className='grid grid-cols-[45%,55%] gap-2'
								onSubmit={handleFormSubmit}
							>
								<label htmlFor='crnt-pswrd' className='text-lg font-medium'>
									Current Password
								</label>
								<div className='relative'>
									<input
										type='password'
										name='oldPassword'
										id='crnt-pswrd'
										autoComplete='current-password'
										className=' h-fit w-full rounded-lg bg-s-2 px-3 py-2 text-s-7 dark:bg-s-3'
									/>
								</div>
								<label htmlFor='new-pswrd' className='text-lg font-medium'>
									New Password
								</label>
								<div className='relative'>
									<input
										type='password'
										name='newPassword'
										id='new-pswrd'
										autoComplete='new-password'
										className=' h-fit w-full rounded-lg bg-s-2 px-3 py-2 text-s-7 dark:bg-s-3'
									/>
								</div>
								<label htmlFor='repeat-pswrd' className='text-lg font-medium'>
									Repeat Password
								</label>
								<div className='relative'>
									<input
										type='password'
										name='repeatPassword'
										id='repeat-pswrd'
										autoComplete='new-password'
										className='peer h-fit w-full rounded-lg bg-s-2 px-3 py-2 text-s-7 dark:bg-s-3'
									/>
									<p className='hidden text-pink-700 peer-[:invalid]:block'>
										New password and repeat password do not match
									</p>
								</div>
								<Button className='bg-s-3 px-3 py-2 text-s-6 dark:bg-s-1 dark:text-s-8'>
									Save
								</Button>
							</form>
						</EditableDetails>
						<EditableDetails
							label='Gender'
							description={userProfileDetails.gender}
						>
							<form
								className='grid grid-cols-[40%,60%]'
								onSubmit={handleFormSubmit}
							>
								<label htmlFor='gender' className='text-lg font-medium'>
									Gender
								</label>
								<input
									type='text'
									list='gender-list'
									name='gender'
									id='gender'
									autoComplete='sex'
									className='h-fit rounded-lg bg-s-2 px-3 py-2 text-s-7 dark:bg-s-3'
								/>
								<datalist id='gender-list'>
									<option value='Male'></option>
									<option value='Female'></option>
									<option value='Other'></option>
								</datalist>
								<Button className='bg-s-3 px-3 py-2 text-s-6 dark:bg-s-1 dark:text-s-8'>
									Save
								</Button>
							</form>
						</EditableDetails>
						<EditableDetails
							label='Date of Birth'
							description={new Date(
								userProfileDetails.dateOfBirth
							).toDateString()}
						>
							<form
								className='grid grid-cols-[40%,60%]'
								onSubmit={handleFormSubmit}
							>
								<label htmlFor='dob' className='text-lg font-medium'>
									Date of Birth
								</label>
								<input
									type='date'
									name='dateOfBirth'
									id='dob'
									autoComplete='bday'
									className='peer h-fit rounded-lg bg-s-2 px-3 py-2 text-s-7 dark:bg-s-3'
								/>
								<Button className='bg-s-3 px-3 py-2 text-s-6 dark:bg-s-1 dark:text-s-8'>
									Save
								</Button>
								<span className='hidden peer-[:user-invalid]:block'>
									Enter valid Date of Birth
								</span>
							</form>
						</EditableDetails>
					</div>
				</section>
			</div>
		</MaxWidthContainer>
	);
};

export async function loader() {
	if (localStorage.getItem("user")) {
		const response = await fetch("/api/v1/user/profile", {
			method: "GET",
		});
		const data = await response.json();

		return response.ok && data.data
			? data
			: {
					data: {
						fullname: "Name Not Found",
						username: "not_found",
						email: "404@found.not",
						gender: "none",
						dateOfBirth: "1970-06-08",
						profilePicture: { URL: null },
					},
				};
	}

	return null;
}

export default Account;
