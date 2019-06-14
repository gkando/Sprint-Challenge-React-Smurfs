import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


const NavBar = props => {
    return(
    <nav>
    <NavLink Link to={`/`}> HOME </NavLink>
    <NavLink to={`/SmurfForm`}> Smurf it Up! </NavLink>

    </nav>
    )
}

export default NavBar