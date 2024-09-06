import { ReactNode } from 'react';

function BuilderLayout({ children }: { children: ReactNode }) {
  return <div className="w-full flex flex-grow mx-auto">{children}</div>;
}

export default BuilderLayout;
