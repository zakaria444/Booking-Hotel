import React, { useState, useEffect } from "react";
import axios from "axios"
import { useParams,Link } from 'react-router-dom'
// import url from './url';
 

          


const Update = props => {
  const initialClientState = {
    id:null,
    name: "",
    email: "",
    username: "",

    
  };
  const { id } = useParams();
 
  const [client, setClient] = useState(initialClientState);

  const submit = (e) => {

  const   url = `http://localhost:5000/api/propreataire/${id}`
    e.preventDefault();
    const value = client
    console.log(value);
    axios.patch(url, {
      name: client.name,
      username: client.username,
      email: client.email,
      password: client.password,
    }).then((res) => {
     
      console.log(res.data);
      

      window.location="/client/list"
    });
  };

  const [message, setMessage] = useState("");

  
  const getClient = id => {
    axios.get(`http://localhost:5000/api/client/getclient${id}`)
      .then(response => {
     
         const data = response.data.data
         console.log("🚀 ~ file: Update.js ~ line 32 ~ data", data)
        
        setClient(data);
        
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getClient(id);
  
   
  
  
    
  }, [id]);
  const handleInputChange = event => {
    const newdata = { ...client };
    newdata[event.target.id] = event.target.value;
    setClient(newdata);
    console.log("🚀 ~ file: Update.js ~ line 53 ~ newdata", newdata)
    


   
    
  };


 
  return (
    // ...
    <div>
  <section className="vh-100 gradient-custom" >

 

<div className="container py-5 h-100">
  <div className="row justify-content-center align-items-center h-100">
    <div className="col-12 col-lg-9 col-xl-7">
    <button className="btn">

<Link  to={'/client/list'}>data</Link>
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
                    value={client.name}
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
                    value={client.username}
                   
                  
           
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
                    value={client.email}
                 
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