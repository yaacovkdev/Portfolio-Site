const Names = {
  bouncy: "BouncyJS",
  spinning: "SpinningJS",
  fourier: "Fourier Series Transformation API"
};
const load = ({ params }) => {
  return {
    url_name: params.project,
    name: Names[params.project]
  };
};
export {
  load
};
