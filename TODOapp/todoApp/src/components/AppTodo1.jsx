import React, { useState, useRef } from 'react'
import { IoAddOutline } from "react-icons/io5";
const AddToDo = ({onAddClick}) => {

    const [todoName, setTodoName] = useState("");
    const [dueDate, setdueDate] = useState("");
    const noOfUpdates=useRef(0);

    const hangleNameChange=(event)=>{
        setTodoName(event.target.value);
    }
    const handleDateChange=(event)=>{
        setdueDate(event.target.value);
    }
    const handleAddButtonClicked = () =>{
        onAddClick(todoName,dueDate);
        setdueDate("");
        setTodoName("");
    }

    return (
        <>
            <div className="container ">
                <div className="row kg-row">
                    <div className="col-6">
                        <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={hangleNameChange}/>
                    </div>
                    <div className="col-4">
                        <input type="date" value={dueDate} onChange={handleDateChange}/>
                    </div>
                    <div className="col-2">
                        <button
                        type="button" 
                        className="btn btn-success kg-button"
                        onClick={handleAddButtonClicked}
                        ><IoAddOutline /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToDo
