import React from 'react';
import Logo from "../../Image/logo.png"
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className='logo-container'>
                <img width='60px' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/mhwhauapiizafswwldgx" alt="" />
                <span>Tech Theory</span>
            </div>
            <div className='link-container'>
                <NavLink to='/home' className={({isActive}) => isActive ? 'active-link': "link"}>Home</NavLink>
                <NavLink to='/videos' className={({isActive}) => isActive ? 'active-link': "link"}>Videos</NavLink>
                <NavLink to='/login' className={({isActive}) => isActive ? 'active-link': "link"}>Login</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;