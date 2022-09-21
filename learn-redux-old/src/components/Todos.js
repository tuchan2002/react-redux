import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getTodos,
  markComplete,
  deleteTodo,
} from "../store/actions/todoAction";

const Todos = ({ todos, getTodos, markComplete, deleteTodo }) => {
  console.log("Todos: re-render");

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center p-3 bg-white border my-2 ${
              todo.completed ? "bg-blue-300" : ""
            }`}
          >
            <input
              type="checkbox"
              className="mr-5"
              onChange={() => markComplete(todo.id)}
              checked={todo.completed}
            />
            {todo.title}
            <button
              className="border bg-gray-200 p-1 ml-auto"
              onClick={() => deleteTodo(todo.id)}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
};

const mapStateProps = (state) => ({
  // state la trang thai cua store, la cai obj trong combineReducers
  todos: state.myTodos.todos,
});

export default connect(mapStateProps, { getTodos, markComplete, deleteTodo })(
  Todos
);
