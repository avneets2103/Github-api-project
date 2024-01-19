import React from 'react'
import './Header.css'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <div className='topNav'>
                <div className="logo">
                    <img src="Images/logo.svg" alt="logo"/>
                </div>
                <div className='sections'>
                    <NavLink    
                    to='/'
                    >
                        Home
                    </NavLink>

                    <NavLink    
                    to='About/'>
                        About
                    </NavLink>

                    <NavLink    
                    to='Contacts/'>
                        Contacts
                    </NavLink>

                    <NavLink    
                    to='Github/'>
                        Github
                    </NavLink>
                </div>
                <div className='action'>
                    <NavLink
                    to="user/login">
                        Login
                    </NavLink>

                    <NavLink
                    to="user/get_started">
                    Get Started
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Header
