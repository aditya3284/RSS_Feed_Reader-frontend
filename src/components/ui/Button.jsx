import PropTypes from "prop-types";

const Button = ({ children, href, onClickFn, className }) => {
	const classes = `button hover:text-p-1 bg-s-1 inline-grid place-items-center py-2.5 px-3 transition-colors ${className || ""}`;

	const renderButton = () => (
		<button className={classes} onClick={onClickFn}>
			<span>{children}</span>
		</button>
	);

	const renderLink = () => (
		<a href={href} className={classes}>
			<span>{children}</span>
		</a>
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
