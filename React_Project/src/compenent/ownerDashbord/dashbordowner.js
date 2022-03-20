import React, { useState } from "react";
import Axios from "axios";
import jwtdecode from "jwt-decode";

import { Link } from "react-router-dom";

function Home() {
  const [owner, setowner] = useState([]);

  const jwt = localStorage.getItem("token");
  const JWT1 = jwtdecode(jwt);
  const iduser = JWT1.user_id;
  const url = "http://localhost:5000/api/propreataire/Getallproprietaires/" + iduser;

    if (owner.length === 0) {
      Axios.get(url).then((res) => {
        const responsee = res.data.data[0];
        setowner(responsee);
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
                to="/ownerDashbord/fileupload">
               FileUpload
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/room/create">
                Ajouter Chambre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/ownerDashbord/createhotel">
                Ajouter Hotel
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/ownerDashbord/createbooking">
                Ajouter Booking
              </Link>
            </li>
          </ul>

          <ul className="nav-admin" id="nav-admin">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/ownerDashbord/afficherhotel">
                Afficher Hotel
              </Link>
            </li>{" "}
          </ul>
          <ul className="nav-admin" id="nav-admin">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/type/create">
                Ajouter Type
              </Link>
            </li>{" "}
          </ul>
        </div>
        <div className="information-owner">
          {}
          <h1>Information owner</h1>

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
            <button className="afficher-hotel" type="submit" onClick={() => submit()}>Update</button>
          </form>
     
        </div>
      </div>
      <footer class="text-center text-lg-start bg-light text-muted">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
  
  </section>
 
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Nom de la compagnie
          </h6>
          <p>
          Booking est une application de réservation en ligne permettant aux particuliers de faciliter leurs réservations          </p>
        </div>

        

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> Youssoufia, NY 10012, MA</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
          </p>
          <p><i class="fas fa-phone me-3"></i> + 5 23 56 88 99</p>
          <p><i class="fas fa-print me-3"></i> + 5 23 56 89 00</p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4" >
    <a class="text-reset fw-bold" href="http://localhost:3000">BooKing.com</a>
  </div>
</footer>
  
    </div>
  );
}

export default Home;
