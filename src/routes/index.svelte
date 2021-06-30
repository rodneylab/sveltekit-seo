<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export const prerender = true;
  export async function load({ fetch }) {
    const url = `./index.json`;
    const response = await fetch(url);

    if (response.ok) {
      const { posts } = await response.json();
      return {
        props: { posts },
      };
    }

    return {};
  }
</script>

<script>
  import BlogRoll from '$lib/components/BlogRoll.svelte';
  import Card from '$lib/components/Card.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  export let posts;

  let title = 'Home';
  let metadescription =
    'SvelteKit MDsvex Blog Starter - starter code by Rodney Lab to help you get going on your next blog site';
  const featuredImageAlt =
    'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';
  const twitterImage = {
    url: 'https://rodneylab-climate-starter.imgix.net/home-twitter.jpg?ixlib=js-3.2.0&w=800&h=418&s=1b08b7276d34486234a4e2c1ccb49a74',
    alt: featuredImageAlt,
  };
</script>

<SEO {title} slug="" {metadescription} {featuredImageAlt} {twitterImage} />
<header>
  <h1>Climate &mdash; Sveltekit Starter</h1>
  <h2>SvelteKit MDsveX (Markdown for Svelte) Blog</h2>
</header>
<Card>
  <h2><span>About me</span></h2>
  <p>
    I live and breathe analogue photography. I show you my favourite analogue film cameras on this
    site. Hopefully if you are not into analogue photography yet, some of my enthusiasm will rub off
    onto you.
  </p>
</Card>
<BlogRoll {posts} />

<style lang="scss">
  header > h2 {
    font-size: $font-size-3;
  }
</style>
