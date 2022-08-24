// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function verificaIndexMaiorValor (arrayValores){
    let indice;
    let valor = 0;

    for (elemento in arrayValores){
        if(arrayValores[elemento]>valor){
            valor=arrayValores[elemento];
            indice=elemento;
        }
    }
    return indice;
}

let arrayTeste = [2, 3, 6, 7, 10, 1];
console.log(verificaIndexMaiorValor(arrayTeste));