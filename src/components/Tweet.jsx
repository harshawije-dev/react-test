/* eslint-disable react/prop-types */
import {
  ArrowPathIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartSolid,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import timeComparison from "../utils/timeComparison";

const Tweet = (props) => {
  const [icon, setIcon] = useState(0);
  const { username, avatar, comment, time } = props;

  const updatedOn = timeComparison(time);

  return (
    <div className="flex flex-col items-start mb-9 px-4 py-2 w-full bg-white border-l-4 rounded-none ring-slate-200">
      <picture>
        <img
          src={avatar}
          alt="avatar"
          className="bg-slate-50 w-[45px] h-[45px] rounded-full"
        />
      </picture>
      <div className="mb-4 mt-2.5 px-2 w-full">
        <article className="flex flex-row justify-between items-center mb-4 ">
          <span className="flex flex-row flex-wrap gap-2 items-center">
            <h2 className="text-xl font-semibold text-black">@{username}</h2>
            <CheckBadgeIcon className="w-5 h-5 text-blue-400" />
          </span>
          <small className="text-sm font-normal text-slate-500">
            {updatedOn} seconds ago
          </small>
        </article>
        <p className="text-base font-normal text-black">{comment}</p>
      </div>
      <div className="flex flex-row mt-2 justify-start items-center gap-2">
        <button
          type="button"
          className="btn bg-transparent"
          onClick={() => setIcon((state) => !state)}
        >
          {!icon ? (
            <HeartIcon className="svg-root" />
          ) : (
            <HeartSolid className="svg-root text-red-500" />
          )}
        </button>
        <button type="button" className="btn bg-transparent">
          <ArrowPathIcon className="svg-root" />
        </button>
        <button type="button" className="btn bg-transparent">
          <ChatBubbleOvalLeftIcon className="svg-root" />
        </button>
      </div>
    </div>
  );
};

export default Tweet;
