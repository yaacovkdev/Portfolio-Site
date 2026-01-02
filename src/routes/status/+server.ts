import type {RequestHandler} from "@sveltejs/kit";
import {fetchStatus} from "$lib/scripts/fetchStatus";

export const GET:RequestHandler = async (): Promise<any> => {

    const author = await fetchStatus();

    return new Response (JSON.stringify(author), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
