import PropTypes from "prop-types";
import Footer from "../components/Footer";
import SimpleNavbar from "../components/SimpleNavbar";

const DashboardLayout = ({ children, list }) => {
	return (
		<>
			<main className="">
				<SimpleNavbar navList={list} />
				<div className=' flex h-full rounded-2xl'>{children}</div>
				<Footer />
			</main>
		</>
	);
};

DashboardLayout.propTypes = {
	children: PropTypes.node,
	list: PropTypes.array,
};

export default DashboardLayout;
