import React, { useEffect, useState } from "react";
import Axios from "axios";

function Booking() {
  const [hotels, sethotels] = useState(false);
  const hotelid = window.location.pathname.split("/");

  useEffect(() => {
    const url = "http://localhost:5000/api/room/getroom/" + hotelid[2];

    Axios.get(url).then((res) => {
      sethotels(res.data.rooms[0]);
      console.table("set hotels : ", res.data.rooms[0]);
    });

  }, []);



  console.log('hotels in state : ' , hotels);

  if (hotels === false) {
    return <div> <div className="spinner-border text-success" role="status">
    <span className="sr-only">Loading...</span>
   
  </div>
  <h1>loading....</h1>

 
  
  </div>
    
 

    
    
  }
  
  return (
    
<div className="container d-flex justify-content-center">
 
     <div className="row">
       
    <div className="col-md-6" >
      <div className="card">
        <p className="rating">{hotels.hotel_id.stars}</p>
        <div className="card-body">
        
        <div> <img src={"http://localhost:3000/"+hotels.hotel_id.image_cover} alt="" className="img-responsive image" /> </div>

          <h5 className="card-title">{hotels.hotel_id.name}</h5>
          <h6 className="card-title">{hotels.hotel_id.description}</h6>
          
          <p className="card-text"><i className="fa fa-map-marker marker" />{hotels.hotel_id.localisation.city}/{hotels.hotel_id.localisation.country} </p>
          <button className="nav-link" class="btn btn-dark"  >Booking</button >
         
        </div>
      </div>
      
      
    </div>
    <div className="col-md-6" >
    <h5 className="card-title">{hotels.hotel_id.name}</h5>   
    <h6 className="card-title">{hotels.hotel_id.description}</h6>
    <h5 className="card-title">{hotels.type} / {hotels.price} DH</h5>   
    <div className="img-room">
    {hotels.images.map(ListHotel =>
      <div className="col-md-6" key={ListHotel._id}>
      <div className="card">
        

        <div> <img src={"http://localhost:3000/"+ListHotel.img} alt="" id="rom-img" className="img-responsive image" /> </div>
       

        </div>
      </div>
      
      )}
    
    
    
      </div>
    
      
      
    
   
 
  
</div>
</div>
</div>
  );
}

export default Booking;
