import React from "react";
import {NavLink} from "react-router-dom";
import GuestLinks from "../Components/GuestLinks";
import UserLinks from "../Components/UserLinks";

function NavBar() {
    return (
        <div>
            <nav>
            <a href="/" className="logo"><h1>The Ant's Kingdom</h1></a>
                <div>
                    <ul>
                        {loggedIn ? <UserLinks/> : <GuestLinks/>}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;