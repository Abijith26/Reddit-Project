import React from "react";
import { HiTrendingUp } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { MdGraphicEq } from "react-icons/md";

export default function Options() {
  return (
    <div className="flex items-center gap-4 text-bold text-xl ">
      {/* Home Icon */}
      <div className="flex items-center gap-2 hover:cursor-pointer">
        <HiOutlineHome />
        <span>Home</span>
      </div>

      {/* Popular Icon */}
      <div className="flex items-center gap-2 hover:cursor-pointer">
        <HiTrendingUp />
        <span>Popular</span>
      </div>

      {/* All Icon */}
      <div className="flex items-center gap-2 hover:cursor-pointer">
        <MdGraphicEq />
        <span>All</span>
      </div>
    </div>
  );
}
