import "./TabFilter.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IFilter, IState } from "../../Store/Store";

export default function TabFilter({ setFilterState }: IFilter) {
  const [status, setStatus] = useState("all");

  const clickAll = () => {
    setFilterState("all");
    setStatus("all");
  };

  const clickACtive = () => {
    setFilterState("active");
    setStatus("active");
  };

  const clickComplete = () => {
    setFilterState("complete");
    setStatus("complete");
  };

  const todoList = useSelector((state: IState) => state.list);
  return (
    <div className="filter">
      <button
        className={classNames(" btn-filter", {
          btn__active: status === "all",
        })}
        onClick={clickAll}
      >
        All ({todoList.length})
      </button>
      <button
        className={classNames(" btn-filter", {
          btn__active: status === "active",
        })}
        onClick={clickACtive}
      >
        Active ({todoList.filter((todo: any) => todo.isCompleted === false).length})
      </button>
      <button
        className={classNames(" btn-filter", {
          btn__active: status === "complete",
        })}
        onClick={clickComplete}
      >
        Completed ({todoList.filter((todo: any) => todo.isCompleted === true).length}
        )
      </button>
    </div>
  );
}
