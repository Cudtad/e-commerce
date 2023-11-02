/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

export default function Thumbnail({
  imageSrc,
  title,
  price,
  className,
}: ThumbnailProps) {
  return (
    <div className={clsx(className)}>
      <img
        alt="Image Thumbnail"
        className=" object-cover aspect-auto"
        src={imageSrc}
      />
      <div>
        <h1 className="text-gray-5 text-sm">{title}</h1>
        <p className="text-sm text-gray-6">{price}</p>
      </div>
    </div>
  );
}
