import { ProjectsInfo } from "$lib/projects/projects";

interface LoadParams {
  params: {
    project: string;
  };
}

interface LoadResult {
  url_name: string;
  name: string;
  description: string;
}

export const load = ({ params }: LoadParams): LoadResult => {
  return {
    url_name: params.project,
    name: ProjectsInfo[params.project].name,
    description: ProjectsInfo[params.project].desc,
  };
};
