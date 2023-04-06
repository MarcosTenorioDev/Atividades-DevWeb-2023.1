let button = document.getElementById('submit')
let clearbtn = document.getElementById('clear')
let result = document.getElementById('result')
let tableHeader = document.querySelector('.tableHeader')
let product = document.getElementById('produto')
let quantity = document.getElementById('quantidade')
let price = document.getElementById('preco')
let tbody = document.getElementById('tbody')
let row;
//Criando array para guardar as compras
let arrayCompras = [];

button.onclick = () => {
  addObjToArray();
  cleanField();
  createListItem();
    

  console.log(arrayCompras);

}
   

function addObjToArray(){
    
    //Criando objeto compras
    const compras = {
      produto: product.value,
      quantidade: quantity.value,
      preco: price.value
    };

    //Adicionando objeto ao array
    arrayCompras.push(compras)
  }

const cleanField = () =>{
  product.value = '';
  quantity.value = '';
  price.value = '';
}

const createListItem = () =>{

  tbody.innerHTML = '';

  for(i = 0; i < arrayCompras.length; i++){
    const listProduct = document.createElement("td");
    const listQuantity = document.createElement("td");
    const listPrice = document.createElement("td");
    
    const product = document.createTextNode(arrayCompras[i].produto);
    const quantity = document.createTextNode(arrayCompras[i].quantidade);
    const price = document.createTextNode(arrayCompras[i].preco);

    listProduct.appendChild(product);
    listQuantity.appendChild(quantity);
    listPrice.appendChild(price);

    row = document.createElement("tr");
    row.appendChild(listProduct);
    row.appendChild(listQuantity);
    row.appendChild(listPrice);

    tbody.appendChild(row);
  }

}

const clearTable = () =>{

}

clearbtn.onclick = () => {
  arrayCompras = [];
  tbody.innerHTML = ''
}
      
