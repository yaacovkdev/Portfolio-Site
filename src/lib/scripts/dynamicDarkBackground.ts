import { onMount } from "svelte";

const background: number[] = [14,47,85];
let r: number = background[0];
let g: number = background[1];
let b: number = background[2];

const DELAY = 66;

const getTFromTime = (): number => {
    return Math.floor(Date.now() / DELAY) % 31320;
}

const genBackgroundImage = (t: number): string => {
    const midcolor:string = `rgba(${r + f_sq(t, Math.PI / 60 / 15, 43, 14)},
                ${g + f(t,0.0174532925200 / 15,20)},
                ${b + f(t, -0.0401196102078 / 15,25)}, 1)`;

    return `linear-gradient(60deg, rgba(255,215,0,0.7)  0%, ${midcolor} 0%),
            linear-gradient(120deg, ${midcolor} 0%, rgba(200,200,31,1) 100%),
            linear-gradient(180deg, rgba(14,47,85,0.7) 0%, ${midcolor} 0%)`;
}

const dynamicDarkBackground = () => {
    onMount(() => {
        // Select the element with id 'my-element' and add a class 'new-class' to it
        const mainHTML: HTMLElement = document.querySelector("#graphicsPageSection");

        const colorInterval = setInterval(() => {
            let t = getTFromTime();
            mainHTML.style.backgroundImage = genBackgroundImage(t);
        }, DELAY);

        return(() => {
            clearInterval(colorInterval);
            mainHTML.style.backgroundImage = "";
        });
    });
};

//adjusts theta that it's only in between 0 and 2*PI
const adjustTheta = (theta: number) => theta % (2 * Math.PI);

const adjustThetaDeg = (theta: number) => theta % 360;

//regular sin(x) function
const f = (x: number, b:number, a: number) => Math.sin(x * b) * a;

//sin^2 (x) function to oscillate low values
const f_sq =  (x: number, b:number, a: number, c: number) => Math.pow(Math.sin(x * b),2) * a + c;

export {
    dynamicDarkBackground,
    genBackgroundImage,
    getTFromTime
};