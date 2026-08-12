export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'health',
  name: 'Vitals',
  origin: 'https://health-blog.oriz.in',
  tagline: 'Evidence-minded notes on sleep, training, and staying steady',
  description:
    'Vitals — a calm, evidence-minded health blog on sleep, strength training, stress, and everyday wellbeing. Plain, specific, no hype.',
}
