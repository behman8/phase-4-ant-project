import React from "react";
import { NavLink } from "react-router-dom";

function AntCard({ant}) {
    return (
        <div>
            <NavLink to={`/ants/${ant.id}`} ><h1>{ant.queen_name}</h1></NavLink>
            <h3>Species:</h3>
            <p>{ant.species}</p>
            <h3>Owner:</h3>
            <p>{ant.user.username}</p>
        </div>
    )
}

export default AntCard;