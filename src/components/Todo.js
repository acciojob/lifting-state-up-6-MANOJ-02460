import React from 'react'

const Todo = ({item,isCompleted}) => {

    const {id, course, completed} = item
    
  return (
    <div>
        <ul >
            <li key={id} style={{marginTop:'10px'}}>{course}
               {!completed && (
                <button onClick={()=> isCompleted(id)}>Complete</button>
               )}
            </li>
        </ul>
    </div>
  )
}

export default Todo



{/* <li key={todo.id}>
      {todo.text}
      {/* Conditionally render the button only if completed is false */}
    //   {!todo.completed && (
    //     <button onClick={() => handleComplete(todo.id)}>
    //       Complete
    //     </button>
    //   )}
    // </li> */}