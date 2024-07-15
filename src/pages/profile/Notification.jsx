import MaxWidthContainer from "../../components/MaxWidthContainer";
import { profileNotificationList } from "../../constants";

const Notification = () => {
	return (
		<MaxWidthContainer>
			<div className='my-10 text-s-7 dark:text-s-2'>
				<h1 className='mb-5 text-3xl font-bold'>Notification</h1>
				<form className='grid gap-5'>
					{profileNotificationList.map(({ id, label }) => (
						<div className='flex gap-4' key={id}>
							<input type='checkbox' defaultChecked id={id} />
							<label htmlFor={id}>{label}</label>
						</div>
					))}
					<div className='mt-10 flex gap-5 font-bold text-s-1 dark:text-s-8'>
						<button type='reset' className='rounded-lg bg-p-3 px-4 py-1'>
							Cancel
						</button>
						<button type='submit' className='rounded-lg bg-p-4 px-4 py-1'>
							Submit
						</button>
					</div>
				</form>
			</div>
		</MaxWidthContainer>
	);
};

export default Notification;
