// src/hooks.server.js
import {redirect } from '@sveltejs/kit';
import {fetchStatus} from "$lib/scripts/fetchStatus";

export const init: () => Promise<void> = async () => {
    await fetchStatus();
};

export async function handle({ event, resolve }) {
    if(event.url.pathname.startsWith('/home')) {
        throw redirect(302, "/");
    }

  const response = await resolve(event);
  return response;
}
