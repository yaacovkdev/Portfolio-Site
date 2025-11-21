import type {RequestHandler} from "@sveltejs/kit";
import {fetchStatus} from "$lib/scripts/fetchStatus";

export const GET:RequestHandler = async (): Promise<any> => {

    const author_status = await fetchStatus();

    return new Response (JSON.stringify(author_status), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
