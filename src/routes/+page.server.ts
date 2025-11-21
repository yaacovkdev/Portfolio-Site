import {author_status, type AuthorStatus} from "$lib/data/getStatus";

export const load = ({ params }) => {
    return {
        author_status: {
            status: author_status.status,
            message: author_status.message
        }
    }
}