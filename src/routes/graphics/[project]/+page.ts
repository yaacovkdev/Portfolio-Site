import { GraphicsProjectsInfo } from "$lib/data/projects/graphicsProjects";
import type {PageLoad} from "../../../../.svelte-kit/types/src/routes/graphics/[project]/$types";

export const load: PageLoad = ({ params }) => {
  return {
    url_name: params.project,
    name: GraphicsProjectsInfo[params.project].name,
    instructions: GraphicsProjectsInfo[params.project].inst,
    description: GraphicsProjectsInfo[params.project].desc,
  };
};
