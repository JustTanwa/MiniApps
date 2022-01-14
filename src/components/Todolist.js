import React, { useState, useEffect, useRef } from "react";
import { Textbox } from "./Textbox";

function Todolist() {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([{}]);

    useEffect(() => {
        let nextId = taskList.length > 1 ? taskList[taskList.length - 1].id + 1 : 1;
        if (task !== "") {
            setTaskList((prev) => [...prev, { task: task, id: nextId }]);
            setTask("");
        }
    }, [task, taskList]);

    const updateTask = (newTask) => {
        setTask(newTask);
    }

    const handleDelete = (id) => {
        const newList = taskList.filter((item) => item.id !== id);
        if (newList.length > 0) {
            setTaskList(newList);
        } else {
            setTaskList([]);
        }
    }

    const handleSpin = (event, id) => {
        event.target.classList.add("spinning");
        const deleteTimer = setTimeout(() => {handleDelete(id)}, 1200);
        
    }

    return (
        <div className="container-fluid bg-grey vh-100" id="todolist">
            <section>
                <h3 className="text-center">To do list</h3>
                <Textbox updateOption={updateTask} />
                <div className="container-fluid">
                    <div className="row">
                        {taskList.map((item) => {
                            if (!(Object.keys(item).length === 0 && item.constructor === Object)) {
                                return (
                                    <div className="col-3 p-3" key={item.id}>
                                        <div className="myCard">
                                            <button type="button" onClick={(e) => handleSpin(e, item.id)} className='card-inner'>{item.task}</button>
                                        </div>
                                    </div>
                                )
                            } else { return null }
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Todolist;