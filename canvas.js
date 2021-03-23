var lcanvas = document.getElementById("lCanvas");
var lcanvasWidth = lcanvas.width;
var lcanvasHeight = lcanvas.height;
var lctx = lcanvas.getContext("2d");
var lcanvasData = lctx.getImageData(0, 0, lcanvasWidth, lcanvasHeight);

function drawPixell(x, y) {
    let index = (x + y * lcanvasWidth) * 4;
    lcanvasData.data[index + 0] = 0; // r
    lcanvasData.data[index + 1] = 0; //g
    lcanvasData.data[index + 2] = 255; //b
    lcanvasData.data[index + 3] = 255; //a
}

var rcanvas = document.getElementById("rCanvas");
var rcanvasWidth = rcanvas.width;
var rcanvasHeight = rcanvas.height;
var rctx = rcanvas.getContext("2d");
var rcanvasData = rctx.getImageData(0, 0, rcanvasWidth, rcanvasHeight);

function drawPixelr(x, y,) {
    var index = (x + y * rcanvasWidth) * 4;
    rcanvasData.data[index + 0] = 0; // r
    rcanvasData.data[index + 1] = 0; //g
    rcanvasData.data[index + 2] = 255; //b
    rcanvasData.data[index + 3] = 255; //a
}


function updateCanvas() {
    lctx.putImageData(lcanvasData, 0, 0);
    rctx.putImageData(rcanvasData, 0, 0);
}

