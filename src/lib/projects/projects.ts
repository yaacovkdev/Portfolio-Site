import preview_bouncy from "$lib/images/preview/preview_bouncy.jpg";
import preview_spinning from "$lib/images/preview/preview_spinning.jpg";
import preview_fourier from "$lib/images/preview/preview_fourier.jpg";
import preview_pool from "$lib/images/preview/preview_pool.png";
import preview_angel from "$lib/images/preview/preview_angel.png";
import preview_cube from "$lib/images/preview/preview_cube.png";
import preview_rocket from "$lib/images/preview/preview_rocket.png";
import polygon_preview from "$lib/images/preview/polygon_preview.png";
import quadrature_preview from "$lib/images/preview/quadrature_preview.png";

import rocket_description from "$lib/projects/rocket_description.html?raw";
import cube_description from "$lib/projects/cube_description.html?raw";
import pool_description from "$lib/projects/pool_description.html?raw";

export const ProjectsInfo: { [key: string]: { name: string; desc: string, mobileIcon: boolean, image: any } } = {
  rocket: {
    name: "Rocket",
    desc: rocket_description,
    mobileIcon: false,
    image: preview_rocket,
  },

  cube: {
    name: "Cube Game",
    desc: cube_description,
    mobileIcon: false,
    image: preview_cube
  },

  bouncy: {
    name: "BouncyJS",
    desc: null,
    mobileIcon: false,
    image: preview_bouncy
  },

  spinning: {
    name: "SpinningJS",
    desc: null,
    mobileIcon: false,
    image: preview_spinning
  },

  fourier: {
    name: "Fourier Series Transformation",
    desc: null,
    mobileIcon: true,
    image: preview_fourier
  },

  pool: {
    name: "Playing Pool With PI",
    desc: pool_description,
    mobileIcon: true,
    image: preview_pool
  },

  angel: {
    name: "Angel vs. Devil",
    desc: null,
    mobileIcon: false,
    image: preview_angel
  },

  polygon: {
    name: "Area of Polygon Fast Calculation",
    desc: null,
    mobileIcon: false,
    image: polygon_preview
  },

  quadrature: {
    name: "Quadrature Rules",
    desc: null,
    mobileIcon: false,
    image: quadrature_preview
  }
};