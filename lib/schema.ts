import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen';

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Article
 *
 *
 */
export interface Article extends SanityDocument {
  _type: 'article';

  /**
   * Title — `string`
   */
  title?: string;

  /**
   * Excerpt — `string`
   */
  excerpt?: string;

  /**
   * Content — `blockContent`
   */
  content?: BlockContent;

  /**
   * Date — `datetime`
   */
  date?: string;

  /**
   * Image — `articleImage`
   *
   * The highest resolution
   */
  image?: ArticleImage;

  /**
   * Slug — `slug`
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Cover Image — `image`
   */
  coverImage?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Authors — `array`
   *
   * Publish one or more authors and set a reference to them here.
   */
  authors?: Array<SanityKeyedReference<Author>>;
}

/**
 * author
 */
export interface Author extends SanityDocument {
  _type: 'author';

  /**
   * Name — `string`
   */
  name?: string;

  /**
   * Picture — `articleImage`
   */
  picture?: ArticleImage;

  /**
   * Slug — `slug`
   */
  slug?: { _type: 'slug'; current: string };
}

/**
 * Section
 */
export interface Section extends SanityDocument {
  _type: 'section';

  /**
   * Title — `string`
   */
  title?: string;

  /**
   * Slug — `slug`
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Related sections — `array`
   */
  relatedSections?: Array<SanityKeyedReference<Section>>;
}

export type ArticleImage = {
  _type: 'articleImage';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   */
  caption?: string;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
};

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: 'image';
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Documents = Article | Author | Section;