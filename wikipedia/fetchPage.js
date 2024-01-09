import getURL from "./util.js";

const resultDOM = document.querySelector(".results");

const fetchPage = async (searchValue) => {
  resultDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const url = getURL();
    const response = await fetch(`${url}${searchValue}`);
    const data = await response.json();
    const results = data.query.search;
    if (results.length < 1) {
      resultDOM.innerHTML = `<div class="error">no matching results. Please try again</div>`;
      return;
    }
    return results;
  } catch (err) {
    resultDOM.innerHTML = `<div class="error">there was an error</div>`;
  }
};

export default fetchPage;
