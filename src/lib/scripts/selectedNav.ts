/*
The sole purpose of this script is to have graphics gold effect be consistent
*/
import {writable} from "svelte/store";

export let shineNav = writable<Number>(0);

const selectedNav = (n: number): void => {
    shineNav.set(n);
}

export default selectedNav;