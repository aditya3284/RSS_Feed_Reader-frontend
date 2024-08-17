import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { LikedIcon } from "../assests";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FeedItem = () => {
	const { data } = useLoaderData();
	const [feedItemData, setFeedItemData] = useState(data);
	const FeedItemPublishedAt = new Date(feedItemData.publishedAt).toDateString();

	document.querySelector("title").text = data.title
		? `Feed Item: ${data.title}`
		: "Feed Item not found";

	async function handleFeedItemLikeToggle() {
		try {
			const response = await fetch("/api/v1/feed-item/like", {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					favorite: !feedItemData.favorite,
					url: feedItemData.url,
				}),
			});

			if (response.ok) {
				const res = await response.json();
				setFeedItemData(res.data);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<main className=''>
				<Navbar />
				<div className='mx-auto my-10 h-full max-w-5xl px-5 text-center'>
					<h1 className='my-10 text-pretty text-2xl font-bold sm:text-4xl'>
						{feedItemData.title}
					</h1>
					{feedItemData.url.includes("www.youtube.com/watch?v=") && (
						<div className='my-10 aspect-video h-full w-full overflow-hidden'>
							<iframe
								className='h-full w-full'
								src={`https://www.youtube-nocookie.com/embed/${feedItemData.url.slice(-11)}`}
								title='YouTube video player'
								allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerPolicy='strict-origin-when-cross-origin'
								allowFullScreen
							></iframe>
						</div>
					)}
					<div className='my-6 flex justify-between'>
						<div className='text-left'>
							<Link
								to={`/feeds/${feedItemData.sourceFeed}`}
								title={`Go to ${feedItemData.creator}'s feed`}
								className='flex gap-2'
							>
								Feed :{" "}
								<h2 className='mb-1 font-bold'>{feedItemData.creator}</h2>
							</Link>
							<p title={`Published on ${FeedItemPublishedAt}`}>
								{FeedItemPublishedAt}
							</p>
						</div>
						<button
							title='Like'
							disabled={feedItemData.title === "Feed Item Not Found"}
							onClick={handleFeedItemLikeToggle}
							className='group rounded-xl px-2 hover:bg-s-2 dark:hover:bg-s-5'
						>
							<LikedIcon
								className={`${!feedItemData.favorite && "grayscale filter"}`}
							/>
						</button>
					</div>
					<p className='overflow-y-hidden whitespace-pre-wrap break-words text-left md:text-xl'>
						{feedItemData.content}
					</p>
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
		const response = await fetch(`/api/v1/feed-item/i/${params.feedItemID}`, {
			method: "GET",
		});
		const data = await response.json();

		return response.ok && data.data
			? data
			: {
					data: {
						title: "Feed Item Not Found",
						creator: "Not Found",
						content: "Not Found",
						publishedAt: "2000-12-25T0:1:1.000Z",
						favorite: false,
					},
				};
	}

	return null;
}

export default FeedItem;
