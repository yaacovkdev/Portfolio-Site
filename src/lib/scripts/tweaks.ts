import { onMount } from "svelte";
import {writable, type Writable} from "svelte/store";

//a tool for system theme appearance
export let darkTheme: Writable<boolean> = writable(false);

//for later
export const automaticTheme = () => {
  onMount( () => {

    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change',({ matches }) => {
          if (matches) {
            darkTheme.set(true);
          } else {
            darkTheme.set(false);
          }
        });
  });
}