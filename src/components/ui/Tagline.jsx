import PropTypes from "prop-types";

const Tagline = ({ className, children }) => {
	const classes = `tagline grid place-items-center ${className || ""}`;
	return (
		<div className={classes}>
			<p className='mx-3 text-s-3'>{children}</p>
		</div>
	);
};

Tagline.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Tagline;
