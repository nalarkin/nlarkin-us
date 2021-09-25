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
// import type * as Schema from './schema';

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

function toPlainText(blocks = []) {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return '';
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map((child) => child.text).join('');
      })
      // join the paragraphs leaving split by two linebreaks
      .join('\n\n')
  );
}

// create serializer to render text
// @ts-expect-error
// const serializers = {
//   types: {
//     span: (props) => (
//       <div className='w-48 bg-purple-500'>{props.node.span}</div>
//     ),
//     // block: (props) => (
//     //   <div className='w-10 bg-purple-500 text-xs'>{props.children}</div>
//     // ),
//     block: (props) => toPlainText,
//     blockQuote: (props) => (
//       <div className='w-10 bg-blue-600 text-xs'>{props.children}</div>
//     ),
//   },
// };

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
