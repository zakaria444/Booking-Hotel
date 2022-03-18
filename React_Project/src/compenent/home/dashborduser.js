import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import {Link} from"react-router-dom"


function Dashborduser() {

  
const [hotels, sethotels] = useState([]);

const handleafficher = (id)=>{
  window.location="/booking/"+id;

  const url="http://localhost:5000/api/room/"+id
  Axios.get(url).then((res) => {

    console.log(res.data);
})}

useEffect( ()=>{
    const url="http://localhost:5000/api/hotel"
    Axios.get(url).then((res) => {
      sethotels(res.data.data) ;
  
      })},[])

  
  return (
    <div>
<h1>dashborduser</h1>

<div class="rows" >
  <div className='roow'>

  </div>
  {hotels.map(ListHotel =>
  <div class="w-60 col-3" key={ListHotel._id}>
    <div class="card card-body mb-3">
      <div class="cont" >
    <div class="title" >
    <img className='img-select' src={"http://localhost:3000/"+ListHotel.image_cover} alt=''  />
      <h2 class="card-title" > {ListHotel.name}</h2>
     
      <h4 className='card-prix' >{ListHotel.description}</h4>
      </div>
      </div>
      <div class="bg-light p-2 mb-3">
      </div>
      <button className="nav-link" class="btn btn-dark"  onClick={() => handleafficher(ListHotel._id)}>More Detail</button >
    </div>
    <div></div>
    
 
  </div>
  
 
  
 

 )}
  
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
  )
}


export default Dashborduser