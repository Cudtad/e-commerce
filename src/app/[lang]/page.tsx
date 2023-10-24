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
    <main className="">
      <HomePage />
    </main>
  );
}
