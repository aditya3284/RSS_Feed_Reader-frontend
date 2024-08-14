import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
	children,
	disabled,
	href,
	onClickFn,
	className,
	...props
}) => {
	const classes = `button transition-all ${className || ""}`;

	const renderButton = () => (
		<button
			disabled={disabled}
			className={classes}
			onClick={onClickFn}
			{...props}
		>
			{children}
		</button>
	);

	const renderLink = () => (
		<Link to={href} className={classes} {...props}>
			{children}
		</Link>
	);

	return href ? renderLink() : renderButton();
};

Button.propTypes = {
	children: PropTypes.node,
	disabled: PropTypes.bool,
	href: PropTypes.string,
	onClickFn: PropTypes.func,
	className: PropTypes.string,
};

export default Button;
