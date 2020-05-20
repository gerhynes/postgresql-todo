import React, { Fragment, useEffect } from "react";
import EditTodo from "./editTodo";

const TodosList = ({ todos, getTodos, setTodos }) => {
  const deleteTodo = async (id) => {
    try {
      const deletedTodo = await fetch(`http://localhost:5000/todos/${id}`, {
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
      <table className="table-auto mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} todos={todos} getTodos={getTodos} />
              </td>
              <td>
                <button className="" onClick={() => deleteTodo(todo.todo_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TodosList;
