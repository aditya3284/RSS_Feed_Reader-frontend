import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DashboardCard = ({ children, className }) => {
	const classes = `dashboardCard ${className || ""}`;
	return <div className={classes}>{children}</div>;
};

DashboardCard.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const DashboardCardHeader = ({ children, className, feedItemID }) => {
	const classes = `dashboardCard-header ${className || ""}`;
	return (
		<Link to={`/feed-items/${feedItemID}`}>
			<div className={classes}>{children}</div>
		</Link>
	);
};

DashboardCardHeader.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	feedItemID: PropTypes.string,
};

const DashboardCardTitle = ({ children, className }) => {
	const classes = `h3 dashboardCard-title ${className || ""}`;
	return <h3 className={classes}>{children}</h3>;
};

DashboardCardTitle.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const DashboardCardDescription = ({ children, className }) => {
	const classes = `dashboardCard-description ${className || ""}`;
	return <p className={classes}>{children}</p>;
};

DashboardCardDescription.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const DashboardCardContent = ({ children, className, feedItemID }) => {
	const classes = `dashboardCard-content ${className || ""}`;
	return (
		<Link to={`/feed-items/${feedItemID}`}>
			<div className={classes}>{children}</div>
		</Link>
	);
};

DashboardCardContent.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	feedItemID: PropTypes.string,
};

const DashboardCardFooter = ({ children, className }) => {
	const classes = `dashboardCard-footer ${className || ""}`;
	return <div className={classes}>{children}</div>;
};

DashboardCardFooter.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export {
	DashboardCard,
	DashboardCardContent,
	DashboardCardDescription,
	DashboardCardFooter,
	DashboardCardHeader,
	DashboardCardTitle,
};
