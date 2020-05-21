import React, { Fragment, useState } from "react";

const EditTodo = ({ todo, getTodos }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      // Render new list of todos
      getTodos();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="flex-shrink-0 bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700 text-sm font-semibold border-4 py-1 px-2 rounded"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className="modal hidden"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className="">
          <div className="">
            <div className="">
              <h4 className="">Edit Todo</h4>
              <button
                type="button"
                className=""
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div className="">
              <input
                type="text"
                className=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="">
              <button
                type="button"
                className=""
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
