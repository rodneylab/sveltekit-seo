<script>
  import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';
  import website from '$lib/config/website';
  import Twitter from './Twitter.svelte';

  const { author, siteLanguage, siteTitle, siteUrl } = website;

  export let article = false;
  export let metadescription;
  export let slug;
  export let timeToRead = 0;
  export let title;
  export let twitterImage = {
    url:
      'https://rodneylab-climate-starter.imgix.net/home-twitter.jpg?ixlib=js-3.2.0&w=800&h=418&s=1b08b7276d34486234a4e2c1ccb49a74',
    alt:
      'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera',
  };

  const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
  const twitterProps = {
    article,
    author,
    twitterUsername: import.meta.env.VITE_TWITTER_USERNAME,
    image: twitterImage,
    metadescription,
    pageTitle,
    timeToRead,
    url: `${siteUrl}/${slug}`,
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
