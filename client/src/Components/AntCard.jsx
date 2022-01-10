import React from "react";
import { NavLink } from "react-router-dom";

function AntCard({ant}) {
    return (
        <div>
            <h2>Queen's Name:</h2>
            <NavLink to={`/ants/${ant.id}`} ><p>{ant.queen_name}</p></NavLink>
            <h3>Species:</h3>
            <p>{ant.species}</p>
            <h3>Owner:</h3>
            <p>{ant.user.username}</p>
        </div>
    )
}

export default AntCard;