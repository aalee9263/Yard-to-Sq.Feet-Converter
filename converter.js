// let yard = document.getElementById("yard");
// let feet = document.getElementById("feet");

// function marlaToFt() {
//   let output = (parseFloat(marla.value) * 272.251);
//   feet.value = parseFloat(output.toFixed(3));
// }
// function ftToMarla() {
//   let output = ((parseFloat(feet.value) * 0.00367309));
//   marla.value = parseFloat(output.toFixed(3));
// }

let yard = document.getElementById("yard");
let feet = document.getElementById("feet");

function yardToFt () {
  let output = (parseFloat(yard.value) *9)
  feet.value = parseFloat(output.toFixed(3));
}
  function ftToYard (){
  let output = (parseFloat(feet.value) * 0.111111)
  yard.value = parseFloat(output.toFixed(3));
}