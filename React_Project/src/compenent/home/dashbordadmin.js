import React from 'react'
import {Link} from"react-router-dom";


function home() {

  
  return (
    <div className='dash-admin'>
    <div className='admin-dashb'>
<h1>dashbordadmin</h1>
<ul className='nav-admin' id='nav-admin' >
 <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/client/create">Ajouter Client</Link>
 </li> 
 <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/owner/create">Ajouter Owner</Link>
 </li> 
  <li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/admin/createhotel">Ajouter Hotel</Link>
</li> 
</ul>

<h1>Afficher Hotel</h1>
      <ul className='nav-admin' id='nav-admin'>
       <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin/afficherhotel">Afficher Hotel</Link>
       </li> </ul>
      

    </div>

    <div className="information-owner">
          
          <h1>Information Admin</h1>

         
             
            

       
    
    
     </div>
    
   
     
     </div> 
    
      
      
      
          
  )
}

export default home