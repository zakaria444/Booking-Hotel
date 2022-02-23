import './App.css';


import {Routes,Route}from "react-router-dom"
import Home from"./compenent/home/home"

import Menu from"./compenent/home/menu"

// ____________________________________________________________________________________
// import dashboard ADMIN
import ListClient from "./compenent/client/ListClient" // import list client
import CreateClient from "./compenent/client/CreateClient" // import create client
import EditeClient from "./compenent/client/EditeClient" // import edite client
// ____________________________________________________________________________________








import Login from"./compenent/home/login"
import Inscription from"./compenent/home/inscription"
import Dashbordadmin from"./compenent/home/dashbordadmin"
import Dashborduser from"./compenent/home/dashborduser"
import Dashbordowner from"./compenent/home/dashbordowner"
// import UserRoute from"./Auth/UserRoute"

//Iport pour Dashbor Admin
import CreateOwner from"./compenent/owner/CreateOwner"







function App() {
  return (
    <div className="App">
        {<Menu/>} 

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Login/> } />
  <Route path='/inscription' element={<Inscription/> } />
  <Route path='/dashbordadmin' element={<Dashbordadmin/> } />
  <Route path='/dashborduser' element={<Dashborduser/> } />
  <Route path='/dashbordowner' element={<Dashbordowner/> } />
</Routes>
{/* Route pour admin */}
<Routes>
    <Route path='/client/list' element={<ListClient/>      }/>
    <Route path='/client/create' element={<CreateClient/>  }/>
    <Route path='/client/edite' element={<EditeClient/>    }/>
    <Route path='/owner/create' element={<CreateOwner/> } />



</Routes>

    </div>
  );
}

export default App;
