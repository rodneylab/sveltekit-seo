<script>
  import readingTime from 'reading-time';
  import BannerImage from '$lib/components/BannerImage.svelte';
  import SEO from '$lib/components/SEO/index.svelte';

  export let post;

  const timeToRead = Math.ceil(readingTime(post.body).minutes);
  const {
    featuredImage,
    featuredImageAlt,
    featuredImageSrc,
    featuredImageSrcset,
    postTitle: title,
    seoMetaDescription: metadescription,
    slug,
    twitterImage = null,
  } = post;

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
  {metadescription}
  {timeToRead}
  twitterImage={twitterImageObject}
/>
<BannerImage {...bannerImageProps} />
