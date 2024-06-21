import Button from "../../components/ui/Button";
import {
	DashboardCard,
	DashboardCardContent,
	DashboardCardDescription,
	DashboardCardHeader,
	DashboardCardTitle,
} from "../../components/ui/DashboardCard";
import { dummyFeedItemData } from "../../constants";

const Liked = () => {
	document.querySelector("title").text = "Liked";

	return (
		<div className='p-5'>
			<div className=''>
				<h1 className='mb-5 text-3xl font-bold text-s-8 dark:text-s-1'>
					Liked
				</h1>
				<ul className='grid gap-5 md:grid-cols-2'>
					{dummyFeedItemData.map(({ _id, thumbnailUrl, title, content }) => (
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
				<Button>Load More</Button>
			</div>
		</div>
	);
};

export async function loader() {
	if (localStorage.getItem("user")) {
		const response = await fetch("/api/v1/user/liked/items?limit=6&offset=0", {
			method: "GET",
		});
		const data = await response.json();

		return response.ok ? data : { data: { likedFeedItemsList: [] } };
	}

	return null;
}

export default Liked;
