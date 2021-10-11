import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import useFirebase from '../../usefirebase/useFirebase';
import './Header.css';

const Header = () => {
   
    const { user,logOut } = useAuth()
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/shipping">Shipping</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                {user.email && <span style={{color:'red' ,fontSize:'10px'}}>Welcome , {user.displayName} </span>}
                {
                    user.email ? <button onClick={logOut}>Logout</button> :
                        <NavLink to="/login">Sign In</NavLink>
                }

               


            </nav>

        </div>
    );
};

export default Header;