/* Faça um programapara calcular o valor de uma viagem

você terá 3 variáveis. Sendo elas:
1 - preco do etanol
2 - preço da gasolina
3 - o tipo de combustível que está no seu carro
4 - gasto médio de combustível que está no seu carro
5 - distância em KM da viagem

Imprima no console o valor que será gasto para realizar esta viagem
*/

let precoGasolina = 4.59;
let precoEtanol = 3.99;

let tipoDeCombustivel = false;

let KmPorLitroGasolina = 10;
let kmPorLitroEtanol = 8;
let distancia = 200;

let valor;

if (tipoDeCombustivel === true) {
    valor = (distancia / KmPorLitroGasolina) * precoGasolina;
    console.log('O valor que será gasto será de ' , valor)
} else {
    valor = (distancia / kmPorLitroEtanol) * precoEtanol;
    console.log('O valor que será gasto será de ', valor);
}



