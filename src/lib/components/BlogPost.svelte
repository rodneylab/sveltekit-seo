<script>
  import BannerImage from '$lib/components/BannerImage.svelte';
  import SEO from '$lib/components/SEO/index.svelte';

  export let post;

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

<SEO article={true} {slug} {title} {metadescription} twitterImage={twitterImageObject} />
<BannerImage {...bannerImageProps} />
