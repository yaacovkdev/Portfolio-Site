import { ProjectsInfo } from "$lib/projects/projects";

interface LoadParams {
  params: {
    project: string;
  };
}

interface LoadResult {
  url_name: string;
  name: string;
  instructions: string;
  description: string;
}

export const load = ({ params }: LoadParams): LoadResult => {
  return {
    url_name: params.project,
    name: ProjectsInfo[params.project].name,
    instructions: ProjectsInfo[params.project].inst,
    description: ProjectsInfo[params.project].desc,
  };
};
