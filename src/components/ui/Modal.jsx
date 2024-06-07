import PropTypes from "prop-types";
import { forwardRef, useEffect } from "react";

const Modal = forwardRef(function Modal({ children, className, modalId }, ref) {
	const classes = `modal ${className || ""}`;

	useEffect(() => {
		const modal = document.getElementById(modalId);
		const handleModalClose = (event) => {
			// event.composedPath()[0] === modal && modal.close();
			event.target === modal && modal.close();
		};

		modal.addEventListener("click", handleModalClose);
		return () => {
			modal.removeEventListener("click", handleModalClose);
		};
	}, [modalId]);

	return (
		<dialog id={modalId} ref={ref} className={classes}>
			<div className='p-6'>{children}</div>
		</dialog>
	);
});

Modal.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	modalId: PropTypes.string,
};

const ModalHeader = ({ children, className }) => {
	const classes = `modal-header ${className || ""}`;
	return <header className={classes}>{children}</header>;
};

ModalHeader.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const ModalContent = ({ children, className }) => {
	const classes = `modal-content ${className || ""}`;
	return <main className={classes}>{children}</main>;
};

ModalContent.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const ModalFooter = ({ children, className }) => {
	const classes = `modal-footer ${className || ""}`;
	return <footer className={classes}>{children}</footer>;
};

ModalFooter.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const ModalTitle = ({ children, className }) => {
	const classes = `h3 modal-title ${className || ""}`;
	return <h3 className={classes}>{children}</h3>;
};

ModalTitle.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

const ModalDescription = ({ children, className }) => {
	const classes = `modal-description ${className || ""}`;
	return <p className={classes}>{children}</p>;
};

ModalDescription.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export {
	Modal,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalTitle,
};
