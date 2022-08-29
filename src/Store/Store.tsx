import { configureStore } from "@reduxjs/toolkit";
import TodoListSlice from "./TodoSlice";

export interface IState {
  id: number;
  title: string;
  deadline: string;
  isCompleted: boolean;
  todos: [];
  list: [];
}

export interface ITodo {
  state: IState;
  list: object;
  todos: object;
}

const store = configureStore({
  reducer: {
    list: TodoListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
