import React from 'react';
import { Wrapper, UploadWrapper } from './styles';
import Dropzone from 'react-dropzone';

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
	...props
}) => {
	const handleDrop = (acceptedFiles) => {
		if (acceptedFiles?.length > 0) {
			const choosenFiles = acceptedFiles.map((file) => file);
			const newFiles = [...files, ...choosenFiles];
			setFiles(newFiles);
		}
	};

	const rejectDrop = () => {
		console.log('rejected');
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
				// multiple={multiple || false}
				multiple={false} // ini masih buggy jadi wajib kasih false
				maxSize={maxSize}
				minSize={minSize}
				accept={accept}
				maxFiles={maxFiles}
			>
				{({
					getRootProps,
					getInputProps,
					// isDragActive,
					isDragAccept,
					isDragReject,
				}) => {
					return (
						<UploadWrapper>
							{/* ini adalah kotak dropzone nya */}
							<div
								{...getRootProps({
									// className: `dropzone ${additionalClass} ${square}`,
									className: `dropzone`,
								})}
							>
								<input {...getInputProps()} />
								{children}
							</div>
						</UploadWrapper>
					);
				}}
			</Dropzone>
		</Wrapper>
	);
};
