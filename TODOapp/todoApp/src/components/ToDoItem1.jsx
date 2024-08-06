import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const ToDoItem1 = ({todoName,todoDate}) => {
    const contextObj = useContext(TodoItemsContext);
    const deleteItems = contextObj.deleteItem;
    return (
        <>
            <div className="container">

                <div className="row kg-row">
                    <div className="col-6">
                        {todoName}
                    </div>
                    <div className="col-4">
                        {todoDate}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-danger kg-button" onClick={()=>deleteItems(todoName)}><MdOutlineDelete /></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ToDoItem1