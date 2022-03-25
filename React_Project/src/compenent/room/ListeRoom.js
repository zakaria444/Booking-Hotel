import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'



const handleDelete = (id) => {
  const url="http://localhost:5000/api/room/"+id
axios.delete(url).then((res) => {

window.location="/room/list";

})

};


 class ListRoom extends Component {
    state = {
        myArray :[]
    }
     componentDidMount(){
         axios.get("http://localhost:5000/api/room")
         .then(res=>{
         console.log("🚀 ~ file: ListeRoom.js ~ line 24 ~ ListRoom ~ componentDidMount ~ res", res)
             console.log(res.data.rooms)
             this.setState({
                myArray:res.data.rooms
             })
         })
     }

  render() {

    return (
      <div>
  
         <h1>Liste Types</h1>
       
       {/* <div>
        
         {this.state.myArray.map((file, index)=>{
            
            {file.images.map((imgg)=>{
           <h1>  <img src={"http://localhost:3000/"+imgg.img} height="40px" alt='hsh'/>  </h1> 
            })}
 

 })} 
                      </div> */}
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
               <th>Hotel</th>
               <th>Name</th>
               <th>Description</th>
               <th>Type</th>
               <th>Price</th>
               <th>Images</th>
             </tr>
           </thead>
           {this.state.myArray.map((ListRoom,index) =>
           <tbody>
             <tr key={index}>


               <td>  {ListRoom._id}</td>
               <td>  {ListRoom.hotel_id.name}</td>


               <td >  {index}</td>

               <td>  {ListRoom.name}</td>
               <td>  {ListRoom.description}</td>
               <td>  {ListRoom.type}</td>
               <td>  {ListRoom.price}</td>



              <td>

              {ListRoom.images.map((ele, index) => {
                return <img height="50px" src={`http://localhost:3000/${ele.img}`} alt='' />
              })}

              </td>

              
             
               <td> <button  className='btn btn-danger' onClick={() => handleDelete(ListRoom._id)}>deleted</button></td>
               <td> <button className='btn btn-warning'> <Link to={`/updateRoom/${ListRoom._id}`}>Update</Link></button></td> 

             </tr>
           </tbody>
           )}
           
         </table>
      </div>
    )
  }
}


export default ListRoom