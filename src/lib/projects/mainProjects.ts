import description_feedmenow from "$lib/projects/descriptions/description_feedmenow.html?raw";
import description_riseabove from "$lib/projects/descriptions/description_riseabove.html?raw";

export const MainProjectsInfo: { [key: string]: {
        name: string,
        desc: string,
        image?: any,
        sourcelink?: string,
        livelink?: string,
        linktext?: string,
        datastatus?: number
    } } = {
    feedmenow: {
        name: "Feed Me Now",
        desc: description_feedmenow,
        sourcelink: "https://github.com/nicmart-dev/feedmenow",
        livelink: "https://fmn.yaacovk.dev",
        datastatus: 0,
    },
    riseabove: {
        name: "Rise Above",
        desc: description_riseabove,
        livelink: "https://rise.yaacovk.dev",
        datastatus: 0,
    }
};