<script>
  export let article = false;
  export let author;
  export let twitterUsername;
  export let image;
  // export let metadescription;
  // export let pageTitle;
  export let timeToRead = 0;
  // export let url;

  /*
   * When there is an equivalent og tag present, Twitter takes that so these have benn commented out
   * below.  You can uncomment them to override the OpenGraph values.
   */
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  <!-- <meta name="twitter:title" content={pageTitle} /> -->
  <!-- <meta name="twitter:description" content={metadescription} /> -->
  <!-- <meta name="twitter:url" content={url} /> -->
  {#if image}
    <meta name="twitter:image" content={image.url} />
    <!-- <meta name="twitter:image:alt" content={image.alt} /> -->
  {/if}
  {#if twitterUsername}
    <meta name="twitter:creator" content={`@${twitterUsername}`} />
    <meta name="twitter:site" content={`@${twitterUsername}`} />
  {/if}
  <meta name="twitter:label1" content="Written by" />
  <meta name="twitter:data1" content={author} />
  {#if article && timeToRead > 0}
    <meta name="twitter:label2" content="Est. reading time" />
    <meta name="twitter:data2" content={timeToRead !== 1 ? `${timeToRead} minutes` : '1 minute'} />
  {/if}
</svelte:head>
