export const appConfig = {
  site_name: "Nathan Larkin's personal site",
  title: 'Nextjs Starter',
  description:
    "This is Nathan Larkin's personal website which includes example projects and resume information.",
  locale: 'en',
};

export const SEO = {
  titleTemplate: '%s | nlarkin.us',
  defaultTitle: appConfig.site_name,
  description: appConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.nlarkin.us',
    site_name: "Nathan Larkin's personal site",
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
