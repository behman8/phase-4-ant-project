import React from "react";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import AntShow from "../Components/AntShow";

function Ant() {

    const {id} = useParams()

    const [ant, setAnt] = useState({})

    useEffect(() => {
        if(id){
            fetch(`/api/ants/${id}`)
            .then(resp => {
                if (resp.ok) {
                    resp.json().then(setAnt)
                } else {
                    resp.json(({errors}) => alert(errors))
                }
            })
        }
    }, [id])

    return (
        <div>
            {!!ant.id && <AntShow ant={ant}/>}
        </div>
    )
}

export default Ant; 