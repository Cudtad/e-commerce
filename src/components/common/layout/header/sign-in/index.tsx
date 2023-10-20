'use client';

import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function SignIn() {
  const { lang } = useParams();

  return (
    <Link
      href={`/${lang}/sign-in`}
      className="flex justify-center items-center gap-2 cursor-pointer text-black-text font-semibold"
    >
      <UserOutlined />
      Sign in
    </Link>
  );
}
