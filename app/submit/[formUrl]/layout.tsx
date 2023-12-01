import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

function SubmitLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen min-w-full bg-background">
      <Navbar />
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
}

export default SubmitLayout;
