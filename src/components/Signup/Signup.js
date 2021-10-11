import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create your account</h2>
                <form onSubmit="">
                    <input type="email" name="email" placeholder="enter your email" /> <br />
                    <input type="password" name="password" placeholder="enter your password" /> <br />
                    <input type="password" name="password" placeholder="Re-enter your password" /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account ?<Link to="/login">Sign-in</Link> </p>
                <div>----------- or-------------</div>
                <button className="btn btn-regular">Google Sign-Up</button>
            </div>
        </div>
    );
};

export default Signup;