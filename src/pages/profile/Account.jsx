import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import EditableDetails from "../../components/EditableDetails";
import EditableIcon from "../../components/EditableIcon";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import Button from "../../components/ui/Button";
import {
	Modal,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from "../../components/ui/Modal";
import PasswordInput from "../../components/ui/PasswordInput";
import useUserContext from "../../hooks/useUserContext";

const Account = () => {
	const { data } = useLoaderData();
	const [userProfileDetails, setUserProfileDetails] = useState(data);
	const { dispatch } = useUserContext();
	const navigate = useNavigate();
	const deleteAccountModal = useRef(null);
	const [newPassword, setNewPassword] = useState("");

	const showDeletionConfirmation = () => {
		deleteAccountModal.current.showModal();
	};

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
			const allElements = event.target.elements;
			for (let element of allElements) {
				if (element.tagName === "INPUT") {
					element.value = "";
				}
			}
		}
	};

	const handlePasswordChange = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		if (formData.get("repeatPassword") === formData.get("newPassword")) {
			formData.delete("repeatPassword");

			const response = await fetch("/api/v1/user/profile/password", {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(Object.fromEntries(formData)),
			});

			if (response.ok) {
				await response.json();
				const allElements = event.target.elements;
				for (let element of allElements) {
					if (element.tagName === "INPUT") {
						element.value = "";
					}
				}
			}
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

	const handleAccountDeletion = async () => {
		const response = await fetch("/api/v1/user/profile", {
			method: "DELETE",
		});

		if (response.ok) {
			dispatch({ type: "logout" });
			navigate("/", { replace: true });
		}
	};

	return (
		<MaxWidthContainer>
			<div className='mx-auto my-10 grid max-w-2xl gap-12 text-s-7 dark:text-s-2'>
				<section aria-label='profile information'>
					<EditableIcon
						fileInputName='profilePictureToUpdate'
						iconString={userProfileDetails?.profilePicture}
						changeFunction={handleProfilePictureChange}
						deleteFunction={handleProfilePictureDeletion}
					/>
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
							labelHtmlFor={"name"}
						>
							<form className='' onSubmit={handleFormSubmit}>
								<div className='mt-2 grid grid-cols-[69%,27%] gap-2'>
									<input
										type='text'
										name='fullName'
										id='name'
										autoComplete='name'
										required
										className='peer my-1 ml-1 h-fit rounded-lg bg-s-2 px-3 py-2 text-s-7 dark:bg-s-3'
									/>
									<Button
										type='submit'
										className='my-auto h-fit rounded-xl bg-s-3 px-3 py-2 text-s-6 peer-[:user-invalid]:cursor-not-allowed dark:bg-s-1 dark:text-s-8'
									>
										Save
									</Button>
									<span className='hidden text-red-600 peer-[:user-invalid]:block'>
										Enter valid Name
									</span>
								</div>
							</form>
						</EditableDetails>
						<EditableDetails
							label='Email address'
							description={userProfileDetails.email}
							labelHtmlFor={"email"}
						>
							<form className='' onSubmit={handleFormSubmit}>
								<div className='mt-2 grid grid-cols-[69%,27%] gap-2'>
									<input
										type='email'
										name='email'
										id='email'
										required
										autoComplete='email'
										className='peer my-1 ml-1 h-fit rounded-lg bg-s-2 px-3 py-2 text-s-7 dark:bg-s-3'
									/>
									<Button className='my-auto h-fit rounded-xl bg-s-3 px-3 py-2 text-s-6 peer-[:user-invalid]:cursor-not-allowed dark:bg-s-1 dark:text-s-8'>
										Save
									</Button>
									<span className='ml-1 hidden h-fit text-red-600 peer-[:user-invalid]:block'>
										Enter valid Email address
									</span>
								</div>
							</form>
						</EditableDetails>
						<EditableDetails label='Password' description='••••••••••••'>
							<form className='space-y-5' onSubmit={handlePasswordChange}>
								<div className='grid gap-2'>
									<label htmlFor='crnt-pswrd' className='text-lg font-medium'>
										Current Password
									</label>
									<div className='overflow-hidden rounded-lg bg-s-2 text-s-8 dark:bg-s-3'>
										<PasswordInput
											key={"crnt"}
											inputAutocomplete={"current-password"}
											inputId={"crnt-pswrd"}
											inputRequired={true}
											inputName={"oldPassword"}
											classes={`h-fit w-full rounded-lg bg-s-2 px-3 py-2 text-s-7 dark:bg-s-3`}
										/>
									</div>
								</div>
								<div className='grid gap-2'>
									<label htmlFor='new-pswrd' className='text-lg font-medium'>
										New Password
									</label>
									<div className='overflow-hidden rounded-lg bg-s-2 text-s-8 dark:bg-s-3'>
										<PasswordInput
											key={"new"}
											inputName={"newPassword"}
											inputId={"new-pswrd"}
											inputRequired={true}
											inputAutocomplete={"new-password"}
											onChangeFunction={(event) =>
												setNewPassword(event.target.value)
											}
											classes={
												"h-fit w-full rounded-lg bg-inherit px-3 py-2 text-s-7"
											}
										/>
									</div>
								</div>
								<div className='grid gap-2'>
									<label htmlFor='repeat-pswrd' className='text-lg font-medium'>
										Repeat Password
									</label>
									<div className='overflow-hidden rounded-lg bg-s-2 text-s-8 dark:bg-s-3'>
										<PasswordInput
											key={"repeat"}
											inputName={"repeatPassword"}
											inputId={"repeat-pswrd"}
											inputAutocomplete={"new-password"}
											inputPattern={newPassword}
											inputRequired={true}
											classes={
												"peer h-fit w-full bg-inherit rounded-lg px-3 py-2 text-s-7"
											}
											errorText='New password and repeat password do not match'
										/>
									</div>
								</div>
								<Button className='rounded-xl bg-s-3 px-3 py-2 text-s-6 dark:bg-s-1 dark:text-s-8'>
									Save
								</Button>
							</form>
						</EditableDetails>
						<EditableDetails
							label='Gender'
							description={userProfileDetails.gender}
							labelHtmlFor={"gender"}
						>
							<form className='' onSubmit={handleFormSubmit}>
								<div className='mt-2 grid grid-cols-[69%,27%] gap-2'>
									<input
										type='text'
										list='gender-list'
										name='gender'
										id='gender'
										required
										autoComplete='sex'
										className='my-1 ml-1 h-fit rounded-lg bg-s-2 px-3 py-2 text-s-7 dark:bg-s-3'
									/>
									<datalist id='gender-list'>
										<option value='Male'></option>
										<option value='Female'></option>
										<option value='Other'></option>
									</datalist>
									<Button className='my-auto h-fit rounded-xl bg-s-3 px-3 py-2 text-s-6 dark:bg-s-1 dark:text-s-8'>
										Save
									</Button>
								</div>
							</form>
						</EditableDetails>
						<EditableDetails
							label='Date of Birth'
							description={new Date(
								userProfileDetails.dateOfBirth
							).toDateString()}
							labelHtmlFor={"dob"}
						>
							<form className='' onSubmit={handleFormSubmit}>
								<div className='mt-2 grid grid-cols-[69%,27%] gap-2'>
									<input
										type='date'
										name='dateOfBirth'
										id='dob'
										required
										autoComplete='bday'
										className='peer my-1 ml-1 h-fit rounded-lg bg-s-2 px-3 py-2 text-s-7 dark:bg-s-3'
									/>
									<Button className='my-auto h-fit rounded-xl bg-s-3 px-3 py-2 text-s-6 dark:bg-s-1 dark:text-s-8'>
										Save
									</Button>
									<span className='ml-1 hidden peer-[:user-invalid]:block'>
										Enter valid Date of Birth
									</span>
								</div>
							</form>
						</EditableDetails>
					</div>
				</section>
				<section
					aria-labelledby='account-management-heading'
					className='grid gap-4'
				>
					<h2 id='account-management-heading' className='text-2xl font-bold'>
						Manage Account
					</h2>
					<div className='grid grid-flow-row divide-y'>
						<section aria-labelledby='remove-account' className='py-3'>
							<div className='mb-2 flex items-center justify-between'>
								<div className=''>
									<h3 className='text-xl font-semibold' id='remove-account'>
										Delete account
									</h3>
									<p className='mr-4 mt-2'> Permanently delete your account.</p>
								</div>
								<Button
									className='h-fit border bg-red-500 px-2.5 py-1.5 text-s-1 outline-offset-8 dark:border-red-600 dark:bg-transparent dark:text-red-600'
									onClickFn={showDeletionConfirmation}
								>
									Delete
								</Button>
							</div>
						</section>
					</div>
				</section>
			</div>
			<Modal
				modalId='confirmation-modal'
				className='w-full text-center sm:max-w-md'
				ref={deleteAccountModal}
			>
				<ModalHeader>
					<ModalTitle>Are you sure?</ModalTitle>
				</ModalHeader>
				<ModalContent className='mt-5 grid gap-5'>
					<ModalDescription className='px-4 pb-8 pt-3'>
						Deleting your account is permanent and irreversible. You will lose
						all your data and collections, if any.
					</ModalDescription>
				</ModalContent>
				<ModalFooter className='flex justify-around'>
					<Button onClickFn={(event) => event.target.offsetParent.close()}>
						Cancel
					</Button>
					<Button onClickFn={handleAccountDeletion} className='text-red-600'>
						Delete Account
					</Button>
				</ModalFooter>
			</Modal>
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
