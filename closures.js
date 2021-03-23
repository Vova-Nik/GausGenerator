
function gausGeneratorL(diapazon) {
    console.log('gausGenerator started');
    let diap = diapazon;
    let max = diapazon;
    let delayed = 0;
    let ddl = Array(4).fill(0);

    return function () {
        let rnd = Math.floor(Math.random() * Math.floor(max));
        max = diap - getDell(rnd);
        if (max < 0) {
            console.log('axtung!');
        }
        return rnd;
    }

    function getDell(newGauss) {
        ddl[3] = fnl(ddl[2]);
        ddl[2] = fnl(ddl[1]);
        ddl[1] = fnl(ddl[0]);
        ddl[0] = newGauss;
        return ddl[0] + ddl[1] + ddl[2] + ddl[3];
    }
    
    function fnl(a){
        return (a>>>1) + (a>>>2);
    }
}

function gausGeneratorR(diapazon) {
    console.log('gausGenerator started');
    let diap = diapazon;
    let max = diapazon;
    let delayed = 0;
    let ddl = Array(4).fill(0);

    return function () {
        let rnd = Math.floor(Math.random() * Math.floor(max));
        max = diap - getDell(rnd);
        if (max < 0) {
            console.log('axtung!');
        }
        return rnd;
    }

    function getDell(newGauss) {
        ddl[3] = ddl[2] >>> 1;
        ddl[2] = ddl[1] >>> 1;
        ddl[1] = ddl[0] >>> 1;
        ddl[0] = newGauss;
        return (ddl[0] + ddl[1] + ddl[2] + ddl[3]);

        
    }
}

function iterationDraw(diapazon, drawCTXFunction) {
    let diap = diapazon;
    let cols = Array(diap).fill(0);
    let ctr = 0;

    return function drawIteration(gaus) {
        ctr ++;
        cols[gaus]++;
        let x = gaus;
        let y = cols[gaus];
        drawCTXFunction(x, y);
        if (ctr % 128 == 0)
            updateCanvas();
    }
}


function fnr(a){
    return (a>>>1) + (a>>>2);
}