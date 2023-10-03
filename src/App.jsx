import { useReducer, useState } from "react";
import reducer from "./utils/taskProcess";
import Task from "./components/Task";

function App() {
  const [task, setTask] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const taskInitialize = (e) => {
    e.preventDefault();
    task === "" ? setTask("") : dispatch({ type: "CREATE", payload: task });
  };

  return (
    <>
      <div className="flex-1 justify-center items-center mx-4 my-6 border-2 border-dotted border-purple-700 max-w-lg">
        <div className="flex flex-col py-7 mx-4">
          <form action="" onSubmit={taskInitialize}>
            <input
              type="text"
              placeholder="Add task"
              className="w-full px-4 py-2 bg-white ring-1 ring-slate-300 rounded-md focus-within:outline-blue-500 focus-within:ring-2 focus-within:ring-blue-300"
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
    </>
  );
}

export default App;
