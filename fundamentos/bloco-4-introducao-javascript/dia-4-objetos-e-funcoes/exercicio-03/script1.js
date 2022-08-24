// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(palavra){
    let palavraSplit = palavra.split("");
    let arrayReverse = palavraSplit.reverse();
    let palavraReverse = arrayReverse.join("");
    let comparativo = (palavraReverse == palavra);
    return comparativo
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));