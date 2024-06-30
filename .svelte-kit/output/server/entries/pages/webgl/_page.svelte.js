import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "a.svelte-dk9iwc{color:#f1f1f1}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["\\r\\n\\r\\n<h1>Web Graphic Projects</h1>\\r\\n\\r\\n<a href=\\"/webgl/bouncy\\"><p>Bouncy Ball</p></a>\\r\\n<a href=\\"/webgl/spinning\\"><p>Spinning</p></a>\\r\\n<a href=\\"/webgl/fourier\\"><p>Fourier Series</p></a>\\r\\n\\r\\n<style lang=\\"scss\\">a {\\n  color: #f1f1f1;\\n}</style>\\r\\n"],"names":[],"mappings":"AAQmB,eAAE,CACnB,KAAK,CAAE,OACT"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-73jngo">Web Graphic Projects</h1> <a href="/webgl/bouncy" class="svelte-dk9iwc" data-svelte-h="svelte-121rp4p"><p>Bouncy Ball</p></a> <a href="/webgl/spinning" class="svelte-dk9iwc" data-svelte-h="svelte-1qs1cuk"><p>Spinning</p></a> <a href="/webgl/fourier" class="svelte-dk9iwc" data-svelte-h="svelte-dz1e0l"><p>Fourier Series</p></a>`;
});
export {
  Page as default
};
