
import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, course: "Learn React", completed: false },
    { id: 2, course: "Build a React app", completed: false },
    { id: 3, course: "Deploy the React app", completed: false }
  ])

  function handleComplete(index) {
    
    const updatedTodo = todo.map((todo)=>{

      if(todo.id === index){

        return {...todo, completed: true}
      }
      return todo
    })

    setTodo(updatedTodo)
    
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <ul>
        <h2>Child Component</h2>
        {todo.map((item, index) => (
          <Todo key={item.id} item={item} handleComplete={handleComplete} />
        ))}
    </ul>
      
    </div >
  )
}

export default App
