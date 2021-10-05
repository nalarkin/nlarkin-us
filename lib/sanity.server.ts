/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient } from 'next-sanity';

import { sanityConfig } from './config';

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(sanityConfig);
// export const sanityClient = createClient<Schema.Article>(sanityConfig);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (preview: boolean) =>
  preview ? previewClient : sanityClient;
