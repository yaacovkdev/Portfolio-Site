import preview_bouncy from "$lib/images/preview/preview_bouncy.jpg";
import preview_spinning from "$lib/images/preview/preview_spinning.jpg";
import preview_fourier from "$lib/images/preview/preview_fourier.jpg";
import preview_pool from "$lib/images/preview/preview_pool.png";
import preview_cube from "$lib/images/preview/preview_cube.png";
import preview_rocket from "$lib/images/preview/preview_rocket.png";
import polygon_preview from "$lib/images/preview/polygon_preview.png";
import quadrature_preview from "$lib/images/preview/quadrature_preview.png";

import instruction_rocket from "$lib/projects/instructions/instructions_rocket.html?raw";
import description_rocket from "$lib/projects/descriptions/description_rocket.html?raw";

import instruction_cube from "$lib/projects/instructions/instructions_cube.html?raw";
import description_cube from "$lib/projects/descriptions/description_cube.html?raw";

import instruction_spinning from "$lib/projects/instructions/instructions_spinning.html?raw";
import description_spinning from "$lib/projects/descriptions/description_spinning.html?raw";

import instruction_bouncy from "$lib/projects/instructions/instructions_bouncy.html?raw";
import description_bouncy from "$lib/projects/descriptions/description_bouncy.html?raw";

import description_quadrature from "$lib/projects/descriptions/description_quadrature.html?raw";

import description_polygon from "$lib/projects/descriptions/description_polygon.html?raw";
import instructions_polygon from "$lib/projects/instructions/instructions_polygon.html?raw";

import description_pool from "$lib/projects/descriptions/description_pool.html?raw";
import instructions_pool from "$lib/projects/instructions/instructions_pool.html?raw";

import description_fourier from "$lib/projects/descriptions/description_fourier.html?raw";
import instrctions_fourier from "$lib/projects/instructions/instructions_fourier.html?raw";

export const ProjectsInfo: { [key: string]: { name: string; inst: string, desc: string, mobileIcon: boolean, image: any } } = {
  rocket: {
    name: "Rocket",
    inst: instruction_rocket,
    desc: description_rocket,
    mobileIcon: false,
    image: preview_rocket,
  },

  cube: {
    name: "Cube Game",
    inst: instruction_cube,
    desc: description_cube,
    mobileIcon: false,
    image: preview_cube
  },

  bouncy: {
    name: "BouncyJS",
    inst: instruction_bouncy,
    desc: description_bouncy,
    mobileIcon: false,
    image: preview_bouncy
  },

  spinning: {
    name: "SpinningJS",
    inst: instruction_spinning,
    desc: description_spinning,
    mobileIcon: false,
    image: preview_spinning
  },

  fourier: {
    name: "Fourier Series Transformation",
    inst: instrctions_fourier,
    desc: description_fourier,
    mobileIcon: true,
    image: preview_fourier
  },

  pool: {
    name: "Playing Pool With PI",
    inst: instructions_pool,
    desc: description_pool,
    mobileIcon: true,
    image: preview_pool
  },

  polygon: {
    name: "Area of Polygon Fast Calculation",
    inst: instructions_polygon,
    desc: description_polygon,
    mobileIcon: false,
    image: polygon_preview
  },

  quadrature: {
    name: "Quadrature Rules Comparison",
    inst: "",
    desc: description_quadrature,
    mobileIcon: false,
    image: quadrature_preview
  }
};