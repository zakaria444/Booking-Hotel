import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
const handleDelet = (id) => {
  const url="http://localhost:5000/api/propreataire/"+id
axios.delete(url).then((res) => {

window.location="/owner";
})




  // event.prevntDefault();
  // setErrors(validation(values));
};
class Owner extends Component {

  state = {
    myArray: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/propreataire/Getallproprietaires')
      .then(res => {
       
        this.setState({
          myArray: res.data.data
        })
      })
  }

  render() {

    return (
      <div>



        <h1>  Data owner </h1>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <Link to={'/owner/create'}>Add Owner</Link>

        </button>

        <table class="table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Action</th>

            </tr>
          </thead>
          {this.state.myArray.map(owner =>
            <tbody>
              <tr>


                <td>  {owner.name}</td>
                <td>  {owner.email}</td>
                <td>  {owner.username}</td>

                <td> <Link to={`/update/${owner._id}`}>Update</Link></td>
                <td> <button  onClick={() => handleDelet(owner._id)}>deleted</button></td>




              </tr>

            </tbody>
          )}
        </table>





      </div>
    )
  }
}


export default Owner


