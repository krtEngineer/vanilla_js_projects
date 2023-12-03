//set initial count
let count = 0;

//class names
let classNames = {
  decrease: "decrease",
  reset: "reset",
  increase: "increase",
};

//color codes
let colorCode = {
  initial: "black",
  positive: "green",
  negative: "red",
};

//selet value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//set initial color
value.style.color = colorCode.initial;

//event listeners for buttons
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //get button class name
    let className = getClassName(e);
    //set count
    setCount(className);
    //set count in document
    setValue();
    //set count color;
    setColor();
  });
});

function getClassName(e) {
  return e.currentTarget.classList[1];
}

function setCount(className) {
  if (className === classNames.decrease) {
    count--;
  } else if (className === classNames.increase) {
    count++;
  } else {
    count = 0;
  }
}

function setColor() {
  if (count > 0) {
    value.style.color = colorCode.positive;
  } else if (count < 0) {
    value.style.color = colorCode.negative;
  } else {
    value.style.color = colorCode.initial;
  }
}

function setValue() {
  value.textContent = `${count}`;
}
