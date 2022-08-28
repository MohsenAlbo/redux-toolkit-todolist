import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",

  //sample data
  initialState: [
    { id: 1, title: "Find new libs", completed: true },
    { id: 2, title: "Practice Reactjs", completed: false },
    { id: 3, title: "Exercise", completed: false },
    { id: 4, title: "Make dinner", completed: false },
    { id: 5, title: "Push your code", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
