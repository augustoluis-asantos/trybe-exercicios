let custo = 20;
let imposto = custo * 0.2;
let custoTotal = custo + imposto;
let venda = 23;
let númeroVendido = 1000;
let lucro = venda - custoTotal;
let lucroTotal = númeroVendido * lucro;
let prejuizo = lucroTotal * -1;

if (custo < 0 || venda < 0) {
  console.log('Erro! Valor negativo');
} else if (venda > custoTotal) {
  console.log('O lucro pela venda de ' + númeroVendido + ' produtos é de R$' + lucroTotal);
} else {
  console.log('Houve um prejuízo de R$' + prejuizo + ' com a venda do produto nesse valor');
}