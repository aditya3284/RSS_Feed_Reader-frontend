import PropTypes from "prop-types";

const PasswordInput = ({
	inputId,
	inputName,
	inputAutocomplete,
	classes,
	inputPattern,
	onChangeFunction,
	passwordMinLength,
	passwordMaxLength,
	inputPlaceholder,
	inputRequired,
	errorText,
}) => {
	return (
		<div className='relative bg-inherit'>
			<input
				type='password'
				name={inputName}
				id={inputId}
				autoComplete={inputAutocomplete}
				className={classes}
				pattern={inputPattern}
				onChange={onChangeFunction}
				minLength={passwordMinLength}
				maxLength={passwordMaxLength}
				placeholder={inputPlaceholder}
				required={inputRequired}
			/>
			<span
				className='absolute right-1 top-2 rounded-lg bg-inherit p-0.5 text-inherit'
				onClick={(event) => {
					event.preventDefault();
					const input = document.getElementById(inputId);
					input.type = input.type === "password" ? "text" : "password";
				}}
			>
				show
			</span>
			<p className='hidden my-1.5 text-pink-700 peer-[:user-invalid]:block'>
				{errorText}
			</p>
		</div>
	);
};

PasswordInput.propTypes = {
	inputId: PropTypes.string,
	passwordMinLength: PropTypes.number,
	passwordMaxLength: PropTypes.number,
	inputName: PropTypes.string,
	inputAutocomplete: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	classes: PropTypes.string,
	inputPattern: PropTypes.string,
	onChangeFunction: PropTypes.func,
	inputRequired: PropTypes.bool,
	errorText: PropTypes.string,
};

export default PasswordInput;
