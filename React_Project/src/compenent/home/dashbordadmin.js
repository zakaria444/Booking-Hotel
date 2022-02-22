import React from 'react'
import {Link} from"react-router-dom";

// import {Link} from"react-router-dom"
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
<h1>dashbordadmin</h1>
<ul className='nav-admin'>
 <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/client/create">Ajouter Client</Link>
 </li> </ul>
 <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/owner/create">Ajouter Owner</Link>
 </li> 
  <li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/admin/createhotel">Ajouter Hotel</Link>
</li> 

    </div>
  )
}

export default home