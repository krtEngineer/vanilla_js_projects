import {
  getListedProductHtml,
  getProductContainerHtml,
  getErrorHtml,
  getLoadingHtml,
} from "./utility.js";
import { productsUrl } from "./constant.js";

const productsDOM = document.querySelector(".products-center");

const fetchProducts = async () => {
  productsDOM.innerHTML = getLoadingHtml();
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();
    return products;
  } catch (err) {
    productsDOM.innerHTML = getErrorHtml();
  }
};

const prepareProducts = (products) => {
  const productList = products
    .map((product) => {
      const { id } = product;
      const { name, price } = product.fields;
      const { url } = product.fields.image[0];
      return getListedProductHtml(id, url, name, price);
    })
    .join("");
  productsDOM.innerHTML = getProductContainerHtml(productList);
};

const showProducts = async () => {
  const products = await fetchProducts();
  prepareProducts(products);
};

showProducts();
