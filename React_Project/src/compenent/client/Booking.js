import React ,{ useEffect, useState } from 'react'
import Axios from 'axios'





function Booking() {

 


//   const [hotels, sethotels] = useState([]);
  const hotelid =window.location.pathname.split('/');

  useEffect(()=>{
  const url="http://localhost:5000/api/room/getroom/"+hotelid[2]
  Axios.get(url).then((res) => {
    // sethotels(res) ;
    console.log(res.data.rooms);

    })},[])
   
  
   


  
   



  return (
    <div>
      
helo
    </div>
  )
}

export default Booking