// Declaração de variáveis
let dice1Row = document.getElementById('diceBtn1');
let dice2Row = document.getElementById('diceBtn2');
let dado1Result = 0;
let dado2Result = 0;
let dado1Score = 0;
let dado2Score = 0;
let rodada = 1;
dice1Row.disabled = false; 

//Função para obter o valor do resultado do dado 1
dice1Row.onclick  = () => {
    dado1Result = Math.floor(Math.random() * 6)+1;
    console.log('dado 1 = ' + dado1Result);
    dice2Row.disabled = false;
    dice1Row.disabled = true;
}

//Função para obter o valor do resultado do dado 2
dice2Row.onclick = () => {
    dado2Result = Math.floor(Math.random() * 6)+1;
    console.log('dado 2 = ' + dado2Result);
    battle();
    dice1Row.disabled = false;
    dice2Row.disabled = true;
    finalResult();

}


const battle = () =>{
    if (dado1Result > dado2Result){
        console.log(`Jogador 1 venceu a ${rodada}º rodada`);
        dado1Score ++;
        rodada ++;
    }else if (dado1Result < dado2Result){
        console.log(`jogador 2 venceu a ${rodada}º rodada`);
        dado2Score ++;
        rodada ++;
    }else{
        console.log('empate');
        rodada ++;
    }                                                                                        
}

const finalResult = () => {
    if (rodada === 7){
        if(dado1Score > dado2Score){
            console.log(`ao final de ${rodada - 1} rodadas, o jogador 1 ganhou com ${dado1Score} pontos vs ${dado2Score} pontos do jogador 2`)
            rodada = 1
        }else if (dado1Score < dado2Score){
            console.log(`ao final de ${rodada - 1} rodadas, o jogador 2 ganhou com ${dado2Score} pontos vs ${dado1Score} pontos do jogador 1`)
            rodada = 1
        }else if (dado1Score = dado2Score){
            console.log(`ao final de ${rodada - 1} rodadas, houve um empate de exatamente ${dado1Score} pontos para o jogador 1 e ${dado2Score} pontos para o jogador 2`)
            rodada = 1
        }
    }else{
        console.log('na sexta rodada sai o resultado')
        console.log('-------------------------------')
    }
}


