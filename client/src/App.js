import React, { Fragment } from "react";
import InputTodo from "./components/inputTodo";
import ListTodos from "./components/listTodos";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
