import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoThunk,
  deleteTodoThunk,
  getTodosThunk,
  updateTodoThunk,
  toggleTodoThunk,
} from "./Thunk";

export interface ITodo {
  id: number;
  title: string;
  deadline: string;
  isCompleted: boolean;
  todoList: Array<object>;
  filter: string;
}

const TodoListSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodosThunk.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
         return action.payload;
      })
      .addCase(updateTodoThunk.fulfilled, (state, action) => {
         return action.payload;
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
         return action.payload;
      })
      .addCase(toggleTodoThunk.fulfilled, (state, action) => {
         return action.payload;
      });
  },
});

export default TodoListSlice.reducer