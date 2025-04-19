import { GraphicsProjectsInfo } from "$lib/projects/graphicsProjects";
import type { LoadResult } from "./$types";
import type { LoadParams } from "./$types";

export const load = ({ params }: LoadParams): LoadResult => {
  return {
    url_name: params.project,
    name: GraphicsProjectsInfo[params.project].name,
    instructions: GraphicsProjectsInfo[params.project].inst,
    description: GraphicsProjectsInfo[params.project].desc,
  };
};
