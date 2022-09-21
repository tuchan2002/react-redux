import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
import { useSelector, useDispatch } from "react-redux";
import {
  todosSelector,
  markCompleted,
  deleteTodo,
  getTodos,
} from "../store/reducers/todosSlice";

const Todos = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const toggleTodoCompleted = (todoId) => {
    dispatch(markCompleted(todoId));
  };

  const deleteSingleTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  console.log("Todos: re-render");
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
              checked={todo.completed}
              onChange={() => {
                toggleTodoCompleted(todo.id);
              }}
            />
            {todo.title}
            <button
              className="border bg-gray-200 p-1 ml-auto"
              onClick={() => {
                deleteSingleTodo(todo.id);
              }}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
