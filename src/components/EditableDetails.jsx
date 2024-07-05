import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./ui/Button";

const EditableDetails = ({ label, description, children }) => {
	const [isEditing, setIsEditing] = useState(false);

	const handleClick = () => {
		isEditing ? setIsEditing(false) : setIsEditing(true);
	};
	return (
		<section aria-labelledby='profile-name' className='border-s-5 py-3'>
			<div className='mb-2 flex justify-between'>
				<div className=''>
					<h3 className='text-xl font-semibold' id='profile-name'>
						{label}
					</h3>
					<p>{description}</p>
				</div>
				<Button onClickFn={handleClick} className='hover:underline'>
					{isEditing ? "Cancel" : "Edit"}
				</Button>
			</div>
			<div className={isEditing ? "" : "hidden"}>{children}</div>
		</section>
	);
};

EditableDetails.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.node,
};

export default EditableDetails;
