// @ts-nocheck

// import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import {
  createCurrentUserHook,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity';
import { sanityConfig } from './config';
import * as React from 'react';

export const imageBuilder = createImageUrlBuilder(sanityConfig);

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlForImage = (source) =>
  imageBuilder.image(source).auto('format').fit('max');
// export const urlForImage = (source: SanityImageSource) =>
//   imageBuilder.image(source).auto('format').fit('max');

// Set up the live preview subscription hook
export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig);

// create serializer to render text
// @ts-expect-error
const serializers = {
  types: {
    span: (props) => (
      <div className='w-48 bg-purple-500'>{props.node.span}</div>
    ),
    block: (props) => (
      <div className='flex flex-col max-w-prose bg-purple-500'>
        {props.children}
      </div>
    ),
  },
};

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...sanityConfig,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: { ...serializers },
});

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(sanityConfig);
