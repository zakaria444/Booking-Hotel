import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const handleDelete = (id) => {
  const url="http://localhost:5000/api/client/deletclient/"+id
axios.post(url).then((res) => {

window.location="/client/list";

})

};


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
    //  deleteRow(_id, e){  
    //   axios.delete(`http://localhost:5000/api/client/deletclient/${_id}`)  
    //     .then(res => {  
    //       console.log(res);  
    //       console.log(res.data);    
    //       const myArray = this.state.myArray.filter(ListClient => ListClient._id !== _id);  
    //       this.setState({ myArray });  
    //     })  
    // }  
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
               <td> <Link to={'/client/edite/'+ListClient._id}>Update</Link></td>
               {/* <td> <Link to={'/client/list'}><button className="btn btn-danger" onClick={(e) => this.deleteRow(ListClient._id, e)}>Delete</button>  </Link></td> */}
               {/* <td> <Link to={'/client/list'}> Delete  </Link></td> */}
               <td> <button  onClick={() => handleDelete(ListClient._id)}>deleted</button></td>
             </tr>
           </tbody>
           )}
         </table>
      </div>
    )
  }
}


export default ListClient