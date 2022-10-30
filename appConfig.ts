import { DOMAIN } from 'lib/constants';

export const appConfig = {
  site_name: "Nathan Larkin's Personal Site",
  title: 'Nextjs Starter',
  description:
    "This is Nathan Larkin's personal website which includes example projects.",
  locale: 'en',
};

export const SEO = {
  titleTemplate: `%s | ${DOMAIN}`,
  defaultTitle: appConfig.site_name,
  description: appConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `https://www.${DOMAIN}`,
    site_name: "Nathan Larkin's Personal Site",
  },
  twitter: {
    cardType: 'summary_large_image',
  },
};

/**
 * FONT FAMILY FOR SERIF
 * font-family: Georgia, ui-serif, Cambria, "Times New Roman", Times, serif;
 *
 */
