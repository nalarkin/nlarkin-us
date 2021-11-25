import { getPlaiceholder } from 'plaiceholder';

import { PlaceholderImage } from 'lib/interfaces';
import { SanityImage } from 'lib/queries';
import { urlForImage } from 'lib/sanity';

export const convertImage = async (image: SanityImage) => {
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
