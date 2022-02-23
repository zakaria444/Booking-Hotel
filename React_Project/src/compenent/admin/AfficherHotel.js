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
function AfficherHotel() {

  
  return (
    <div>
          <Link className="nav-link active" aria-current="page" to="/dashbordadmin">Back</Link>

<h1>Tout Les Hotel</h1>

    </div>
  )
}

export default AfficherHotel