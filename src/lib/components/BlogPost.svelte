<script>
  import BannerImage from '$lib/components/BannerImage.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import website from '$lib/config/website';

  export let post;

  const {
    featuredImage,
    featuredImageAlt,
    featuredImageSrc,
    featuredImageSrcset,
    postTitle: title,
    seoMetaDescription: metadescription,
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

<SEO article={true} {title} {metadescription} twitterImage={twitterImageObject} />
<BannerImage {...bannerImageProps} />
