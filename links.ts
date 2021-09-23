export type SiteLink = [string, string];
type FooterCategory = {
  name: string;
  categoryLinks: SiteLink[];
};

export const headerCategoryLinks: SiteLink[] = [
  ['World', '/news/world'],
  ['U.S.', '/news/'],
  ['Politics', '/news/politics'],
  ['N.Y.', '/news/ny'],
  ['Business', '/news/business'],
  ['Opinion', '/news/opinion'],
  ['Tech', '/news/tech'],
  ['Science', '/news/science'],
  ['Health', '/news/health'],
  ['Sports', '/news/sports'],
  ['Arts', '/news/arts'],
  ['Books', '/news/books'],
  ['Business', '/news/business'],
  ['Style', '/news/style'],
  ['Food', '/news/food'],
  ['Travel', '/news/travel'],
  ['T Magazine', '/news/t-magazine'],
  ['Real Estate', '/news/real-estate'],
  ['Video', '/news/video'],
];

export const footerNewsLinks: SiteLink[] = [
  ['Home Page', '/news/home-page'],
  ['World', '/news/world'],
  ['Coronavirus', '/news/coronavirus'],
  ['U.S.', '/news/us'],
  ['Politics', '/news/politics'],
  ['New York', '/news/new-york'],
  ['Business', '/news/business'],
  ['Tech', '/news/tech'],
  ['Science', '/news/science'],
  ['Sports', '/news/sports'],
  ['Olympics', '/news/olympics'],
  ['Wildfire Tracker', '/news/wildfire-tracker'],
  ['Obituaries', '/news/obituaries'],
  ["Today's Paper", '/news/todays-paper'],
  ['Corrections', '/news/corrections'],
  ['Trending', '/news/trending'],
];

export const footerOpinionLinks: SiteLink[] = [
  ["Today's Opinion", '/news/todays-opinion'],
  ['Columnists', '/news/columnists'],
  ['Editorials', '/news/editorials'],
  ['Guest Essays', '/news/guest-essays'],
  ['Letters', '/news/letters'],
  ['Sunday Review', '/news/sunday-review'],
  ['Video: Opinion', '/news/video-opinion'],
];

export const footerArtsLinks: SiteLink[] = [
  ["Today's Arts", '/news/todays-arts'],
  ['Art & Design', '/news/art-&-design'],
  ['Books', '/news/books'],
  ['Best Sellers Book List', '/news/best-sellers-book-list'],
  ['Dance', '/news/dance'],
  ['Movies', '/news/movies'],
  ['Music', '/news/music'],
  ['Pop Culture', '/news/pop-culture'],
  ['Television', '/news/television'],
  ['Theater', '/news/theater'],
  ['Video: Arts', '/news/video-arts'],
];

export const footerLivingLinks: SiteLink[] = [
  ['Automotive', '/news/automotive'],
  ['Games', '/news/games'],
  ['Education', '/news/education'],
  ['Food', '/news/food'],
  ['Health', '/news/health'],
  ['Jobs', '/news/jobs'],
  ['Love', '/news/love'],
  ['Magazine', '/news/magazine'],
  ['Parenting', '/news/parenting'],
  ['Real Estate', '/news/real-estate'],
  ['Style', '/news/style'],
  ['T Magazine', '/news/t-magazine'],
  ['Travel', '/news/travel'],
];

export const footerMoreLinks: SiteLink[] = [
  ['Reader Center', '/news/reader-center'],
  ['Wirecutter', '/news/wirecutter'],
  ['Cooking', '/news/cooking'],
  ['Live Events', '/news/live-events'],
  ['The Learning Network', '/news/the-learning-network'],
  ['Tools & Services', '/news/tools-&-services'],
  ['Podcasts', '/news/podcasts'],
  ['Multimedia', '/news/multimedia'],
  ['Photography', '/news/photography'],
  ['Video', '/news/video'],
  ['TimesMachine', '/news/timesmachine'],
  ['NYT Store', '/news/nyt-store'],
  ['Manage My Account', '/news/manage-my-account'],
  ['NYTLicensing', '/news/nytlicensing'],
];

export const footerSubscribeLinksTop: SiteLink[] = [
  ['Home Delivery', '/news/home-delivery'],
  ['Digital Subscriptions', '/news/digital-subscriptions'],
  ['Games', '/news/games'],
  ['Cooking', '/news/cooking'],
  ['Email Newsletters', '/news/email-newsletters'],
  ['Corporate Subscriptions', '/news/corporate-subscriptions'],
  ['Education Rate', '/news/education-rate'],
];
export const footerSubscribeLinksBottom: SiteLink[] = [
  ['Mobile Applications', '/news/mobile-applications'],
  ['Replica Edition', '/news/replica-edition'],
  ['International', '/news/international'],
  ['Canada', '/news/canada'],
];

export const footerSubscribeLinksAll: SiteLink[] = [
  ['Home Delivery', '/news/home-delivery'],
  ['Digital Subscriptions', '/news/digital-subscriptions'],
  ['Games', '/news/games'],
  ['Cooking', '/news/cooking'],
  ['Email Newsletters', '/news/email-newsletters'],
  ['Corporate Subscriptions', '/news/corporate-subscriptions'],
  ['Education Rate', '/news/education-rate'],
  ['Mobile Applications', '/news/mobile-applications'],
  ['Replica Edition', '/news/replica-edition'],
  ['International', '/news/international'],
  ['Canada', '/news/canada'],
];

export const footerBottomLinks: SiteLink[] = [
  ['NTCo', '/news/'],
  ['Contact Me', '/news/contact'],
  ['Accessibility', '/news/Accessibility'],
  ['advertise', '/news/advertise'],
  ['studio', '/news/studio'],
  ['privacy policy', '/news/privacy-policy'],
  ['terms of service', '/news/terms-of-service'],
  ['terms of sale', '/news/terms-of-sale'],
  ['site map', '/news/site-map'],
  ['canada', '/news/canada'],
  ['interntational', '/news/interntational'],
  ['help', '/news/help'],
  ['subscriptions', '/news/subscriptions'],
];

export const allFooterTopNavLinks: FooterCategory[] = [
  { name: 'News', categoryLinks: footerNewsLinks },
  { name: 'Opinion', categoryLinks: footerOpinionLinks },
  { name: 'Arts', categoryLinks: footerArtsLinks },
  { name: 'Living', categoryLinks: footerLivingLinks },
  { name: 'More', categoryLinks: footerMoreLinks },
  { name: 'Subscribe', categoryLinks: footerSubscribeLinksAll },
];
