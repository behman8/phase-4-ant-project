import React from "react";
import { NavLink } from "react-router-dom";

function AntCard({ ant, handleDelete, handleLike }) {
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
            <button id="like-button" onClick={(e) => handleLike(ant)}><span role="img" aria-label="thumbs-up">👍</span></button>
            <button id="delete-button" onClick={(e) => handleDelete(ant.id)}>Delete <span role="img" aria-label="sad-face"></span> </button>
        </div>
    )
}

export default AntCard;