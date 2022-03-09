import React, { useState } from "react";
import Axios from "axios";
import jwtdecode from "jwt-decode";

import { Link } from "react-router-dom";

function Home() {
  const [owner, setowner] = useState([]);

  const jwt = localStorage.getItem("token");
  const JWT1 = jwtdecode(jwt);
  // console.log('jwt parse',JWT1.role);
  const iduser = JWT1.user_id;
  const url = "http://localhost:5000/api/propreataire/Getallproprietaires/" + iduser;

    if (owner.length == 0) {
      Axios.get(url).then((res) => {
        const responsee = res.data.data[0];
        // console.log('info owner',responsee.name);
        setowner(responsee);
        // const response =res.data.data[0];
      });
    }
    const submit = (e) => {
      e.preventDefault();

      const urlowner="http://localhost:5000/api/propreataire/"+iduser

    Axios.patch(urlowner, {
      name: values.name,
      username: values.username,
      email: values.email,

      
    }).then((res) => {
        
      window.location="/dashbordowner"

    });
     console.log("hello");
    };
    const [values, setvalues] = useState({
      name: "",
      username: "",
      email: "",
  
      
    });
    const handle = (event) => {

      const newdata = { ...values };
  
  
      newdata[event.target.id] = event.target.value;
      setvalues(newdata);
    
  
      console.log(newdata);
  
  
  
 
    };
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
          username: values.username,
          email: values.email,
        }).then((res) => {
          window.location="/dashbordowner";
          setvalues(res.data.data) ;
          console.log(res.data.data);
        
  
      
          
     
      })
    
     
    
    };
  
  
  // useEffect(()=>{

  // });

  return (
    <div>
      {/* <h1>dashbordowner</h1> */}
      <div className="main-owner">
        <div className="admin-dashb">
          <h1 className="afficher-hotel">Hotel</h1>
          <ul className="nav-admin" id="nav-admin">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/client/create"
              >
                Edite Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/owner/create"
              >
                Ajouter Chambre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/admin/createhotel"
              >
                Ajouter Hotel
              </Link>
            </li>
          </ul>

          <ul className="nav-admin" id="nav-admin">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/admin/afficherhotel"
              >
                Afficher Hotel
              </Link>
            </li>{" "}
          </ul>
        </div>
        <div className="information-owner">
          {}
          <h1>Information owner</h1>

          <input value={owner._id}></input>
          <form onSubmit={submit}>
            <div className="form-complet">
              <div className="form-input">
                <div class="form-group ">
                  <span>Username</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={owner.username}
                    onChange={(event) => handle(event)}
                    id="username"
                  ></input>
                </div>
                <div class="form-group ">
                  <span>Email</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={owner.email}
                    onChange={(event) => handle(event)}
                    id="email"
                  ></input>
                </div>
                <div class="form-group ">
                  <span>Name</span>

                  <input
                    type="text"
                    class="form-control"
                    placeholder={owner.name}
                    onChange={(event) => handle(event)}
                    id="name"
                  ></input>
                </div>
              </div>

              <div className="image-form"></div>
            </div>
            <button type="submit" onClick={() => handleUpdate(owner._id)}>Update</button>
          </form>
          {/* <div className='form-complet'>
      <div className='form-input'>
      <div class="form-group ">
      <span>Username</span>
      <input type="text" class="form-control" placeholder={owner.username} id="UserName"></input>
     </div>
     <div class="form-group ">
       <span>Email</span>
      <input type="text" class="form-control" placeholder={owner.email}  id="UserName"></input>
     </div>
     <div class="form-group ">
     <span>Name</span>

      <input type="text" class="form-control" placeholder={owner.name} id="UserName"></input>
     </div>
    
     </div>
    
    <div className='image-form'>

    </div>
     
     </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
