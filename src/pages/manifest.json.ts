import type { APIRoute } from 'astro';
import { SITE } from 'astrowind:config';

export const prerender = true;

export const GET: APIRoute = async () => {
  const siteUrl = String(SITE.site).replace(/\/+$/, '');
  const manifest = {
    name: 'OLagoon',
    short_name: 'OLagoon',
    description:
      'OLagoon high-pressure drop-stitch inflatable pools. Family and plunge pools with sand-filter systems, manufacturer-direct pricing and fast shipping.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#008294',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    categories: ['lifestyle', 'outdoor', 'home', 'shopping'],
    lang: 'en',
    scope: '/',
    id: siteUrl,
    prefer_related_applications: false,
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};
