import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import React from 'react'

const WelComeMessage = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return todoItems.length===0 && <p>Enjoy your Day</p>;
}
export default WelComeMessage;