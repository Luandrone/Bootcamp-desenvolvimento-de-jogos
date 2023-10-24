/* O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde 
para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua 
condição de acordo com a tabela abaixo.

IMC em adultos Condição:

- Abaixo de 18.5 Abaixo de peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acimna de 40 Obesidade Grave;
*/

const peso = 150;
const altura = 1.75;
const IMC = peso / (altura * altura);

/* const imc = peso / Math.pow(altura, 2) */

if (IMC < 18.5){
    console.log('Seu imc foi de', IMC, 'Abaixo de peso');
} else if(IMC >= 15.5 && IMC < 25) {
    console.log('Seu imc foi de', IMC, 'Peso normal');
} else if (IMC >= 25 && IMC < 30) {
    console.log('Seu imc foi de', IMC, 'Acima do peso');
} else if (IMC >= 30 && IMC < 40) {
    console.log('Seu imc foi de', IMC, 'Obeso!');
} else {
    console.log('Seu imc foi de', IMC, 'Obesidade grave!')
}