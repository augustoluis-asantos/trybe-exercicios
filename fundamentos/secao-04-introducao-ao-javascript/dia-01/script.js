let anguloAlfa = 50;
let anguloBeta = 50;
let anguloGama = 80;

if (anguloAlfa < 0 || anguloBeta < 0 || anguloGama < 0) {
  console.log("Erro! Ângulo inválido!")
} else if (anguloAlfa + anguloBeta + anguloGama === 180) {
console.log("True")
} else {
  console.log("False")
}