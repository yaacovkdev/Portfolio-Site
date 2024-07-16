// src/hooks.server.js

import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
  if(event.url.pathname.startsWith('/home')) {
    throw redirect(302, "/");
  }
  
  const response = await resolve(event);
  return response;
}