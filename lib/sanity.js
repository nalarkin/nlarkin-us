import { createImageUrlBuilder } from "@sanity/image-url";

import { sanityConfig } from "./config.ts";

export const imageBuilder = createImageUrlBuilder(sanityConfig);

// Respect CMS crops/hotspots and negotiate the browser's preferred image format.
export const urlForImage = (source) =>
  imageBuilder.image(source).auto("format");
