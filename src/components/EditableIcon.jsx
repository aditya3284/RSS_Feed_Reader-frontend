import PropTypes from "prop-types";
import { heroPeep_1 } from "../assests";
import FileInput from "./ui/FileInput";

const EditableIcon = ({
	iconString,
	changeFunction,
	deleteFunction,
	fileInputName,
}) => {
	return (
		<div className='relative size-40 overflow-hidden rounded-lg bg-s-3 dark:bg-black'>
			<img
				src={iconString?.URL ?? heroPeep_1}
				alt=''
				className='aspect-square object-cover'
				loading='lazy'
			/>
			<div className='absolute inset-0 rounded-full'>
				<div className='grid size-full place-items-center overflow-clip rounded-lg bg-s-2/60 opacity-0 backdrop-blur-sm transition-opacity hover:opacity-100 dark:bg-black/60'>
					{iconString?.URL ? (
						<>
							<form
								encType='multipart/form-data'
								className='grid size-full select-none place-content-center font-bold'
							>
								<label htmlFor='change-input' className='cursor-pointer'>
									Change
								</label>
								<FileInput
									inputName={fileInputName}
									inputId='change-input'
									acceptedFileType='image/png,image/jpeg,image/jpg,image/webp'
									onChangeFunction={changeFunction}
									inputHidden={true}
								/>
							</form>
							<button
								className='size-full select-none font-bold'
								onClick={deleteFunction}
							>
								<span>Delete</span>
							</button>
						</>
					) : (
						<form
							encType='multipart/form-data'
							className='grid size-full select-none place-content-center font-bold'
						>
							<label htmlFor='add-input' className='cursor-pointer px-9 py-14'>
								Add Icon
							</label>
							<FileInput
								onChangeFunction={changeFunction}
								inputHidden={true}
								inputName={fileInputName}
								inputId='add-input'
								acceptedFileType='image/png,image/jpeg,image/jpg,image/webp'
							/>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

EditableIcon.propTypes = {
	iconString: PropTypes.string,
	fileInputName: PropTypes.string,
	changeFunction: PropTypes.func,
	deleteFunction: PropTypes.func,
};

export default EditableIcon;
