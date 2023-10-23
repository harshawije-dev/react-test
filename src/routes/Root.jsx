import { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  const input = useRef();

  useEffect(() => {
    const key = (event) => {
      event.key === "\\" ? input.current.focus() : null;
    };

    addEventListener("keydown", key);

    return () => {
      removeEventListener("keydown", key);
    };
  }, []);

  return (
    <div className="w-full flex flex-row">
      <div className="w-[15%] h-screen overflow-clip bg-slate-100 px-0">
        <div className="flex flex-row justify-around items-center gap-1 p-4">
          <input
            type="search"
            name="search"
            ref={input}
            className="form-control"
          />
          <button
            type="button"
            className="bg-slate-900 rounded-md px-4 py-2 text-sm text-white"
          >
            Search
          </button>
        </div>
        <div className="flex justify-center items-center">
          <p className="mb-4 px-4 py-2 bg-slate-400 text-black font-xs font-semibold w-fit rounded-full capitalize">
            search <span className="bg-slate-600 text-white px-3 py-1 rounded-sm">ctrl</span>
            + 
            <span className="bg-slate-600 text-white px-3 py-1 rounded-sm">\</span>
          </p>
        </div>
        <hr />
        <div className="w-auto flex flex-col gap-0 justify-center">
          <div className="sidebar-li">
            <Link to={`/`}>
              <h5>Home</h5>
            </Link>
          </div>
          <div className="sidebar-li">
            <Link to={"/to-do"}>
              <h5>Todo List app</h5>
            </Link>
          </div>
          <div className="sidebar-li">
            <Link to={"/stop-watch"}>
              <h5>Stop Watch</h5>
            </Link>
          </div>
          <div className="sidebar-li">
            <Link to={"/tip-calculator"}>
              <h5>Tip Calculator</h5>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[85%] px-5 my-4" id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
