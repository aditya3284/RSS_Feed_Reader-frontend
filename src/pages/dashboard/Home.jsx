import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { heroPeep_1 } from "../../assests";
import {
	DashboardCard,
	DashboardCardContent,
	DashboardCardDescription,
	DashboardCardHeader,
} from "../../components/ui/DashboardCard";
import { dummyFeedItemData } from "../../constants";

const Home = () => {
	document.querySelector("title").text = "Dashboard";
	const [loadingPosts, setLoadingPosts] = useState(true);
	const [loadingCreators, setLoadingCreators] = useState(true);
	const [loadingLikedPost, setLoadingLikedPost] = useState(true);
	const [recentPosts, setRecentPosts] = useState([]);
	const [creatorList, setCreatorList] = useState([]);
	const [likedPost, setLikedPost] = useState([]);
	const addFeedList = useOutletContext();

	useEffect(() => {
		fetchRecentPosts();
		fetchCreators();
		fetchLikedPosts();
	}, [addFeedList]);

	const fetchRecentPosts = async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_BACKEND}/api/v1/user/all/items?limit=9&offset=0`,
				{
					method: "GET",
					credentials: "include",
				}
			);
			const data = await response.json();
			if (response.ok) {
				setRecentPosts([...data.data.feedItemsList]);
				setLoadingPosts(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fetchLikedPosts = async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_BACKEND}/api/v1/user/liked/items?limit=6&offset=0`,
				{
					method: "GET",
					credentials: "include",
				}
			);
			const data = await response.json();
			if (response.ok) {
				setLikedPost([...data.data.likedFeedItemsList]);
				setLoadingLikedPost(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fetchCreators = async () => {
		try {
			const userID = JSON.parse(localStorage.getItem("user")).username;

			const response = await fetch(
				`${import.meta.env.VITE_BACKEND}/api/v1/feed/u/${userID}`,
				{
					method: "GET",
					credentials: "include",
				}
			);
			const data = await response.json();
			if (response.ok) {
				setCreatorList([...data.data.Feeds]);
				setLoadingCreators(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='grid h-full gap-2 lg:grid-cols-[70%,30%]'>
			<div className=' mt-5 rounded-xl p-5'>
				<h1 className='h3 text-3xl font-extrabold'>Dashboard</h1>
				<div className='my-5 flex flex-col items-center overflow-y-hidden rounded-2xl bg-p-3 p-5 text-center md:relative md:overflow-visible md:pb-24 md:text-left lg:pb-28'>
					<p className='break-words text-center text-3xl font-extrabold leading-9 md:pr-40 lg:mt-4 lg:pr-[136px]'>
						Achieving more by doing less and making it look effortless
					</p>
					<img
						src={heroPeep_1}
						className='-mb-16 md:absolute md:-bottom-10 md:-right-4 md:mb-0'
						loading='lazy'
					/>
				</div>
				<section aria-label='Recent Posts'>
					<header className='mb-5'>
						<h2 className='h3 font-extrabold'>Recent</h2>
					</header>
					{loadingPosts ? (
						<div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
							{dummyFeedItemData.map(({ id }) => (
								<DashboardCard
									key={id}
									className='grid w-full grid-rows-[1.8fr,1fr] bg-s-2 dark:bg-s-6'
								>
									<DashboardCardHeader className='grid h-full place-items-center bg-s-5'></DashboardCardHeader>
									<DashboardCardContent className='py-8'>
										<DashboardCardDescription className='h-5 rounded-full bg-s-5  text-s-8 dark:text-s-3'></DashboardCardDescription>
									</DashboardCardContent>
								</DashboardCard>
							))}
						</div>
					) : recentPosts.length > 0 ? (
						<>
							<div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
								{recentPosts.map(({ _id, thumbnailUrl, title }) => (
									<DashboardCard key={_id} className='bg-s-2 dark:bg-s-6'>
										<DashboardCardHeader feedItemID={_id} className=''>
											<img
												src={thumbnailUrl}
												alt=''
												width={480}
												height={360}
												className='aspect-video bg-s-4 object-cover'
												loading='lazy'
											/>
										</DashboardCardHeader>
										<DashboardCardContent feedItemID={_id} className=''>
											<DashboardCardDescription className='text-s-8 dark:text-s-3'>
												{title}
											</DashboardCardDescription>
										</DashboardCardContent>
									</DashboardCard>
								))}
							</div>
							<Link
								to='/dashboard/recent'
								className='text-center hover:text-s-4 dark:text-s-1 dark:hover:text-s-3'
							>
								<p className='my-5 font-semibold'>View All</p>
							</Link>
						</>
					) : (
						<div className='my-20 text-center'>
							<h3 className='h3 font-bold'>
								No post available. <br />
								Add Feed to get posts
							</h3>
						</div>
					)}
				</section>
			</div>
			<div className='rounded-xl'>
				<div className='m-5 rounded-2xl bg-black p-7 text-s-1'>
					<h2 className='mb-10 text-2xl font-bold'>Liked</h2>
					{loadingLikedPost ? (
						<p>Liked Loading...</p>
					) : likedPost.length > 0 ? (
						<>
							<ol>
								{likedPost.map(({ _id, title, thumbnailUrl }) => (
									<li key={_id}>
										<Link to={`/feed-items/${_id}`} className='my-5 flex gap-5'>
											<img
												src={thumbnailUrl}
												width={100}
												height={30}
												className='aspect-video rounded-xl bg-p-1 object-cover'
												loading='lazy'
											/>
											<h4 className='my-5 line-clamp-2 text-left'>{title}</h4>
										</Link>
									</li>
								))}
							</ol>
							{likedPost.length > 4 && (
								<div className='text-center font-bold'>
									<Link to='/dashboard/liked' className='hover:text-s-4'>
										View All
									</Link>
								</div>
							)}
						</>
					) : (
						<div className='my-20 text-center'>
							<h4 className='h3 font-bold text-inherit'>
								No Liked post available.
								<br />
								Like feed posts to get posts
							</h4>
						</div>
					)}
				</div>
				<div className='m-5 max-h-72 overflow-hidden rounded-2xl bg-p-5 px-7 py-5'>
					<h2 className='mb-10 text-2xl font-bold text-s-8 dark:text-s-1'>
						Creators
					</h2>
					{loadingCreators ? (
						<p>Creators Loading...</p>
					) : creatorList.length > 0 ? (
						<>
							<ol>
								{creatorList.map(({ _id, name, icon }) => (
									<li key={_id}>
										<Link to={`/feeds/${_id}`} className='my-5 flex gap-5'>
											<img
												src={icon.URL}
												width={40}
												height={40}
												className='aspect-square rounded-xl bg-p-2 object-cover'
												loading='lazy'
											/>
											<h4 className='line-clamp-1 text-left font-semibold'>
												{name}
											</h4>
										</Link>
									</li>
								))}
							</ol>
							<div className='text-center font-bold'>
								<Link to='/dashboard/library' className='hover:text-purple-800'>
									View All
								</Link>
							</div>
						</>
					) : (
						<div className='my-20 text-center'>
							<h4 className='h3 font-bold'>
								No Creators available.
								<br />
								Add Feed to get creators
							</h4>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
