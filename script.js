let button = document.getElementById('button');
let result = document.getElementById('result');
let clearBtn = document.getElementById('clearBtn');


const dado = () =>{
    let dadoResult = Math.floor(Math.random() * 6)+1;
    result.innerHTML += `<h1>o seu dado caiu com o resultado ${dadoResult}</h1>`
    console.log(Math.floor(Math.random() * 6));
}
button.onclick = dado;

const clear = () =>{
    result.innerHTML = `<h2>O seu resultado será inserido em seguida...</h2>`
}
clearBtn.onclick = clear;