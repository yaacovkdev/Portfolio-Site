import { ProjectsInfo } from "$lib/projects/projects";
import type { LoadResult } from "./$types";
import type { LoadParams } from "./$types";

export const load = ({ params }: LoadParams): LoadResult => {
  return {
    url_name: params.project,
    name: ProjectsInfo[params.project].name,
    instructions: ProjectsInfo[params.project].inst,
    description: ProjectsInfo[params.project].desc,
  };
};
