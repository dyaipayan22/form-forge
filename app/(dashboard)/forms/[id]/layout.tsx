import { ReactNode } from 'react';

function FormLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col flex-grow mx-auto">{children}</div>
  );
}

export default FormLayout;
