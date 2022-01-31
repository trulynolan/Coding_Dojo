import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';



const Category = (props) => {
    const [data, setData] = useState([{}]);
    const { category, id } = useParams();

    useEffect(() => {
        console.log("Hey")
        axios.get(`https://swapi.dev/api/${category}/${id}/?format=json`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                // console.log(err)
                setData("")
            })
    }, [category, id]);

    return (
        < div >
            {data.length <= 0 ?
                <div>
                    <h2>These aren't the droids you're looking for yo</h2>

                </div>
                : category === "people" ?

                    <div>
                        <h1>{data.name}</h1>
                        <p> Height: {data.height} cm</p>
                        <p>Mass: {data.mass} kg</p>
                        <p>Hair Color: {data.hair_color}</p>
                        <p>Skin Color: {data.skin_color}</p>
                    </div>
                    : category === "planets" ?
                        <div>
                            <h1>{data.name}</h1>
                            <p> Climate: {data.climate}  &deg;</p>
                            <p>Population: {data.population} </p>
                            <p>Terrain: {data.terrain}</p>
                            <p>diameter: {data.diameter} </p>
                        </div>
                        : category === "starships" ?
                            <div>
                                <h1>{data.name}</h1>
                                <p> Model: {data.model}</p>
                                <p>Length: {data.length} </p>
                                <p>Crew: {data.crew}</p>
                                <p>Passengers: {data.passengers} </p>
                            </div> : ""
            }
        </div >
    )
}

export default Category;