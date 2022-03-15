import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const handleDelete = (id) => {
  const url="http://localhost:5000/api/type/"+id
axios.delete(url).then((res) => {

window.location="/type/list/";

})

};


 class ListType extends Component {
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
               <th>Price</th>
               <th>Action</th>
             </tr>
           </thead>
           {this.state.myArray.map(ListType =>
           <tbody>
             <tr>

               <td>  {ListType._id}</td>
               <td>  {ListType.name}</td>
               <td>  {ListType.price}</td>
               <td> <Link to={'/type/edite/'+ListType._id}>Update</Link></td>
               <td> <button  onClick={() => handleDelete(ListType._id)}>deleted</button></td>

             </tr>
           </tbody>
           )}
         </table>
      </div>
    )
  }
}


export default ListType