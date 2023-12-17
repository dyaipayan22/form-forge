import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-border px-4 py-2">
      <Link href={'/'}>
        <Image
          src={'/FormForge.png'}
          height={80}
          width={80}
          alt="Logo"
          className="w-36"
        />
      </Link>
      <div className="flex gap-4 items-center">
        <ThemeSwitcher />
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </nav>
  );
}

export default Navbar;
