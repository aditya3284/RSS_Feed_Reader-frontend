import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ children, href, onClickFn, className }) => {
	const classes = `button hover:text-p-1 bg-s-1 inline-grid place-items-center py-2.5 px-3 transition-colors ${className || ""}`;

	const renderButton = () => (
		<button className={classes} onClick={onClickFn}>
			<span>{children}</span>
		</button>
	);

	const renderLink = () => (
		<Link to={href} className={classes}>
			<span>{children}</span>
		</Link>
	);

	return href ? renderLink() : renderButton();
};

Button.propTypes = {
	children: PropTypes.node,
	href: PropTypes.string,
	onClickFn: PropTypes.func,
	className: PropTypes.string,
};

export default Button;
