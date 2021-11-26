import { getPlaiceholder } from 'plaiceholder';

import { PlaceholderImage } from 'lib/interfaces';
import { SanityImage } from 'lib/queries';
import { urlForImage } from 'lib/sanity';
import { ArticleImage } from 'lib/schema';

const isPlaceholderImage = (
  image: ArticleImage | PlaceholderImage | undefined
): image is PlaceholderImage => {
  if (image === undefined) return false;
  return !('_type' in image);
};

const convertCroppedImage = async (
  image: SanityImage,
  size: { width: number; height: number }
) => {
  const { width, height } = size;
  const imageUrl = urlForImage(image).width(width).height(height).url();
  const { base64, img } = await getPlaiceholder(imageUrl ?? '');
  const transformedImage: PlaceholderImage = {
    ...img,
    blurDataURL: base64,
    alt: image?.alt ?? '',
    placeholder: 'blur',
    width,
    height,
  };
  return transformedImage;
};

export const convertImage = async (
  image: SanityImage | PlaceholderImage,
  size?: { width: number; height: number }
) => {
  if (isPlaceholderImage(image)) return image;
  if (size !== undefined) {
    return convertCroppedImage(image, size);
  }
  const imageUrl = urlForImage(image).url();
  const { base64, img } = await getPlaiceholder(imageUrl ?? '');
  // console.log(`BASE64 Placeholder: ${base64}`);
  const transformedImage: PlaceholderImage = {
    ...img,
    blurDataURL: base64,
    alt: image?.alt ?? '',
    placeholder: 'blur',
  };
  return transformedImage;
};
