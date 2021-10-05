// @ts-nocheck

// import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import {
  createCurrentUserHook,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from "next-sanity";
// import * as React from "react";
// import { useNextSanityImage } from "next-sanity-image"; // import type * as Schema from './schema';
// import Image from "next/image";
import { sanityConfig } from "./config.ts";

// export const SanityImage = ({ image }) => {
//   const imageProps = useNextSanityImage(sanityConfig, image);

//   return (
//     <Image
//       {...imageProps}
//       layout='responsive'
//       sizes='(max-width: 800px) 100vw, 800px'
//       alt={image.alt}
//     />
//   );
// };

export const imageBuilder = createImageUrlBuilder(sanityConfig);

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 * */
export const urlForImage = (source) =>
  imageBuilder.image(source).auto("format");

// export const urlForImage = (source: SanityImageSource) =>
//   imageBuilder.image(source).auto('format').fit('max');

// Set up the live preview subscription hook
export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig);

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...sanityConfig,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  // serializers: { ...serializers },
  // serializers: toPlainText,
});

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(sanityConfig);
