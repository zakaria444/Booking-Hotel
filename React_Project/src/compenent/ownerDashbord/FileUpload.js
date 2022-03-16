import React from "react";
import Axios from "axios";

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
function FileUpload() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("hello",file);
    const formData = new FormData();
    formData.append("file", file);
    const urlhotel="http://localhost:5000/api/hotel/upload"

  Axios.post(urlhotel,formData,{
    headers: {
      'Content-Type': 'multipart/form-data',
  },
  }).then((res) => {

      console.log(res);
    // window.location="/ownerDashbord/fileupload"
    // console.log(res.data.data[0]);
    
    // setFile(res.data.data[0])
    // console.log('file',file.image_cover);

  })
   

  };
 

  function handleUpload(event) {
    setFile(event.target.files[0]);
    console.log(file);

   

    // Add code here to upload file to server
    // ...
  }

  return (
    <div id="upload-box">
      <input type="file" onChange={handleUpload} />
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>

      {file && <ImageThumb image={file} />}
         <input
         placeholder={file.image_cover}
                      type="text"
                      id="description"
                      name="description"
                      className="form-control form-control-lg"
                    />
      <button  className="afficher-hotel" type="submit" onClick={() => submit()}>hotel</button>

    </div>
  );

}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
}


export default  FileUpload 

