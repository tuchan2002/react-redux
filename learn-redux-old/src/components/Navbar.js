import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ todos }) => {
  const length = todos.length;
  return (
    <div>
      <h1 className="text-center">Todos App</h1>
      <ul className="flex justify-between items-center">
        <li className="p-3">Home</li>
        <li className="p-3">About</li>
        <li className="p-3">Total todos: {length}</li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  todos: PropTypes.array.isRequired,
};

const mapStateProps = (state) => ({
  // state la trang thai cua store, la cai obj trong combineReducers
  todos: state.myTodos.todos,
});

export default connect(mapStateProps, {})(Navbar);
