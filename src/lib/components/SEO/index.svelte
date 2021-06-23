<script>
  import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';
  import website from '$lib/config/website';
  import Twitter from './Twitter.svelte';

  const { author, siteLanguage, siteTitle } = website;

  export let metadescription;
  export let title;
  export let twitterImage = {
    url:
      'https://rodneylab-climate-starter.imgix.net/home-twitter.jpg?ixlib=js-3.2.0&w=800&h=418&s=1b08b7276d34486234a4e2c1ccb49a74',
    alt:
      'SvelteKit MDsvex Blog Starter - starter code by Rodney Lab to help you get going on your next blog site',
  };

  console.log('Twitter image: ', twitterImage);
  const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
  const twitterProps = {
    author,
    twitterUsername: import.meta.env.VITE_TWITTER_USERNAME,
    image: twitterImage,
    metadescription,
    pageTitle,
  };
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={metadescription} />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
  <html lang={siteLanguage} />
  <Twitter {...twitterProps} />
</svelte:head>
