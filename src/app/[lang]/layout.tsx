import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';
import clsx from 'clsx';
import { sfProExpandedFont, sfProFont } from '@/config/fonts';
import Layout from '@/components/common/layout';
import { Playfair_Display } from 'next/font/google';

export const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});
export const metadata: Metadata = {
  title: 'e-commerce',
  description: 'Shopping online',
};

export async function generateStaticParams() {
  return languages.map((lng: any) => ({ lng }));
}

type Props = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default function RootLayout({ children, params: { lang } }: Props) {
  return (
    <html
      lang={lang}
      dir={dir(lang)}
      className={`${playfair_display.variable}`}
    >
      <body
        className={clsx(
          sfProFont.variable,
          sfProExpandedFont,
          'text-yellow-950 font-sf-pro',
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
