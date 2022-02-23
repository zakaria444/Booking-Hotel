import React ,{ useEffect, useState } from 'react'
import {Link} from"react-router-dom"
import Axios from 'axios';

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


  const [hotels, sethotels] = useState([]);

  useEffect(()=>{
  const url="http://localhost:5000/api/hotel"
  Axios.get(url).then((res) => {
    
    sethotels(res.data.data) ;

    })})
    




  return (
    <div>
          <Link className="nav-link active" aria-current="page" to="/dashbordadmin">Back</Link>

<h1>Tout Les Hotel</h1>
<table className="table">

<thead>
<tr>
    <th>Name</th>
    <th>description</th>
    <th>city</th>
    <th>country</th>
    <th>stars</th>

    <th>Action</th>
    <th>Action</th>

  

  </tr>
</thead>
{ hotels.map(ListHotel =>

<tbody key={ListHotel._id}>
<tr>
{/* {console.log(ListHotel.city)} */}
{/* {console.log(ListHotel)} */}
  <td>  {ListHotel.name}</td>
  <td>  {ListHotel.description}</td>
  <td>  {ListHotel.localisation.city}</td>
  <td>  {ListHotel.localisation.country}</td>

    <td>  {ListHotel.stars}</td>
    <td> <Link to={'/client/create'}>Update</Link></td>
    <td> <Link to={'/client/create'}>delete</Link></td>




  </tr>

 </tbody>
 )}
</table>
    

    </div>
  )
}

export default AfficherHotel