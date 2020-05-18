import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-5">PostgreSQL Todo List</h1>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success mx-3">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
