import './App.css';
import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from './Containers/Login';
import Signup from './Containers/Signup';
import NavBar from './Containers/NavBar';
import AntsContainer from './Containers/AntsContainer';

function App() {
  return (
    <div>
        <NavBar/>
          <Switch>
            <Route path="/" element={<Home/>} />
            <Route path="/ants/*" element={<AntsContainer/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Switch>
    </div>
  );
}

export default App;