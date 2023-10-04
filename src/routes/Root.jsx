import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-[15%] h-screen overflow-clip bg-slate-100 px-0">
        <div className="flex flex-row justify-around items-center gap-1 p-4">
          <input
            type="search"
            name="search"
            id="search"
            className="form-control"
          />
          <button
            type="button"
            className="bg-slate-900 rounded-md px-4 py-2 text-sm text-white"
          >
            Search
          </button>
        </div>
        <hr />
        <div className="w-auto flex flex-col gap-0 justify-center">
          <div className="sidebar-li">
            <Link to={`/`}>
              <h5>Home</h5>
            </Link>
          </div>
          <div className="sidebar-li">
            <Link to={"/projects/to-do"}>
              <h5>Todo List app</h5>
            </Link>
          </div>
          <div className="sidebar-li">
            <Link to={"/projects/stop-watch"}>
              <h5>Stop Watch</h5>
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
