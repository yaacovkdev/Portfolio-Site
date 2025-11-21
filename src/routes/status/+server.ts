import {author_status} from "$lib/data/getStatus";
import type {RequestHandler} from "@sveltejs/kit";
import {fetchStatus} from "$lib/scripts/fetchStatus";
let timeout = null;
let isWaiting = false;
export const GET:RequestHandler = async (): Promise<any> => {
    if(!isWaiting) {
        isWaiting = true;
        timeout = setInterval(() => {
            isWaiting = false;
            clearTimeout(timeout);
        }, 300000);
        await fetchStatus();
    }

    return new Response (JSON.stringify(author_status), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
