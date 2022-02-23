import React from 'react'
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
<h1>HOME</h1>


  <label className="labl" id="demo-simple-select-label">Stars</label>
  <select labelId="demo-simple-select-label" id="demo-simple-select"  label="Age" >
    <option value={1}>⭐</option>
    <option value={2}>⭐⭐</option>
    <option value={3}>⭐⭐⭐</option>
    <option value={4}>⭐⭐⭐⭐</option>
    <option value={5}>⭐⭐⭐⭐⭐</option>

   
  </select>
 

    </div>
  )
}

export default home