import { onMount } from "svelte";

const dynamicDarkBackground = () => {
    onMount(() => {
        // Select the element with id 'my-element' and add a class 'new-class' to it
        const svelteBody: HTMLElement = document.querySelector("#svelteBody");
        const background:number[] = [14,47,85];

        let r: number = background[0];
        let g: number = background[1];
        let b: number = background[2];

        svelteBody.style.backgroundImage = `linear-gradient(60deg, rgba(14,47,85,1) 0%, rgba(14,47,85,1) 50%, rgba(14,47,85,1) 100%)`;

        let t: number = 0;
        // 60hz update
        const colorInterval = setInterval(() => {
            const midcolor:string = `rgba(${r + f_sq(t, Math.PI / 60, 43, 14)},
                ${g + f(t,0.0174532925200,20)},
                ${b + f(t, -0.0401196102078,30)}, 1)`;

            svelteBody.style.backgroundImage = `
            linear-gradient(60deg, rgba(14,47,85,0.7), ${midcolor} ${33 + f(t, Math.PI/60, 30)}%, rgba(14,47,85,0.7)),
            linear-gradient(120deg, rgba(14,47,85,0.7), ${midcolor} ${50 + f(t, Math.PI/30, 45)}%, rgba(14,47,85,0.7)),
            linear-gradient(180deg, rgba(14,47,85,0.7), ${midcolor} ${77 + f(t, Math.PI/20, 20)}%, rgba(14,47,85,0.7))`;

            t++;

            if(t==31320) t = 0;
        }, 66);

        return(() => {
            clearInterval(colorInterval);
            svelteBody.style.backgroundImage = "";

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

export default dynamicDarkBackground;