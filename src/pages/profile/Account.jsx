import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { heroPeep_1 } from "../../assests";
import MaxWidthContainer from "../../components/MaxWidthContainer";

const Account = () => {
	const { data } = useLoaderData();
	const [userProfileDetails, setUserProfileDetails] = useState(data);

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
