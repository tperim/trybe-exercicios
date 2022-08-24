// 7 - Crie uma função que receba uma string word e outra string ending. 
// Verifique se a string ending é o final da string word. 
// Considere que a string ending sempre será menor que a string word.

function verificaFinalPalavra (palavra, finalPalavra){

    let tamanhoFinalPalavra = finalPalavra.length-1;
    let tamanhoPalavra = palavra.length-1;
    let qtdeLetrasCorretas = 0;
    
    for (let i = tamanhoFinalPalavra; i >= 0 ; i -=1, tamanhoPalavra-=1 ) {
        if (finalPalavra[i]==palavra[tamanhoPalavra]){
            qtdeLetrasCorretas +=1;
        };
    }
    if (qtdeLetrasCorretas == finalPalavra.length){
        return true;
    } else 
    {
        return false;
    }
    
}

console.log(verificaFinalPalavra('Thiago','iago'));
console.log(verificaFinalPalavra('trybe','be'));
console.log(verificaFinalPalavra('joaofernando','fernan'));