import {STATUS_SERVER_API_KEY} from "$env/static/private";
import axios from "axios";
import {author_status} from "$lib/data/getStatus";

const CHARACTER_LIMIT = 30;

export const fetchStatus = async () => {
    try {
        const authHeader = { 'Authorization': `Bearer ${STATUS_SERVER_API_KEY}` }
        const response: any = await axios.get("https://kfcloud.yaacovk.dev/status", { 'headers': authHeader });
        author_status.status = response.data.status;

        if(response.data.status !== "UNAVAILABLE")
            author_status.message = response.data.message.length > CHARACTER_LIMIT ? `${response.data.message.substring(0, CHARACTER_LIMIT).trim()}...` : response.data.message;

    } catch(error) {
        console.error(error);
    }
}