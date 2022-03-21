import React, { useState ,useEffect} from "react";
import Axios from "axios"



function CreateRoom() {
  const url = "http://localhost:5000/api/room/add";
  const [file, setFiles] = useState();
  const [hotels , setHotels] = useState([]);
  console.log("🚀 ~ file: CreateRoom.js ~ line 10 ~ CreateRoom ~ hotels", hotels)

  const [values, setvalues] = useState({

    name: "",
    description: "",
    type: "",
    price: "",
    hotel_id:"",
  

  });
  useEffect(()=> getHotels(),[] )
 const getHotels = ()=>{
    const url="http://localhost:5000/api/hotel"
  Axios.get(url).then((res) => {
    setHotels(res.data.data) ;
    console.log(res.data.data);
    
  })
}

 
  const submit = (e) => {

    e.preventDefault();
    const form_data = new FormData();
  
    for (let i = 0 ; i < file.length; i++ ){
      form_data.append("images",file[i])
    }
    form_data.append("name",values.name)
    form_data.append("description",values.description)
    form_data.append("type",values.type)
    form_data.append("price",values.price)
    form_data.append("hotel_id",values.hotel_id)

  

    form_data.append("user_id",values.user_id)
    Axios.post(url,form_data, {
      headers: {
        'Content-Type': 'multipart/form-data',
    },
    }).then((res) => {
        
      console.log(res.data);

      window.location="/room/list"
    });
  };

  const handle = (event) => {
  
    const newdata = { ...values };


    newdata[event.target.id] = event.target.value;
    setvalues(newdata);
    

    console.log(newdata);

    const fileupload=event.target.files;
    setFiles(fileupload);
  


  };

  return (
       
    <section className="vh-100 gradient-custom" >
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" id="form">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Create Room</h3>
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
                          id="description"
                          onChange={(event) => handle(event)}
                          name="description"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">description</label>
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


                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="type"
                          onChange={(event) => handle(event)}
                          name="type" multiple
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">type</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <select
  
                          id="hotel_id"
                          onChange={(event) => handle(event)}
                          name="hotel_id" 
                          className="form-control form-control-lg"
                        >
                                   <option value="0"> Select a Hotel        </option>
                               
                               { hotels.map(ListHotel =>   
                                    
                                          <option value={ListHotel._id}>{ListHotel.name}        </option>
         
                              )}
                        </select>
                        <label className="form-label">Hotels</label>
                      </div>
                    </div>


  

                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="file"
                          id="images"
                          multiple
                          onChange={(event) => handle(event)}
                          name="images"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">image_cover</label>
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

export default CreateRoom;