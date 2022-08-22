//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let quantidadeDivisiveis=0;

for (let index = 2; index <= 150 ; index +=1){
    if (index%3===0){
        quantidadeDivisiveis+=1;
    }
}
console.log('Temos: '+ quantidadeDivisiveis + ' divisores');

if (quantidadeDivisiveis===50){
    console.log('Mensagem Secreta pois temos 50 divisores');
}
