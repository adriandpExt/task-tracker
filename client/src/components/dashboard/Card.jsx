/* eslint-disable react/prop-types */

import moment from "moment";
import { Icon } from "@iconify/react";
import { emoji } from "./utils";

export const Card = ({ data, onView }) => {
  return (
    <div
      className="card w-60 bg-base-100 shadow-2xl hover:cursor-pointer"
      onClick={() => onView(data)}
    >
      <div className="flex p-3 w-full bg-blue-950">
        {emoji.map((item) => (
          <Icon key={item} icon={item} width={10} />
        ))}
      </div>

      <div className="card-title px-5 pt-4">
        <p className="text-sm font-mono">
          ✭✭✭ DATE:
          {moment(data?.calendarDate)
            .format("MMMM DD, YYYY")
            .toLocaleUpperCase()}
        </p>
      </div>

      <div className="card-body">
        <p className="whitespace-pre-wrap h-32 font-mono">{data?.todo}</p>
      </div>

      <hr />
      <div className="card-actions px-5 py-3">
        <p className="font-bold font-mono">
          STATUS: {data?.status?.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default Card;
