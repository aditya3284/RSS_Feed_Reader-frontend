import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FeedItem = () => {
	const { data } = useLoaderData();
	const [feedItemData] = useState(data);
	const FeedItemPublishedAt = new Date(feedItemData.publishedAt).toDateString();

	document.querySelector("title").text = data.title
		? `Feed Item: ${data.title}`
		: "Feed Item not found";

	return (
		<>
			<main className=''>
				<Navbar />
				<div className='mx-auto text-center'>
					<h1 className='my-10 text-pretty text-2xl font-bold sm:text-4xl'>
						{feedItemData.title}
					</h1>
					<div className='my-6 flex justify-between'>
						<Link
							to={`/feeds/${feedItemData.sourceFeed}`}
							title={`Go to ${feedItemData.creator}'s feed`}
							className='flex gap-2'
						>
							Feed : <h2 className='mb-1 font-bold'>{feedItemData.creator}</h2>
						</Link>
						<p title={`Published on ${FeedItemPublishedAt}`}>
							{FeedItemPublishedAt}
						</p>
					</div>
					<p className='text-left md:text-xl'>{feedItemData.content}</p>
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
