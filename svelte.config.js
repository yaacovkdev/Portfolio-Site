import adapter from "@sveltejs/adapter-auto";
import { sveltePreprocess } from "svelte-preprocess";
import path, { dirname } from "path";

import { fileURLToPath } from "url";

const filePath = dirname(fileURLToPath(import.meta.url));

//make the path unix like as it crashes on DOS backslash path
const sassPath = path.join(filePath, "/src/lib/style/").replace(/\\/g, "/");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    postcss: true,
    scss: {
      prependData: `@import '${sassPath}_variables.scss';
        @import '${sassPath}_mixins.scss';
        @import '${sassPath}_breakpoints.scss';`,
    },
  }),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
};

export default config;
