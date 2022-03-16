import React, { useState } from "react";
import Axios from "axios"



function CreateBookingOwner() {
  const url = "http://localhost:5000/api/booking/addbooking";
  const [values, setvalues] = useState({
    date_from: "",
    date_to: "",
    total_price: "",
    payement_method: "",
    status: ""
  });
 
  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      date_from: values.date_from,
      date_to: values.date_to,
      total_price: values.total_price,
      payement_method: values.payement_method,
      status: values.status
    }).then((res) => {
        
      console.log(res.data);

      let bookingId = res.data._id;

      Axios.post(url, {
        date_from: values.date_from,
        date_to: values.date_to,
        total_price: values.total_price,
        payement_method: values.payement_method,
        status: values.status
      }).then((res) => {
          
        console.log(res.data)  
        
        window.location="/dashbordowner"
      });

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
                          type="date"
                          id="date_from"
                          onChange={(event) => handle(event)}
                          name="date_from"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">date from</label>
                      </div>
                    </div>

                        <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <input
                          type="date"
                          id="date_to"
                          onChange={(event) => handle(event)}
                          name="date_to"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">date to</label>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="total_price"
                          onChange={(event) => handle(event)}
                          name="total_price"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">total price</label>
                      </div>
                    </div>

                    
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="payement_method"
                          onChange={(event) => handle(event)}
                          name="payement_method"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">payement method</label>
                      </div>
                    </div>
                  </div>

                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="status"
                          onChange={(event) => handle(event)}
                          name="status"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">status</label>
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

export default CreateBookingOwner;