import React from 'react';
import { FileWrapper, FileSquare, DeleteButton, NotImage } from './styles';

import { formatBytes } from '../../config/utils/globalFunction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPaperclip } from '@fortawesome/free-solid-svg-icons';

const PreviewMultiFile = ({ files, deleteFile }) => {
	const handleDelete = (index) => {
		deleteFile(index);
	};

	if (files)
		return (
			<>
				{files?.length > 0 &&
					files.map((file, i) => {
						return (
							<FileWrapper key={i}>
								<FileSquare>
									{file.type.split('/')[0] === 'image' ? (
										// kalau dia berbentuk image, maka akan tampil ini
										<img
											src={URL.createObjectURL(file)}
											alt={file.name}
											width="100%"
											height="100%"
										/>
									) : (
										// selain image, hanya berbentuk kotak berisi info nama file dan ukuran
										<NotImage>
											<p>
												<FontAwesomeIcon icon={faPaperclip} /> attachment
											</p>
											<p>{file?.name}</p>
											<p>{formatBytes(file?.size)}</p>
										</NotImage>
									)}
									<DeleteButton>
										<FontAwesomeIcon
											icon={faTrash}
											onClick={() => {
												handleDelete(i);
											}}
										/>
									</DeleteButton>
								</FileSquare>
							</FileWrapper>
						);
					})}
			</>
		);
	else return null;
};

export default PreviewMultiFile;
