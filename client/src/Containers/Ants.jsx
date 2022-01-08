import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAnts} from "../Actions/ant";
import AntCard from "../Components/AntCard";

function Ants() {

    const dispatch = useDispatch()

    const {ants} = useSelector(({antsReducer}) => antsReducer)

    useEffect(() => {
        fetchAnts(dispatch)
    }, [dispatch])

    return (
        <div>
            <h1>Ants</h1>
            {ants.map(ant => <AntCard ant={ant}/>)}
        </div>
    )
}

export default Ants;