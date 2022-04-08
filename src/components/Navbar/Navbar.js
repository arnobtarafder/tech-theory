import React, { useEffect, useState } from 'react';
import Logo from "../../Image/logo.png"
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = () => {
    const {pathname} = useLocation();
    const [user, setUser] = useState({});
    // console.log(user);

    useEffect( () => {
       const auth = getAuth();
       onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
    
       } else {
           setUser({})
}
});
    } ,[])

    const handleLogOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }

    // console.log(pathname);
    return (
        <nav style={pathname.includes('blog') ? {display: "none"} : {display: "flex"}}>
            <div className='logo-container'>
                <img width='60px' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/mhwhauapiizafswwldgx" alt="" />
                <span>Tech Theory</span>
            </div>
            <div className='link-container'>
                <NavLink to='/home' className= {({ isActive }) => isActive ? 'active-link': "link"}>Home</NavLink>

                <NavLink to='/videos' className= {({ isActive }) => isActive ? 'active-link': "link"}>Videos</NavLink>

               {user?.uid ? 
               
               <NavLink onClick={handleLogOut} to='/login' className= {({ isActive }) => isActive ? 'active-link': "link"}>Logout</NavLink> 
               :
                <NavLink to='/login' className= {({ isActive }) => isActive ? 'active-link': "link"}>Login</NavLink>
                }

            </div>
        </nav>
    );
};

export default Navbar;