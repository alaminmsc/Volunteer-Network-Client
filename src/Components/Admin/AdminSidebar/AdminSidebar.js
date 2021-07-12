import { faPlus,faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const AdminSidebar = () => {
    return (
        <div>
            <Link to="/">
            <img src={logo} style={{width:'250px'}}></img>
            </Link>
            <ul className="pt-5">
                <Link to="/adminEventList" style={{listStyle:'none'}}><li><FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon> Volunteer List</li></Link>
                <Link to="/adminAddEvent">
                <li style={{listStyle:'none'}} className="py-2"> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Event</li>
                </Link>
            </ul>
        </div>
    );
};

export default AdminSidebar;