<script>
  import website from '$lib/config/website';
  import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';
  import OpenGraph from './OpenGraph.svelte';
  import Twitter from './Twitter.svelte';

  const {
    author,
    facebookAuthorPage,
    facebookPage,
    ogLanguage,
    siteLanguage,
    siteTitle,
    siteUrl,
    twitterUsername,
  } = website;

  export let article = false;
  export let lastUpdated;
  export let datePublished;
  export let metadescription;
  export let slug;
  export let timeToRead = 0;
  export let title;

  const defaultAlt =
    'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';

  export let ogImage = {
    url: 'https://rodneylab-climate-starter.imgix.net/home-open-graph.jpg?ixlib=js-3.2.1&w=1200&h=627&s=81c4407df7d9782806b78d698dbcbc75',
    alt: defaultAlt,
  };
  export let ogSquareImage = {
    url: 'https://rodneylab-climate-starter.imgix.net/home-open-graph-square.jpg?ixlib=js-3.2.1&w=400&h=400&s=f98299427341f6f66d1c2460bad224e2',
    alt: defaultAlt,
  };
  export let twitterImage = {
    url: 'https://rodneylab-climate-starter.imgix.net/home-twitter.jpg?ixlib=js-3.2.0&w=800&h=418&s=1b08b7276d34486234a4e2c1ccb49a74',
    alt: defaultAlt,
  };

  const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
  const openGraphProps = {
    article,
    image: ogImage,
    squareImage: ogSquareImage,
    metadescription,
    ogLanguage,
    pageTitle,
    siteTitle,
    siteUrl,
    ...(article ? { datePublished, lastUpdated, facebookPage, facebookAuthorPage } : {}),
  };

  const twitterProps = {
    article,
    author,
    twitterUsername,
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
  <OpenGraph {...openGraphProps} />
</svelte:head>
