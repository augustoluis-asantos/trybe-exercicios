let salarioBruto = 15000;
let salarioBase;
let salarioLiquido;
let inss;
let impostoDeRenda;

if (salarioBruto <= 0) {
  console.log('Entrada inválida! Não é possível calcular o salário liquido')
} else if(salarioBruto <= 1556.94) {
  inss = 0.08;
  salarioBase = salarioBruto - (salarioBruto * inss);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  inss = 0.09;
  salarioBase = salarioBruto - (salarioBruto * inss);
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  inss = 0.11;
  salarioBase = salarioBruto - (salarioBruto * inss);
} else if (salarioBruto > 5189.82) {
  inss = 570.88;
  salarioBase = salarioBruto - inss;
}

if (salarioBase > 0 && salarioBase <= 1903.99) {
  impostoDeRenda = 0;
  salarioLiquido = salarioBase;
} else if (salarioBase > 1903.99 && salarioBase <= 2826.65) {
  impostoDeRenda = (salarioBase * 0.075) - 142.8;
  salarioLiquido = salarioBase - impostoDeRenda;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  impostoDeRenda = (salarioBase * 0.15) - 354.8;
  salarioLiquido = salarioBase - impostoDeRenda;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  impostoDeRenda = (salarioBase * 0.225) - 636.13;
  salarioLiquido = salarioBase - impostoDeRenda;
} else if (salarioBase > 4664.68) {
  impostoDeRenda = (salarioBase * 0.275) - 869.36;
  salarioLiquido = salarioBase - impostoDeRenda;
} else {
  console.log('Favor verificar o valor inserido.')
}

if (salarioLiquido != undefined) {
  console.log('O salário líquido a ser recebido é de R$' + salarioLiquido + '.');
}