// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function verificaIndexMenorValor (arrayValores){
    let indice = 0;
    let valor = 0;

    for (elemento in arrayValores){
        if(arrayValores[elemento]<valor || elemento == 0 ){
            valor=arrayValores[elemento];
            indice=elemento;
        }
    }
    return indice;
}

let arrayTeste2 = [2, 4, 6, 7, 10, 0, -3];
console.log(verificaIndexMenorValor(arrayTeste2));