import PropTypes from "prop-types";

const MaxWidthContainer = ({ children }) => {
	return (
		<div className='mx-auto h-full w-full max-w-screen-xl px-5 lg:px-7 xl:px-10'>
			{children}
		</div>
	);
};

MaxWidthContainer.propTypes = {
	children: PropTypes.node,
};

export default MaxWidthContainer;
