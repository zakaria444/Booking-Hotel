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
    image:"",
    user_id:JWT1.user_id,
  });

  const [file, setFile] = useState({
    image_cover:''
  });
  const [fileName, setFileName] = useState("");
  
  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);

    // try {
    //   const res = await Axios.post(
    //     "http://localhost:5000/upload",
    //     formData
    //   );
    //   console.log(formData);
    // } catch (ex) {
    //   console.log(ex);
    // }
  };


 
  // const [errors,setErrors]=useState({});
  // const handelChange =(event)=>{
  //     setvalues({
  //         ...values,
  //         [event.target.name]:event.target.value,
  //     })
  // };
  const submit = async (e) => {
    console.log(values.description);

    e.preventDefault();
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("fileName", fileName);
    await Axios.post(url, {
      name: values.name,
      description: values.description,
      stars: values.stars,
      localisation: [values.city , values.country] ,
      image_cover:values.image,
      user_id:values.user_id
    },{
      headers: {
        'Authorization': `Bearer ${jwt}` 
      }
      
    }).then((res) => {
        
      window.location="/admin/afficherhotel"

    });
  };
const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
// const fillname=e.target.files[0].name;
const filetype=e.target.files[0];
//     console.log(fillname);
    console.log(filetype);

  };
  const handle = (event) => {


    const newdata = { ...values };


    newdata[event.target.id] = event.target.value;
    setvalues(newdata);
    

    console.log(newdata);



    // event.prevntDefault();
    // setErrors(validation(values));
  };

  return (

    <section className="vh-100 gradient-custom" >
     
     <div className="App">
          <input type="file" onChange={saveFile} />
          <button onClick={uploadFile}>Upload</button>
        </div>
    
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
                        onChange={(event) => handle(event)}
                          // name="image"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">image</label>
                      </div>
                      {/* {errors.email && <p className='error'>{errors.email}</p>} */}
                    </div>
                    
                   
                  </div>
                  

                  {/* <div class="row">
                    <div class="col-12">

                    <select class="select form-control-lg">
                        <option value="1" disabled>Choose Role</option>
                        <option value="2">Subject 1</option>
                        <option value="3">Subject 2</option>
                        <option value="4">Subject 3</option>
                    </select>
                    <label class="form-label select-label">Choose Role</label>

                    </div>
                </div> */}

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

export default CreateHotel;
