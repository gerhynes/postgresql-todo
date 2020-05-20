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
      <h1 className="text-4xl leading-10 font-semibold font-display text-center my-10">
        Save Your Todos With PostgreSQL
      </h1>

      <form
        className="w-full max-w-md mx-auto mb-5"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="flex items-center border-b border-b-2 border-green-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            value={description}
            aria-label="New Todo"
            placeholder="New todo..."
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded">
            Add
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default TodoInput;
