// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function verificaMaiorNome (arrayNomes){
    let tamanhoNome = 0;
    let nome = 0;

    for (elementoNome of arrayNomes){
        if(elementoNome.split("").length > tamanhoNome || nome === 0){
            nome=elementoNome;
            tamanhoNome = elementoNome.split("").length;
        }
    }
    return nome;
}

let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(verificaMaiorNome(arrayNomes));