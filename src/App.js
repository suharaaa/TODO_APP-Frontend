import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //states
  //defining in app.js allows to use in other components, cant go from lower level to upper level(form to todo)
  //empty string reset the text after enter
  const [inputText, setInputText] = useState("");
  //todo list items
  const [todos, setTodos] = useState([]);
  //searching todos
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once when the app starts(empty array)
  useEffect(() => {
    getLocalTodos();
  }, [])

  //useEffect
  //runs every time only once, when we run the input value(inside the [] brackets)
  //this helps to run filter function
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local storage
  //adding
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>TODO LIST</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
