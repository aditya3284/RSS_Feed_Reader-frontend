import { NavLink, Outlet } from "react-router-dom";
import { ExitIcon } from "../assests";
import Logo from "../components/Logo";
import SecondarySideNav from "../components/SecondarySideNav";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import Button from "../components/ui/Button";
import { profileSideNav } from "../constants";
import SettingLayout from "../layouts/SidebarLayout";

const Dashboard = () => {
	return (
		<SettingLayout list={profileSideNav}>
			<Sidebar>
				<Logo className='px-4' />
				<SecondarySideNav>
					<ul className='pb-[23.5rem] text-s-7'>
						{profileSideNav.map(({ id, label, link, onlyMobile }) => (
							<li key={id} className={`my-1 ${onlyMobile && "md:hidden"}`}>
								<NavLink
									to={link}
									className={({ isActive }) =>
										isActive
											? "bg-s-2 text-cyan-600 hover:bg-[#d0d0d0] dark:bg-s-8 dark:text-p-5 dark:hover:bg-s-11"
											: "text-s-8  hover:bg-s-2/60 dark:text-s-3 dark:hover:bg-s-6"
									}
								>
									<div className='flex items-center gap-4 rounded-xl bg-inherit p-3'>
										<p className='w-15 inline font-sora font-semibold transition-all'>
											{label}
										</p>
									</div>
								</NavLink>
							</li>
						))}
					</ul>
					<Button
						className='flex w-full gap-5 rounded-xl px-5 py-4 font-bold hover:bg-s-2/60 dark:text-s-3  dark:hover:bg-s-8'
						href={"/logout"}
						title='logout'
					>
						<ExitIcon />
						logOut
					</Button>
					<ThemeToggle
						showText={true}
						classes={`rounded-xl px-5 py-4 w-full hover:bg-s-2/60 dark:text-s-3  dark:hover:bg-s-8`}
					/>
				</SecondarySideNav>
			</Sidebar>
			<div className='m-2 w-full rounded-xl bg-s-2/30 dark:bg-s-11'>
				<Outlet />
			</div>
		</SettingLayout>
	);
};

export default Dashboard;
