// Declaração de variáveis
let button = document.getElementById('button');
let result = document.getElementById('result');
let clearBtn = document.getElementById('clearBtn');

//Função para obter o valor do resultado do dado
const dado = () =>{
    let dadoResult = Math.floor(Math.random() * 6)+1;
    result.innerHTML += `<h3>o seu dado caiu com o resultado ${dadoResult}</h3>`
    result.innerHTML += `<h3>-------------------------------------------------</h3>`
}
button.onclick = dado;

//Função para limpar
const clear = () =>{
    result.innerHTML = `<h4>O seu resultado será inserido em seguida...<br><br></h4>`
}
clearBtn.onclick = clear;