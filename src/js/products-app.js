import template from "../products-template.hbs";
import { products } from "./products-data"

const productsList = document.querySelector(".products-list");
const productInput = document.querySelector(".product-input");

productsList.innerHTML = template({ products });

productInput.addEventListener("input", (event) => {
    const search = event.target.value.toLowerCase().trim();

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search) 
    );

    productsList.innerHTML = template({ products: filteredProducts });
});