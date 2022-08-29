import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodoThunk } from "../../Store/Thunk";
import "../FortAwesome/index"
import Modal from "../Modal/index";
import ModalDelete from "../DeleteItem/index";
import TodoForm from "../TodoForm/index";
import "./TodoItem.scss";
import { IState } from "../../Store/Store";

interface IProps {
  deadline: string;
  todoItem: IState
}

export const TodoItem = ({ todoItem }: IProps) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [close, open] = useState(false);

  const checkDeadline = (todoItem: IState) => {
    if (todoItem.deadline) {
      const now = new Date();
      const deadline = new Date(todoItem?.deadline);
      const a = deadline.getTime() - now.getTime();
      return a < 60 * 60 * 1000;
    }
    return false;
  };

  const handleChangeComplete = () => {
    dispatch(toggleTodoThunk(todoItem));
  };

  const handleClickUpdate = () => {
    setIsModalOpen(true);
  };

  const handleClickDelete = () => {
    open(true);
  };

  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={todoItem.isCompleted}
        onChange={handleChangeComplete}
      />
      <div
        className={classNames("todoItem__title", {
          todoItem__title_cpl: todoItem.isCompleted,
        })}
      >
        <span className="todoItem__title-name" onClick={handleChangeComplete}>
          {todoItem.title}
        </span>
        {todoItem.deadline && (
          <span
            className={classNames("todoItem__title-deadline", {
              todoItem__title_deadline_warring:
                checkDeadline(todoItem) && !todoItem.isCompleted,
            })}
          >
            {moment(todoItem.deadline).format("h:mm a, DD/MM/YYYY")}
          </span>
        )}
      </div>
      <FontAwesomeIcon
        className="icon todoItem__icon-edit"
        icon={faEdit}
        onClick={handleClickUpdate}
      />
      <FontAwesomeIcon
        className=" icon todoItem__icon-del"
        icon={faTrash}
        onClick={handleClickDelete}
      />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <TodoForm
          todoItem={todoItem}
          title="Edit Todo:"
          setIsModalOpen={setIsModalOpen}
        ></TodoForm>
      </Modal>
      <ModalDelete close={close} open={open} todoItem={todoItem}></ModalDelete>
    </div>
  );
};
