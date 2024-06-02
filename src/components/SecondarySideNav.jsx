import PropTypes from "prop-types";

const SecondarySideNav = ({ children }) => {
	return (
		<nav className='w-36 transition-all' aria-label='secondary'>
			{children}
		</nav>
	);
};

SecondarySideNav.propTypes = {
	children: PropTypes.node,
};

export default SecondarySideNav;
