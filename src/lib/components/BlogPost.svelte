<script>
  import ImgixClient from '@imgix/js-core';
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
  const { imgixDomain, imgixSecureToken } = website;

  const client = new ImgixClient({
    domain: imgixDomain,
    secureURLToken: imgixSecureToken,
  });

  const twitterImageObject = twitterImage
    ? {
        url: client.buildURL(twitterImage, { w: 800, h: 418 }),
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
