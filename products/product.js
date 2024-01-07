import {
  getProductColorHtml,
  getProductErrorHtml,
  getProductHtml,
  getProductLoadingHtml,
} from "./utility.js";

import { productUrl } from "./constant.js";

const productDOM = document.querySelector(".product");

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = getProductLoadingHtml();
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const response = await fetch(`${productUrl}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    productDOM.innerHTML = getProductErrorHtml();
  }
};

const prepareProduct = (product) => {
  const { company, colors, description, name, price, img } =
    getProductDetails(product);
  setHeaderTitle(name);
  productDOM.innerHTML = getProductHtml(
    img,
    name,
    company,
    price,
    getColorList(colors),
    description
  );
};

const getProductDetails = (product) => {
  const { company, colors, description, name, price, image } = product.fields;
  return {
    company,
    colors,
    description,
    name,
    price,
    img: image[0].url,
  };
};

const setHeaderTitle = (title) => {
  document.title = title.toUpperCase();
};

const getColorList = (colors) => {
  return colors
    .map((color) => {
      return getProductColorHtml(color);
    })
    .join("");
};

const showProduct = async () => {
  const product = await fetchProduct();
  prepareProduct(product);
};

showProduct();
