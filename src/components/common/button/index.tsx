import { Button } from 'antd';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
  types: 'primary' | 'secondary' | 'text';
  type: 'button' | 'submit' | 'reset' | undefined;
  size: 'sm' | 'mb' | 'xl';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonCustom({
  children,
  className,
  onClick,
  types,
  type,
  size,
}: Props) {
  return (
    <button
      type={type}
      className={clsx(
        {
          'bg-primary text-white hover:bg-white hover:text-primary': types === 'primary',
          'font-semibold text-lg': size === 'mb',
        },
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
