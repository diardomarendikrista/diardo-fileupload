# diardo-fileupload

REACT ONLY

File uploader drag & drop using react-dropzone.

will update with crop image feature in future.

<br />
Basic use :

```
import { FileUpload } from 'diardo-fileupload';

function Example () {
  const [files, setFiles] = React.useState([]);

  return (
    <div>
      <FileUpload
        id="file"
        label="Upload File"
        name="file"
        maxSize={5000000}
        files={files}
        setFiles={setFiles}
        mandatory
      >
        <p>Upload your file / Drop to this box</p>
      </FileUpload>

      {files.length > 0 &&
        files.map((item, i) => (
          <div key={i}>
            <div>detail :</div>
            <div>name: {item.name}</div>
            <div>type: {item.type}</div>
            <hr />
          </div>
      ))}
    </div>
  )
}
```

the main component is ```<FileUpload>``` , and the rest is up to you (how to show the choosen file)

<br />
example with delete file :

```
import { FileUpload } from 'diardo-fileupload';

function Example () {
  const [files, setFiles] = React.useState([]);
  
	const handleDelete = (indexFile) => {
		const newFiles = files.filter((item, i) => i !== indexFile);
		setFiles(newFiles);
	};

  return (
    <div>
      <FileUpload
        id="file"
        label="Upload File"
        name="file"
        maxSize={5000000}
        files={files}
        setFiles={setFiles}
        mandatory
      >
        <p>Upload your file / Drop to this box</p>
      </FileUpload>

      {files.length > 0 &&
        files.map((item, i) => (
          <div key={i}>
            <div>detail :</div>
            <div>name: {item.name}</div>
            <div>type: {item.type}</div>
            <button onClick={() => handleDelete(i)}>delete</button>
            <hr />
          </div>
      ))}
    </div>
  )
}
```
of course you can modify as per needed.