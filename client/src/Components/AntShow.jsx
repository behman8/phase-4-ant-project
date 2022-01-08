import React from "react";

function AntShow({ant}) {
    return (
        <div>
            <h1>{ant.queen_name}</h1>
            <h3>Species:</h3>
            <p>{ant.species}</p>
            <h3>Amount of Ants:</h3>
            <p>{ant.number_of_ants}</p>
            <h3>Diet:</h3>
            <p>{ant.diet}</p>
        </div>
    )
}

export default AntShow;