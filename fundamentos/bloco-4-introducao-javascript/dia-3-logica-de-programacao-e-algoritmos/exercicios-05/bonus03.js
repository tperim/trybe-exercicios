// 3- Agora inverta o lado do triângulo.

let lados = 10;

for (let index=1;index<=lados;index+=1){
    
    let numeroCaracteresEspaco=lados-index;
    let numeroCaracteresAsterico=index;
    let linha = '';
    
    for (let i=0;i<numeroCaracteresEspaco;i+=1){
        linha +=' ';
    }

    for (let i=0;i<numeroCaracteresAsterico;i+=1){
        linha +='*';
    }
    console.log(linha);


}














