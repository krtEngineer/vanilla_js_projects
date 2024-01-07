import { URL } from "./constant.js";

export const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no element selected");
};

export const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  const person = data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export const activateItems = (items, specItem = null) => {
  items.forEach((item) => {
    item.classList.remove("active");
  });
  if (specItem) {
    specItem.classList.add("active");
  }
};

export const getDomElements = () => {
  const img = getElement(".user-img");
  const title = getElement(".user-title");
  const value = getElement(".user-value");
  const btns = [...document.querySelectorAll(".icon")];
  return {
    img,
    title,
    value,
    btns,
  };
};

export const displayUser = async () => {
  const person = await getUser();
  const { img, title, value, btns } = getDomElements();
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  activateItems(btns);
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      activateItems(btns, btn);
    });
  });
};
