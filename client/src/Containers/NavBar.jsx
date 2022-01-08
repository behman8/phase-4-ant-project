import React from "react";
import GuestLinks from "../Components/GuestLinks";
import UserLinks from "../Components/UserLinks";
import {useSelector} from "react-redux";

function NavBar() {

    const {loggedIn} = useSelector(({usersReducer}) => usersReducer)

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