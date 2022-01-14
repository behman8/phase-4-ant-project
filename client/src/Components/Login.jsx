import React, { useState } from "react";

function Login({ onLogin }) {

    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        })
            .then((resp) => resp.json())
            .then((user) => onLogin(user))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login to View More!</h1>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;