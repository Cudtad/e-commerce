import { Button } from 'antd';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonCustom({ children, className, onClick }: Props) {
  return (
    <Button className={clsx('text-base', className)} onClick={onClick}>
      {children}
    </Button>
  );
}
