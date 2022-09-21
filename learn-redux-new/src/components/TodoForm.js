import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/reducers/todosSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const onChangeInput = (e) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (title !== "") {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  console.log("TodoForm: re-render");
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="border mr-5 px-2 py-1 outline-none"
          placeholder="New Todo..."
          name="title"
          onChange={onChangeInput}
          value={title}
        />
        <button type="submit" className="px-2 border bg-gray-200 p-1">
          ADD
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
