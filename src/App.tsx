import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Header from "./Components/Header";
import TabFilter from "./Components/TabFilter/index";
import TodoList from "./Components/TodoList/index";
import { IState } from "./Store/Store";
import { getTodosThunk } from "./Store/Thunk";

function App() {
  const todos = useSelector((state: IState) => state.list);

  const dispatch = useDispatch();
  const [filterState, setFilterState] = useState<string>("all");
  
  //get Todo
  useEffect(() => {
    dispatch(getTodosThunk(todos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="App">
      <div className="todo">
        <div className="function_Filter">
          <ToastContainer />
          <Header />
          <TabFilter setFilterState={setFilterState} filterState={""} todos={[]} />
        </div>
        <div className="function_Item">
          <TodoList filterState={filterState} todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
