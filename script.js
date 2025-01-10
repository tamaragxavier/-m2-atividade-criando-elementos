const products = [
  {
    name: "Camiseta",
    price: 29.99,
  },
  {
    name: "Calça Jeans",
    price: 59.99,
  },
  {
    name: "Sapatos",
    price: 59.99,
  },
  {
    name: "Vestido",
    price: 89.99,
  },
  {
    name: "Chapéu",
    price: 19.99,
  },
];

const productslist = document.querySelector("ul");

for (let i = 0; i < products.length; i++) {
 
  const listItem = document.createElement("li");

  const productName = document.createElement("h3");
  const productPrice = document.createElement("p");
  const productButton = document.createElement("button");

  productName.innerText = products[i].name;
  productPrice.innerText = products[i].price;
  productButton.innerText = "Adicionar ao carrinho";

  listItem.appendChild(productName);
  listItem.appendChild(productPrice);
  listItem.appendChild(productButton);

  productslist.appendChild(listItem);
}
