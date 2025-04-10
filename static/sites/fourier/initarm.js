let mainArm;

let initial_code = `/*In this field you can program in javascript anything you like and set mainArm\n vectors with any type of algorithms*/\n
//To speed up the drawing process ten times faster\n//setSpeed(10);\n
//first vector having length of 100 px and rotating at speed of 2/(2 PI) per frame\n
//starting at PI/2\nmainArm.pushA(100,2,Math.PI/2);\n
mainArm.push(10,30);`;
document.getElementById("codefield").value = initial_code;
let code_field = initial_code;

const sandboxFunction = (parsedJS) => {
    return new Function(`
    "use strict";
    const window = undefined;
    const document = undefined;
    const alert = undefined;
    const ActiveXObject = undefined;
    const XMLHttpRequest = undefined;
    const setTimeout = undefined;
    const setInterval = undefined;
    const clearTimeout = undefined;
    const clearInterval = undefined;
    const Function = undefined;
    
    mainArm = new VectorArm();

    // Execute the user code in a scope where \`window\` and \`document\` are nullified
    (function() {
        ${parsedJS};
    })();
    
`);
}

//change for now. Uncertain if it protects too much better.
sandboxFunction(code_field)();

document.getElementById("buttonfield").onclick = function () {
  code_field = document.getElementById("codefield").value;
  resetValues();
};

document.getElementById("buttonsave").onclick = function () {
  saveCanvas("Fourier", "png");
};

document.getElementById("buttonarm").onclick = function () {
  displayarm = !displayarm;
};
