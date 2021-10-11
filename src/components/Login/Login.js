import React from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../usefirebase/useFirebase';
import './Login.css'

const Login = () => {
    const { user, googleSignIn } = useAuth()
    const location = useLocation()
    const location_url=location.state?.from || '/shop'
    const history=useHistory()
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(location_url)
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Sign in </h2>
                <form onSubmit="">
                    <input type="email" name="email" placeholder="enter your email" /> <br />
                    <input type="password" name="password" placeholder="enter your password" /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to here <Link to="/signup">Create your account</Link></p>
                <div>----------- or-------------</div>
                {/* <button onClick={googleSignIn} className="btn btn-regular">Google SignIn</button> */}
                <button onClick={handleGoogleLogIn} className="btn btn-regular">Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;