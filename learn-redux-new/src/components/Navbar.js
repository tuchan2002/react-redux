import React from "react";
import { useSelector } from "react-redux";
import { todosSelector } from "../store/reducers/todosSlice";

const Navbar = () => {
  const todos = useSelector(todosSelector);

  console.log("Navbar: re-render");
  return (
    <div>
      <h1 className="text-center">Todos App</h1>
      <ul className="flex justify-between items-center">
        <li className="p-3">Home</li>
        <li className="p-3">About</li>
        <li className="p-3">Total todos: {todos.length}</li>
      </ul>
    </div>
  );
};

export default Navbar;
