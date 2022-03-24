import React, { useEffect, useState } from "react";
import Axios from "axios";

function Booking() {
  const [hotels, sethotels] = useState(false);
  const [rooms, setrooms] = useState(false);

  const hotelid = window.location.pathname.split("/");

  useEffect(() => {
    const url = "http://localhost:5000/api/room/getroom/" + hotelid[2];

    Axios.get(url).then((res) => {
      sethotels(res.data.rooms[0]);
      setrooms(res.data.rooms);

     
    });

  },);



  console.log('hotels in state : ' , hotels);
  console.log('rooms in state : ' , rooms);


  if (hotels === false ) {       
    return <div> <div className="spinner-border text-success" role="status">
    <span className="sr-only">Loading...</span>
   
  </div>
  <h1>loading....</h1>

 
  
  </div>
    
 

    
    
  }
  else if ( rooms ===  false){
    return <div> <div className="spinner-border text-success" role="status">
    <span className="sr-only">Loading...</span>
   
  </div>
  <h1>loading....</h1>

 
  
  </div>
  }
  
  return (
    <div>
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

<div className="container d-flex justify-content-center">
 
     <div className="row">
{ rooms.map(ListRoom =>
<div className="col-md-6" >

    <h5 className="card-title">{ListRoom.hotel_id.name}</h5>   
    <h6 className="card-title">{ListRoom.hotel_id.description}</h6>
    <h5 className="card-title">{ListRoom.type} / {ListRoom.price} DH</h5>   
    <div className="img-room">
    {ListRoom.images.map(ListHotel =>
      <div className="col-md-6" key={ListHotel._id}>
      <div className="card">
        

        <div> <img src={"http://localhost:3000/"+ListHotel.img} alt="" id="rom-img" className="img-responsive image" /> </div>
       

        </div>
      </div>
      
      )}
    
    
    
      </div>
    
      
      
    
   
 
  
</div>
)}
</div>
</div>

<footer class="text-center text-lg-start bg-light text-muted">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
  
  </section>
 
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Nom de la compagnie
          </h6>
          <p>
          Booking est une application de réservation en ligne permettant aux particuliers de faciliter leurs réservations          </p>
        </div>

        

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> Youssoufia, NY 10012, MA</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
          </p>
          <p><i class="fas fa-phone me-3"></i> + 5 23 56 88 99</p>
          <p><i class="fas fa-print me-3"></i> + 5 23 56 89 00</p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4" >
    <a class="text-reset fw-bold" href="http://localhost:3000">BooKing.com</a>
  </div>
</footer>
  
</div>
  );
}

export default Booking;
