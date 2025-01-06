import React from "react";
import Logo from "../components/Logo";
import Options from "../components/Options";

export default function NavBar() {
  return (
    <div className="flex gap-4 items-center">
      <Logo />
      <Options />
    </div>
  );
}
