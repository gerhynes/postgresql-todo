import React, { Fragment, useState } from "react";

const TodoInput = ({ getTodos }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent an empty todo being added
    if (description !== "") {
      try {
        const body = { description };
        const response = await fetch("http://localhost:5000/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        // Render new list of todos
        getTodos();

        // Clear input
        setDescription("");
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-5">Save Your Todos With PostgreSQL</h1>
      <form className="form-group" onSubmit={handleSubmit} autoComplete="off">
        <label className="mx-2" htmlFor="todoInput">
          Add a Todo
        </label>
        <input
          className="form-control mb-2"
          type="text"
          value={description}
          id="todoInput"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success mx-2">Add</button>
      </form>
    </Fragment>
  );
};

export default TodoInput;
