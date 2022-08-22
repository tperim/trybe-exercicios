// Algoritmo para inverter palavra

let palavra = 'tryber';
let palavraInversa = '';

for (let index = palavra.length; index > 0; index-=1){
    palavraInversa += palavra[index-1];
}

console.log(palavraInversa);