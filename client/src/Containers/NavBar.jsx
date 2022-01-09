import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div>
            <nav className="navbar">
            <a href="/" className="logo"><h1>The Ant's Kingdom</h1></a>
                <div>
                    <ul className="all-links">
                        <div className="menu">
                            <li className="link"><NavLink to="/">Home</NavLink></li>
                            <li className="link"><NavLink to="/ants">Ants</NavLink></li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;