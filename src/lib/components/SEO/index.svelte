<script>
  import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';
  import website from '$lib/config/website';
  import Twitter from './Twitter.svelte';

  const { author, siteLanguage, siteTitle } = website;

  export let metadescription;
  export let title;
  export let twitterImage = null;

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
