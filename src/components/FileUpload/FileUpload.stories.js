// Button.stories.js|jsx

import React from 'react';
import { FileUpload } from '.';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'File Upload',
	component: FileUpload,
};

export const Basic = (args) => {
	const [files, setFiles] = React.useState([]);

	return (
		<>
			<FileUpload
				id="file"
				label="Unggah File"
				name="file"
				maxSize={5000000}
				maxFiles={0}
				cropShape={'square'}
				// cropShape="round"
				aspect={4 / 4}
				accept=""
				files={files}
				setFiles={setFiles}
				onError={(value) => console.log(value, 'error value')}
				{...args}
			>
				<p>Upload file anda / Drop kedalam kotak ini</p>
			</FileUpload>
		</>
	);
};

export const accept = Basic.bind({});
accept.args = {
	accept: 'image/jpg, image/jpeg, image/png',
};

export const maxFiles = Basic.bind({});
maxFiles.args = {
	maxFiles: 1,
};

export const mandatory = Basic.bind({});
mandatory.args = {
	mandatory: true,
};

export const disablePreview = Basic.bind({});
disablePreview.args = {
	disablePreview: true,
};

export const disabled = Basic.bind({});
disabled.args = {
	disabled: true,
};
