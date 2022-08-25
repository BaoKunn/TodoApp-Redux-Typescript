import * as React from "react";
import "./DeleteItem.scss";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteTodoThunk } from "../../Store/Thunk";

const ModalDelete = ({ todoItem, close, open }: any) => {
  const dispatch = useDispatch();
  const handleClickDelete = () => {
    dispatch(deleteTodoThunk(todoItem.id));
  };

  return (
    <div
      className={classNames("modal", {
        modal__hidden: !close,
      })}
    >
      <div className="modal__overlay" onClick={() => open(false)}></div>
      <div className="modal__delete">
        <div className="modal__title">
          Do you want delete todo: {todoItem.title}
        </div>
        <div className="form__control">
          <input
            type="button"
            className="btn btn-cancel"
            value="Cancel"
            onClick={() => open(false)}
          />

          <input
            type="submit"
            className="btn btn-delete"
            value="Delete"
            onClick={handleClickDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
