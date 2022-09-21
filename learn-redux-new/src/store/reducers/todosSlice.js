import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

// Reducer Thunk
export const getTodos = createAsyncThunk("todos/todosFetched", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=3"
  );
  return response.data;
});

export const addTodo = createAsyncThunk("todos/todoAdded", async (title) => {
  const newTodo = {
    id: uuidv4(),
    title,
    completed: false,
  };

  await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);

  return newTodo;
});

export const deleteTodo = createAsyncThunk(
  "todos/todoDeleted",
  async (todoId) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    return todoId;
  }
);

const todosSlide = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
  },
  reducers: {
    // vừa là action creator + action + dispatch + reducers
    // addTodo: {
    //   reducer(state, action) {
    //     state.allTodos.unshift(action.payload);
    //   },
    //   prepare(title) {
    //     // return action
    //     return {
    //       payload: {
    //         id: uuidv4(),
    //         title,
    //         completed: false,
    //       },
    //     };
    //   },
    // },
    markCompleted(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    // deleteTodo(state, action) {
    //   const todoId = action.payload;
    //   state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    // },
    // todosFetched(state, action) {
    //   state.allTodos = action.payload;
    // },
  },
  extraReducers: {
    // Get all todos
    [getTodos.pending]: (state, action) => {
      console.log("Fetching todos from backend ....");
    },
    [getTodos.fulfilled]: (state, action) => {
      console.log("Done");
      state.allTodos = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      console.log("Failed to get todos!!!");
    },

    // Add todo
    [addTodo.fulfilled]: (state, action) => {
      state.allTodos.unshift(action.payload);
    },

    // Delete todo
    [deleteTodo.fulfilled]: (state, action) => {
      const todoId = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },
  },
});

// async action creator, action and reducer dispatch
// export const getTodos = () => {
//   const getTodosAction = async (dispatch) => {
//     console.log("getTodos");
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/todos?_limit=3"
//       );
//       dispatch(todosFetched(response.data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return getTodosAction;
// };

const todosReducer = todosSlide.reducer;

// selector
export const todosSelector = (state) => state.todosReducer.allTodos;

// action export
export const { markCompleted } = todosSlide.actions;

export default todosReducer;
