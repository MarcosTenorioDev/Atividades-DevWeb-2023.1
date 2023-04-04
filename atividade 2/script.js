let button = document.getElementById('cardButton')
let result = document.getElementById('result')
let tableHeader = document.querySelector('.tableHeader')

let arrayCompras = [];

button.onclick = () => {
    let compras = readData();
    arrayCompras.push(compras);
  /*   result.innerHTML += `<th>${compras.produto}</th>`
    result.innerHTML += `<th> ${compras.quantidade}</th>`
    result.innerHTML += `<th> ${compras.preco}</th>` */
    

  console.log(arrayCompras);

}
   

function readData(){
    
    let compras = {};
    compras.produto = document.getElementById('produto').value;
    compras.quantidade = document.getElementById('quantidade').value  ;
    compras.preco = document.getElementById('preco').value;

    return compras

    }
