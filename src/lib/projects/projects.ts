import preview_bouncy from "$lib/images/preview/preview_bouncy.jpg";
import preview_spinning from "$lib/images/preview/preview_spinning.jpg";
import preview_fourier from "$lib/images/preview/preview_fourier.jpg";

export const ProjectsInfo: { [key: string]: { name: string; desc: string, mobileIcon: boolean, image: any } } = {
  bouncy: {
    name: "BouncyJS",
    desc: "",
    mobileIcon: false,
    image: preview_bouncy
  },
  spinning: {
    name: "SpinningJS",
    desc: "",
    mobileIcon: false,
    image: preview_spinning
  },

  fourier: {
    name: "Fourier Series Transformation API",
    desc: "",
    mobileIcon: true,
    image: preview_fourier
  },
};