import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoThunk, updateTodoThunk } from "../../Store/Thunk";
import "./TodoForm.scss";

interface IForm {
  title: string,
  setIsModalOpen: Function,
  todoItem: any,
}

const TodoForm = ({ setIsModalOpen, title, todoItem }: IForm) => {
  
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (todoItem !== undefined) {
      setValue(todoItem.title);
      setDeadline(todoItem.deadline);
    }
  }, [todoItem]);

  const handleChangeDeadline = (value: string) => {
    setDeadline(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    handleClickSave();
  };

  const handleClickSave = () => {
    if (todoItem !== undefined) {
      dispatch(
        updateTodoThunk({
          title: value,
          deadline: deadline,
          id: todoItem.id,
          isCompleted: todoItem.isCompleted,
        })
      );
    } else {
      dispatch(
        addTodoThunk({
          title: value,
          deadline: deadline,
          isCompleted: false,
        })
      );
    }
    
    setDeadline("");
    setValue("");
    setIsModalOpen(false);
  };

  const handleCancle = () => {
    if (todoItem === undefined) {
      setDeadline("");
      setValue("");
    } else {
      setValue(todoItem.title);
      setDeadline(todoItem.deadline);
    }
    setIsModalOpen(false);
  };
  return (
    <div className="todo-form">
      <div className="todo-form__header">
        <h2>{title}</h2>
      </div>
      <form className="form__input" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Todo Name ..."
          className="todo-input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="todo-form__deadline">
          <h2>Deadline:</h2>
        </div>
        <input
          type="datetime-local"
          className="todo-deadline"
          value={deadline}
          onChange={(e) => handleChangeDeadline(e.target.value)}
        />
        <div className="form__control">
          <input
            type="button"
            className="btn btn-cancel"
            value="Cancel"
            onClick={handleCancle}
          />

          <input type="submit" className="btn btn-primary" value="Save" />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
