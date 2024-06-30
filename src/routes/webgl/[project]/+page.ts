const Names: { [key: string]: string } = {
  bouncy: "BouncyJS",
  spinning: "SpinningJS",
  fourier: "Fourier Series Transformation API",
};

interface LoadParams {
  params: {
    project: string;
  };
}

interface LoadResult {
  url_name: string;
  name: string;
}

export const load = ({ params }: LoadParams): LoadResult => {
  return {
    url_name: params.project,
    name: Names[params.project],
  };
};
