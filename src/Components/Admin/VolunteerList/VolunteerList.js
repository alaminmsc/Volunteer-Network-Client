import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const RegisterList = () => {
    const [volList, setVolList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    useEffect(()=>{},[
        fetch('http://localhost:5000/getRegisterList')
        .then(res => res.json())
        .then(data => setVolList(data))
    ])
    console.log(volList);
    return (
        <div className="mx-5 my-4">
            <div className="row d-flex">
                <div className="col-md-3">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between my-3">
                        <h4>Event List</h4>
                        <h4>{loggedInUser.userName}</h4>
                    </div>
                    <div>
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                            <tr>
                                <th className="text-secondary text-left" scope="col">SL</th>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email ID</th>
                                <th className="text-secondary" scope="col">Registating Date</th>
                                <th className="text-secondary" scope="col">Volunteer List</th>
                                <th className="text-secondary" scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                        
                        {
                            volList.map((events,index) =>  
                                <tr>
                                <td>{index +1}</td>
                                <td>{events.name}</td>
                                <td>{events.email}</td>
                                <td>{events.date}</td>
                                <td>{events.description}</td>
                                <td>
                                    <button className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                                </td>
                                </tr>
                            )
                        }
                        </tbody>
                        </table>
                    </div>
                </div>

                
            </div>
        </div >
    );
};

export default RegisterList;