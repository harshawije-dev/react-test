// eslint-disable-next-line no-unused-vars
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../features/slices/threadSlice";
import Tweet from "../components/Tweet";
import guid from "../utils/uuid";
import user, { getRandomAvatar } from "../utils/randomUsername";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const ThreadsReel = () => {
  const [comment, setComment] = useState();
  const commentSelector = useSelector((state) => state.thread.arr);
  const dispatch = useDispatch();

  const saveThread = (e) => {
    e.preventDefault();
    dispatch(createComment(comment));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center sticky">
      <div className="w-[480px] h-[900px] px-8 py-3 ring-1 rounded-md ring-slate-400 relative">
        <div className="w-full flex justify-center items-center border-b-2">
          <img
            src={"/public/threads_logo.jpg"}
            alt="logo"
            width={75}
            height={75}
          />
        </div>
        <section className="h-[790px] flex flex-col gap-4">
          <div className="overflow-hidden overflow-y-scroll my-3 px-1">
            {commentSelector.length > 0 ? (
              commentSelector.map((props) => <Tweet key={guid()} {...props} />)
            ) : (
              <p>Nothing to show</p>
            )}
          </div>
        </section>
        <div className="flex flex-row w-full justify-between items-center gap-2 absolute bottom-2 left-2">
          <form className="flex flex-row w-full justify-between items-center gap-2">
            <input
              type="text"
              className="form-control"
              height={20}
              placeholder="What's on your mind..."
              onChange={(data) =>
                setComment({
                  username: user(),
                  avatar: getRandomAvatar(),
                  comment: data.target.value,
                  time: Date.now(),
                })
              }
            />
            <button
              type="submit"
              onClick={(e) => saveThread(e)}
              className="btn bg-black text-white uppercase"
            >
              <PaperAirplaneIcon className="svg-root text-white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ThreadsReel;
