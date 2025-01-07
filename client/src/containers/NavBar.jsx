import React from "react";
import Logo from "../components/Logo";
import Options from "../components/Options";
import SearchField from "../components/SearchField";
import UserMenu from "../components/UserMenu";

export default function NavBar() {
  return (
    <div className="flex gap-4 items-center px-2">
      <Logo />
      <Options />
      <SearchField />
      <UserMenu />
    </div>
  );
}
