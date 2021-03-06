import React, { useState } from "react";
import Axios from "axios"



function CreateType() {
  const url = "http://localhost:5000/api/type/add";
  const [values, setvalues] = useState({
    name: "",
    price: ""
  });
 
  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      name: values.name,
      price: values.price
    }).then((res) => {
        
      console.log(res.data);

      window.location="/type/list"
    });
  };

  const handle = (event) => {
    const newdata = { ...values };
    newdata[event.target.id] = event.target.value;
    setvalues(newdata);
    console.log(newdata);


  };

  return (
       
    <section className="vh-100 gradient-custom" >
      
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" id="form">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Create Type</h3>
                <form onSubmit={submit}>
                <div className="row">
                        <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <input
                          type="text"
                          id="name"
                          onChange={(event) => handle(event)}
                          name="name"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="price"
                          onChange={(event) => handle(event)}
                          name="price"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">price</label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <button
                      className="btn btn-primary btn-lg"
                      value="Submit"
                      type="submit"
                    >
                      Add
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

export default CreateType;