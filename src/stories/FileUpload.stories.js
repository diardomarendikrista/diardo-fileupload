import React from 'react';
import { storiesOf } from '@storybook/react';
import { FileUpload } from '../components/FileUpload';

// const stories = storiesOf('diardo-fileupload', module);

// stories.add('FileUpload', () => {
// 	const [files, setFiles] = React.useState([]);

// 	const formatBytes = (bytes, decimals = 2) => {
// 		if (bytes === 0) return '0 Bytes';

// 		const k = 1024;
// 		const dm = decimals < 0 ? 0 : decimals;
// 		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

// 		const i = Math.floor(Math.log(bytes) / Math.log(k));

// 		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
// 	};

// 	const handleDelete = (indexFile) => {
// 		const newFiles = files.filter((item, i) => i !== indexFile);
// 		setFiles(newFiles);
// 	};

// 	return (
// 		<div>
// 			<FileUpload
// 				id="file"
// 				label="Unggah File"
// 				name="file"
// 				maxSize={5000000}
// 				cropShape={'square'}
// 				// cropShape="round"
// 				aspect={4 / 4}
// 				accept="image/jpg, image/jpeg, image/png"
// 				files={files}
// 				setFiles={setFiles}
// 				mandatory
// 				// disabled={boolean("disabled", false, "Primary Button")}
// 			>
// 				<p>Upload file anda / Drop kedalam kotak ini</p>
// 			</FileUpload>

// 			{files.length > 0 && (
// 				<div style={{ margin: '8px 0px', fontWeight: 'bold' }}>
// 					ini custom preview (dimodif sendiri) :
// 				</div>
// 			)}
			// {files.length > 0 &&
			// 	files.map((item, i) => (
			// 		<div key={i}>
			// 			<div>detail :</div>
			// 			<div>name: {item.name}</div>
			// 			<div>size: {formatBytes(item.size)}</div>
			// 			<div>type: {item.type}</div>
			// 			<button onClick={() => handleDelete(i)}>hapus</button>
			// 			<hr />
			// 		</div>
			// 	))}
// 		</div>
// 	);
// });

// export default {
// 	title: 'FileUpload',
// 	component: FileUpload,
// 	argTypes: {
// 		disabled: {
// 			options: [true, false],
// 			control: { type: 'radio' },
// 		},
// 	},
// };

// const Template = (args) => (
// 	<FileUpload
// 		id="file"
// 		label="Unggah File"
// 		name="file"
// 		maxSize={5000000}
// 		cropShape={'square'}
// 		// cropShape="round"
// 		aspect={4 / 4}
// 		accept="image/jpg, image/jpeg, image/png"
// 		files={files}
// 		setFiles={setFiles}
// 		mandatory
// 		// disabled={boolean("disabled", false, "Primary Button")}
// 	>
// 		<p>Upload file anda / Drop kedalam kotak ini</p>
// 	</FileUpload>
// );

// export const disabled = Template.bind({});
// disabled.args = {
// 	disabled: false,
// };

// export const disabled = {
// 	args: {
// 		disabled: false,
// 	},
// };
