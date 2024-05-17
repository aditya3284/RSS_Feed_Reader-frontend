import PropTypes from "prop-types";

const Card = ({ children, className }) => {
	const classes = `card ${className || ""}`;
	return <div className={classes}>{children}</div>;
};

Card.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const CardHeader = ({ children, className }) => {
	const classes = `card-header ${className || ""}`;
	return <div className={classes}>{children}</div>;
};

CardHeader.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const CardTitle = ({ children, className }) => {
	const classes = `card-title ${className || ""}`;
	return <h3 className={classes}>{children}</h3>;
};

CardTitle.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const CardDescription = ({ children, className }) => {
	const classes = `card-description ${className || ""}`;
	return <p className={classes}>{children}</p>;
};

CardDescription.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const CardContent = ({ children, className }) => {
	const classes = `card-content ${className || ""}`;
	return <div className={classes}>{children}</div>;
};

CardContent.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const CardFooter = ({ children, className }) => {
	const classes = `card-footer ${className || ""}`;
	return <div className={classes}>{children}</div>;
};

CardFooter.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
};
