import Image from 'next/image';

import { imageSizeRegex } from 'lib/utils';

import { urlForImage } from '../../lib/sanity';
import * as Schema from '../../lib/schema';

type Props = {
  image?: Schema.ArticleImage;
  classes?: string;
  blurURL?: string;
};

export const ImageBuilder = ({ image, blurURL = '', classes = '' }: Props) => {
  const imageRefWithSize = image?.asset._ref;
  if (imageRefWithSize === undefined) {
    return <div></div>;
  }
  const match = imageRefWithSize.match(imageSizeRegex);
  if (match === null) {
    console.error(
      `could not parse the image width and height from image ref: ${imageRefWithSize}`
    );
    return <div></div>;
  }
  const imageWidth = parseInt(match[1], 10);
  const imageHeight = parseInt(match[2], 10);
  if (!imageWidth || !imageHeight) {
    return <div></div>;
  }

  // const getUrlFromSanity = (image: Schema.ArticleImage | undefined) => {
  //   return imageUrl;
  // };

  const imageUrl = urlForImage(image).url();
  if (imageUrl === null) {
    console.error(
      `Image existed but was unable to pull from Sanity. Image object: ${JSON.stringify(
        image
      )}`
    );
    return <div></div>;
  }
  if (blurURL.length > 0) {
    <Image
      src={imageUrl}
      alt={image?.alt ?? ''}
      // layout="responsive"
      width={imageWidth}
      height={imageHeight}
      className={classes}
      quality={50}
      placeholder="blur"
      blurDataURL={blurURL}
    />;
  }

  return (
    <Image
      src={imageUrl}
      alt={image?.alt ?? ''}
      // layout="responsive"
      width={imageWidth}
      height={imageHeight}
      className={classes}
      quality={50}
    />
  );
};
