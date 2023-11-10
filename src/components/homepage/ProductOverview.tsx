import ButtonCustom from '../common/button';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import Thumbnail from '../common/thumbnail/Thumbnail';
import { useTranslation } from '@/i18n/client';

const dataThumbnail: ThumbnailProps[] = [
  {
    imageSrc:
      'https://preview.colorlib.com/theme/cozastore/images/product-01.jpg.webp',
    title: 'Esprit Ruffle Shirt',
    price: 16.64,
  },
  {
    imageSrc:
      'https://preview.colorlib.com/theme/cozastore/images/product-01.jpg.webp',
    title: 'Esprit Ruffle Shirt',
    price: 16.64,
  },
  {
    imageSrc:
      'https://preview.colorlib.com/theme/cozastore/images/product-01.jpg.webp',
    title: 'Esprit Ruffle Shirt',
    price: 16.64,
  },
  {
    imageSrc:
      'https://preview.colorlib.com/theme/cozastore/images/product-01.jpg.webp',
    title: 'Esprit Ruffle Shirt',
    price: 16.64,
  },
  {
    imageSrc:
      'https://preview.colorlib.com/theme/cozastore/images/product-01.jpg.webp',
    title: 'Esprit Ruffle Shirt',
    price: 16.64,
  },
  {
    imageSrc:
      'https://preview.colorlib.com/theme/cozastore/images/product-01.jpg.webp',
    title: 'Esprit Ruffle Shirt',
    price: 16.64,
  },
];

type Props = {
  lang: string;
};

export default function ProductOverview({ lang }: Props) {
  const { t } = useTranslation(lang, 'home');

  return (
    <div className=" pt-6">
      <h1 className=" uppercase text-3xl font-sf-pro-expanded font-extrabold pb-2.5">
        Product overview
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-base font-medium text-gray-3">
          <div>All Product</div>
          <div>Women</div>
          <div>Men</div>
          <div>Bag</div>
          <div>Shoes</div>
          <div>Watches</div>
        </div>
        <div className="flex items-center gap-2">
          <ButtonCustom
            size="sm"
            types="text"
            prefix={<FilterOutlined />}
            className="gap-2 px-4 py-2"
          >
            Filter
          </ButtonCustom>
          <ButtonCustom
            size="sm"
            types="text"
            prefix={<SearchOutlined />}
            className="gap-2 px-4 py-2"
          >
            Search
          </ButtonCustom>
        </div>
      </div>
      <div className="pt-14 grid grid-cols-4 gap-x-4 gap-y-8">
        {dataThumbnail.map((item: ThumbnailProps) => (
          <Thumbnail
            imageSrc={item.imageSrc}
            title={item.title}
            price={item.price}
            className="col-span-1"
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}
