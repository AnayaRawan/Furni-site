const params = new URLSearchParams(location.search);
const id = params.get("id");
const products = JSON.parse(localStorage.getItem("products"));
const product = products[id];

document.querySelector(".product-image").innerHTML =
  `<img src=${product.productImage} class="img-fluid" alt="chair">
`;
document.querySelector(".product-title h3").innerText = product.productName;
document.querySelector('.price').innerText = product.price;