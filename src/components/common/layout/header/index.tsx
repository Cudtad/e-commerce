import Link from 'next/link';

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

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      {navigations.map((nav) => {
        return (
          <Link href={nav.href} key={nav.title}>
            {nav.title}
          </Link>
        );
      })}
    </div>
  );
}
