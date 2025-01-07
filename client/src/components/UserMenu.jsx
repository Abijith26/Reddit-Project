import React from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { LuMail } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
export default function UserMenu() {
  return (
    <div className="flex items-center gap-4">
      <MdOutlineNotificationsNone size={34} />
      <LuMail size={34} />
      <div className="flex items-center gap-3">
        <FaUserCircle size={34} />
        <FaChevronDown size={34} />
      </div>
    </div>
  );
}
