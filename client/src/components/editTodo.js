import React, { Fragment, useState } from "react";

const EditTodo = ({ todo, getTodos }) => {
  const [description, setDescription] = useState(todo.description);
  const [showModal, setShowModal] = useState(false);

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
        className="flex-shrink-0 bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700 text-sm font-semibold border-4 py-1 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4">
                <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-lg font-semibold">Edit Todo</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5  text-2xl block outline-none focus:outline-none">
                      &times;
                    </span>
                  </button>
                </div>
                <div className="flex items-center border-b border-b-2 border-green-500 py-2 my-2 mx-2">
                  <input
                    type="text"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-4 leading-tight focus:outline-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  <button
                    type="button"
                    className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm font-semibold border-4 text-white py-1 px-2 rounded"
                    data-dismiss="modal"
                    onClick={(e) => {
                      updateDescription(e);
                      setShowModal(false);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </Fragment>
  );
};

export default EditTodo;
