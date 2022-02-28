const facebookPageName = import.meta.env.VITE_FACEBOOK_PAGE;

const website = {
  author: 'Rodney Johnson',
  entity: 'Rodney Lab',
  ogLanguage: 'en_GB',
  siteLanguage: 'en-GB',
  siteTitle: 'SvelteKit SEO Demo Site',
  siteShortTitle: 'SvelteKit SEO', // used as SchemaOrg siteTitleAlt
  siteUrl: import.meta.env.VITE_SITE_URL,
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL,
  facebookAuthorPage: `https://www.facebook.com/${import.meta.env.VITE_FACEBOOK_AUTHOR_PAGE}`,
  facebookPage: `https://www.facebook.com/${facebookPageName}`,
  facebookPageName,
  githubPage: import.meta.env.VITE_GITHUB_PAGE,
  linkedinProfile: import.meta.env.VITE_LINKEDIN_PROFILE,
  telegramUsername: import.meta.env.VITE_TELEGRAM_USERNAME,
  tiktokUsername: import.meta.env.VITE_TIKTOK_USERNAME,
  twitterUsername: import.meta.env.VITE_TWITTER_USERNAME,
  twitterUserId: import.meta.env.VITE_TWITTER_ID,
  wireUsername: import.meta.env.VITE_WIRE_USERNAME,
};

export { website as default };
