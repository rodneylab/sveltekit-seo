<img src="./images/rodneylab-github-sveltekit-seo.png" alt="Rodney Lab sveltekit-seo Github banner">

<p align="center">
  <a aria-label="Open Rodney Lab site" href="https://rodneylab.com" rel="nofollow noopener noreferrer">
    <img alt="Rodney Lab logo" src="https://rodneylab.com/assets/icon.png" width="60" />
  </a>
</p>
<h1 align="center">
  SvelteKit SEO
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/fcc135a7-58dc-4945-a69c-236f7f6a4e07/deploy-status)](https://app.netlify.com/sites/inspiring-heyrovsky-49f468/deploys)

# sveltekit-seo

SvelteKit demo code for adding SEO support. The functionality is added principally by three components. Follow links to read more about using them:

- <a aria-label="Read Rodney Lab blog post on implementing Twitter SEO meta in Svelte Kit" href="https://rodneylab.com/sveltekit-seo/">Twitter</a>: `src/lib/components/SEO/Twitter.svelte`,
- <a aria-label="Read Rodney Lab blog post on implementing Twitter SEO meta in Svelte Kit" href="https://rodneylab.com/open-graph-seo-sveltekit/">OpenGraph</a>: `src/lib/components/SEO/OpenGraph.svelte`,
- <a aria-label="Read Rodney Lab blog post on implementing Schema dot org SEO markup in Svelte Kit" href="https://rodneylab.com/adding-schema-org-markup-to-sveltekit-site/">SchemaOrg</a>: `src/lib/components/SEO/SchemaOrg.svelte`.

See the [SvelteKit SEO blog post on the Rodney Lab site](https://rodneylab.com/sveltekit-seo/) for more on how to set this site up. There is a live demo at [sveltekit-seo.rodneylab.com](https://sveltekit-seo.rodneylab.com/).

Please drop questions into a comment at the bottom of one of the post pages. Here's the quick start:

## Creating your Own MDsveX Blog Site with SEO Components

If you're seeing this, you've probably already done this step. Congrats!

```bash
git clone https://github.com/rodneylab/sveltekit-seo.git my-new-mdsvex-blog
cd my-new-mdsvex-blog
pnpm install # or npm install
npm run dev
```

## Building

```bash
npm run build
```

> You can preview the built app with `pnpm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
