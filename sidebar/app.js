const getElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please check your classes : ${selector} does not exist`);
};

const sideBarToggle = getElement(".side-toggle");
const sidebar = getElement(".sidebar");
const sideBarCloseBtn = getElement(".close-btn");

sideBarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

sideBarCloseBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
