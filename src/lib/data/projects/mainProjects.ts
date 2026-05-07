import description_transcribesermons from "$lib/data/projects/descriptions/description_transcribesermons.html?raw";

export const MainProjectsInfo: { [key: string]: {
        name: string,
        desc: string,
        image?: any,
        sourcelink?: string,
        livelink?: string,
        linktext?: string,
        datastatus?: number
    } } = {
    sermonstranscribe: {
      name: "Sermons Transcribe",
      desc: description_transcribesermons,
      livelink: "https://sermons.yaacovk.dev",
    }
};