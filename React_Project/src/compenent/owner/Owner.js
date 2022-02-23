import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
class Owner extends Component {

  state = {
    myArray: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/propreataire/getproprtaire')
      .then(res => {
        console.log(res.data.data)
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
                <td> <Link to={'/update'}>Update</Link></td>
                <td> <Link to={'/delete'}>delete</Link></td>




              </tr>

            </tbody>
          )}
        </table>





      </div>
    )
  }
}


export default Owner


