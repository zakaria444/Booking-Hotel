import React ,{ useState } from 'react'
import Axios from 'axios';
import jwtdecode from "jwt-decode";


/*import validation from './validation';*/


function Login() {
    const url="http://localhost:5000/api/users/login-user"
    const [values, setvalues] = useState ({
        username:"",
        password:"",});


// const [errors,setErrors]=useState({});
// const handelChange =(event)=>{
//     setvalues({
//         ...values,
//         [event.target.name]:event.target.value,
//     })
// };
/*                    HOOKS                               */
const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
    //   name: values.name,
      username: values.username,
    //   email: values.email,
      password: values.password,
    }).then((res) => {
      localStorage.setItem('token',res.data.token)
      const jwt =  localStorage.getItem('token');
      const JWT1 =jwtdecode(jwt);
      console.log('jwt parse',JWT1.role);


if(JWT1.role==="owner-user"){
    
    window.location="/dashbordowner"

}else if(JWT1.role==="user"){

    window.location="/dashborduser"
}else{
    window.location="/dashbordadmin"
}
     
      
    });
    
  };
const handleFormSubmit=(event)=>{
    const newdata ={...values}
    newdata[event.target.id]=event.target.value
    setvalues(newdata)
    console.log(newdata);

    // event.prevntDefault();
    // setErrors(validation(values));
};
return (
<section className="vh-100 gradient-custom" >
<div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
    <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" id='form'>
        <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>
            <form className="form"  onSubmit={submit}>

            <div className="row">
                <div className="col-md-6 mb-4">

               
                {/* {errors.fullname && <p className='error'>{errors.fullname}</p>} */}
                </div>
                <div className="col-md-6 mb-4">

              
                {/* {errors.username && <p className='error'>{errors.username}</p>} */}
                </div>
            </div>

          

            <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                <div className="form-outline">
                    <input type="text" id="username" value={values.username}  onChange={(event)=>handleFormSubmit(event)} name='emailAddress' className="form-control form-control-lg" />
                    <label className="form-label" >username</label>
                </div>
                {/* {errors.email && <p className='error'>{errors.email}</p>} */}
                </div>
                <div className="col-md-6 mb-4 pb-2">

                <div className="form-outline">
                    <input 
                    type="password"
                     id="password" 
                     value={values.password} 
                     onChange={(event)=>handleFormSubmit(event)}
                     name='password' 
                     className="form-control form-control-lg" />
                    <label className="form-label" >Password</label>
                    {/* {errors.password && <p className='error'>{errors.password}</p>} */}

                </div>
                </div>
            </div>

            {/* <div class="row">
                <div class="col-12">

                <select class="select form-control-lg">
                    <option value="1" disabled>Choose Role</option>
                    <option value="2">Subject 1</option>
                    <option value="3">Subject 2</option>
                    <option value="4">Subject 3</option>
                </select>
                <label class="form-label select-label">Choose Role</label>

                </div>
            </div> */}

            <div className="mt-4 pt-2">
                <button className="btn btn-primary btn-lg"  value="Submit"  type="submit">Submit</button>
            </div>

            </form>
        </div>
        </div>
    </div>
    </div>
</div>
</section>
)
}

export default Login





