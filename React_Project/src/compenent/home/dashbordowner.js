import React, { useEffect } from 'react'
import Axios from 'axios';
import jwtdecode from "jwt-decode";

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
function Home() {
  const jwt =  localStorage.getItem('token');
      const JWT1 =jwtdecode(jwt);
      console.log('jwt parse',JWT1.role);
  useEffect(()=>{
    const iduser=JWT1.user_id;
    const url="http://localhost:5000/api/propreataire/Getallproprietaires/"+iduser;
    Axios.get(url)
    .then((res) => {
        console.log('info owner',res.data.data[0]);
        // const response =res.data.data[0];
      })

  });

  
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
      <h1>Information owner</h1>
    </div>
    </div>

    </div>

  )
}

export default Home