import React, { useState } from "react";

function AntForm( { addNewAnt, user }) {

    const [formData, setFormData] = useState({
        queen_name: "",
        species: "",
        number_of_ants: 0,
        diet: "",
        user_id: user.id
    });

    const handleChange = (event) => {
        setFormData((prev) => {
            return {...prev, [event.target.id]: event.target.value}
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addNewAnt(formData)
        setFormData({
            queen_name: "",
            species: "",
            number_of_ants: 0,
            diet: "",
            user_id: user.id
        })
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Add Your Ant Nest!</h1>
                <h3>Queen's Name:</h3>
                    <input 
                        id="queen_name"
                        type="text"
                        value={formData["queen_name"]}
                        onChange={handleChange}
                    />
                    <br/>
                <h3>Species:</h3>
                    <input 
                        id="species"
                        type="text"
                        value={formData["species"]}
                        onChange={handleChange}
                    />
                    <br/>
                <h3>Approximate Number of Ants:</h3>
                    <input 
                        id="number_of_ants"
                        type="text"
                        value={formData["number_of_ants"]}
                        onChange={handleChange}
                    />
                    <br/>
                <h3>Ant's Diet:</h3>
                    <input 
                        id="diet"
                        type="text"
                        value={formData["diet"]}
                        onChange={handleChange}
                    />
                    <br/>
                    <button id="submit-button" type="submit">Submit Ant Nest!</button>
            </form>
        </div>
    )
}

export default AntForm;