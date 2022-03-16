import React from 'react';
import {Link} from"react-router-dom";
import jwtdecode from "jwt-decode";


function menu() {

 const isAuthenticated =  () =>{

    const jwt =  localStorage.getItem('token');
  
    if(jwt){
      
      const JWT1 =jwtdecode(jwt);


      
      return   JWT1;
     

    }
     return false;
  }
 
  const signout =  () =>{
    const jwt =  localStorage.removeItem('token');
   
    window.location="/";
    return jwt;
  
  
  }
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light " id='navbar'>
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="">Booking</a> */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav">


        {!isAuthenticated() && (
          <>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>

         
        </>

    )}

        </ul>


        <ul className="navbar-nav ml-auto font-weight-bold">

        {!isAuthenticated() && (

           <>
        <li className="nav-item  ">
            <Link className="nav-link " to='/login'>login</Link>
          </li>


          <li className="nav-item">
            <Link className="nav-link" to='/inscription'>inscription</Link>
          </li>
          </>
          )}



              {isAuthenticated()   && (
              <ul className='nav-admin'>
                <li>
                <span className="nav-link" style={{cursor:'pointer'}}   > Bienvenue { isAuthenticated().username }</span>
                </li>
 {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Tableau de bord</Link>
        </li>  */}
          <li className="nav-item">

            <span className="nav-link" style={{cursor:'pointer'}}  onClick={signout} > Se déconnecter</span>

          </li>
        




          </ul>
          
            )}


        </ul>
      </div>
    </div>
  </nav>
  )

}

export default menu 