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
  // const [hotelsid, sethotelsid] = useState([]);


  useEffect(()=>{
  const url="http://localhost:5000/api/hotel"
  Axios.get(url).then((res) => {
    
    sethotels(res.data.data) ;
    })})
    const handleUpdate = (id) => {

    //   const url="http://localhost:5000/api/hotel/"+id
    //   Axios.get(url)
    // .then((res)=>{
    //   window.location="/admin/updatehotel/"+id
    //   // console.log(res.data.data[0]);
    // })
  
    
      const url="http://localhost:5000/api/hotel/"+id
      Axios.patch(url,{
        name: values.name,
        description: values.description,
        stars: values.stars,
        localisation: [values.city , values.country] ,
      }).then((res) => {
        window.location="/admin/afficherhotel";
        sethotels(res.data.data) ;
        console.log(res.data.data);
      

    
        
   
    })
  
   
  
  };

    const handleDelet = (id) => {
      const url="http://localhost:5000/api/hotel/"+id
  Axios.delete(url).then((res) => {

    window.location="/admin/afficherhotel";
    })};
    const handleupdatid = (id) => {
    
    
  
      // event.prevntDefault();
      // setErrors(validation(values));
    };
    const [values, setvalues] = useState({
      name: "",
      description: "",
      stars: "",
      country: "",
      city:"",
      // image:files.imagee,
    });
    const handle = (event) => {
     

      const newdata = { ...values };
      // const newfile = { files };
  
  
      newdata[event.target.id] = event.target.value;
      setvalues(newdata);
      // newfile[event.target.id] = event.target.files;
      
    //   setfiles(newfile);
    // const filebrowser = newfile.image[0];
  
      console.log(newdata);
      // console.log(filebrowser);
  
  
  
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
    {/* <td> <button onClick={() => handleUpdate(ListHotel._id)}>Update</button></td> */}
    <td> <button  onClick={() => handleDelet(ListHotel._id)}>delete</button></td>
    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" onClick={() => handleupdatid(ListHotel._id)}>Update</button></td>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   
    <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" id="form">
          <div className="card-body p-4 p-md-5">
          <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Hotel</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        </div>
        </div>
  
              <div className="row"> 
                    <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <input
                    
                      type="text"
                      id="name"
                      onChange={(event) => handle(event)}
                      name="fullname"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="description"
                      onChange={(event) => handle(event)}
                      name="description"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">description</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline" id="form-outline">
                  <label className="form-label">stars
                    </label>
                     <select labelId="demo-simple-select-label"   type="text"
                      id="stars"
                      onChange={(event) => handle(event)}
                      name="stars"
                      className="form-control form-control-lg"  label="Age" >
                    <option value={1}>⭐</option>
                    <option value={2}>⭐⭐</option>
                    <option value={3}>⭐⭐⭐</option>
                    <option value={4}>⭐⭐⭐⭐</option>
                    <option value={5}>⭐⭐⭐⭐⭐</option>
                   
                   
                  
                  </select>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="city"
                      onChange={(event) => handle(event)}
                      name="city"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">city</label>
                    
                  </div>
                </div>
                
               
              </div>
            
               
              
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="country"
                      onChange={(event) => handle(event)}
                      name="country"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">country</label>
                  </div>
                </div>
                
               
              </div>
             
              

              <div className="mt-4 pt-2">
                <button
                  className="btn btn-primary btn-lg"
                  value="Submit"
                  onClick={() => handleUpdate(ListHotel._id)}
                  >  Submit</button>
              </div>
              
          </div>
          
        </div>
</div>
</div>





    

  </tr>

 </tbody>
 
 )}
</table>


    

    </div>
  )
}

export default AfficherHotel