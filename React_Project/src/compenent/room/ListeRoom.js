import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const handleDelete = (id) => {
  const url="http://localhost:5000/api/type/"+id
axios.delete(url).then((res) => {

window.location="/room/list";

})

};


 class ListRoom extends Component {
    state = {
        myArray :[]
    }
     componentDidMount(){
         axios.get("http://localhost:5000/api/type/type/list")
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
         <h1>Liste Types</h1>
         <br />
         <br />
         <br />
         {/* <button className='btn '>
        <Link to={'/client/create'}>Add Client</Link>
        </button> */}
         <table class="table">
           <thead>
             <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Description</th>
               <th>Type</th>
               <th>Price</th>
               <th>Image cover</th>
             </tr>
           </thead>
           {this.state.myArray.map(ListRoom =>
           <tbody>
             <tr>

               <td>  {ListRoom._id}</td>
               <td>  {ListRoom.name}</td>
               <td>  {ListRoom.description}</td>
               <td>  {ListRoom.type}</td>
               <td>  {ListRoom.price}</td>
               <td>  {ListRoom.image_cover}</td>
               <td> <Link to={'/type/edite/'+ListRoom._id}>Update</Link></td>
               <td> <button  onClick={() => handleDelete(ListRoom._id)}>deleted</button></td>

             </tr>
           </tbody>
           )}
         </table>
      </div>
    )
  }
}


export default ListRoom