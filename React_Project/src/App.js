import './App.css';


import { Routes, Route } from "react-router-dom"
import Home from "./compenent/home/home"

import Menu from "./compenent/home/menu"

// ____________________________________________________________________________________
// import dashboard ADMIN
import ListClient from "./compenent/client/ListClient" // import list client
import CreateClient from "./compenent/client/CreateClient" // import create client
import EditeClient from "./compenent/client/EditeClient" // import edite client
// ____________________________________________________________________________________








import Login from "./compenent/home/login"
import Inscription from "./compenent/home/inscription"
import Dashbordadmin from "./compenent/home/dashbordadmin"
import Dashborduser from "./compenent/home/dashborduser"
// import UserRoute from"../src/Auth/UserRoute"

// import UserRoute from"./Auth/UserRoute"

//Iport pour Dashbor Admin




/* Route pour admin  Zakaria*/
import CreateHotel from "./compenent/admin/CreateHotel"
import AfficherHotel from "./compenent/admin/AfficherHotel"
import UpdateHotel from "./compenent/admin/UpdateHotel"
/* Route pour admin  Zakaria*/

import CreateChambre from "./compenent/admin/CreateChambre"
import AfficherChambre from "./compenent/admin/AfficherChambre"
import UpdateChambre from "./compenent/admin/UpdateChambre"




//DashboardOwner
import CreateOwnerHotel from "./compenent/ownerDashbord/CreateHotelOwner"
import AfficherownerHotel from "./compenent/ownerDashbord/AfficherHotelOwner"
import UpdateownerHotel from "./compenent/ownerDashbord/UpdateHotelOwner"







import CreateOwner from "./compenent/owner/CreateOwner"
import Owner from "./compenent/owner/Owner"
import UpdateOwner from "./compenent/owner/update"


/*                FileUpload               */
import FileUpload from "./compenent/ownerDashbord/FileUpload"


// IMPORT TYPE YAHIA

import CreateType from "./compenent/type/CreateType"
import ListType from './compenent/type/ListeType'
import EditeType from './compenent/type/EditeType'





function App() {
  return (
    <div className="App">
      {<Menu />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/dashbordadmin' element={<Dashbordadmin />} />
        <Route path='/dashborduser' element={<Dashborduser />} />
      </Routes>
      {/* Route pour admin */}
      <Routes>
        {/* Route pour admin  Zakaria*/}


        <Route path='/client/list' element={<ListClient />} />
        <Route path='/client/create' element={<CreateClient />} />
        <Route path='/client/edite/:id' element={<EditeClient />} />
        <Route path='/owner/create' element={<CreateOwner />} />

        <Route path='/admin/createhotel' element={<CreateHotel />} />
        <Route path='/admin/afficherhotel' element={<AfficherHotel />} />
        <Route path='/admin/updatehotel/:id' element={<UpdateHotel />} />
        <Route path='/admin/createchambre' element={<CreateChambre />} />


        {/* Route pour admin  Zakaria*/}



        <Route path='/ownerDashbord/fileupload' element={<FileUpload />} />


        <Route path='/ownerDashbord/createhotel' element={<CreateOwnerHotel />} />
        <Route path='/ownerDashbord/afficherhotel' element={<AfficherownerHotel />} />
        <Route path='/ownerDashbord/updatehotel/:id' element={<UpdateownerHotel />} />






        <Route path='/client/create' element={<CreateClient />} />
        <Route path='/owner/create' element={<CreateOwner />} />
        <Route path='/owner' element={<  Owner />} />
        <Route path='/update/:id' element={<  UpdateOwner />} />


        <Route path='/type/create' element={<CreateType />} />
        <Route path='/type/list' element={<ListType />} />
        <Route path='/type/edite/:id' element={<EditeType />} />





      </Routes>

    </div>
  );
}

export default App;
