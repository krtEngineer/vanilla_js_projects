const slideNum = document.querySelector("#number");
const images = document.querySelectorAll(".slider-image");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const btns = document.querySelectorAll(".btn");
// const slideImg = document.querySelector(".slider-image");

let currNum = 1;
const totalImgs = 4;
let prevNum = -1;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    prevNum = +slideNum.textContent;
    let btnName = btn.classList[0];
    setCurrNum(btnName);
    setImg();
  });
});

function setCurrNum(btn) {
  const operation = getOp(btn);
  setNewNum(operation);
  slideNum.textContent = `${currNum}`;
}

function getOp(btn) {
  if (btn === "prev") {
    return "-";
  } else if (btn === "next") {
    return "+";
  } else {
    throw new Error("Invalid button pressed.");
  }
}

function setNewNum(operation) {
  if (operation === "+") {
    currNum++;
  } else if (operation === "-") {
    currNum--;
  } else {
    throw new Error("Invalid operation.");
  }
  limitNewNum();
}

function limitNewNum() {
  if (currNum > totalImgs) {
    currNum = 1;
  } else if (currNum < 1) {
    currNum = totalImgs;
  } else {
    return;
  }
}

function setImg() {
  deActivatePrevImg();
  activateNewImg();
}

function deActivatePrevImg() {
  if (images[prevNum - 1].classList.contains("active")) {
    images[prevNum - 1].classList.remove("active");
  }
}

function activateNewImg() {
  if (!images[currNum - 1].classList.contains("active")) {
    images[currNum - 1].classList.add("active");
  }
}
