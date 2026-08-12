/**
 * Rich blog-specific config used by the blog/* nested routes (post pages,
 * RSS feed, JSON-LD, Giscus comments).
 *
 * Slim cross-family descriptor lives in ./siteConfig.ts; the two files exist
 * because oriz-ui's shared components want the slim shape, while the blog's
 * own listing pages need author / giscus / social details.
 */
export interface BlogConfig {
  title: string
  description: string
  url: string
  defaultLocale: string
  author: {
    name: string
    url: string
    email: string
  }
  social: {
    github: string
    twitter: string
    linkedin: string
    email: string
  }
  giscus: {
    repo: `${string}/${string}`
    repoId: string
    category: string
    categoryId: string
    mapping: 'pathname' | 'url' | 'title' | 'og:title'
    reactionsEnabled: boolean
    inputPosition: 'top' | 'bottom'
  }
}

const env = (key: string, fallback = ''): string => {
  // Astro inlines PUBLIC_* env vars at build time.
  return (import.meta.env[key] as string | undefined) ?? fallback
}

export const SITE_CONFIG: BlogConfig = {
  title: 'Vitals — health, measured',
  description:
    'A calm, evidence-minded health blog on sleep, strength training, stress, and everyday wellbeing — by Chirag Singhal. Plain, specific, no hype.',
  url: 'https://health-blog.oriz.in',
  defaultLocale: 'en',
  author: {
    name: 'Chirag Singhal',
    url: 'https://oriz.in/about/',
    email: 'whyiswhen@gmail.com',
  },
  social: {
    github: 'chirag127',
    twitter: 'chirag127',
    linkedin: 'chirag127',
    email: 'whyiswhen@gmail.com',
  },
  giscus: {
    repo: env('PUBLIC_GISCUS_REPO', 'chirag127/oriz-blog-health') as `${string}/${string}`,
    repoId: env('PUBLIC_GISCUS_REPO_ID'),
    category: env('PUBLIC_GISCUS_CATEGORY', 'General'),
    categoryId: env('PUBLIC_GISCUS_CATEGORY_ID'),
    mapping: 'pathname',
    reactionsEnabled: true,
    inputPosition: 'bottom',
  },
}
