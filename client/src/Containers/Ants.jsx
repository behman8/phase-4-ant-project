import React, { useEffect, useState } from "react";
import AntCard from "../Components/AntCard";
import AntForm from "../Components/AntForm";

function Ants({ user }) {

    const [ants, setAnts] = useState([])

    useEffect(() => {
        fetch("/ants")
          .then((resp) => resp.json())
          .then(data => setAnts([...data]));
      }, []);
    
    const addNewAnt = (antData) => {
        let params = {...antData}
        fetch("/ants", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(params)
        })
        .then((resp) => resp.json())
        .then(antData => {
          setAnts(prev => {
              return [...prev, antData]
          })
        })
    }

    const handleDelete = async (id) => {
        let antDelete = ants.filter(ant => ant.id !== id)
        setAnts([...antDelete])
        let resp = await fetch(`/ants/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
    }

    return (
        <div>
            <h1>Ants</h1>
            {ants.map(ant => <AntCard key={ant.id} ant={ant} handleDelete={handleDelete} />)}
            <AntForm addNewAnt={addNewAnt} user={user} />
        </div>
    )
}

export default Ants;