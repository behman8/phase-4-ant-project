import React, {useEffect, useState} from "react";
import AntCard from "../Components/AntCard";

function Ants() {

    const [ants, setAnts] = useState([])

    useEffect(() => {
        fetch("/ants")
          .then((resp) => resp.json())
          .then(setAnts);
      }, []);

    return (
        <div>
            <h1>Ants</h1>
            {ants.map(ant => <AntCard key={ant.id} ant={ant}/>)}
        </div>
    )
}

export default Ants;