import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
	DashboardCard,
	DashboardCardContent,
	DashboardCardDescription,
	DashboardCardHeader,
	DashboardCardTitle,
} from "../../components/ui/DashboardCard";

const History = () => {
	document.querySelector("title").text = "History";
	const { data } = useLoaderData();
	const [feedItemsHistory] = useState(data);

	return (
		<div className='p-5'>
			{feedItemsHistory.length > 0 ? (
				<>
					<h1 className='text-3xl font-bold text-s-8 dark:text-s-1'>History</h1>
					{feedItemsHistory.map(({ heading, history, _id }) => (
						<section key={_id}>
							<h2 className='my-5 text-2xl font-semibold'>{heading}</h2>
							<ul className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
								{history.map(({ _id, thumbnailUrl, title, content }) => (
									<li key={_id}>
										<DashboardCard className='grid auto-cols-fr bg-s-2 dark:bg-s-6'>
											<DashboardCardHeader
												feedItemID={_id}
												className='grid place-items-center'
											>
												<img
													src={thumbnailUrl}
													alt=''
													width={480}
													height={360}
													className='aspect-video bg-s-2 object-cover dark:bg-s-6'
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
						</section>
					))}
				</>
			) : (
				<div className='mt-10 text-center'>
					<p className='mb-5 text-4xl font-semibold'>
						Do not have any post in your history.
					</p>
					<p>Go and view some posts first</p>
				</div>
			)}
		</div>
	);
};

export async function loader() {
	if (localStorage.getItem("user")) {
		const response = await fetch("/api/v1/user/history/read", {
			method: "GET",
		});
		const data = await response.json();

		return response.ok && data.data ? data : { data: { readHistory: [] } };
	}

	return null;
}

export default History;
