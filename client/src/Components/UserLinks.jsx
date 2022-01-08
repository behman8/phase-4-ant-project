import React from "react";
import { useDispatch } from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import { logout } from "../Actions/user";

function UserLinks() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>
            <li className="link"><NavLink to="/">Home</NavLink></li>
            <li className="link"><NavLink to="/ants">Ants</NavLink></li>
            <li className="link"><a onClick={async (e) => {
                e.preventDefault()
                await logout(dispatch)
                navigate("/")
            }} href="/logout">Logout</a></li>
        </div>
    )
}

export default UserLinks;