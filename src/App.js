import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //defining in app.js allows to use in other components, cant go from lower level to upper level(form to todo)
  //empty string reset the text after enter
  const [inputText, setInputText] = useState("");
  //todo list items
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Suhara's TODO</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
