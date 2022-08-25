import { configureStore } from "@reduxjs/toolkit";
import TodoListSlice from "./TodoSlice";

export interface IState {
  id: number;
  title: string;
  deadline: any;
  isCompleted: boolean;
  todos: [],
  list: [],
}

export interface ITodo {
  state: IState,
  list: object,
  todos: object;
}

export interface IFilter {
  filterState: string,
  setFilterState: Function,
  todos: []
}

const store = configureStore({
  reducer: {
    list: TodoListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
