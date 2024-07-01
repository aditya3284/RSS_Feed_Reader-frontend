import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { heroPeep_1 } from "../../assests";
import MaxWidthContainer from "../../components/MaxWidthContainer";

const Account = () => {
	const { data } = useLoaderData();
	const [userProfileDetails] = useState(data);

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
