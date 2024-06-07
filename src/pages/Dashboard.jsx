import { useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Plus } from "../assests";
import Logo from "../components/Logo";
import SecondarySideNav from "../components/SecondarySideNav";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import Button from "../components/ui/Button";
import {
	Modal,
	ModalContent,
	ModalDescription,
	ModalHeader,
	ModalTitle,
} from "../components/ui/Modal";
import { sideNavItems } from "../constants";
import DashboardLayout from "../layouts/SidebarLayout";

const Dashboard = () => {
	const addFeedModal = useRef(null);
	const topRef = useRef(null);
	const [isLoading, setIsLaoding] = useState(false);

	const handleAddFeed = async (event) => {
		event.preventDefault();
		setIsLaoding(true);

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		const response = await fetch("/api/v1/feed/submit", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		if (response.ok) {
			addFeedModal.current.close();
		} else setIsLaoding(false);
	};

	return (
		<DashboardLayout list={sideNavItems}>
			<Sidebar>
				<Logo className='-mt-2 px-5' />
				<SecondarySideNav>
					<ul>
						{sideNavItems.map(({ id, icon, label, link, size }) => (
							<li key={id} className='my-1'>
								<NavLink
									to={link}
									className={({ isActive }) =>
										isActive
											? "bg-s-2  text-cyan-600 hover:bg-[#d0d0d0] dark:bg-s-8 dark:text-p-5 dark:hover:bg-s-11"
											: "text-s-8  hover:bg-s-2/60 dark:text-s-3 dark:hover:bg-s-6"
									}
								>
									<div className='flex items-center gap-4 rounded-xl bg-inherit p-3'>
										<img
											src={icon}
											width={size.width}
											height={size.height}
											alt=''
											className='rounded-md'
											loading='lazy'
										/>
										<p className='w-15 inline font-sora font-semibold transition-all'>
											{label}
										</p>
									</div>
								</NavLink>
							</li>
						))}
						<li className='mt-5'>
							<Button
								className='group flex items-center gap-2.5 rounded-xl bg-s-4 p-3 transition-all hover:bg-p-4 hover:text-emerald-900 dark:bg-s-5 dark:text-s-3'
								onClickFn={() => {
									addFeedModal.current.showModal();
								}}
							>
								<img
									src={Plus}
									width={30}
									height={30}
									alt=''
									className='rounded-md group-hover:text-emerald-500'
									loading='lazy'
								/>
								<p className='w-15 inline font-sora font-semibold'>Add Feed</p>
							</Button>
						</li>
					</ul>
				</SecondarySideNav>
			</Sidebar>
			<div className='m-2 w-full rounded-xl bg-s-2/30 dark:bg-s-11'>
				<span ref={topRef}></span>
				<Outlet />
				<Button
					className='group fixed bottom-52 right-5 flex items-center gap-2.5 rounded-xl bg-s-3 p-3 transition-all hover:bg-p-4 hover:text-emerald-900 md:hidden dark:bg-s-7 dark:text-s-3'
					onClickFn={() => {
						addFeedModal.current.showModal();
					}}
				>
					<img
						src={Plus}
						width={30}
						height={30}
						alt=''
						className='rounded-md group-hover:text-emerald-500'
						loading='lazy'
					/>
				</Button>
				<Button
					className='fixed bottom-[9.5rem] right-5 bg-s-3 p-3 md:bottom-[85px] dark:bg-s-7 dark:text-s-2'
					onClickFn={() => {
						// topRef.current.scrollIntoView(true, { behavior: "smooth" });
						window.scroll({ top: 0, behavior: "smooth" });
					}}
				>
					Top
				</Button>
				<ThemeToggle
					showText={false}
					classes={
						"fixed bottom-24 right-5 rounded-xl bg-s-3 py-3 px-3.5 md:bottom-8 dark:bg-s-7"
					}
				/>
			</div>
			<Modal
				modalId='modal'
				className='max-w-md text-center'
				ref={addFeedModal}
			>
				<ModalHeader>
					<ModalTitle>Add New Feed URL</ModalTitle>
				</ModalHeader>
				<ModalContent className='mt-5 grid gap-5'>
					<ModalDescription className='text-balance px-5'>
						Here you can provide the link from which the feed can be added
					</ModalDescription>
					<form onSubmit={handleAddFeed} className='grid gap-4 px-10'>
						<label htmlFor='feedUrlInput' className='font-bold'>
							Enter the RSS Feed URL
						</label>
						<input
							className='my-2 rounded-lg border bg-s-2 px-2.5 py-2 dark:bg-s-5'
							autoFocus
							type='url'
							name='feedURL'
							id='feedUrlInput'
						/>
						<input
							type='submit'
							className='mx-auto w-fit rounded-lg bg-purple-600 px-2 py-1.5'
							value={isLoading ? "Loading..." : "Add Feed"}
						/>
					</form>
				</ModalContent>
			</Modal>
		</DashboardLayout>
	);
};

export default Dashboard;
