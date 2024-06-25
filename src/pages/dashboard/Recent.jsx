import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "../../components/ui/Button";
import {
	DashboardCard,
	DashboardCardContent,
	DashboardCardDescription,
	DashboardCardHeader,
	DashboardCardTitle,
} from "../../components/ui/DashboardCard";

const Recent = () => {
	document.querySelector("title").text = "Recent";
	const { data } = useLoaderData();
	const [recentFeedItems] = useState(data.feedItemsList);

	return (
		<div className='p-5'>
			{recentFeedItems.length > 0 ? (
				<div className=''>
					<h1 className='mb-5 text-3xl font-bold text-s-8 dark:text-s-1'>
						Recent Uploads
					</h1>
					<ul className='grid gap-5 md:grid-cols-2'>
						{recentFeedItems.map(({ _id, thumbnailUrl, title, content }) => (
							<li key={_id}>
								<DashboardCard className='grid bg-s-2 lg:grid-cols-2 dark:bg-s-6'>
									<DashboardCardHeader
										feedItemID={_id}
										className='grid place-items-center'
									>
										<img
											src={thumbnailUrl}
											alt=''
											width={480}
											height={360}
											className='aspect-video w-full bg-s-4 object-cover'
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
					<Button>Load More</Button>
				</div>
			) : (
				<div className='mt-10 text-center'>
					<p className='mb-5 text-4xl font-semibold'>
						Do not have any recent post.
					</p>
					<p>Go and add some posts first</p>
				</div>
			)}
		</div>
	);
};

export async function loader() {
	if (localStorage.getItem("user")) {
		const response = await fetch("/api/v1/user/all/items", {
			method: "GET",
		});
		const data = await response.json();

		return response.ok && data.data ? data : { data: { feedItemsList: [] } };
	}

	return null;
}

export default Recent;
