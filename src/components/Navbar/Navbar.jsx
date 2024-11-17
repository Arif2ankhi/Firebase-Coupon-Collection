import React from 'react';
import "./Navbar.css"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='min-h-20 bg-blue-800 text-white font-bold flex justify-between items-center'>
            <div>
                <img className='w-[72px] h-[60px] text-2xl rounded-lg' src="../../../public/Images/logo.png" alt="" />
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/brands"  className='ml-5'>Brands</NavLink>
                <NavLink to="/myProfile" className='ml-5'>My Profile</NavLink>
                <NavLink to="/aboutDev" className='ml-5'>About Dev</NavLink>
            </div>
            <div>
                <button className=" btn btn-primary">Login</button>
            </div>
           
        </div>
    );
};

export default Navbar;