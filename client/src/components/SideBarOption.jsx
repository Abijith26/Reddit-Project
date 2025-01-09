import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import { FcFeedback } from "react-icons/fc";

export default function SideBarOption({ data, option }) {
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="uppercase font-semibold">{option}</span>
          <span className="text-grey-500">All</span>
        </div>

        {/* Sample */}
        {data.map((item) => (
          <div className="flex justify-between items-center ">
            <div className="flex justify-between items-center gap-4 font-semibold">
              <div>
                {item.category === "user" ? (
                  <FaUserAlt size={20} />
                ) : item.category === "feeds" ? (
                  <FcFeedback size={20} />
                ) : (
                  <RiCommunityFill size={20} />
                )}
              </div>
              <span>{item.name}</span>
            </div>
            <span className="w-8 h-8 rounded-full bg-gray-400 p-1 font-bold text-center">
              {item.unopened}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
