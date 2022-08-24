// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorioTodosNumeros(numero){
    
    resultado = 0;

    for (let i=1; i <= numero; i+=1){
        resultado += i
    }
    return resultado;
}

console.log(somatorioTodosNumeros(5));