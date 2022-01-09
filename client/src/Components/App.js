import '../App.css';
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import NavBar from '../Containers/NavBar';
import Home from './Home';
import Ants from '../Containers/Ants'

function App() {

  const [ants, setAnts] = useState()

  useEffect(() => {
    fetch("/ants")
      .then((resp) => resp.json())
      .then(setAnts);
  }, []);

  return (
    <div>
        <NavBar/>
          <main>
            <Routes>
              <Route path="/ants" element={<Ants/>}></Route>
              <Route path="/" element={<Home/>} ></Route>
            </Routes>
          </main>
    </div>
  );
}

export default App;
