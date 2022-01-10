import '../App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import NavBar from '../Containers/NavBar';
import Home from './Home';
import Ants from '../Containers/Ants'
import AntShow from './AntShow';

function App() {

  return (
    <div>
        <NavBar/>
          <main>
            <Routes>
              <Route path="/ants" element={<Ants />}></Route>
              <Route path="/ants/:id" element={<AntShow />}></Route>
              <Route path="/" element={<Home />} ></Route>
            </Routes>
          </main>
    </div>
  );
}

export default App;
