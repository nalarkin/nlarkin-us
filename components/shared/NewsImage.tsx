import Image, { ImageLoaderProps, ImageProps } from 'next/image';

/** Fetch responsive variants directly from Sanity instead of optimizing originals twice. */
export const sanityImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  const url = new URL(src);
  const sourceWidth = Number(url.searchParams.get('w'));
  const sourceHeight = Number(url.searchParams.get('h'));

  // Preserve the aspect ratio of images cropped during static generation.
  if (sourceWidth > 0 && sourceHeight > 0) {
    url.searchParams.set(
      'h',
      String(Math.round((width * sourceHeight) / sourceWidth))
    );
  }
  url.searchParams.set('w', String(width));
  url.searchParams.set('q', String(quality ?? 75));
  url.searchParams.set('auto', 'format');
  if (!url.searchParams.has('fit')) {
    url.searchParams.set('fit', sourceHeight > 0 ? 'crop' : 'max');
  }
  return url.toString();
};

const NewsImage = ({
  sizes = '(max-width: 768px) 100vw, 800px',
  ...props
}: ImageProps) => {
  const sanitySource =
    typeof props.src === 'string' &&
    props.src.startsWith('https://cdn.sanity.io/images/');

  return (
    <Image
      {...props}
      alt={props.alt}
      sizes={sizes}
      loader={sanitySource ? sanityImageLoader : undefined}
    />
  );
};

export default NewsImage;
