import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AntShow() {

    const [ants, setAnts] = useState([])
    
    const [ant, setAnt] = useState([])

    const { id } = useParams()

    useEffect(() => {
        fetch("/ants")
          .then((resp) => resp.json())
          .then(data => setAnts([...data]));
    }, []);

    useEffect(() => {
        if(!!ants) {
            let selectedAnt = ants.find(ant => ant.id === Number(id))
            setAnt({...selectedAnt})
        }
    }, [setAnt, id, ants])
    
    return (
        <div>
            {!!ant.id ?
            <div>
                <h1>{ant.queen_name}</h1>
                <h3>Species:</h3>
                <p>{ant.species}</p>
                <h3>Amount of Ants:</h3>
                <p>{ant.number_of_ants}</p>
                <h3>Diet:</h3>
                <p>{ant.diet}</p>
                <h3>Owner:</h3>
                <p>{ant.user.username}</p>
            </div>
            :
            <div>
                loading...
            </div>
            }
        </div>
    )
}

export default AntShow;