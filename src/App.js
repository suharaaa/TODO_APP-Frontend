import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
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
      <TodoList />
    </div>
  );
}

export default App;
