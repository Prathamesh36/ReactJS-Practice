import React, { useContext, useRef } from 'react'
import { IoAddOutline } from "react-icons/io5";
import TodoItems from './TodoItems';

import { TodoItemsContext } from "../store/todo-items-store";

const AddToDo = () => {
    const {addNewItem} = useContext(TodoItemsContext);
    const todoNameElement = useRef();
    const dueDateElement = useRef();

    const handleAddButtonClicked = () => {
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        todoNameElement.current.value="";
        dueDateElement.current.value="";
        addNewItem(todoName, dueDate);
    }

    return (
        <>
            <div className="container ">
                <div className="row kg-row">
                    <div className="col-6">
                        <input 
                        type="text"
                        ref={todoNameElement} 
                        placeholder="Enter Todo Here"  />
                    </div>
                    <div className="col-4">
                        <input 
                        type="date" 
                        ref={dueDateElement}   />
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
