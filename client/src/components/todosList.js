import React, { Fragment, useEffect } from "react";
import EditTodo from "./editTodo";

const TodosList = ({ todos, getTodos, setTodos }) => {
  const deleteTodo = async (id) => {
    try {
      const deletedTodo = await fetch(`/todos/${id}`, {
        method: "DELETE",
      });
      // Render only remaining todos
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <div className="align-middle inline-block min-w-full shadow sm:rounded-lg border-b border-gray-200">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-semibold uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-xs leading-4 font-semibold uppercase tracking-wider">
                Edit
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-200 text-xs leading-4 font-semibold uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.todo_id}>
                <td className="px-6 py-4 border-b border-gray-200 leading-5 text-gray-900">
                  {todo.description}
                </td>
                <td className="border px-4 py-4 text-center">
                  <EditTodo todo={todo} todos={todos} getTodos={getTodos} />
                </td>
                <td className="border px-4 py-4 text-center">
                  <button
                    className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm font-semibold border-4 text-white py-1 px-4 rounded"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default TodosList;
