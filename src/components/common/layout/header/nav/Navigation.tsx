'use client';

import useLang from '@/hooks/useLang';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';
import { useTranslationClient } from '@/i18n/client';
import Link from 'next/link';

const navigations = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'shop',
    href: '/shop',
  },
  {
    title: 'feature',
    href: '/feature',
  },
  {
    title: 'blog',
    href: '/blog',
  },
  {
    title: 'about',
    href: '/about',
  },
  {
    title: 'contact',
    href: '/contact',
  },
];

export default function Navigation() {
  const lang = useLang();
  const pathname = usePathname();
  const { t } = useTranslationClient('navigation');

  return (
    <div className="flex items-center gap-10 text-black-text">
      <Link href="/">
        <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp" />
      </Link>
      <div className="flex items-center gap-5">
        {navigations.map((nav) => {
          let localeHref = `${lang}${nav.href}`;
          if (localeHref.endsWith('/'))
            localeHref = localeHref.slice(0, localeHref.length - 1);
          const isActive =
            nav.href === pathname || pathname.startsWith(localeHref);
          return (
            <NavLink
              key={nav.title}
              href={localeHref}
              active={isActive}
              className="px-2 py-2"
            >
              {t(nav.title)}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
