/*rainfall prompt and answer*/
let rainfall=window.prompt('How many inches of rain fell?');

let asterisksString="*".repeat(rainfall);
console.log(asterisksString);

const normalYield=50;
var bushelyield=null;
if (rainfall>=20) {
    bushelyield=normalYield*.9;
} else if (rainfall<10) {
    bushelyield= normalYield*.8;
} else {
    bushelyield=normalYield;
}

let fertilizer=window.prompt("Did you use fertilizer?");
if (fertilizer==="Yes" || fertilizer==="yes") {
    let fertilizerType=window.prompt("Did you use premium or regular fertilizer?");
    if (fertilizerType==="premium" || fertilizerType==="Premium") {
        bushelyield*=1.15;
    }
    else if (fertilizerType==="regular") {
        bushelyield*=1.10;
    }
}

console.log("The yield should be " + bushelyield + " bushels per acre.")