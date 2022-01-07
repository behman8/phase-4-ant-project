import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/ants">Ants</NavLink>
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default NavBar;