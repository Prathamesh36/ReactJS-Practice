import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

import ToDoItem1 from "./ToDoItem1";
const TodoItems = () => {
    const contextObj = useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;
  
    
    return (
        <>
            <div className="items-container">
                {todoItems.map(item=>
                    <ToDoItem1 
                        key={item.name}
                        todoDate={item.dueDate} 
                        todoName={item.name} 
                    ></ToDoItem1>)}
            </div>
        </>
    )
}
export default TodoItems;