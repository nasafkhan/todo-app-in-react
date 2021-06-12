import React from 'react'
import Todo from './Todo'

function TodoList({setToDos, toDos, filterTodos}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo,index) => 
          <Todo text={todo.text} key={index} setToDos={setToDos} toDos={toDos} toDo={todo} />
        )}
      </ul>
    </div>
  )
}

export default TodoList;
