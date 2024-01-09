import getPage from "./fetchPage.js";
import renderResults from "./renderResult.js";

const formDOM = document.querySelector(".form");
const inputDOM = document.querySelector(".form-input");

formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = inputDOM.value;
  if (!value) {
    resultDOM.innerHTML = `<div class="error">please enter valid search term</div>`;
    return;
  }
  const pages = await getPage(value);
  renderResults(pages);
});

const body = document.querySelector("body");

window.addEventListener("resize", () => {
  const width = body.getBoundingClientRect().width;
  sessionStorage.setItem("width", width);
});

window.addEventListener("DOMContentLoaded", () => {
  const width = body.getBoundingClientRect().width;
  sessionStorage.setItem("width", width);
});
