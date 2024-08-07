import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import {
	DashboardCard,
	DashboardCardContent,
	DashboardCardDescription,
	DashboardCardHeader,
	DashboardCardTitle,
} from "../../components/ui/DashboardCard";

const Liked = () => {
	document.querySelector("title").text = "Liked";
	const [likedFeedItems, setLikedFeedItems] = useState([]);
	const [totalLikedItem, setTotalLikedItem] = useState(0);
	const [offset, setOffest] = useState(0);
	const [limit, setLimit] = useState(6);

	useEffect(() => {
		fetchLikedPosts(limit, offset);
	}, [offset, limit]);

	const fetchLikedPosts = async (limit, offset) => {
		try {
			const response = await fetch(
				`/api/v1/user/liked/items?limit=${limit}&offset=${offset}`,
				{
					method: "GET",
				}
			);
			const data = await response.json();
			setLikedFeedItems(
				response.ok ? [...likedFeedItems, ...data.data.likedFeedItemsList] : []
			);
			setTotalLikedItem(data.data.totalLikedFeedItem);
		} catch (error) {
			console.log(error);
		}
	};

	function handleLoadMoreItems() {
		setOffest((prevOffset) => prevOffset + 6);
		setLimit((prevLimit) => prevLimit + 6);
	}

	return (
		<div className='p-5'>
			{likedFeedItems.length > 0 ? (
				<div className=''>
					<h1 className='mb-5 text-3xl font-bold text-s-8 dark:text-s-1'>
						Liked
					</h1>
					<ul className='grid gap-5 md:grid-cols-2'>
						{likedFeedItems.map(({ _id, thumbnailUrl, title, content }) => (
							<li key={_id}>
								<DashboardCard className='grid grid-cols-2 bg-s-2 dark:bg-s-6'>
									<DashboardCardHeader
										feedItemID={_id}
										className='grid place-items-center'
									>
										<img
											src={thumbnailUrl}
											alt=''
											width={480}
											height={360}
											className='aspect-video bg-s-4 object-cover'
											loading='lazy'
										/>
									</DashboardCardHeader>
									<DashboardCardContent feedItemID={_id} className='py-8'>
										<DashboardCardTitle className='line-clamp-1'>
											{title}
										</DashboardCardTitle>
										<DashboardCardDescription className='line-clamp-2 text-s-8 dark:text-s-3'>
											{content}
										</DashboardCardDescription>
									</DashboardCardContent>
								</DashboardCard>
							</li>
						))}
					</ul>
					{totalLikedItem / likedFeedItems.length > 1 && (
						<div className='my-6 text-center'>
							<Button onClickFn={handleLoadMoreItems}>Load More</Button>
						</div>
					)}
				</div>
			) : (
				<div className='mt-10 text-center'>
					<p className='mb-5 text-4xl font-semibold'>
						Do not have any liked post.
					</p>
					<p>Go and Like some posts first</p>
				</div>
			)}
		</div>
	);
};

export default Liked;
