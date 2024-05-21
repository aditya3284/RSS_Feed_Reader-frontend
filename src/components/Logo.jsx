import PropTypes from "prop-types";

const Logo = ({ className }) => {
	return (
		<a href='/' className={`z-20 font-sora font-bold text-s-1 ${className}`}>
			feed<span className='bg-p-5'>reader</span>
		</a>
	);
};

Logo.propTypes = {
	className: PropTypes.string,
};

export default Logo;
