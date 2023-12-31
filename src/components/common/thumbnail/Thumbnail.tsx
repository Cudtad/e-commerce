/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import ButtonCustom from '../button';
import { useTranslation } from '@/i18n/client';

export default function Thumbnail({
  imageSrc,
  title,
  price,
  className,
  lang,
}: ThumbnailProps) {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const { t } = useTranslation(lang, 'home');
  return (
    <div className={clsx(className)}>
      <div className="relative thumbnail-animation cursor-pointer overflow-hidden">
        <img
          alt="Image Thumbnail"
          className="object-cover aspect-auto transition-all duration-300 ease-in"
          src={imageSrc}
        />
        <ButtonCustom
          className="px-5 py-2 rounded-full absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[100%] shadow-md"
          types="secondary"
          size="sm"
        >
          {t('home:thumbnail:quick_view')}
        </ButtonCustom>
      </div>
      <div className="pt-3.5">
        <h1 className="text-gray-5 text-sm font-poppins pb-1.5">{title}</h1>
        <p className="text-sm text-gray-6 font-poppins">
          {USDollar.format(price)}
        </p>
      </div>
    </div>
  );
}
