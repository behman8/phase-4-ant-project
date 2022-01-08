import React from "react";
import {NavLink} from "react-router-dom";

function GuestLinks() {
    return (
        <div>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
        </div>
    )
}

export default GuestLinks;