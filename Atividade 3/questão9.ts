const numbers = [1, 2, 3, 4];
const somaDoDobro = (numbers.map(n => n * 2)).reduce((acumulado, valorAtual) => acumulado + valorAtual);
console.log(somaDoDobro);