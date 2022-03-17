import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import {Link} from"react-router-dom"


function Dashborduser() {

  
const [hotels, sethotels] = useState([]);

useEffect( ()=>{
    const url="http://localhost:5000/api/hotel"
    Axios.get(url).then((res) => {
      sethotels(res.data.data) ;
      console.table(hotels);
  
      })},[])

  
  return (
    <div>
<h1>dashborduser</h1>

<div class="rows" >
  {hotels.map(ListHotel =>
  <div class="w-60 col-3" key={ListHotel._id}>
    <div class="card card-body mb-3">
      <div class="cont" >
    <div class="title" >
    <img className='img-select' src={"http://localhost:3000/"+ListHotel.image_cover} alt=''  />
      <h4 class="card-title" > {ListHotel.name}</h4>
     
      <h4 className='card-prix' >{ListHotel.description}</h4>
      </div>
      </div>
      <div class="bg-light p-2 mb-3">
      </div>
      <Link className="nav-link" class="btn btn-dark" to='/login'>More Detail</Link>
    </div>
    
    
 
  </div>
  
 
  
 

 )}
  
  </div>

    </div>
  )
}


export default Dashborduser