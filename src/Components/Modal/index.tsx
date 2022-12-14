import * as React from "react";
import classNames from "classnames";
import "./Modal.scss";

interface IModal {
  isModalOpen: boolean,
  setIsModalOpen: Function,
  children: any
}

const Modal = ({ isModalOpen, setIsModalOpen, children }: IModal) => {
  return (
    <div
      className={classNames("modal", {
        modal__hidden: !isModalOpen,
      })}
    >
      <div
        className="modal__overlay"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div className="modal__body">{children}</div>
    </div>
  );
};

export default Modal;
