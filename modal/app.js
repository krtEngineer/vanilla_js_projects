const getElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please check your classes : ${selector} does not exist`);
};

const modalOpenBtn = getElement(".modal-open-btn");
const modal = getElement(".modal");
const modalCloseBtn = getElement(".modal-close-btn");

const switchModal = (button) => {
  button.addEventListener("click", function () {
    modal.classList.toggle("show-modal");
  });
};

switchModal(modalOpenBtn);

switchModal(modalCloseBtn);
