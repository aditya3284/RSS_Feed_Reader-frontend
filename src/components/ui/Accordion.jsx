import PropTypes from "prop-types";
import { useState } from "react";

const Accordion = ({ children, className }) => {
	const classes = `accordion ${className || ""}`;
	return <div className={classes}>{children}</div>;
};

Accordion.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const AccordionTitle = ({ children, className }) => {
	const classes = `accordion-title h3 ${className || ""}`;
	return <h2 className={classes}>{children}</h2>;
};

AccordionTitle.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const AccordionBody = ({ children, className }) => {
	const classes = `accordion-body ${className || ""}`;
	return <div className={classes}>{children}</div>;
};

AccordionBody.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const AccordionItem = ({ title, children, className }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	const classes = `accordion-item ${className || ""}`;

	return (
		<div aria-expanded={isOpen} onClick={handleClick} className={classes}>
			<div className='my-1 flex justify-between gap-8'>
				<h3 className='font-semibold'>{title}</h3>
				<span>{isOpen ? "Close" : "open"}</span>
			</div>
			<div
				className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
			>
				<div className='overflow-hidden'>{children}</div>
			</div>
		</div>
	);
};

AccordionItem.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
};

const AccordionItemContent = ({ children, className }) => {
	const classes = `accordion-content ${className || ""}`;
	return <div className={classes}>{children}</div>;
};

AccordionItemContent.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export {
	Accordion,
	AccordionBody,
	AccordionItem,
	AccordionItemContent,
	AccordionTitle,
};
