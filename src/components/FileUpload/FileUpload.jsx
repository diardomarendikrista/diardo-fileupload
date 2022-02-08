import React from 'react';
import { Wrapper, UploadWrapper } from './styles';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import PreviewMultiFile from '../PreviewMultifile/PreviewMultiFile';
import PreviewSingleFile from '../PreviewSingleFile/PreviewSingleFile';

export const FileUpload = ({
	label,
	uploadFile,
	maxSize,
	minSize,
	maxFiles,
	accept, // file type
	children,
	files,
	setFiles,
	disabled,
	disableEffect,
	disablePreview,
	onError,
	multiple,
	...props
}) => {
	const [error, setError] = React.useState(false);

	const handleError = (value) => {
		if (onError) onError(value);
	};

	const handleDrop = (acceptedFiles) => {
		// if max files exceed, then error
		if (maxFiles > 1 && files?.length >= maxFiles) {
			handleError({
				error: 'max-file',
				errorDetail: `max file is ${maxFiles}`,
			});
			setError(true);

			setTimeout(() => {
				setError(false);
			}, [3000]);
			return;
		}

		if (acceptedFiles?.length > 0) {
			const choosenFiles = acceptedFiles.map((file) => file);
			const newFiles = [...files, ...choosenFiles];
			setFiles(newFiles);
			setError(false);
		}
	};

	const rejectDrop = (errorDetail) => {
		setError(true);
		handleError({
			error: errorDetail[0].errors[0]?.type ?? 'on errorDetail',
			message: errorDetail[0].errors[0]?.message,
			errorDetail,
		});

		setTimeout(() => {
			setError(false);
		}, [2000]);
	};

	const handleDelete = (index) => {
		const newFiles = files.filter((item, i) => i !== index);
		setFiles(newFiles);
	};

	return (
		<Wrapper>
			{label && (
				<label htmlFor={props.id || props.name} className="d-flex">
					<h4>
						{label}
						{props.mandatory && <span className="mandatory">*</span>}
					</h4>
				</label>
			)}
			<Dropzone
				onDrop={handleDrop}
				onDropRejected={rejectDrop}
				// onDropAccepted={() => setError(false)}
				multiple={multiple || false}
				// multiple={true}
				maxSize={maxSize}
				minSize={minSize}
				accept={accept}
				maxFiles={maxFiles}
				disabled={disabled}
			>
				{({
					getRootProps,
					getInputProps,
					// isDragActive,
					isDragAccept,
					isDragReject,
				}) => {
					const additionalClass = isDragAccept
						? 'accept'
						: isDragReject
						? 'reject'
						: '';
					// const square = files?.length > 0 ? 'square' : 'w-100';

					return (
						<UploadWrapper>
							{/* this is preview file (multifile & singlefile is different) */}
							{!disablePreview && (
								<>
									{maxFiles === 1 && files?.length > 0 ? (
										<PreviewSingleFile
											files={files}
											deleteFile={handleDelete}
										/>
									) : (
										<PreviewMultiFile files={files} deleteFile={handleDelete} />
									)}
								</>
							)}
							{/* this is the dropzone */}
							{/* kalau maxfile nya 1, maka tidak akan muncul lagi */}
							{maxFiles === 1 && files.length > 0 ? null : (
								<div
									{...getRootProps({
										className: `dropzone
										 ${additionalClass}
										 ${error ? 'reject' : ''}
										`,
									})}
								>
									<input {...getInputProps()} />
									{children}
								</div>
							)}
						</UploadWrapper>
					);
				}}
			</Dropzone>
		</Wrapper>
	);
};

FileUpload.defaultProps = {
	accept: '',
	maxFiles: 0,
	disabled: false,
	mandatory: false,
	disablePreview: false,
};

FileUpload.propTypes = {
	accept: PropTypes.string,
	maxFiles: PropTypes.number,
	disabled: PropTypes.bool,
	mandatory: PropTypes.bool,
	disablePreview: PropTypes.bool,
};
