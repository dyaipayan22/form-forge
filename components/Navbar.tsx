import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-border px-4 py-4">
      <Logo />
      <div className="flex gap-4 items-center">
        <ThemeSwitcher />
        <UserButton />
      </div>
    </nav>
  );
}

export default Navbar;
