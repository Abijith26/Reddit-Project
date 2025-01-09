import React from "react";
import SideBarOption from "../components/SideBarOption";

const favouritesData = [
  {
    name: "Virat",
    category: "user",
    unopened: 18,
  },
  {
    name: "Rohit",
    category: "user",
    unopened: 20,
  },
  {
    name: "Ashwin",
    category: "user",
    unopened: 10,
  },
  {
    name: "Rahul",
    category: "user",
    unopened: 5,
  },
];
const communityData = [
  {
    name: "English",
    category: "community",
    unopened: 18,
  },
  {
    name: "Tamil",
    category: "community",
    unopened: 20,
  },
  {
    name: "German",
    category: "community",
    unopened: 25,
  },
  {
    name: "French",
    category: "community",
    unopened: 15,
  },
];
const feedData = [
  {
    name: "PC",
    category: "feeds",
    unopened: 80,
  },
  {
    name: "Editing",
    category: "feeds",
    unopened: 50,
  },
  {
    name: "Photography",
    category: "feeds",
    unopened: 70,
  },
  {
    name: "Singing",
    category: "feeds",
    unopened: 40,
  },
];
export default function SideBar() {
  return (
    <div className="w-48 h-full p-2 bg-slate-300">
      <SideBarOption data={favouritesData} option="favourites" />
      <SideBarOption data={communityData} option="community" />
      <SideBarOption data={feedData} option="feeds" />
    </div>
  );
}
