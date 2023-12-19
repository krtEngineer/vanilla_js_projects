let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");
const companyBtns = document.querySelectorAll(".company-btn");
const companyContainer = document.querySelector(".companies");

const showCompanyBtns = () => {
  const companies = getUniqueCompanies();
  companyContainer.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");
  [...companyContainer.childNodes].map((companyBtn) => {
    companyBtnlistener(companyBtn);
  });
};

const displayProducts = () => {
  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, company, image, price }) => {
      return `<article class="product" data-id="${id}">
          <img src="${image}" class="product-img img" alt="" />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">&#8377; ${price}</span>
          </footer>
        </article>`;
    })
    .join("");
};

const displayErrMsg = () => {
  productsContainer.innerHTML = `<h5>Sorry. No product found.</h5>`;
};

form.addEventListener("keyup", () => {
  //keyup - fires when key is released
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  if (filteredProducts.length === 0) {
    displayErrMsg();
  } else {
    displayProducts();
  }
});

function getUniqueCompanies() {
  let companies = ["all"];
  [...products].map((product) => {
    companies.push(product.company);
  });
  const companySet = new Set(companies);
  return [...companySet];
}

const companyBtnlistener = (companyBtn) => {
  companyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const companyOpted = e.target.textContent.toLowerCase();
    if (companyOpted !== "all") {
      filteredProducts = products.filter((product) => {
        return product.company.toLowerCase() === companyOpted;
      });
    } else {
      filteredProducts = [...products];
    }
    displayProducts();
  });
};

showCompanyBtns();
displayProducts();
