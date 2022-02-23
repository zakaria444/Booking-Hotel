import React ,{ useEffect, useState } from 'react'
import {Link} from"react-router-dom"
import Axios from 'axios';
import companyLogo from './img/1828884.png';
import countryLogo from './img/4830734.png';
import cityLogo from './img/1068530.png';



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
    const handleDelet = (id) => {
      const url="http://localhost:5000/api/hotel/"+id
  Axios.delete(url).then((res) => {
    window.location="/admin/afficherhotel"



    })
     
  
      // event.prevntDefault();
      // setErrors(validation(values));
    };




  return (
    <div>
          <Link className="nav-link active" aria-current="page" to="/dashbordadmin">Back</Link>

<h1>Tout Les Hotel</h1>
<table className="table">

<thead>
<tr>
    <th>Name</th>
    <th>description</th>
    <th ><img id='stars-hotel' src={cityLogo} alt="BigCo Inc. logo"/> city</th>
    <th><img id='stars-hotel' src={countryLogo} alt="BigCo Inc. logo"/> country</th>
    <th ><img id='stars-hotel' src={companyLogo} alt="BigCo Inc. logo"/> stars </th>
   
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
  <td>  {ListHotel.localisation.city} <img id='stars-hotel' src={cityLogo} alt="BigCo Inc. logo"/></td>
  <td>  {ListHotel.localisation.country} <img id='stars-hotel' src={countryLogo} alt="BigCo Inc. logo"/></td>

    <td>  {ListHotel.stars} <img id='stars-hotel' src={companyLogo} alt="BigCo Inc. logo"/></td>
    <td> <Link to={'/hotel/update'}>Update</Link></td>
    <td> <button  onClick={() => handleDelet(ListHotel._id)}>delete</button></td>




  </tr>

 </tbody>
 )}
</table>
    

    </div>
  )
}

export default AfficherHotel