let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
//   Bem-vinda, Margarida
  console.log("Bem-vinda, " + info.personagem);

//   🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
  info['recorrente'] = 'Sim' ;
  console.log(info);

//   3 - Faça um for/in que mostre todas as chaves do objeto.
for (chave in info) {
    console.log(chave);
}

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto
for (chave in info){
    console.log(info[chave]);
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
//'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
//Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  for (chave in info){
   if(chave != 'recorrente'){
    console.log(info[chave] + ' e ' + info2[chave]);
    } else{
    console.log ('Ambos recorrentes');
    }
  }