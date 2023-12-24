import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
    const [user, setUser] = useState([]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3100/school");
        setUser(result.data.reverse());
    }

    useEffect(() => {
        loadUsers();
    }, []);



    return (
        <>
            <div className="container">
                <div className="py-2">
                    <div class="card" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                    {/* <table className="table caption-top border shadow">
                        <caption><h1 className="text-center text-success">List of users</h1></caption>
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Section</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user, index) =>
                            (<tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.f_name}</td>
                                <td>{user.l_name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone_no}</td>
                                <td>{user.section}</td>
                                <td>{user.address}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table> */}
                </div>
            </div>
        </>
    )
}

export default Home;
