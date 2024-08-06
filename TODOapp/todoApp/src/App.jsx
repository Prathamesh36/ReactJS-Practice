import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import "./App.css";
import { useState } from "react"
import WelComeMessage from "./components/WelComeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (inputText, inputDate) =>{
    const newTodoItems = [...todoItems,{name:inputText, dueDate:inputDate},
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName)=>{
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems); 
  }

  return (
    <TodoItemsContext.Provider value={{
      todoItems: todoItems,
      addNewItem: addNewItem,
      deleteItem: deleteItem,
      }}>
      <center className="todo-container">
        <AppName/>
        <AddToDo/>
        <WelComeMessage></WelComeMessage>
        <TodoItems/>
      </center>
    </TodoItemsContext.Provider>
  ) 
}

export default App
