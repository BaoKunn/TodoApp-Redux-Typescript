import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosInstance } from "../Api/Api";
import { ADD_TODO_ERROR, ADD_TODO_SUCCESS, autoClose, DELETE_TODO_ERROR, DELETE_TODO_SUCCESS, GET_DATA_ERROR, GET_DATA_SUCCESS, UPDATE_TODO_ERROR, UPDATE_TODO_SUCCESS } from "./constant";
import { ITodo } from "./TodoSlice";

export const getTodosThunk: any = createAsyncThunk("list", async () => {
  try {
    const response = await axiosInstance.get(`/todo`)
    toast.success(GET_DATA_SUCCESS, autoClose)
    return response.data
  } catch (error) {
    toast.error(GET_DATA_ERROR, autoClose)
  }
});

export const addTodoThunk: any = createAsyncThunk("add", async (todo: ITodo) => {
  try {
    await axiosInstance.post(`/todo`, todo);
    const response = await axiosInstance.get(`/todo`);
    toast.success(ADD_TODO_SUCCESS, autoClose)
    return response.data
  } catch (error) { 
    toast.error(ADD_TODO_ERROR, autoClose)
  }
});

export const updateTodoThunk: any = createAsyncThunk("update", async (todo: ITodo) => {
  try {
    await axiosInstance.put(`/todo/${todo.id}`, {
      title: todo.title,
      deadline: todo.deadline,
      isCompleted: todo.isCompleted,
    });
    const response = await axiosInstance.get(`/todo`);
    toast.success(UPDATE_TODO_SUCCESS, autoClose)
    return response.data;
  } catch (error) {
    toast.error(UPDATE_TODO_ERROR, autoClose)
  }
});

export const deleteTodoThunk: any = createAsyncThunk("delete", async (id: number) => {
  try {
    await axiosInstance.delete(`/todo/${id}`);
    const response = await axiosInstance.get("/todo");
    toast.success(DELETE_TODO_SUCCESS, autoClose)
    return response.data;
  } catch (error) {
    toast.error(DELETE_TODO_ERROR, autoClose)
  }
});

export const toggleTodoThunk: any = createAsyncThunk("toggle", async (todo: ITodo) => {
  try {
    await axiosInstance.put(`/todo/${todo.id}`, {
      isCompleted: !todo.isCompleted,
    });
    const response = await axiosInstance.get("/todo");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});