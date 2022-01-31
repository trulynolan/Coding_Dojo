import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'


const Form = (props) => {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState("");
    const history = useHistory();

    const sendForm = (e) => {
        e.preventDefault()
        history.push(`/${category}/${id}`);
    }


    return (
        <div>
            <form onSubmit={sendForm}>
                <label>Search For: </label>
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option>people</option>
                    <option>planets</option>
                    <option>starships</option>
                </select>
                <label>ID: </label>
                <input type="number" min={1} onChange={(e) => setId(e.target.value)} value={id} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form