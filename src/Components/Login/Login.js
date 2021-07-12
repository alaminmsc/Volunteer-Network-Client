import React, { useContext } from 'react';
import logo from '../../images/logos/logo.png';
import google from '../../images/logos/google.png';
import { Link } from 'react-router-dom';
import './Login.css';
import { handleGoogleSignIn, initializeFirebase } from './LoginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


initializeFirebase();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
    const googleSignIn = () => {
      handleGoogleSignIn()
        .then(res => {
          setLoggedInUser(res);
          history.replace(from);
        })
    }

    return (
        <div className="">
            <div className="text-center my-5">
                <Link to="/">
                <img src={logo} alt="" width="350px"></img>
                </Link>
            </div>
            <div className="login-section text-center py-5 px-5">
                <h3 className="py-3">Login with</h3>
                <button className="btn" style={{border:'1px solid gray'}} onClick={googleSignIn}>
                    <div className="d-flex align-items-center px-5">
                    <img src={google} alt="" width="40px"></img>
                    <h6 className="px-4">Continue with Google</h6>
                    </div>
                </button>
                <p className="py-2">Don't have an account? <Link to="/"><span>Create an account</span></Link></p>

            </div>
        </div>
    );
};

export default Login;