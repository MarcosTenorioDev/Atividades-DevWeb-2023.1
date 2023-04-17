// Declaração de variáveis
let dice1Row = document.getElementById('diceBtn1');
let dice2Row = document.getElementById('diceBtn2');
let dado1Result = 0;
let dado2Result = 0;
let dado1Score = 0;
let dado2Score = 0;
let rodada = 1;
dice1Row.disabled = false; 
let resultDice1 = document.getElementById('resultDice1');
let resultDice2 = document.getElementById('resultDice2');
let roundStatus = document.getElementById('roundStatus');
let resultDice2Score = document.getElementById('dice2Score');
let resultDice1Score = document.getElementById('dice1Score');

//Função para obter o valor do resultado do dado 1
dice1Row.onclick  = () => {
    dado1Result = Math.floor(Math.random() * 6)+1;
    addDice1ResultOnScreen();
    console.log('dado 1 = ' + dado1Result);
    dice2Row.disabled = false;
    dice1Row.disabled = true;
    
}

//Função para obter o valor do resultado do dado 2
dice2Row.onclick = () => {
    dado2Result = Math.floor(Math.random() * 6)+1;
    console.log('dado 2 = ' + dado2Result);
    battle();
    addStatusOnScreen();
    dice1Row.disabled = false;
    dice2Row.disabled = true;
    finalResult();

}

// Função de batalha para decidir o vencedor da rodada
const battle = () =>{
    if (dado1Result > dado2Result){
        console.log(`Jogador 1 venceu a ${rodada}º rodada`);
        dado1Score ++;
        attDice1ScoreOnScreen();
        rodada ++;
    }else if (dado1Result < dado2Result){
        console.log(`jogador 2 venceu a ${rodada}º rodada`);
        dado2Score ++;
        attDice2ScoreOnScreen;
        rodada ++;
    }else{
        console.log('empate');
        rodada ++;
    }                                                                                        
}
// Função para decidir o vencedor do jogo
const finalResult = () => {
    if (rodada === 11){
        if(dado1Score > dado2Score){
            addStatusOnScreen();
            dice1Row.disabled = true; 
            setTimeout(() => {
                alert(`ao final de ${rodada - 1} rodadas, o jogador 1 ganhou com ${dado1Score} pontos vs ${dado2Score} pontos do jogador 2`);
                clearScreen();
            }, 2000)
           
        }else if (dado1Score < dado2Score){
            addStatusOnScreen();
            dice1Row.disabled = true; 
            setTimeout(() => {
                alert(`ao final de ${rodada - 1} rodadas, o jogador 2 ganhou com ${dado2Score} pontos vs ${dado1Score} pontos do jogador 1`);
                clearScreen();
            }, 2000)
        }else if (dado1Score = dado2Score){
            addStatusOnScreen();
            dice1Row.disabled = true; 
            setTimeout(() => {
                alert(`ao final de ${rodada - 1} rodadas, houve um empate de exatamente ${dado1Score} pontos para o jogador 1 e ${dado2Score} pontos para o jogador 2`);
                clearScreen();
            }, 2000)
        }
    }else{
        console.log('na décima rodada sai o resultado')
        console.log('-------------------------------')
    }
}
// Função para adicionar o status do jogo no HTML
const addStatusOnScreen = () =>{
    addDice2ResultOnScreen();
    roundStatusOnScreen();
    attDice1ScoreOnScreen();
    attDice2ScoreOnScreen();
}
// função para mostrar o status do round na tela
const roundStatusOnScreen = () =>{
    roundStatus.innerHTML = `round: ${rodada - 1}`;
}
// função para mostrar o resultado do dado 2
const addDice2ResultOnScreen = () =>{
    resultDice2. innerHTML = dado2Result
}
// função para mostrar o resultado do dado 1
const addDice1ResultOnScreen = () =>{
    resultDice1.innerHTML = dado1Result
}
// função para mostrar o score do dado 1
const attDice1ScoreOnScreen = () =>{
    resultDice1Score.innerHTML = `Pontuação: ${dado1Score}`;
}
// função para mostrar o score do dado 2
const attDice2ScoreOnScreen = () =>{
    resultDice2Score.innerHTML = `Pontuação: ${dado2Score}`;
}

// função para limpar a tela para reiniciar o jogo após o fim das rodadas
const clearScreen = () =>{
    if (rodada === 11){
        dado1Result = 0;
        dado2Result = 0;
        dado1Score = 0;
        dado2Score = 0;
        rodada = 1;
        dice1Row.disabled = false; 
        dice2Row.disabled = true;
        roundStatus.innerHTML = `round: ${rodada}`;
        addStatusOnScreen();
        addDice1ResultOnScreen();

    }else{
        console.log('teste')
    }
}
