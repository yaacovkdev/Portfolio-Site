import description_transcribesermons from "$lib/data/projects/descriptions/description_transcribesermons.html?raw";
import description_livespeechtospeech from "$lib/data/projects/descriptions/description_livespeechtospeech.html?raw";
import description_booleancalculator from "$lib/data/projects/descriptions/description_booleancalculator.html?raw";
export const MainProjectsInfo: { [key: string]: {
        name: string,
        desc: string,
        sourcelink?: string,
        livelink?: string,
        livelinktext?: string,
        sourcelinktext?: string,
        datastatus?: number
    } } = {
    livespeechtospeech: {
        name: "Live Speech-To-Speech Translator Prototype",
        desc: description_livespeechtospeech,
        sourcelink: "https:livespeechtospeechMainProjectsInfo//github.com/SlavicEvangelicalBaptistChurch/LiveSTSPrototype"
    },
    sermonstranscribe: {
      name: "Sermons Transcribe",
      desc: description_transcribesermons,
      livelink: "https://sermons.yaacovk.dev"
    },
    booleancalculator: {
        name: "Boolean Calculator",
        desc: description_booleancalculator,
        livelink: "/boolean",
        sourcelink: "https://github.com/yaacovkdev/Boolean-Calculator-Backend",
        sourcelinktext: "View Backend Source"
    }
};