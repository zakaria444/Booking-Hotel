import React, { useState } from "react";
import Axios from "axios"
import jwtdecode from "jwt-decode";
import {Link} from"react-router-dom";



function CreateHotel() {
  const url = "http://localhost:5000/api/hotel/add";
  const jwt =  localStorage.getItem('token');
  const JWT1 =jwtdecode(jwt);
  

  const [values, setvalues] = useState({
    name: "",
    description: "",
    stars: "",
    country: "",
    city:"",
    image_cover:"",
    user_id:JWT1.user_id,
  });

  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
   const  handleUpload = async (event) => {
    // setFile(event.target.files[0]);
    // console.log('target',event.target.files[0]);

    // const file = event.target.files[0];
    // const base64 = await  convertToBase64(event.target.files[0]);
    // console.log('base',base64);
    // setvalues({...values,image_cover: base64});
    // console.log('base',base64);

    // Add code here to upload file to server
    // ...
  }


 
  const submit = async (e) => {

   
    console.log('after submit',values);
    // const ecoded=Base64.encode()
 


    e.preventDefault();
  
    await Axios.post(url,{
      name: values.name,
      // image_cover: values.image_cover,
      description: values.description,
      stars: values.stars,
      localisation: [values.city , values.country] ,
      user_id:values.user_id
    },{
      headers: {
        'Authorization': `Bearer ${jwt}` 
      }
    
     
      
    }).then((res) => {
        
      window.location="/admin/afficherhotel"

    });
  };

    const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handle = (event) => {

    // const base64 = convertToBase64(event.target.files[0]);
    // // console.log('base',base64);
    // setvalues(base64);
    const newdata = { ...values };


    newdata[event.target.id] = event.target.value;
    setvalues(newdata);
    

    console.log(newdata);



    // event.prevntDefault();
    // setErrors(validation(values));
  };

  return (

    <section className="vh-100 gradient-custom" >
     
   
    
    <Link className="nav-link active" aria-current="page" to="/dashbordadmin">Back</Link>


      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" id="form">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Ajouter Hotel</h3>
                <form onSubmit={submit}>
                  <div className="row">
                        <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <input
                          type="text"
                          id="name"
                          onChange={(event) => handle(event)}
                          name="fullname"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Name</label>
                      </div>
                      {/* {errors.fullname && <p className='error'>{errors.fullname}</p>} */}
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="description"
                          onChange={(event) => handle(event)}
                          name="description"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">description</label>
                      </div>
                      {/* {errors.username && <p className='error'>{errors.username}</p>} */}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline" id="form-outline">
                      <label className="form-label">stars
                        </label>
                         <select labelId="demo-simple-select-label"   type="text"
                          id="stars"
                          onChange={(event) => handle(event)}
                          name="stars"
                          className="form-control form-control-lg"  label="Age" >
                        <option value={1}>⭐</option>
                        <option value={2}>⭐⭐</option>
                        <option value={3}>⭐⭐⭐</option>
                        <option value={4}>⭐⭐⭐⭐</option>
                        <option value={5}>⭐⭐⭐⭐⭐</option>
                       
                       
                      
                      </select>
                      </div>
                      {/* {errors.email && <p className='error'>{errors.email}</p>} */}
                    </div>
                    <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="city"
                          onChange={(event) => handle(event)}
                          name="city"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">city</label>
                        
                      </div>
                      {/* {errors.email && <p className='error'>{errors.email}</p>} */}
                    </div>
                    
                   
                  </div>
                
                   
                  
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="country"
                          onChange={(event) => handle(event)}
                          name="country"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">country</label>
                      </div>
                      {/* {errors.email && <p className='error'>{errors.email}</p>} */}
                    </div>
                    
                   
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="file"
                        id="image"
                        onChange={handleUpload} 
                          // name="image"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">image</label>
                        {file && <ImageThumb image={file} />}
                      </div>
                   
                    </div>
                    
                   
                  </div>
                  

               

                  <div className="mt-4 pt-2">
                    <button
                      className="btn btn-primary btn-lg"
                      value="Submit"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const ImageThumb = ({ image }) => {
  return <img className="image-url" src={URL.createObjectURL(image)} alt={image.name} />;
};

export default CreateHotel ;
