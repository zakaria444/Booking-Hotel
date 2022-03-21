import React from 'react'
import {Link} from"react-router-dom"
// import jwtDecode from "jwt-decode";



// export  function getCurrentUser() {
//   try {
//       const token = localStorage.getItem("token");
//       console.log(token);

//       return jwtDecode(token);
//   } catch (error) {
//       return null;
//   }
// }
function home() {

  
  return (
    <div>
<h1>BOOKING </h1>



  <div class="container">
  
  <div class="jumbotron  text-center" >
   
<img name="slide" width="1000" height="450" src={"http://localhost:3000/cover/pexels-oleg-magni-860922.jpg"} alt="" />
   
    </div>
  </div>
  <div className='top-selection' >
  <img src="http://localhost/PFR-01/img/top.png" alt='' />
</div>
<div class="rows" >
  <div class=" w-40 col-2">
    <div class="card card-body mb-3">
      <div class="cont" >
    <div class="title" >
    <img className='img-select' src={"http://localhost:3000/cover/pexels-pixabay-221457.jpg"} alt=''  />
      <h4 class="card-title" >Be Live Collection Marrakech Adults Only</h4>
     
      <h4 className='card-prix'>199 Dhs</h4>
      </div>
      </div>
      <div class="bg-light p-2 mb-3">
      </div>
      <Link className="nav-link" class="btn btn-dark" to='/login'>More Hotel</Link>
    </div>
    
    
  </div>
  <div class=" w-40 col-2">
    <div class="card card-body mb-3">
      <div class="cont" >
    <div class="title" >
    <img className='img-select' src={"http://localhost:3000/cover/pexels-skitterphoto-4217.jpg"} alt=''  />
      <h4 class="card-title" >Aqua Mirage Marrakech Hotel Club</h4>
     
      <h4 className='card-prix'>199 Dhs</h4>
      </div>
      </div>
      <div class="bg-light p-2 mb-3">
      </div>
      <Link className="nav-link" class="btn btn-dark" to='/login'>More Hotel</Link>
    </div>
    
    
  </div>
  <div class=" w-40 col-2">
    <div class="card card-body mb-3">
      <div class="cont" >
    <div class="title" >
    <img className='img-select' src={"http://localhost:3000/cover/pexels-max-vakhtbovych-6436798.jpg"} alt=''  />
      <h4 class="card-title" >Sol Oasis Marrakech</h4>
     
      <h4 className='card-prix'>199 Dhs</h4>
      </div>
      </div>
      <div class="bg-light p-2 mb-3">
      </div>
      
      <Link className="nav-link" class="btn btn-dark" to='/login'>More Hotel</Link>
    </div>
    
    
  </div>
  <div class=" w-40 col-2">
    <div class="card card-body mb-3">
      <div class="cont" >
    <div class="title" >
    <img className='img-select' src={"http://localhost:3000/cover/pexels-thorsten-technoman-338504.jpg"} alt=''  />
      <h4 class="card-title" >Moevenpick Hotel Mansour Eddahbi Marrakech</h4>
     
      <h4 className='card-prix'>199 Dhs</h4>
      </div>
      </div>
      <div class="bg-light p-2 mb-3">
      </div>
      <Link className="nav-link" class="btn btn-dark" to='/login'>More Hotel</Link>
    </div>
    
    
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

export default home