import HomePage from '@/components/homepage';
import { useTranslation } from '@/i18n';

type Props = {
  params: {
    lang: string;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const { t } = await useTranslation(lang, 'home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomePage />
    </main>
  );
}
