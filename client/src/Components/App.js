import '../App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import NavBar from '../Containers/NavBar';
import Home from './Home';
import Ants from '../Containers/Ants'
import AntShow from './AntShow';
import Login from './Login';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((resp) => {
      if(resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  if(user) {
    return (
      <div>
          <NavBar onLogout={setUser}/>
            <main>
              <h2>Welcome, {user.username}!</h2>
              <Routes>
                <Route exact path="/ants" element={<Ants user={user} />}></Route>
                <Route exact path="/ants/:id" element={<AntShow />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route exact path="/" element={<Home />} ></Route>
              </Routes>
            </main>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar/>
        {<Login onLogin={setUser} />}
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} ></Route>
          </Routes>
        </main>
      </div>
    )
  };
};

export default App;
