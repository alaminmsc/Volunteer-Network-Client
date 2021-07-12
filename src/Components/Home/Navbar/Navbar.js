import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Logo from '../../../images/logos/logo.png';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div style={{backgroundColor:'red'}}>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="" style={{width:'180px'}} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-4">
                            <Link className="nav-link active" to="#">Home</Link>
                            </li>
                            <li className="nav-item ms-4">
                            <a className="nav-link" href="#">Donation</a>
                            </li>
                            <li className="nav-item ms-4">
                            <a className="nav-link" href="/eventsReg">Events</a>
                            </li>
                            <li className="nav-item ms-4">
                            <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item ms-4">
                                {
                                    loggedInUser.email ? <Link className="nav-link" to="#">{loggedInUser.userName}</Link> && <Link className="nav-link" to="#"><button className="" style={{border:'1px solid red'}} onClick={()=> setLoggedInUser('')}>Sign out</button></Link>:<Link to="/login"><button className="mt-2" style={{border:'none'}}>Sign in</button></Link> 
                                }
                            </li>
                            <li className="nav-item ms-4">
                            <a className="nav-link" href="/admin">Admin</a>
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