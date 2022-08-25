import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "../Modal/index";
import TodoForm from "../TodoForm/index";
import "./Header.scss";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickAdd = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="header">
      <h2 className="header-title">Todo App</h2>
      <button className="btn btn-primary btn__add" onClick={handleClickAdd}>
        <FontAwesomeIcon icon={["fas", "plus"]} />
        <span> New Todo </span>
      </button>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <TodoForm title="New Todo:" setIsModalOpen={setIsModalOpen} todoItem={undefined} ></TodoForm>
      </Modal>
    </div>
  );
};

export default Header;
