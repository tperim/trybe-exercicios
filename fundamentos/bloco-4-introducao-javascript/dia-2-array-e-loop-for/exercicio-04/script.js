let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Tópico 1 de agora a prática
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (number of numbers) {
    console.log(number);
}

//******************************************************* */
// Tópico 2 de agora a prática
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma=0;

for (let index=0; index< numbers.length; index += 1) {
    soma = soma + numbers[index];
}

console.log(soma)

Tópico 3 de agora a prática

let soma=0;

for (let index=0; index< numbers.length; index += 1) {
    soma = soma + numbers[index];
}

// console.log(soma)

//******************************************************* */
// Tópico 3 de agora a prática
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let soma=0;

for (let index=0; index< numbers.length; index += 1) {
    soma = soma + numbers[index];
}

let media = (soma/numbers.length);
console.log(media)

//******************************************************* */
// Tópico 4 de agora a prática
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let soma=0;

for (let index=0; index< numbers.length; index += 1) {
    soma = soma + numbers[index];
}
if((soma/numbers.length)>20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

//******************************************************* */
// Tópico 5 de agora a prática
// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
 
let maiorNumero=0;

for (number of numbers) {
    if (number>maiorNumero) {
        maiorNumero = number
    }
}
console.log(maiorNumero);

//******************************************************* */
// Tópico 6 de agora a prática
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
 
let qtdeNumerosImpar=0;

for (number of numbers) {
    if (number%2>0) {
        qtdeNumerosImpar += 1
    }
}
console.log(qtdeNumerosImpar);

//******************************************************* */
// Tópico 7 de agora a prática
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
 
let menorNumero=numbers[0];

for (number of numbers) {
    if (number<menorNumero) {
        menorNumero=number
    }
}
console.log(menorNumero);

//******************************************************* */
// Tópico 8 de agora a prática
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
 
let array=[];

for (let i=1; i<26 ; i+=1) {
    array.push(i);
}
console.log(array);

//******************************************************* */
// Tópico 9 de agora a prática
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
 
let array=[];

for (let i=1; i<26 ; i+=1) {
    array.push(i);
}

for (element of array) {
    console.log(element/2);
}
