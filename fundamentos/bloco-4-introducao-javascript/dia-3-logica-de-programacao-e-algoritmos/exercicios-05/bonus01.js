
// 1- Agora vamos trabalhar com algumas formas geométricas! 
// Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n
lados=10;
linha='';

for (let i=1; i<=lados;i+=1){
    linha +='*';
}

for (let i=1; i<=lados;i+=1){   
    console.log(linha);
}