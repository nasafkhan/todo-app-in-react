import React, { useState , useEffect} from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {

  //SATES
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  
  //USE EFFECT

  useEffect(() => {
    switch(status){
      case "completed":
        setFilterTodos(toDos.filter(todo => todo.complete === true))
        break;
      case "uncompleted":
        setFilterTodos(toDos.filter(todo => todo.complete === false))
        break;
      default:
        setFilterTodos(toDos);
    }
  }, [toDos, status])


  return (
    <div className="App">
      <header>
        <h2>Let's See What's You Gotta Do Today</h2>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        toDos={toDos}
        setToDos={setToDos}
        setStatus={setStatus}
      />
      <TodoList setToDos={setToDos} toDos={toDos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
