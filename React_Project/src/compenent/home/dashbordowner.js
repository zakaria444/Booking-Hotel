import React, { useEffect, useState} from 'react'
import Axios from 'axios';
import jwtdecode from "jwt-decode";

import {Link} from"react-router-dom"

function Home() {

  const [owner, setowner] = useState([]);


  const jwt =  localStorage.getItem('token');
      const JWT1 =jwtdecode(jwt);
      console.log('jwt parse',JWT1.role);
      const iduser=JWT1.user_id;
    const url="http://localhost:5000/api/propreataire/Getallproprietaires/"+iduser;
    Axios.get(url)
    .then((res) => {
      const responsee =res.data.data[0];
        console.log('info owner',responsee.name);
          setowner(responsee);
        // const response =res.data.data[0];
      })
  // useEffect(()=>{
    

  // });

  
  return (
    <div>
{/* <h1>dashbordowner</h1> */}
<div className='main-owner'>
<div className='admin-dashb'>
<ul className='nav-admin' id='nav-admin' >
 <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/client/create">Edite Profile</Link>
 </li> 
 <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/owner/create">Ajouter Chambre</Link>
 </li> 
  <li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/admin/createhotel">Ajouter Hotel</Link>
</li> 
</ul>

<h1 className='afficher-hotel'>Hotel</h1>
      <ul className='nav-admin' id='nav-admin'>
       <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin/afficherhotel">Afficher Hotel</Link>
       </li> </ul>
      

    </div>
    <div className='information-owner'>
    {}
      <h1 >Information owner</h1>
      <div>
      </div>
      <input value={owner.name} ></input>


    </div>
    </div>

    </div>

  )
}

export default Home