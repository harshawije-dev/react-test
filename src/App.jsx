import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex-1 justify-center items-center mx-4 my-6 border-2 border-dotted border-purple-700 max-w-lg">
        <div className="flex flex-col py-7 mx-4">
          <form action="">
            <input
              type="text"
              placeholder="Add task"
              className="w-full px-4 py-2 bg-white ring-1 ring-slate-300 rounded-md focus-within:outline-blue-500 focus-within:ring-2 focus-within:ring-blue-300"
            />
          </form>
          <div className="my-5">
            <div className="bg-slate-200 p-2.5 rounded-sm flex flex-row gap-3 items-center">
              <input type="checkbox" name="done" id="done"/>
              <p className="text-lg font-normal text-slate-800">Title</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
