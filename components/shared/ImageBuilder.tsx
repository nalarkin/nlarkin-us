import Image from './NewsImage';

import { PlaceholderImage } from 'lib/interfaces';
import { imageSizeRegex } from 'lib/utils';

import { urlForImage } from '../../lib/sanity';
import * as Schema from '../../lib/schema';

type Props = {
  image?: Schema.ArticleImage | PlaceholderImage;
  classes?: string;
  blurURL?: string;
  sizes?: string;
};

const isPlaceholderImage = (
  image: Schema.ArticleImage | PlaceholderImage
): image is PlaceholderImage => {
  return !('_type' in image);
};

export const ImageBuilder = ({
  image,
  blurURL = '',
  classes = '',
  sizes,
}: Props) => {
  if (image === undefined) return null;
  if (isPlaceholderImage(image)) {
    return (
      <Image
        {...image}
        sizes={sizes}
        alt={image.alt}
        className={classes}
        style={{ maxWidth: '100%', height: 'auto' }}
        quality={50}
        blurDataURL={blurURL || image.blurDataURL}
      />
    );
  }
  const imageRefWithSize = image?.asset?._ref;
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
    return (
      <Image
        src={imageUrl}
        sizes={sizes}
        alt={image?.alt ?? ''}
        style={{ maxWidth: '100%', height: 'auto' }}
        width={imageWidth}
        height={imageHeight}
        className={classes}
        quality={50}
        placeholder="blur"
        blurDataURL={blurURL}
      />
    );
  }

  return (
    <Image
      src={imageUrl}
      sizes={sizes}
      alt={image?.alt ?? ''}
      style={{ maxWidth: '100%', height: 'auto' }}
      width={imageWidth}
      height={imageHeight}
      className={classes}
      quality={50}
    />
  );
};
