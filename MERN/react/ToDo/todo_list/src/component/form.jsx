import React, { useState } from 'react';


const Form = props => {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);


    const onSubmitHandler = (event) => {
        event.preventDefault();

        const addedTask = {
            text: newTask,
            complete: false
        }
        setTasks([...tasks, addedTask]);
        setNewTask("");
    };

    const onDeleteHandler = (index) => {
        const filteredTasks = tasks.filter((_task, i) => i !== index)
        setTasks(filteredTasks);
    };

    const handleCompletedToggle = (index) => {
        const updatedTaskComplete = tasks.map((task, i) => {
            if (index === i) {
                task.complete = !task.complete;
            }
            return task
        });
        setTasks(updatedTaskComplete);
    };

    return (
        <div className="App">
            <form onSubmit={onSubmitHandler}>
                <input onChange={(e) => { setNewTask(e.target.value) }} type="text" placeholder="add new task" value={newTask} />
                <input type="submit" />
            </form>
            <ul style={{ listStyle: 'none' }}>
                {
                    tasks.map((task, i) => {
                        const taskClasses = [];
                        if (task.complete) {
                            taskClasses.push("strike")
                        }
                        return <li key={i} className={taskClasses.join("")} > <input onChange={(event) => {
                            handleCompletedToggle(i);
                        }} checked={task.complete} type="checkbox" />{task.text}<button onClick={() => onDeleteHandler(i)}>Delete</button></li>
                    })
                }
            </ul>
        </div>
    );
}

export default Form;