import React from "react";
import {NavLink} from "react-router-dom";

function GuestLinks() {
    return (
        <div>
            <li className="link"><NavLink to="/">Home</NavLink></li>
            <li className="link"><NavLink to="/login">Login</NavLink></li>
            <li className="link"><NavLink to="/signup">Signup</NavLink></li>
            <li className="link"><NavLink to="/ants">Ants</NavLink></li>
        </div>
    )
}

export default GuestLinks;