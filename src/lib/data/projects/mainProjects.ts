import description_transcribesermons from "$lib/data/projects/descriptions/description_transcribesermons.html?raw";
import description_livespeechtospeech from "$lib/data/projects/descriptions/description_livespeechtospeech.html?raw";
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
    },
    livespeechtospeech: {
        name: "Live Speech-To-Speech Translator Prototype",
        desc: description_livespeechtospeech,
        sourcelink: "https://github.com/SlavicEvangelicalBaptistChurch/LiveSTSPrototype"
    }
};