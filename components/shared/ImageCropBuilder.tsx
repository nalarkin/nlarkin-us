import Image from 'next/image';
import { urlForImage } from '../../lib/sanity';
import * as Schema from '../../lib/schema';

type Props = {
  image?: Schema.ArticleImage;
  width: number;
  height: number;
  classes?: string;
};

export const ImageCropBuilder = ({
  image,
  classes = '',
  width,
  height,
}: Props) => {
  const imageSizeRegex = /-([\d]{3,})x([\d]{3,})-/;
  const imageRefWithSize = image?.asset._ref;
  if (imageRefWithSize === undefined) {
    return <div></div>;
  }

  const imageUrl = urlForImage(image).width(width).height(height).url();
  if (imageUrl === null) {
    console.error(
      `Image existed but was unable to pull from Sanity. Image object: ${JSON.stringify(
        image
      )}`
    );
    return <div></div>;
  }

  return (
    <Image
      src={imageUrl}
      alt={image?.alt ?? ''}
      layout='responsive'
      width={width}
      height={height}
      className={classes}
    />
  );
};
