import React, {useState,useEffect}from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

export default function Form(props) {
    const[name, setName] = useState("");
    const[type, setType] = useState("");
    const[description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [err, setErr] = useState("");
    const history = useHistory();


    const formHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/new',{
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then(res=>{
            console.log(res);
            if(res.data.error){
                setErr(res.data.error.errors)
            } else{
                history.push("/")
            }
            // setName("")
            // setType("")
            // setDescription("")
        })
        .catch(err => {console.log(err.res.data.err.errors.description)})

    }

    return (
        <div>
            <div className=''>
                <h1>Pet Shelter</h1>
                <h2>Know a pet kneading a home!?</h2>
                <Link to={"/"}><button>back to home</button></Link>
                
            </div>
            <form onSubmit={formHandler}>
                <div className='container mt-3 d-flex flex-column w-25'>
                    <span>{err.name && err.name.message}</span>
                    <label>Pet name: </label>
                    <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} value={name} name="name"/><br />

                    <span>{err.type && err.type.message}</span>
                    <label>Pet type: </label>
                    <input type="text" placeholder='type' onChange={(e) => setType(e.target.value)} value={type} name="type" /><br />

                    <span>{err.description && err.description.message}</span>
                    <label>Pet description: </label>
                    <input type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)} value={description} name="description"/><br />

                    <label>Skill 1</label>
                    <input type="text" placeholder='skill1' onChange={(e) => setSkill1(e.target.value)} value={skill1} name="skill1"/><br />

                    <label>Skill 2</label>
                    <input type="text" placeholder='skill2' onChange={(e) => setSkill2(e.target.value)} value={skill2} name="skill2"/><br />

                    <label>Skill 3</label>
                    <input type="text" placeholder='skill3' onChange={(e) => setSkill3(e.target.value)} value={skill3} name="skill3"/><br />

                    <button type='submit' >Add Pet</button>
                </div>
            </form>
        </div>)
}