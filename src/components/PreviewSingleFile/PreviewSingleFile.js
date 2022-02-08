import React from 'react';
import {
	ImageWrapper,
	DeleteButton,
	NotImage,
	DeleteFileButton,
	VideoWrapper,
	VideoDescription,
} from './styles';

import { formatBytes } from '../../config/utils/globalFunction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const PreviewSingleFile = ({ files, deleteFile, afterDelete }) => {
	const handleDelete = (index) => {
		deleteFile(index);
	};

	return (
		<>
			{files.map((file, i) => (
				<React.Fragment key={i}>
					{file.type.split('/')[0] === 'image' ? (
						// kalau dia berbentuk image, maka akan tampil ini
						<ImageWrapper>
							<img
								src={URL.createObjectURL(file)}
								alt={file.name}
								width="100%"
								height="100%"
							/>
							<DeleteButton>
								<FontAwesomeIcon
									icon={faTrash}
									onClick={() => {
										handleDelete(i);
									}}
								/>
							</DeleteButton>
						</ImageWrapper>
					) : file.type.split('/')[0] === 'video' ? (
						// kalau dia berbentuk video, maka akan tampil ini
						<VideoWrapper>
							<video width="100%" controls>
								<source src={URL.createObjectURL(file)} type="video/mp4" />
							</video>
							<VideoDescription>
								<div>
									<p>{file?.name}</p>
									<p>{formatBytes(file?.size)}</p>
								</div>
								<div>
									<DeleteFileButton>
										<p
											onClick={() => {
												handleDelete(i);
											}}
										>
											<FontAwesomeIcon icon={faTrash} /> Hapus File
										</p>
									</DeleteFileButton>
								</div>
							</VideoDescription>
						</VideoWrapper>
					) : (
						// selain image, hanya berbentuk kotak berisi info nama file dan ukuran
						<NotImage>
							<p>{file?.name}</p>
							<p>{formatBytes(file?.size)}</p>
							<DeleteFileButton>
								<p
									onClick={() => {
										handleDelete(i);
									}}
								>
									<FontAwesomeIcon icon={faTrash} /> Hapus File
								</p>
							</DeleteFileButton>
						</NotImage>
					)}
				</React.Fragment>
			))}
		</>
	);
};

export default PreviewSingleFile;
