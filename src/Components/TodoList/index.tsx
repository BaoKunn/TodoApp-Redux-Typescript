import { TodoItem } from "../TodoItem/index";
import "./TodoList.scss";
import { IState } from '../../Store/Store';

interface IProps {
  filterState: string,
  todos: [],
}

export default function TodoList({ filterState, todos }: IProps) {
  const todoClone = [...todos];
  return (
    <div className="todoList">
      {[...todos]?.length === 0 ? (
        <h2>Add todo now!!!</h2>
      ) : (
        todoClone
          .filter((e: IState) =>
            filterState === "complete"
              ? e.isCompleted === true
              : filterState === "active"
              ? e.isCompleted === false
              : e.isCompleted === false || e.isCompleted === true
          )
          .map((todo: IState) => {
            return <TodoItem key={todo.id} todoItem={todo} deadline={""} />;
          })
          .reverse()
      )}
    </div>
  );
}
