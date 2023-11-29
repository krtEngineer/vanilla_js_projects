const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.querySelector("#color-code");

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = getHexCode();
  color.textContent = getHexCode();
});

function getHexCode() {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode = hexCode.concat(`${hex[getRandomNumber()]}`);
  }
  return hexCode;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
