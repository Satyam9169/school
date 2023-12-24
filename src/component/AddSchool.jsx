import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const AddUsers = () => {
    let history = useNavigate();
    const [user, setUser] = useState({
        f_name: "",
        l_name: "",
        email: "",
        phone: "",
        section: "",
        address: "",
    })
    // const  {f_name, l_name, email, phone, section, address} = user;
    const onInputChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        console.log(user);
        await axios.post("http://localhost:3100/school", user);
        history("/");
    };

    return (
        <>
            <div className="container my-2 text-center">
                <Link className="btn btn-outline-secondary" to="/" >Go Back</Link>
            </div>
            <div className="container my-4 bg-light">
                <form class="row g-3 border shadow " onSubmit={handleSubmit}>
                    <h1 className="text-success text-center">Add Children Details</h1>
                    <hr />
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Enter your Name"
                            name="f_name" value={user.f_name} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Enter your UserName"
                            name="l_name" value={user.l_name} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputAddress" placeholder="Enter your Email"
                            name="email" value={user.email} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Mobile No</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Enter Your Mobile No"
                            name="phone" value={user.phone} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Section</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Enter your Website"
                            name="section" value={user.section} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Enter your Website"
                            name="address" value={user.address} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 ">
                        <button type="submit" class="btn btn-primary my-2">Add</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddUsers
