const productsEle = document.querySelector(".products");
const productsList = [
  {
    productName: "Nordic Chair",
    productImage: "./assets/images/shop/product-1.webp",
    price: "50.00$",
  },
  {
    productName: "Kruzo Aero Chair",
    productImage: "./assets/images/shop/product-2.webp",
    price: "78.00$",
  },
  {
    productName: "Ergonomic Chair",
    productImage: "./assets/images/shop/product-3.webp",
    price: "50$",
  },
  {
    productName: "Nordic Chair",
    productImage: "./assets/images/shop/product-1.webp",
    price: "50$",
  },
  {
    productName: "Kruzo Aero Chair",
    productImage: "./assets/images/shop/product-2.webp",
    price: "78.00$",
  },
  {
    productName: "Ergonomic Chair",
    productImage: "./assets/images/shop/product-3.webp",
    price: "50$",
  },
];
localStorage.setItem("products", JSON.stringify(productsList));

const displayProducts = () => {
  const products = JSON.parse(localStorage.getItem("products"));
  const result = products.map((product, index) => {
    return `
        <div class="col-sm-6 col-md-4 mb-3">
            <div class="product-item text-center position-relative">
               <a href="./product.html?id=${index}" class="d-flex flex-column product">
                <img src=${product.productImage}
                class="img-fluid mb-4 product-image position-relative" alt="product image">
                <h3 class="product-name gray-title fw-semibold fs-6 text-capitalize">Nordic
                ${product.productName}</h3>
               <span class="price">${product.price}</span>
                <a href="cart.html"
                class="plus-icon bottom-0 text-white mx-auto d-flex justify-content-center align-items-center mt-3">
                  <img src="./assets/images/icons/cross.svg" class="img-fluid" alt="cross">
                  </a>
                </a>
            </div>
      </div>
        `;
  });
  productsEle.innerHTML = result.join(" ");
};

displayProducts();
