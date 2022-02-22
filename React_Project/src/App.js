import './App.css';


import {Routes,Route}from "react-router-dom"
import Home from"./compenent/home/home"

import Menu from"./compenent/home/menu"



import Login from"./compenent/home/login"
import Inscription from"./compenent/home/inscription"
import Dashbordadmin from"./compenent/home/dashbordadmin"
import Dashborduser from"./compenent/home/dashborduser"
import Dashbordowner from"./compenent/home/dashbordowner"
// import UserRoute from"./Auth/UserRoute"

//Iport pour Dashbor Admin
import CreateClient from"./compenent/client/CreateClient"
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
<Route path='/client/create' element={<CreateClient/> } />
<Route path='/owner/create' element={<CreateOwner/> } />



</Routes>

    </div>
  );
}

export default App;
