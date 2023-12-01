import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { UserButton } from '@clerk/nextjs';

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-border px-4 py-2">
      FormForge
      <div className="flex gap-4 items-center">
        <ThemeSwitcher />
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </nav>
  );
}

export default Navbar;
