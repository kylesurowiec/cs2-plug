import type { ReactNode } from 'react';

type Props = Readonly<{
  children: ReactNode;
}>;

export function Sidebar({ children }: Props): ReactNode {
  return (
    <div className="drawer lg:drawer-open">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-base-100">
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="sidebar" aria-label="close sidebar" className="drawer-overlay" />
        <ul className="menu min-h-full w-80 bg-base-300 p-4 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
