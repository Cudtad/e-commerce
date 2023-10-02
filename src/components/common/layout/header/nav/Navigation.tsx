'use client';

import useLang from '@/hooks/useLang';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';
import { useTranslationClient } from '@/i18n/client';

const navigations = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'feature',
    href: '/feature',
  },
  {
    title: 'pricing',
    href: '/pricing',
  },
  {
    title: 'dropdown',
    href: '/dropdown',
  },
];

export default function Navigation() {
  const lang = useLang();
  const pathname = usePathname();
  const { t } = useTranslationClient('navigation');

  return (
    <div>
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
  );
}
