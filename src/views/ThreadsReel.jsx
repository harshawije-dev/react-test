// eslint-disable-next-line no-unused-vars
import React from "react";

const ThreadsReel = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center sticky">
      <div className="w-[480px] h-[900px] px-8 py-3 ring-1 rounded-md ring-slate-400 relative">
        <div className="w-full flex justify-center items-center border-b-2">
          <img src={"/public/threads_logo.jpg"} alt="logo" width={75} height={75}/>
        </div>
        <div className="flex flex-row w-full justify-between items-center gap-2 absolute bottom-2 left-2">
          <input
            type="text"
            className="form-control"
            height={20}
            placeholder="What's on your mind..."
          />
          <button type="submit" className="btn bg-black text-white uppercase">
            post
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreadsReel;
