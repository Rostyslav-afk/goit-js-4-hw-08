import template from "../templates/products-template.hbs";
import { products } from "./products-data"

const productsList = document.querySelector(".products-list")
productsList.innerHTML = template({ products });
