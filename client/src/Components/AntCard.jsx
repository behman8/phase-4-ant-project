import React from "react";
import { NavLink } from "react-router-dom";

function AntCard({ ant, handleDelete }) {
    return (
        <div>
            <h2>Queen's Name:</h2>
            <NavLink to={`/ants/${ant.id}`} ><p>{ant.queen_name}</p></NavLink>
            <h3>Species:</h3>
            <p>{ant.species}</p>
            <h3>Owner:</h3>
            <p>{ant.user.username}</p>
            <h3>Likes:</h3>
            <p>{ant.likes}</p>
            <button id="delete-button" onClick={(e) => handleDelete(ant.id)}>Delete <span role="img" aria-label="sad-face"></span> </button>
        </div>
    )
}

export default AntCard;