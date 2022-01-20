import React, { useState } from "react";
import task from "./task"

const Form = (props) => {
    const [task, setTask] = useState([]);
    const [input, setInput] = useState({});
    const [taskList, setTaskList] = useState([]);
    const formHandler = (e) => {
        e.preventDefault();
        setTaskList([...taskList, input])
    }
    const onChangeHandler = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <input onChange={onChangeHandler}></input>
                <button type="submit">HEY MAN</button>
            </form>
            <h1>Tasks Below</h1>
            {taskList.map((oneTask, i) => {
                   return <p key={i} >{oneTask}</p>
            })}


        </div>
    )
}

export default Form;
