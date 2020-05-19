import React, { Fragment } from "react";
import TodoInput from "./components/todoInput";
import TodosList from "./components/todosList";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container">
        <TodoInput />
        <TodosList />
      </div>
    </Fragment>
  );
}

export default App;
