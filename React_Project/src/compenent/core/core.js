import axios from "axios"




export const filterRomms = (skip,limit,filters) =>{
  
    const date = {
         filters
    }
    const url = "http://localhost:5000/api/room/search"
    return   axios.post(url, {
     
          body:date
      }).then((res) => {
      console.log("🚀 ~ file: core.js ~ line 16 ~ filterRomms ~ res", res.data.rooms)

      
     return       res.data.rooms

     
      
       
  
          
     
  
    
      });
   
}
export const filterHotels = (skip,limit,filters) =>{
  
    const date = {
         filters
    }
    const url = "http://localhost:5000/api/hotelproprietai/search"
    return   axios.post(url, {
     
          body:date
      }).then((res) => {
      console.log("🚀 ~ file: core.js ~ line 42 ~ filterHotels ~ res", res)
     

      
     return       res.data.hotels

     
      
       
  
          
     
  
    
      });
   
}