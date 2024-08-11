import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./ui/Button";

const EditableDetails = ({ label, description, children, labelHtmlFor }) => {
	const [isEditing, setIsEditing] = useState(false);

	const handleClick = () => {
		isEditing ? setIsEditing(false) : setIsEditing(true);
	};

	return (
		<section aria-labelledby='profile-name' className='border-s-5 py-3'>
			<div className='mb-2 flex justify-between'>
				<div className=''>
					<label
						htmlFor={labelHtmlFor}
						className='text-xl font-semibold'
						id='profile-name'
					>
						{label}
					</label>
					<p>{description}</p>
				</div>
				<Button onClickFn={handleClick} className='hover:underline'>
					{isEditing ? "Cancel" : "Edit"}
				</Button>
			</div>
			<div
				className={`grid transition-all  duration-500 ${isEditing ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
			>
				<div className='overflow-hidden'>{children}</div>
			</div>
		</section>
	);
};

EditableDetails.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	labelHtmlFor: PropTypes.string,
	children: PropTypes.node,
};

export default EditableDetails;
