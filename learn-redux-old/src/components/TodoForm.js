import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../store/actions/todoAction";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const onChangeInput = (e) => {
    setTitle(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (title !== "") {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      console.log(newTodo);
      addTodo(newTodo);
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

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const mapStateProps = (state) => ({});

export default connect(mapStateProps, { addTodo })(TodoForm);
