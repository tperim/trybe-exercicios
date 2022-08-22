// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
// Retorna a menor palavra
let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavra='';
let caracterElemento = 0;

for (elemento of array){
    
    if (caracterElemento === 0 || elemento.length<caracterElemento){
        caracterElemento=elemento.length;
        palavra=elemento;
    }
}

console.log(palavra);