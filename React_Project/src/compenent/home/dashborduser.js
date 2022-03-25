import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import SearchBar from '../../search/search-bar'

// import {Link} from"react-router-dom"

import FilterByStars from '../filter/filterByStars';
import { filterHotels } from "../core/core";

function Dashborduser() {

  
const [hotels, sethotels] = useState(false);
  const [limit,setLimit] = useState(12);
  const [skip,setSkip] = useState(0);
  // const [hotelsFiltred,setHotelsFiltred] = useState([])
const [hotels, sethotels] = useState([]);


const handleafficher = (id)=>{
  window.location="/booking/"+id;

  const url="http://localhost:5000/api/room/"+id
  Axios.get(url).then((res) => {

    console.log(res.data);
})}
const [MyFilter, setMyFilter] = useState({
    
  stars: [],


});

useEffect( ()=>{
    const url="http://localhost:5000/api/hotel"
    Axios.get(url).then((res) => {
      sethotels(res.data.data) ;

  
      })},[])

      if (hotels === false ) {
        return <div> <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
       
      </div>
      <h1>loading....</h1>
    
     
      
      </div>
        
     
    
        
        
      }
  return (
    <div>


<div>
  <SearchBar placeholder="Search Hotel Name..." data={hotels}  />
</div>


      filterHotels(skip,limit,MyFilter)
      .then(res =>sethotels(res)  )
      })},[MyFilter])
      const handlefilters = (data,filterBy)=>{

        setMyFilter ({...MyFilter,[filterBy]:data}) 
        filterHotels(skip,limit,MyFilter)
        .then(res =>sethotels(res)  )
          }
      
  
  return (
    <div>
<h1>dashborduser</h1>
<div className="row">
<div className='col-2 border form-check form-switch '>
<FilterByStars handlefilters = {data=>handlefilters(data,'stars')}  />  


</div>
<div class="col-10">
<div class="jumbotron desing jumbotron-fluid" >
  <div class="container">
    
  
  </div>
</div>
    </div>
    </div>


<div className="container d-flex justify-content-center">
 
  <div className="row">
 
  {hotels.map(ListHotel =>
    <div className="col-md-4" key={ListHotel._id}>
      <div className="card">
        <div> <img src={"http://localhost:3000/"+ListHotel.image_cover} alt="" className="img-responsive image" /> </div>
        <p className="rating fa fa-star checked ">{ListHotel.stars}</p>
        <div className="card-body">
          <h5 className="card-title">{ListHotel.name}</h5>
          <p className="card-text"><i className="fa fa-map-marker marker" />{ListHotel.localisation.city}/{ListHotel.localisation.country}</p>
          <button className="nav-link" class="btn btn-dark"  onClick={() => handleafficher(ListHotel._id)}>More Detail</button >
         
        </div>
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
   

  )
}


export default Dashborduser