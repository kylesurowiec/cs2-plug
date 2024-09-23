import type { ReactNode } from 'react';

import clsx from 'clsx';

type Props = Readonly<{
  children?: ReactNode;
  onClick?: () => void;
  variant?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
}>;

export function Button({ children, onClick, variant = 'primary' }: Props): ReactNode {
  const variantStyle = clsx('btn', {
    'btn-neutral': variant === 'neutral',
    'btn-primary': variant === 'primary',
    'btn-secondary': variant === 'secondary',
    'btn-accent': variant === 'accent',
    'btn-ghost': variant === 'ghost',
    'btn-link': variant === 'link',
  });

  return (
    <button className={variantStyle} onClick={onClick}>
      {children}
    </button>
  );
}
