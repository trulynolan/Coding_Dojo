import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory, Link } from 'react-router-dom';

const Update = (props) => {
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

    const updatePet = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/update/' + _id, 
            singleItem)
            .then(res => {
                setSingleItem(res.data)
                console.log(res);
                history.push("/")
            })
            .catch(err => console.error(err));
    }

    const onChangeHandler = (event) => {
        setSingleItem({
            ...singleItem,
            [event.target.name]: event.target.value
        })
    }


    return (
        
        <div>
            <h1>Update</h1>
            <Link to={"/"}><button>back to home</button></Link>
            <form onSubmit={updatePet}>
                <div className='container mt-3 d-flex flex-column w-25'>
                    <input type="text" placeholder='name' onChange={onChangeHandler} value={singleItem.name} name="name"/><br />
                    <input type="text" placeholder='type' min={1} onChange={onChangeHandler} value={singleItem.type} name="type"/><br />
                    <input type="text" placeholder='description' onChange={onChangeHandler} value={singleItem.description} name="description"/><br />

                    <label>Skill 1</label>
                    <input type="text" placeholder='skill1' onChange={onChangeHandler} value={singleItem.skill1} name="skill1"/><br />

                    <label>Skill 2</label>
                    <input type="text" placeholder='skill2' onChange={onChangeHandler} value={singleItem.skill2} name="skill2"/><br />

                    <label>Skill 3</label>
                    <input type="text" placeholder='skill3' onChange={onChangeHandler} value={singleItem.skill3} name="skill3"/><br />


                    <button type='submit'>Edit pet!</button>
                </div>
            </form>
        </div>
    )
}
export default Update;