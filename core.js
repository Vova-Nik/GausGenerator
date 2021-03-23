
let range = 500;
let cols = Array(range).fill(0);
// let vals = [diap];


let gausGeneratorLeft = gausGeneratorL(range);
let gausGeneratorRight = gausGeneratorR(range);

let drawerLeft = iterationDraw(range);
iterDrawL = iterationDraw(range, drawPixell);
iterDrawR = iterationDraw(range, drawPixelr);

function core() {
    if (isOn) {
        let currentGaus = gausGeneratorLeft();
        iterDrawL(currentGaus);

        currentGaus = gausGeneratorRight();
        // console.log(currentGaus);
        iterDrawR(currentGaus);
    }
}

setInterval(core, 1);

let indicator = document.querySelector(".indicator")
let isOn = false;

function swOn() {
    isOn = true;
    indicator.setAttribute("style", "background-color: red;");
}

function swOff() {
    isOn = false;
    indicator.setAttribute("style", "background-color: green;");
}


