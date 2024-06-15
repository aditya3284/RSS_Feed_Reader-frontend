import { useState } from "react";
import { Link } from "react-router-dom";
import {
	DashboardCard,
	DashboardCardContent,
	DashboardCardHeader,
	DashboardCardTitle,
} from "../../components/ui/DashboardCard";

const Library = () => {
	document.querySelector("title").text = "Library";
	const [loadingPosts] = useState(true);
	const [loadingCreators] = useState(true);
	const [recentPosts] = useState([]);
	const [creatorList] = useState([]);

	return (
		<div className='p-5'>
			<h1 className='mb-5 text-3xl font-bold text-s-8 dark:text-s-1'>
				Library
			</h1>
			<section className=''>
				<h2 className='mb-5 font-extrabold uppercase text-s-8 dark:text-s-1'>
					Subscribed
				</h2>
				{loadingCreators ? (
					<p className='h3 my-20 font-bold'>loading...</p>
				) : creatorList.length > 0 ? (
					<ul className='mb-5 grid snap-x snap-mandatory auto-cols-max grid-flow-col gap-5 overflow-hidden overflow-x-auto overscroll-x-contain py-4'>
						{creatorList.map(({ _id, name, icon }) => (
							<li key={_id} className='h-90 w-90 block snap-start'>
								<Link to={`/feeds/${_id}`}>
									<img
										src={icon.URL}
										width={90}
										height={90}
										className='mx-auto mb-2 aspect-square rounded-3xl bg-p-2 object-cover'
										loading='lazy'
									/>
									<h4 className='line-clamp-2'>{name}</h4>
								</Link>
							</li>
						))}
					</ul>
				) : (
					<div className='my-10'>
						<h3 className='h3 font-bold'>
							No Creator available.
							<br />
							Add Feed to get creator list
						</h3>
					</div>
				)}
			</section>
			<section>
				<h2 className='mb-5 font-extrabold uppercase text-s-8 dark:text-s-1'>
					Uploads
				</h2>
				{loadingPosts ? (
					<p className='h3 my-20 font-bold'>loading...</p>
				) : recentPosts.length > 0 ? (
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
									<DashboardCardTitle className='line-clamp-2 text-lg text-s-8 dark:text-s-3'>
										{title}
									</DashboardCardTitle>
								</DashboardCardContent>
							</DashboardCard>
						))}
					</div>
				) : (
					<div className='my-10 '>
						<h4 className='h3 font-bold'>
							No Uploads available.
							<br />
							Add Feed to get uploads
						</h4>
					</div>
				)}
			</section>
		</div>
	);
};

export default Library;
