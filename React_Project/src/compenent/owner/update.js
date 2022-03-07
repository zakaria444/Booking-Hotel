import React, { useState, useEffect } from "react";
import axios from "axios"
import { useParams,Link } from 'react-router-dom'
import url from './url';
 

          


const Update = props => {
  const initialOwnerState = {
    id:null,
    name: "",
    email: "",
    username: "",

    
  };
  const { id } = useParams();
 
  const [owner, setOwner] = useState(initialOwnerState);

  const submit = (e) => {

  const   url = `http://localhost:5000/api/propreataire/${id}`
    e.preventDefault();
    const value = owner
    console.log(value);
    axios.patch(url, {
      name: owner.name,
      username: owner.username,
      email: owner.email,
      password: owner.password,
    }).then((res) => {
     
      console.log(res.data);
      

      window.location="/owner"
    });
  };

  const [message, setMessage] = useState("");

  
  const getOwner = id => {
    axios.get(`http://localhost:5000/api/propreataire/Getallproprietaires/${id}`)
      .then(response => {
     
         const data = response.data
         console.log("🚀 ~ file: Update.js ~ line 32 ~ data", data)
        
        setOwner(data);
        
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getOwner(id);
  
   
  
  
    
  }, [id]);
  const handleInputChange = event => {
    const newdata = { ...owner };
    newdata[event.target.id] = event.target.value;
    setOwner({
      [event.target.name] : event.target.value,
    });
   
    


   
    
  };


 
  return (
    // ...
    <div>
      
  <section className="vh-100 gradient-custom" >

 

<div className="container py-5 h-100">
  <div className="row justify-content-center align-items-center h-100">
    <div className="col-12 col-lg-9 col-xl-7">
    <button className="btn">

<Link  to={'/owner'}>data</Link>
</button>
      <div className="card shadow-2-strong card-registration" id="form">
        <div className="card-body p-4 p-md-5">
          <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update owner</h3>
          <form onSubmit={submit}>
            <div className="row">
                  <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <input
                    type="text"
                    id="name"
                    value={owner.name}
                    onChange={handleInputChange}
                    name="name"
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
                    id="username"
                    value={owner.username}
                   
                  
           
                    onChange={handleInputChange}
                    name="username"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Username</label>
                </div>
                {/* {errors.username && <p className='error'>{errors.username}</p>} */}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4 pb-2">
                <div className="form-outline">
                  <input
                    type="email"
                    id="email"
                    value={owner.email}
                 
                    onChange={handleInputChange}
                    name="email"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Email</label>
                </div>
                {/* {errors.email && <p className='error'>{errors.email}</p>} */}
              </div>
              <div className="col-md-6 mb-4 pb-2">
                <div className="form-outline">
                  <input
                    type="password"
                    id="password"

                    name="password"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Password</label>
                  {/* {errors.password && <p className='error'>{errors.password}</p>} */}
                </div>
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
            type="submit"
            className="badge badge-success"
           
          >
            Update
          </button>
            </div>
           
          </form>
        
        </div>
         
         
      </div>
    </div>
  </div>
</div>
</section>
    </div>
  );
};
export default Update;