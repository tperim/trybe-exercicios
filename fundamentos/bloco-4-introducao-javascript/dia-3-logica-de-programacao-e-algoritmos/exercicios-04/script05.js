// 5 

//Crie um algoritmo que recebe a idade de Noel, Ellen e Nasc e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

idadeNoel = 35;
idadeEllen = 23;
idadeNasc = 22;

if (idadeNoel<idadeEllen && idadeNoel<idadeNasc){
    console.log("Noel é o mais novo.");
}
else if(idadeEllen<idadeNoel && idadeEllen<idadeNasc){
    console.log("Ellen é a mais nova.");
} 
else if(idadeNasc<idadeNoel && idadeNasc<idadeEllen){
    console.log("Nasc é o mais novo.");
}
