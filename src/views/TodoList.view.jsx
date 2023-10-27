import { useReducer, useState } from "react";
import Task from "../components/Task";
import reducer from "../features/taskProcess";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const taskInitialize = (e) => {
    e.preventDefault();
    task === "" ? setTask("") : dispatch({ type: "CREATE", payload: task });
  };

  return (
    <div className="bg-slate-50 pb-6 pt-3 mt-10 flex justify-center">
      <div className="flex-1 justify-center items-center mx-4 my-6 border-2 border-dotted border-purple-700 max-w-4xl">
      <div className="flex flex-col py-7 mx-4">
        <form action="" onSubmit={taskInitialize}>
          <input
            type="text"
            placeholder="Add task"
            className="form-control"
            onChange={(e) => setTask(e.target.value)}
          />
        </form>
        <div className="my-5">
          <section className="flex flex-col gap-1.5">
            {todos.map((todo) => {
              return <Task key={todo.id} props={todo} dispatch={dispatch} />;
            })}
          </section>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TodoList;
