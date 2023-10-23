/* eslint-disable @next/next/no-img-element */
import {
  FacebookOutlined,
  HeartOutlined,
  InstagramOutlined,
  RedditOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import InputAnimation from '../../input/InputAnimation';
import ButtonCustom from '../../button';

export default function Footer() {
  return (
    <div className=" bg-black">
      <div className=" max-w-screen-xl mx-auto pt-[75px] pb-9">
        <div className="grid grid-cols-12">
          <div className="col-span-3 flex flex-col gap-6">
            <span className=" font-sf-pro-expanded text-base font-bold text-white">
              CATEGORIES
            </span>
            <div className="flex flex-col gap-3 text-gray-1">
              <Link href={'/en'}>Women</Link>
              <Link href={'/en'}>Man</Link>
              <Link href={'/en'}>Shoes</Link>
              <Link href={'/en'}>Watches</Link>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-6">
            <span className=" font-sf-pro-expanded text-base font-bold text-white">
              HELP
            </span>
            <div className="flex flex-col gap-3 text-gray-1">
              <Link href={'/en'}>Track Order</Link>
              <Link href={'/en'}>Returns</Link>
              <Link href={'/en'}>Shipping</Link>
              <Link href={'/en'}>FAQs</Link>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-6">
            <span className=" font-sf-pro-expanded text-base font-bold text-white">
              GET IN TOUCH
            </span>
            <span className="text-gray-1 text-[13px] font-normal">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </span>
            <div className="flex items-center gap-3 text-gray-1">
              <Link href={'/'}>
                <FacebookOutlined />
              </Link>
              <Link href={'/'}>
                <InstagramOutlined />
              </Link>
              <Link href={'/'}>
                <TwitterOutlined />
              </Link>
              <Link href={'/'}>
                <RedditOutlined />
              </Link>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-6 pl-4">
            <span className=" font-sf-pro-expanded text-base font-bold text-white">
              NEWSLETTER
            </span>
            <form>
              <InputAnimation />
              <ButtonCustom
                type="submit"
                types="primary"
                size="mb"
                className="mt-4 px-10 py-2 rounded-full"
              >
                Subcribe
              </ButtonCustom>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center pt-16 pb-10">
          <div className="flex items-center gap-1">
            <Link href={'/'}>
              <img
                src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png.webp"
                alt="paypal"
              />
            </Link>
            <Link href={'/'}>
              <img
                src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png.webp"
                alt="visa"
              />
            </Link>
            <Link href={'/'}>
              <img
                src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png.webp"
                alt="master-card"
              />
            </Link>
            <Link href={'/'}>
              <img
                src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png.webp"
                alt="icon-pay"
              />
            </Link>
            <Link href={'/'}>
              <img
                src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png.webp"
                alt="icon-pay"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 text-white">
          <span>
            Copyright ©2023 All rights reserved | This template is made with
          </span>
          <HeartOutlined />
          <span>
            by <b className="text-primary">Cudtad</b>
          </span>
        </div>
      </div>
    </div>
  );
}
