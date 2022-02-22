import React, { useState } from "react";
import Axios from "axios"

function Inscription() {
  const url = "http://localhost:5000/api/users/register-user";
  const [values, setvalues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  // const [errors,setErrors]=useState({});
  // const handelChange =(event)=>{
  //     setvalues({
  //         ...values,
  //         [event.target.name]:event.target.value,
  //     })
  // };
  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
    }).then((res) => {
        
      console.log(res.data);

      window.location="/login"
    });
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
      
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" id="form">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
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
                          id="username"
                          onChange={(event) => handle(event)}
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
                          onChange={(event) => handle(event)}
                          name="emailAddress"
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
                          onChange={(event) => handle(event)}
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

export default Inscription;
