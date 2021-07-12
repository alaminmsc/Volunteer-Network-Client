import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Logo from '../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="bg-light">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="" style={{width:'180px'}} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-4">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item ms-4">
                            <Link className="nav-link" to="/">Donation</Link>
                            </li>
                            <li className="nav-item ms-4">
                            <Link className="nav-link" to="/eventsReg">Events</Link>
                            </li>
                            <li className="nav-item ms-4">
                            <Link className="nav-link" href="#">Blog</Link>
                            </li>
                            <li className="nav-item ms-4">
                                {
                                    loggedInUser.email ? 
                                    <div className="d-flex">
                                    <Link className="nav-link" to="/">{loggedInUser.userName}</Link> <Link className="nav-link" to="#"><button className="" style={{border:'none'}} onClick={()=> setLoggedInUser('')}>Sign out</button></Link>
                                    </div>
                                    :<Link to="/login"><button className="mt-2" style={{border:'none',fontWeight:'bold',backgroundColor:'#F8F9FA'}}>Sign in</button></Link> 
                                }
                            </li>
                            <li className="nav-item ms-4">
                            <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </div>
            

    );
};

export default Navbar;