// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

jogadaPlayer1='Tesoura';
jogadaPlayer2='Papel';
concat = jogadaPlayer1 +"|"+jogadaPlayer2;

if(jogadaPlayer1===jogadaPlayer2){
    console.log("A Ties");
}else{ 
    switch(concat){
        case ("Pedra|Tesoura"):
        case ("Papel|Pedra"):
        case ("Tesoura|Papel"):
            console.log("Player 1 won");
            break;
        case ("Pedra|Papel"):
        case ("Papel|Tesoura"):
        case ("Tesoura|Pedra"):
            console.log("Player 2 won");
            break;
    }

}