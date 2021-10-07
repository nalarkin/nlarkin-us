export type SiteLink = [string, string];
export type FooterCategory = {
  name: string;
  categoryLinks: SiteLink[];
};

export const headerCategoryLinks: Array<SiteLink> = [
  ['World', '/news/sections/world'],
  ['U.S.', '/news/sections/u-s'],
  ['Politics', '/news/sections/u-s-politics'],
  ['N.Y.', '/news/sections/n-y'],
  ['Business', '/news/sections/business'],
  ['Opinion', '/news/sections/opinion'],
  ['Tech', '/news/sections/tech'],
  ['Science', '/news/sections/science'],
  ['Health', '/news/sections/health'],
  ['Sports', '/news/sections/sports'],
  ['Arts', '/news/sections/arts'],
  ['Books', '/news/sections/books'],
  ['Style', '/news/sections/style'],
  ['Food', '/news/sections/food'],
  ['Travel', '/news/sections/travel'],
  ['T Magazine', '/news/sections/t-magazine'],
  ['Real Estate', '/news/sections/real-estate'],
  ['Video', '/news/sections/video'],
];

export const footerNewsLinks: SiteLink[] = [
  ['Home Page', '/news/'],
  ['World', '/news/sections/world'],
  ['Coronavirus', '/news/sections/coronavirus'],
  ['U.S.', '/news/sections/u-s'],
  ['Politics', '/news/sections/u-s-politics'],
  ['New York', '/news/sections/n-y'],
  ['Business', '/news/sections/business'],
  ['Tech', '/news/sections/tech'],
  ['Science', '/news/sections/science'],
  ['Sports', '/news/sections/sports'],
  ['Olympics', '/news/sections/olympics'],
  ['Wildfire Tracker', '/news/sections/wildfire-tracker'],
  ['Obituaries', '/news/sections/obituaries'],
  ["Today's Paper", '/news/sections/todays-paper'],
  ['Corrections', '/news/sections/corrections'],
  ['Trending', '/news/sections/trending'],
];

export const footerOpinionLinks: SiteLink[] = [
  ["Today's Opinion", '/news/sections/todays-opinion'],
  ['Columnists', '/news/sections/columnists'],
  ['Editorials', '/news/sections/editorials'],
  ['Guest Essays', '/news/sections/guest-essays'],
  ['Letters', '/news/sections/letters'],
  ['Sunday Review', '/news/sections/sunday-review'],
  ['Video: Opinion', '/news/sections/video-opinion'],
];

export const footerArtsLinks: SiteLink[] = [
  ["Today's Arts", '/news/sections/todays-arts'],
  ['Art & Design', '/news/sections/art-&-design'],
  ['Books', '/news/sections/books'],
  ['Best Sellers Book List', '/news/sections/best-sellers-book-list'],
  ['Dance', '/news/sections/dance'],
  ['Movies', '/news/sections/movies'],
  ['Music', '/news/sections/music'],
  ['Pop Culture', '/news/sections/pop-culture'],
  ['Television', '/news/sections/television'],
  ['Theater', '/news/sections/theater'],
  ['Video: Arts', '/news/sections/video-arts'],
];

export const footerLivingLinks: SiteLink[] = [
  ['Automotive', '/news/sections/automotive'],
  ['Games', '/news/sections/games'],
  ['Education', '/news/sections/education'],
  ['Food', '/news/sections/food'],
  ['Health', '/news/sections/health'],
  ['Jobs', '/news/sections/jobs'],
  ['Love', '/news/sections/love'],
  ['Magazine', '/news/sections/magazine'],
  ['Parenting', '/news/sections/parenting'],
  ['Real Estate', '/news/sections/real-estate'],
  ['Style', '/news/sections/style'],
  ['T Magazine', '/news/sections/t-magazine'],
  ['Travel', '/news/sections/travel'],
];

export const footerMoreLinks: SiteLink[] = [
  ['Reader Center', '/news/sections/reader-center'],
  ['Wirecutter', '/news/sections/wirecutter'],
  ['Cooking', '/news/sections/cooking'],
  ['Live Events', '/news/sections/live-events'],
  ['The Learning Network', '/news/sections/the-learning-network'],
  ['Tools & Services', '/news/sections/tools-&-services'],
  ['Podcasts', '/news/sections/podcasts'],
  ['Multimedia', '/news/sections/multimedia'],
  ['Photography', '/news/sections/photography'],
  ['Video', '/news/sections/video'],
  ['TimesMachine', '/news/sections/timesmachine'],
  ['NYT Store', '/news/sections/nyt-store'],
  ['Manage My Account', '/news/sections/manage-my-account'],
  ['NYTLicensing', '/news/sections/nytlicensing'],
];

export const footerSubscribeLinksTop: SiteLink[] = [
  ['Home Delivery', '/news/sections/home-delivery'],
  ['Digital Subscriptions', '/news/sections/digital-subscriptions'],
  ['Games', '/news/sections/games'],
  ['Cooking', '/news/sections/cooking'],
  ['Email Newsletters', '/news/sections/email-newsletters'],
  ['Corporate Subscriptions', '/news/sections/corporate-subscriptions'],
  ['Education Rate', '/news/sections/education-rate'],
];
export const footerSubscribeLinksBottom: SiteLink[] = [
  ['Mobile Applications', '/news/sections/mobile-applications'],
  ['Replica Edition', '/news/sections/replica-edition'],
  ['International', '/news/sections/international'],
  ['Canada', '/news/sections/canada'],
];

export const footerSubscribeLinksAll: SiteLink[] = [
  ['Home Delivery', '/news/sections/home-delivery'],
  ['Digital Subscriptions', '/news/sections/digital-subscriptions'],
  ['Games', '/news/sections/games'],
  ['Cooking', '/news/sections/cooking'],
  ['Email Newsletters', '/news/sections/email-newsletters'],
  ['Corporate Subscriptions', '/news/sections/corporate-subscriptions'],
  ['Education Rate', '/news/sections/education-rate'],
  ['Mobile Applications', '/news/sections/mobile-applications'],
  ['Replica Edition', '/news/sections/replica-edition'],
  ['International', '/news/sections/international'],
  ['Canada', '/news/sections/canada'],
];

export const footerBottomLinks: SiteLink[] = [
  ['NTCo', '/news/sections/'],
  ['Contact Me', '/news/sections/contact'],
  ['Accessibility', '/news/sections/Accessibility'],
  ['advertise', '/news/sections/advertise'],
  ['studio', '/news/sections/studio'],
  ['privacy policy', '/news/sections/privacy-policy'],
  ['terms of service', '/news/sections/terms-of-service'],
  ['terms of sale', '/news/sections/terms-of-sale'],
  ['site map', '/news/sections/site-map'],
  ['canada', '/news/sections/canada'],
  ['interntational', '/news/sections/interntational'],
  ['help', '/news/sections/help'],
  ['subscriptions', '/news/sections/subscriptions'],
];

export const allFooterTopNavLinks: FooterCategory[] = [
  { name: 'News', categoryLinks: footerNewsLinks },
  { name: 'Opinion', categoryLinks: footerOpinionLinks },
  { name: 'Arts', categoryLinks: footerArtsLinks },
  { name: 'Living', categoryLinks: footerLivingLinks },
  { name: 'More', categoryLinks: footerMoreLinks },
  { name: 'Subscribe', categoryLinks: footerSubscribeLinksAll },
];
