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
        maxFiles={0}
        files={files}
        setFiles={setFiles}
        accept=""
        onError={(value) => console.log(value, 'error value')}
        mandatory
      >
        <p>Upload your file / Drop to this box</p>
      </FileUpload>
    </div>
  )
}
```

the main component is `<FileUpload>` , and the rest is up to you (how to show the choosen file)

Props and description:
<table>
  <tr>
    <th>Props</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>label</td>
    <td>Title of the form.</td>
  </tr>
  <tr>
    <td>maxSize</td>
    <td>Max size in bytes</td>
  </tr>
  <tr>
    <td>maxFiles</td>
    <td>Max files can be accepted (0 = unlimited)</td>
  </tr>
  <tr>
    <td>files</td>
    <td>files on local state</td>
  </tr>
  <tr>
    <td>setFiles</td>
    <td>set files on local state</td>
  </tr>
  <tr>
    <td>accept</td>
    <td>accepted file format, example: "image/jpg, image/jpeg, image/png"</td>
  </tr>
  <tr>
    <td>onError</td>
    <td>the values is show error detail</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>

<br />
using your custom preview file (disable default preview) :

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
        maxFiles={0}
        files={files}
        setFiles={setFiles}
        accept="image/jpg, image/jpeg, image/png"
        onError={(value) => console.log(value, 'error value')}
        mandatory
        disablePreview
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
