import PropTypes from "prop-types";


const Sidebar = ({ children }) => {
	return (
		<>
			<aside
				className={`sticky top-0 my-2 ml-3 hidden h-dvh flex-col justify-around rounded-2xl bg-s-3 px-1 md:flex dark:bg-s-7`}
			>
				{children}
			</aside>
		</>
	);
};

Sidebar.propTypes = {
	children: PropTypes.node,
};

export default Sidebar;
