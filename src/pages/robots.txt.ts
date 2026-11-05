import type { APIRoute } from 'astro';
import { site } from '../config';

export const GET: APIRoute = () => {
  const body = site.allowIndexing
    ? ['User-agent: *', 'Allow: /'].join('\n')
    : ['# Indexing disabled until the production launch is approved.', 'User-agent: *', 'Disallow: /'].join('\n');

  return new Response(body + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
