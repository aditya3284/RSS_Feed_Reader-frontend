import PropTypes from "prop-types";

const FileInput = ({
	acceptedFileType,
	inputId,
	inputName,
	inputHidden,
	onChangeFunction,
}) => {
	return (
		<input
			type='file'
			accept={acceptedFileType}
			id={inputId}
			name={inputName}
			hidden={inputHidden}
			onChange={onChangeFunction}
		/>
	);
};

FileInput.propTypes = {
	acceptedFileType: PropTypes.string,
	inputId: PropTypes.string,
	inputName: PropTypes.string,
	inputHidden: PropTypes.bool,
	onChangeFunction: PropTypes.func,
};

export default FileInput;
