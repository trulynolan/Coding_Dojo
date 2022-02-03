import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllPets = (props) => {
    const [pets, setPetsData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                console.log(res);
                setPetsData(res.data);
            })
            .catch(err => {
                console.log(err);
                setPetsData("")
            })
    }, [])

    const removeFromDom = petID => {
        setPetsData(pets.filter(pet => pet._id !== petID));
    }

    return (
        <div>
            <h2>Pet Shelter</h2>
            <h3>These pets are looking for a good home</h3>
            <Link to={"/pets/new/"}><button >Add a new pet BRO</button></Link>
            
            <div className="mx-auto w-50">
            <table className="table text-center mt-3">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                {pets.map((pet, idx) => {
                    return (
                        <>
                            <tbody key={idx}>
                                <tr>
                                    <th scope="row"><p > {pet.name} </p></th>
                                    <th scope="row"><p > {pet.type} </p></th>
                                    <th scope="row d-flex">
                                        <Link to={"/pets/" + pet._id}><button>Show</button></Link>
                                        <Link to={"/pets/update/" + pet._id}><button >Update</button></Link>
                                    </th>
                                </tr>
                            </tbody>
                        </>
                    )
                })}
            </table>
            </div>
                
        </div>
    )}
       
export default AllPets;