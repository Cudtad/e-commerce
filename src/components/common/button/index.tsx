import { Button } from 'antd';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
  types: 'primary' | 'secondary' | 'text';
  type?: 'button' | 'submit' | 'reset' | undefined;
  size: 'sm' | 'mb' | 'xl';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};

export default function ButtonCustom({
  children,
  className,
  onClick,
  types,
  type,
  size,
  prefix,
  suffix,
}: Props) {
  return (
    <button
      type={type}
      className={clsx(
        'flex items-center',
        {
          'bg-primary text-white hover:bg-white hover:text-primary':
            types === 'primary',
          'bg-transparent border border-gray-4': types === 'text',
          'font-semibold text-lg': size === 'mb',
          'font-medium text-base': size === 'sm',
        },
        className,
      )}
      onClick={onClick}
    >
      {prefix}
      {children}
      {suffix}
    </button>
  );
}
