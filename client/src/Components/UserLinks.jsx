import React from "react";
import {NavLink} from "react-router-dom";

function UserLinks() {
    return (
        <div>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/ants">Ants</NavLink></li>
        </div>
    )
}

export default UserLinks;