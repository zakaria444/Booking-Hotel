import React, { useState } from "react";
import Axios from "axios"
import jwtdecode from "jwt-decode";
import { Link } from "react-router-dom";



function CreateHotel() {
    const url = "http://localhost:5000/api/room/add";
    const jwt = localStorage.getItem('token');
    const JWT1 = jwtdecode(jwt);

    const [file, setFiles] = useState("");
    const [Type, setType] = useState([]);

    const [values, setvalues] = useState({
        name: "",
        description: "",
        type: "",
        price: "",
        hotel_id: "",
        user_id: JWT1.user_id,
    });


    // Handles file upload event and updates state

    ///type/list

    Axios.get("http://localhost:5000/api/type/type/list").then((response) => {
        console.log(response.data.data);
        setType(response.data.data);
    })




    const submit = (e) => {
        e.preventDefault();

        console.log('file image', file);
        console.log('values', values);



        const form_data = new FormData();
        form_data.append("image_cover", file)
        form_data.append("name", values.name)
        form_data.append("description", values.description)
        form_data.append("type", values.type)
        form_data.append("price", values.price)
        form_data.append("hotel id", values.hotel_id)







        Axios.post(url, form_data, {

            headers: {
                'Content-Type': 'multipart/form-data',
            },


        }).then((res) => {

            // console.log(res);

            window.location = "/admin/afficherhotel"

        });
    };



    const handle = (event) => {


        const newdata = { ...values };


        newdata[event.target.id] = event.target.value;
        setvalues(newdata);


        console.log(newdata);

        const fileupload = event.target.files[0];
        setFiles(fileupload);



    };

    return (

        <section className="vh-100 gradient-custom" >



            <Link className="nav-link active" aria-current="page" to="/dashbordadmin">Back</Link>


            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" id="form">
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Ajouter Chambre</h3>
                                <form onSubmit={submit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    onChange={(event) => handle(event)}
                                                    name="fullname"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label">Name</label>
                                            </div>
                                            {/* {errors.fullname && <p className='error'>{errors.fullname}</p>} */}
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="description"
                                                    onChange={(event) => handle(event)}
                                                    name="description"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label">description</label>
                                            </div>
                                            {/* {errors.username && <p className='error'>{errors.username}</p>} */}
                                        </div>
                                    </div>
                                    
                                        <div className="row">

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline" id="form-outline">
                                                    <label className="form-label">type
                                                    </label>
                                                    <select labelId="demo-simple-select-label" type="text"
                                                        id="type"
                                                        onChange={(event) => handle(event)}
                                                        name="type"
                                                        className="form-control form-control-lg" label="Age" >
                                                        {Type.map(types =>
                                                        <option key={types._id} value={types._id}>{types.name}</option>
                                                        )}




                                                    </select>
                                                </div>
                                                {/* {errors.email && <p className='error'>{errors.email}</p>} */}
                                            </div>
                                            




                                        </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="hotel_id"
                                                    onChange={(event) => handle(event)}
                                                    name="hotel_id"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label">hotel id</label>
                                            </div>
                                            {/* {errors.email && <p className='error'>{errors.email}</p>} */}
                                        </div>


                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">
                                            <div className="form-outline">
                                                <input
                                                    type="file"
                                                    onChange={(event) => handle(event)}
                                                    // name="image"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label">image</label>
                                            </div>

                                        </div>


                                    </div>




                                    <div className="mt-4 pt-2">
                                        <button
                                            className="btn btn-primary btn-lg"
                                            value="Submit"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
const ImageThumb = ({ image }) => {
    return <img className="image-url" src={URL.createObjectURL(image)} alt={image.name} />;
};

export default CreateHotel;
