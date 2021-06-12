import React from 'react'

function Todo({text, setToDos, toDos, toDo}) {

  const completedHandler = () => {
    setToDos(toDos.map((items) => {
      if( items.id === toDo.id ){
        return { ...items, complete: !items.complete }
      }
      return items
    }))
  }

  const deleteHandler = () => {
    setToDos(toDos.filter(item => item.id !== toDo.id
      ))
    
  }

  return(
    <div>
      <div className="todo">
        <li className={`todo-item} ${ toDo.complete ? "completed" : ""}`} >{text}</li>
        <button onClick={completedHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo