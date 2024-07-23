import PropTypes from "prop-types";
import Tagline from "./Tagline";

const Heading = ({ className, tagline, title, titleId, body }) => {
	const classes = `max-w-[50rem] mx-auto mb-12 lg:mb-20 ${className}`;
	return (
		<div className={classes}>
			{tagline && <Tagline className='mb-4'>{tagline}</Tagline>}
			{title && (
				<h2 id={titleId} className='h2'>
					{title}
				</h2>
			)}
			{body && <p className='body-2 mt-4 text-s-4'>{body}</p>}
		</div>
	);
};

Heading.propTypes = {
	className: PropTypes.string,
	tagline: PropTypes.string,
	title: PropTypes.string,
	titleId: PropTypes.string,
	body: PropTypes.string,
};

export default Heading;
