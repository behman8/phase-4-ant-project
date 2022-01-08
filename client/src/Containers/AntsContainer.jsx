import React from "react";
import { Route, Routes } from "react-router-dom";
import Ant from "./Ant";
import Ants from "./Ants";

function AntsContainer() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Ants/>}></Route>
                <Route path=":id" element={<Ant/>}></Route>
            </Routes>
        </div>
    )
}

export default AntsContainer;