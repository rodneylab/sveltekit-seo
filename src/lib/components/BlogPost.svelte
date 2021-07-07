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

  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
    {
      name: title,
      slug,
    },
  ];
  const featuredImageObject = {
    url: featuredImage,
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: title,
  };
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
  {breadcrumbs}
  {slug}
  {title}
  {datePublished}
  {lastUpdated}
  {metadescription}
  {timeToRead}
  featuredImage={featuredImageObject}
  ogImage={ogImageObject}
  ogSquareImage={ogSquareImageObject}
  twitterImage={twitterImageObject}
/>
<BannerImage {...bannerImageProps} />
