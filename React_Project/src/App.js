import './App.css';

import { PrivateRoute } from './Auth/PrivateRoute';
import {Routes,Route,Navigate}from "react-router-dom"
import Home from"./compenent/home/home"

import Menu from"./compenent/home/menu"


// ____________________________________________________________________________________
// import dashboard ADMIN
import ListClient from "./compenent/client/ListClient" // import list client
import CreateClient from "./compenent/client/CreateClient" // import create client
import EditeClient from "./compenent/client/EditeClient" // import edite client
// ____________________________________________________________________________________




import Booking from"./compenent/client/Booking"



import Login from"./compenent/home/login"
import Inscription from"./compenent/home/inscription"
import Dashbordadmin from"./compenent/home/dashbordadmin"
import Dashborduser from"./compenent/home/dashborduser"
import Dashbordowner from"./compenent/ownerDashbord/dashbordowner"

// import UserRoute from"../src/Auth/UserRoute"

// import UserRoute from"./Auth/UserRoute"

//Iport pour Dashbor Admin
  



/* Route pour admin  Zakaria*/
import CreateHotel from"./compenent/admin/CreateHotel"
import AfficherHotel from"./compenent/admin/AfficherHotel"
import UpdateHotel from "./compenent/admin/UpdateHotel"
/* Route pour admin  Zakaria*/




//DashboardOwner
import CreateOwnerHotel from"./compenent/ownerDashbord/CreateHotelOwner"
import AfficherownerHotel from"./compenent/ownerDashbord/AfficherHotelOwner"
import UpdateownerHotel from "./compenent/ownerDashbord/UpdateHotelOwner"
import CreateBookingOwner from "./compenent/ownerDashbord/CreateBookingOwner"






import CreateOwner from"./compenent/owner/CreateOwner"
import Owner from"./compenent/owner/Owner"
import UpdateOwner from"./compenent/owner/Update"


/*                FileUpload               */
import FileUpload from"./compenent/ownerDashbord/FileUpload"


    // IMPORT TYPE YAHIA

import CreateType from "./compenent/type/CreateType"
import ListType from './compenent/type/ListeType'
import EditeType from './compenent/type/EditeType'

// IMPORT ROOM YAHIA

import CreateRoom from './compenent/room/CreateRoom'

import ListRoom from './compenent/room/ListeRoom'

function App() {
  return (
    <div className="App">
        {<Menu/>} 

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Login/> } />
  <Route path='/inscription' element={<Inscription/> } />
  
  <Route path='/dashbordadmin' element={ <PrivateRoute> <Dashbordadmin/></PrivateRoute>   } />
  <Route path='/dashborduser' element={ <PrivateRoute><Dashborduser/></PrivateRoute>   } />
  <Route path='/dashbordowner' element={  <PrivateRoute><Dashbordowner/></PrivateRoute>    } />

</Routes>
{/* Route pour admin */}
<Routes>


    <Route path='/client/list' element={<ListClient/>      }/>
    <Route path='/client/create' element={<CreateClient/>  }/>
    <Route path='/client/edite/:id' element={<EditeClient/>    }/>
    <Route path='/owner/create' element={<CreateOwner/>    }/>

<Route path='/admin/createhotel' element={<CreateHotel/> } />
<Route path='/admin/afficherhotel' element={ <PrivateRoute>
  <AfficherHotel/>
    </PrivateRoute> } />
<Route path='/admin/updatehotel/:id' element={<UpdateHotel/> } />




<Route path='/room/create' element={<CreateRoom/> } />

<Route path='/room/list' element={<ListRoom/> } />

{/* Route pour admin  Zakaria*/}



<Route path='/ownerDashbord/fileupload' element={<FileUpload/> } />


<Route path='/ownerDashbord/createhotel' element={<CreateOwnerHotel/> } />
<Route path='/ownerDashbord/afficherhotel' element={<AfficherownerHotel/> } />
<Route path='/ownerDashbord/updatehotel/:id' element={<UpdateownerHotel/> } />
<Route path='/ownerDashbord/createbooking' element={<CreateBookingOwner/> } />






<Route path='/client/create' element={<CreateClient/> } />
<Route path='/owner/create' element={<CreateOwner/> } />
<Route path='/owner' element ={<  Owner/> } />
<Route path='/update/:id' element ={<  UpdateOwner/> } />


<Route path='/type/create' element={<CreateType/> } />
<Route path='/type/list' element={<ListType/> } />
<Route path='/type/edite/:id' element={<EditeType/> } />






{/*                          Client                                 */}
<Route path='/booking/:id' element={<Booking/> }/>





</Routes>

    </div>
  );
}

export default App;
