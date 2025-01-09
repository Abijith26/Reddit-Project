import React from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { LuMail } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
export default function UserMenu() {
  return (
    <div className="flex items-center gap-6 ">
      <div className="hover:cursor-pointer">
        <MdOutlineNotificationsNone size={30} />
      </div>
      <div className="hover:cursor-pointer">
        <LuMail size={32} />
      </div>
      <div className="flex items-center gap-3">
        <div className="hover:cursor-pointer">
          <FaUserCircle size={30} />
        </div>
        <div className="hover:cursor-pointer">
          <FaChevronDown size={18} />
        </div>
      </div>
    </div>
  );
}
