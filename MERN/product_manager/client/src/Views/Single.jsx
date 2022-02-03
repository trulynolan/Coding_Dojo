import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Single = (props) => {
    const {_id} = useParams();
    const [singleItem, setSingleItem] = useState({});
    const history = useHistory();


    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + _id)
            .then(res => {
                console.log(res);
                setSingleItem(res.data.pet);
            })
            .catch(err =>{
                console.log(err);
                setSingleItem("");
            })
    }, [_id])

    const deletePet = (petID) => {
        axios.delete('http://localhost:8000/api/pets/delete/' + petID)
            .then(res => {
                // removeFromDom(petID)
                history.push("/")
            })
            .catch(err => console.error(err));
    }
    


    return (
        
        <div>
            <h1>Pet Shelter</h1>
            <h2>Details about {singleItem.name}</h2>

            <button onClick={() => deletePet(singleItem._id)}>Adopt le pet</button>

            <p>Name: {singleItem.name}</p>
            <p>Type: {singleItem.type}</p>
            <p>Description: {singleItem.description}</p>
            <p>Skills: {singleItem.skill1}, {singleItem.skill2}, {singleItem.skill3}</p>

        </div>
    )
}
export default Single;