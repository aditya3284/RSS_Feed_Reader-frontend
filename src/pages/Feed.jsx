import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Delete, Liked, NotLiked, OutBound } from "../assests";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
	DashboardCard,
	DashboardCardContent,
	DashboardCardDescription,
	DashboardCardHeader,
} from "../components/ui/DashboardCard";

const Feed = () => {
	const { data } = useLoaderData();
	const [feedData, setFeedData] = useState(data);

	document.querySelector("title").text = data.name
		? `Feed: ${data.name}`
		: "Feed Not Found";

	const handleFeedLikeToggle = async () => {
		try {
			const response = await fetch("/api/v1/feed/like", {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					favorite: !feedData.favorite,
					url: feedData.url,
				}),
			});

			if (response.ok) {
				const res = await response.json();
				setFeedData({ ...feedData, ...res.data });
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<main className=''>
				<Navbar />
				<div className='mx-auto my-10 h-full max-w-5xl px-5 '>
					<div className='grid items-center gap-5'>
						<div className=''>
							<h1 className=' text-pretty text-2xl font-bold sm:text-4xl'>
								{feedData.name}
							</h1>
							<p className='my-7 w-fit overflow-y-hidden whitespace-pre-wrap break-words text-left md:text-xl'>
								{feedData.url.includes(
									"https://www.youtube.com/feeds/videos.xml"
								) && (
									<a
										href={feedData.websiteURL}
										target='_blank'
										className='flex gap-3 text-p-5'
									>
										YouTube Channel Home
										<img src={OutBound} width={20} alt='' />
									</a>
								)}
							</p>
						</div>
					</div>
					<div className=' flex gap-2'>
						<button
							title='Like'
							disabled={feedData.name === "not found"}
							onClick={handleFeedLikeToggle}
						>
							<img
								src={feedData.favorite ? Liked : NotLiked}
								width={40}
								alt='like feed item'
								className='rounded-xl p-[2px] hover:bg-s-3'
							/>
						</button>
						<button title='Delete' disabled={feedData.name === "not found"}>
							<img
								src={Delete}
								width={35}
								alt='delete feed item'
								className='rounded-xl p-[2px] hover:bg-s-3'
							/>
						</button>
					</div>
					<h2 className='my-5 text-3xl'>Posts</h2>
					{feedData.items.length > 0 ? (
						<div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
							{feedData.items.map(({ _id, thumbnailUrl, title }) => (
								<DashboardCard key={_id} className='bg-s-2 dark:bg-s-6 '>
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
					) : (
						<div className='my-20 text-center'>
							<h3 className='h3 font-bold'>
								No post available. <br />
								Add Feed to get posts
							</h3>
						</div>
					)}
				</div>
				<Footer />
				<button
					className='fixed bottom-28 right-5 rounded-md bg-s-3 p-2 font-bold md:bottom-[85px] md:hidden dark:bg-s-7 dark:text-s-2'
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					Top
				</button>
			</main>
		</>
	);
};

export async function loader({ params }) {
	if (localStorage.getItem("user")) {
		const response = await fetch(`/api/v1/feed-item/f/${params.feedID}`, {
			method: "GET",
		});
		const data = await response.json();

		return response.ok && data.data
			? data
			: {
					data: {
						name: "not found",
						items: [],
						icon: { URL: null },
						favorite: false,
						url: "",
						websiteURL: "",
					},
				};
	}

	return null;
}

export default Feed;
