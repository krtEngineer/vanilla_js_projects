export const getInrPrice = (price) => {
  const newPrice = +price * 85;
  const inrPrice = newPrice.toLocaleString("en-IN");
  return `&#8377;${inrPrice}`;
};

export const getListedProductHtml = (id, img, title, price) => {
  return `<a class="single-product" href="product.html?id=${id}">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">${getInrPrice(price)}</span>
            </footer>
          </a>`;
};

export const getProductContainerHtml = (productList) => {
  return `<div class="products-container">${productList}</div>`;
};

export const getErrorHtml = () => {
  return '<p class="error">there was an error</p>';
};

export const getLoadingHtml = () => {
  return '<div class="loading"></div>';
};

export const getProductLoadingHtml = () => {
  return `<h4 class="product-loading">Loading... </h4>`;
};

export const getProductErrorHtml = () => {
  return `<p class="error">There was a problem loading the product. Please try again later </p>`;
};

export const getProductColorHtml = (color) => {
  return `<span class="product-color" style="background: ${color}"></span>`;
};

export const getProductHtml = (
  img,
  title,
  company,
  price,
  colorList,
  description
) => {
  return `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>${getInrPrice(price)}</span>
          <div class="colors">
            ${colorList}
          </div>
          <p>
           ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};
