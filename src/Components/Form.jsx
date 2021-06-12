import React from "react";

function Form({ inputText, setInputText, toDos, setToDos, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setToDos([
      ...toDos,
      { text: inputText, complete: false, id: Date.now() },
    ]);
    setInputText("");
  };

  const statusHandler = (e) =>{
    setStatus(e.target.value);
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        placeholder="Add Todo..."
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
      <i className="fas fa-plus"></i>
      </button>
      <div className="select">
        <select onClick={statusHandler} name="todos" className="filter-todo">
          
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        </div>
    </form>
  );
}

export default Form