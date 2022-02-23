// import React from 'react'
// import axios from 'axios'
// import {useState} from 'react'

// function ListClient() {
  
//      axios.get('http://localhost:5000/api/client/getclient').then(res=>{
       
//   console.log(res.data.data)
//      })

     
//   return (
//     <div>
//       <h1>List client</h1>

//     </div>
//   )
// }

// export default ListClient




// _________________________________________________

import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
 class ListClient extends Component {

    state = {
        myArray :[]
    }
     componentDidMount(){
         axios.get("http://localhost:5000/api/client/getclient")
         .then(res=>{
             console.log(res.data.data)
             this.setState({
                myArray:res.data.data 
             })
         })
     }


  render() {

    return (
      <div>



         <h1>Data Clients</h1>
         <button className='btn '>
        <Link to={'/client/create'}>Add Client</Link>


        </button>
         <table class="table">

           <thead>
             <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Email</th>
               <th>Username</th>
               <th>Action</th>

             </tr>
           </thead>
           {this.state.myArray.map(ListClient =>
           <tbody>
             <tr>
               <td>  {ListClient._id}</td>
               <td>  {ListClient.name}</td>
               <td>  {ListClient.email}</td>
               <td>  {ListClient.username}</td>
               <td> <Link to={'/update'}>Update</Link></td>
               <td> <Link to={'/client/list'}>delete</Link></td>
             </tr>
           </tbody>
           )}
         </table>





      </div>
    )
  }
}


export default ListClient