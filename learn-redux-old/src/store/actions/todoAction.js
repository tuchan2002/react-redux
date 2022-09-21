import axios from "axios";
import { GET_TODOS, MARK_COMPLETED, ADD_TODO, DELETE_TODO } from "../types";

export const getTodos = () => {
  const getTodosAction = async (dispatch) => {
    console.log("getTodos");
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );
      dispatch({
        type: GET_TODOS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return getTodosAction;
};

export const markComplete = (id) => {
  const markCompleteAction = (dispatch) => {
    console.log("markComplete");
    dispatch({
      type: MARK_COMPLETED,
      payload: id,
    });
  };
  return markCompleteAction;
};

export const addTodo = (newTodo) => {
  const addTodoAction = async (dispatch) => {
    console.log("addTodo");
    try {
      await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
      dispatch({
        type: ADD_TODO,
        payload: newTodo,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return addTodoAction;
};

export const deleteTodo = (id) => {
  const deleteTodoAction = async (dispatch) => {
    console.log("deleteTodo");
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return deleteTodoAction;
};
