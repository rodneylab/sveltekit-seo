<script>
  import readingTime from 'reading-time';
  import BannerImage from '$lib/components/BannerImage.svelte';
  import SEO from '$lib/components/SEO/index.svelte';

  export let post;

  const timeToRead = Math.ceil(readingTime(post.body).minutes);
  const {
    datePublished,
    featuredImage,
    featuredImageAlt,
    featuredImageSrc,
    featuredImageSrcset,
    lastUpdated,
    ogImage,
    ogSquareImage,
    postTitle: title,
    seoMetaDescription: metadescription,
    slug,
    twitterImage = null,
  } = post;

  const ogImageObject = ogImage
    ? {
        url: ogImage,
        alt: featuredImageAlt,
      }
    : null;
  const ogSquareImageObject = ogSquareImage
    ? {
        url: ogSquareImage,
        alt: featuredImageAlt,
      }
    : null;
  const twitterImageObject = twitterImage
    ? {
        url: twitterImage,
        alt: featuredImageAlt,
      }
    : null;
  const bannerImageProps = {
    featuredImage,
    featuredImageAlt,
    featuredImageSrc,
    featuredImageSrcset,
  };
</script>

<SEO
  article={true}
  {slug}
  {title}
  {datePublished}
  {lastUpdated}
  {metadescription}
  {timeToRead}
  ogImage={ogImageObject}
  ogSquareImage={ogSquareImageObject}
  twitterImage={twitterImageObject}
/>
<BannerImage {...bannerImageProps} />
